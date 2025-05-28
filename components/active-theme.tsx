"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { usePathname } from "next/navigation"

import { Theme } from "@/lib/themes"

const COOKIE_NAME = "active_theme"
const DEFAULT_THEME = Theme.Default

function setThemeCookie(theme: Theme) {
  if (typeof window === "undefined") return

  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${
    window.location.protocol === "https:" ? "Secure;" : ""
  }`
}

type ThemeContextType = {
  activeTheme: Theme
  setActiveTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: Theme
}) {
  const pathname = usePathname()

  useEffect(() => {
    setActiveTheme(DEFAULT_THEME)
  }, [pathname])

  const [activeTheme, setActiveTheme] = useState<Theme>(
    () => initialTheme || DEFAULT_THEME
  )

  useEffect(() => {
    setThemeCookie(activeTheme)

    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })
    document.body.classList.add(`theme-${activeTheme}`)
  }, [activeTheme])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}
