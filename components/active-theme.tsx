"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Theme } from "@/lib/themes";

const COOKIE_NAME = "active_theme";
const DEFAULT_THEME = Theme.Default;

function getThemeCookie(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const cookieString = document.cookie;
    const start = cookieString.indexOf(`${COOKIE_NAME}=`);
    if (start === -1) {
      return null;
    }

    const valueStart = start + COOKIE_NAME.length + 1;
    const valueEnd = cookieString.indexOf(";", valueStart);
    const value =
      valueEnd === -1
        ? cookieString.slice(valueStart)
        : cookieString.slice(valueStart, valueEnd);

    // Validate that the value is a valid Theme
    if (value && Object.values(Theme).includes(value as Theme)) {
      return value as Theme;
    }
  } catch (error) {
    console.error("Error reading theme cookie:", error);
  }
  return null;
}

function setThemeCookie(theme: Theme) {
  if (typeof window === "undefined") {
    return;
  }

  // biome-ignore lint/suspicious/noAssignInExpressions: Setting cookie requires direct assignment
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
  const [activeTheme, setActiveTheme] = useState<Theme>(() => {
    // First priority: initialTheme prop (from server-side cookie reading)
    if (initialTheme) {
      return initialTheme;
    }

    // Second priority: read from cookie on client-side initialization
    if (typeof window !== "undefined") {
      const cookieTheme = getThemeCookie();
      if (cookieTheme) {
        return cookieTheme;
      }
    }

    // Fallback to default
    return DEFAULT_THEME;
  });

  const isInitialMount = useRef(true);
  const hasInitialized = useRef(false);

  // On initial mount, sync with cookie - cookie takes priority
  useEffect(() => {
    if (hasInitialized.current) {
      return;
    }
    hasInitialized.current = true;

    const cookieTheme = getThemeCookie();

    if (cookieTheme) {
      // Cookie exists - use it (even if it differs from initial state)
      if (cookieTheme !== activeTheme) {
        setActiveTheme(cookieTheme);
      }
    } else {
      // No cookie exists - save current theme to cookie
      setThemeCookie(activeTheme);
    }

    isInitialMount.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save cookie and apply theme whenever activeTheme changes
  useEffect(() => {
    const targets = [document.body, document.documentElement];

    // Only save cookie after initial mount (to avoid overwriting on first render)
    if (!isInitialMount.current) {
      setThemeCookie(activeTheme);
    }

    // Apply theme classes
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
