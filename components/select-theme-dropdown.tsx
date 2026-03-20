"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Theme } from "@/lib/themes";

const themes = [
  { name: Theme.Default, color: "#000" },
  { name: Theme.Sega, color: "#0055a4" },
  { name: Theme.Gameboy, color: "#8bac0f" },
  { name: Theme.Atari, color: "#7a4009" },
  { name: Theme.Nintendo, color: "#104cb0" },
  { name: Theme.Arcade, color: "#F07CD4" },
  { name: Theme.NeoGeo, color: "#dc2626" },
  { name: Theme.SoftPop, color: "#4B3F99" },
  { name: Theme.Pacman, color: "#ffcc00" },
  { name: Theme.VHS, color: "#8B5CF6" },
  { name: Theme.RustyByte, color: "#d2691e" },
  { name: Theme.Zelda, color: "oklch(0.75 0.2 90)" },
  { name: Theme.DungeonTorch, color: "#c87533" },
  { name: Theme.SpaceStation, color: "#2196f3" },
  { name: Theme.PixelForest, color: "#4caf50" },
  { name: Theme.IceCavern, color: "#81d4fa" },
  { name: Theme.LavaCore, color: "#e64a19" },
  { name: Theme.GlitchMode, color: "#00ffcc" },
  { name: Theme.DwarvenVault, color: "#c8a600" },
  { name: Theme.DragonHoard, color: "#c62828" },
  { name: Theme.AncientRunes, color: "#009688" },
];

export function SelectThemeDropdown({
  activeTheme,
  setActiveTheme,
}: {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
}) {
  return (
    <Select
      onValueChange={(val) => setActiveTheme(val as Theme)}
      value={activeTheme}
    >
      <SelectTrigger className="w-full">
        <SelectValue font="retro" placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.name} value={theme.name}>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-3 w-3 border border-foreground"
                style={{ backgroundColor: theme.color }}
              />
              <span>
                {theme.name
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
