"use client";

import { usePathname } from "next/navigation";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import {
  createContext,
  type ReactNode,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Theme } from "@/lib/themes";

const COOKIE_NAME = "active_theme";
const DEFAULT_THEME = Theme.Default;

function setThemeCookie(theme: Theme) {
  if (typeof window === "undefined") {
    return;
  }

  // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API is not widely supported yet
  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${
    window.location.protocol === "https:" ? "Secure;" : ""
  }`;
}

interface ThemeContextType {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const pathname = usePathname();

  const [activeTheme, setActiveThemeState] = useState<Theme>(
    () => initialTheme || DEFAULT_THEME
  );

  // Only themes the visitor picked belong in the URL, so that a link can be
  // copied and shared. Resets on navigation deliberately leave it alone.
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const setActiveTheme = useCallback((theme: Theme) => {
    setActiveThemeState(theme);
    setSelectedTheme(theme);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: "We want to reset the theme on pathname change"
  useEffect(() => {
    queueMicrotask(() => {
      setActiveThemeState(DEFAULT_THEME);
      setSelectedTheme(null);
    });
  }, [pathname]);

  useEffect(() => {
    setThemeCookie(activeTheme);

    const targets = [document.body, document.documentElement];

    for (const el of targets) {
      const themeClasses = Array.from(el.classList).filter((className) =>
        className.startsWith("theme-")
      );
      for (const className of themeClasses) {
        el.classList.remove(className);
      }
      el.classList.add(`theme-${activeTheme}`);
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      <Suspense
        fallback={<span className="sr-only">Loading theme preference</span>}
      >
        <ActiveThemeUrlSync
          onUrlTheme={setActiveThemeState}
          selectedTheme={selectedTheme}
        />
      </Suspense>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider"
    );
  }
  return context;
}

export const useUrlTheme = () =>
  useQueryState("theme", parseAsStringLiteral(Object.values(Theme)));

// Keeps the active theme and the `theme` query parameter in step, so a theme
// can be shared by copying the URL. Kept in its own component because reading
// the query string suspends, and the provider itself wraps the whole app.
function ActiveThemeUrlSync({
  onUrlTheme,
  selectedTheme,
}: {
  onUrlTheme: (theme: Theme) => void;
  selectedTheme: Theme | null;
}) {
  const [urlTheme, setUrlTheme] = useUrlTheme();
  const synced = useRef(false);

  // URL -> state, once on mount, so a shared link opens on the right theme.
  useEffect(() => {
    if (synced.current) {
      return;
    }
    // Avoid queuing multiple times
    synced.current = true;

    if (!urlTheme) {
      return;
    }
    // Setting it directly here would be cancelled by the useEffect above
    // that resets the theme on pathname change.
    // Defer to the end of the microtask queue to re-apply it afterwards
    // to follow the URL as the source of truth.
    queueMicrotask(() => {
      onUrlTheme(urlTheme);
    });
  }, [urlTheme, onUrlTheme]);

  // State -> URL, so picking a theme anywhere produces a shareable link.
  useEffect(() => {
    if (selectedTheme) {
      setUrlTheme(selectedTheme);
    }
  }, [selectedTheme, setUrlTheme]);

  return null;
}
