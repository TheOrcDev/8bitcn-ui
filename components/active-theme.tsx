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

  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${
    window.location.protocol === "https:" ? "Secure;" : ""
  }`;
}

type ThemeContextType = {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const _pathname = usePathname();

  const [activeTheme, setActiveTheme] = useState<Theme>(
    () => initialTheme || DEFAULT_THEME
  );

  useEffect(() => {
    queueMicrotask(() => {
      setActiveTheme(DEFAULT_THEME);
    });
  }, []);

  useEffect(() => {
    setThemeCookie(activeTheme);

    const targets = [document.body, document.documentElement];

    targets.forEach((el) => {
      Array.from(el.classList)
        .filter((className) => className.startsWith("theme-"))
        .forEach((className) => {
          el.classList.remove(className);
        });
      el.classList.add(`theme-${activeTheme}`);
    });
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
