"use client"

import { Button } from "@/components/ui/button"

import { useThemeConfig } from "./active-theme"

const themes = [
  { name: "default", color: "oklch(0.795 0.184 86.047)" },
  { name: "sega", color: "#0055a4" },
  { name: "gameboy", color: "#8bac0f" },
  { name: "atari", color: "#7a4009" },
  { name: "nintendo", color: "#104cb0" },
]

export function ThemeSelector() {
  const { setActiveTheme } = useThemeConfig()

  return (
    <div className="flex gap-2 border-y border-dashed p-5">
      {themes.map((theme) => (
        <Button
          key={theme.name}
          variant={"outline"}
          onClick={() => setActiveTheme(theme.name)}
          style={{ backgroundColor: theme.color }}
        >
          {theme.name}
        </Button>
      ))}
    </div>
  )
}
