"use client";

import { Theme, getThemeCode } from "@/lib/themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";
import { Button } from "@/components/ui/button";

import CodeSnippet from "@/app/docs/components/code-snippet";

import { useThemeConfig } from "./active-theme";

const themes = [
  { name: Theme.Default, color: "oklch(0.795 0.184 86.047)" },
  { name: Theme.Sega, color: "#0055a4" },
  { name: Theme.Gameboy, color: "#8bac0f" },
  { name: Theme.Atari, color: "#7a4009" },
  { name: Theme.Nintendo, color: "#104cb0" },
  { name: Theme.Arcade, color: "#F07CD4" },
  { name: Theme.NeoGeo, color: "#dc2626" },
];

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="flex justify-between gap-2 border-y border-dashed p-5">
      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <Button
            key={theme.name}
            onClick={() => setActiveTheme(theme.name)}
            style={{ backgroundColor: theme.color }}
            className={`text-neutral-200 border-2  ${theme.name === activeTheme ? "border-neutral-200" : "border-transparent"}`}
          >
            {theme.name}
          </Button>
        ))}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-neutral-200">Copy</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>

          <CodeSnippet>{getThemeCode(activeTheme)}</CodeSnippet>
        </DialogContent>
      </Dialog>
    </div>
  );
}
