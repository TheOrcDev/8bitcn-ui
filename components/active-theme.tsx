"use client";

import { usePathname } from "next/navigation";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import {
  createContext,
  type ReactNode,
  Suspense,
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

  const [activeTheme, setActiveTheme] = useState<Theme>(
    () => initialTheme || DEFAULT_THEME
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: "We want to reset the theme on pathname change"
  useEffect(() => {
    queueMicrotask(() => {
      setActiveTheme(DEFAULT_THEME);
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
      <Suspense>
        <ActiveThemeUrlSync />
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

// Load the active theme from the URL query parameter on mount.
export function ActiveThemeUrlSync() {
  const [urlTheme] = useUrlTheme();
  const synced = useRef(false);
  const { activeTheme, setActiveTheme } = useThemeConfig();

  useEffect(() => {
    if (synced.current || !urlTheme) {
      return;
    }
    if (urlTheme !== activeTheme) {
      // Setting it directly here would be cancelled by the useEffect above
      // that resets the theme on pathname change.
      // Defer to the end of the microtask queue to re-apply it afterwards
      // to follow the URL as the source of truth.
      queueMicrotask(() => {
        setActiveTheme(urlTheme);
      });
    }
    // Avoid queuing multiple times
    synced.current = true;
  }, [urlTheme, activeTheme, setActiveTheme]);

  return null;
}
