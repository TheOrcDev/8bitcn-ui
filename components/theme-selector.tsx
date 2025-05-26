"use client"

import { Button } from "@/components/ui/button"

import { useThemeConfig } from "./active-theme"

const themes = ["default", "sega", "nintendo", "gameboy", "atari"]

export function ThemeSelector() {
  const { setActiveTheme } = useThemeConfig()

  return (
    <div className="flex gap-2 border-y border-dashed p-5">
      {themes.map((theme) => (
        <Button
          key={theme}
          variant={"outline"}
          onClick={() => setActiveTheme(theme)}
        >
          {theme}
        </Button>
      ))}
    </div>
  )
}
