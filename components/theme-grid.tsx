"use client";

import { useThemeConfig } from "@/components/active-theme";
import type { Theme } from "@/lib/themes";

const themes = [
  { name: "Dungeon Torch", slug: "dungeon-torch", color: "#c87533" },
  { name: "Space Station", slug: "space-station", color: "#2196f3" },
  { name: "Pixel Forest", slug: "pixel-forest", color: "#4caf50" },
  { name: "Ice Cavern", slug: "ice-cavern", color: "#81d4fa" },
  { name: "Lava Core", slug: "lava-core", color: "#e64a19" },
  { name: "Glitch Mode", slug: "glitch-mode", color: "#00ffcc" },
  { name: "Dwarven Vault", slug: "dwarven-vault", color: "#c8a600" },
  { name: "Dragon Hoard", slug: "dragon-hoard", color: "#c62828" },
  { name: "Ancient Runes", slug: "ancient-runes", color: "#009688" },
];

export function ThemeGrid() {
  const { setActiveTheme } = useThemeConfig();

  return (
    <div className="grid grid-cols-3 gap-3">
      {themes.map((theme) => (
        <button
          className="flex items-center gap-2 border border-border/50 px-3 py-2 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
          key={theme.slug}
          onClick={() => setActiveTheme(theme.slug as Theme)}
          type="button"
        >
          <span
            className="inline-block size-3 shrink-0 border border-foreground/20"
            style={{ backgroundColor: theme.color }}
          />
          <span className="retro text-[9px]">{theme.name}</span>
        </button>
      ))}
    </div>
  );
}
