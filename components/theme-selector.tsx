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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Button } from "@/components/ui/button";

import CodeSnippet from "@/app/docs/components/code-snippet";

import { useThemeConfig } from "./active-theme";

const themes = [
  { name: Theme.Default, color: "#000" },
  { name: Theme.Sega, color: "#0055a4" },
  { name: Theme.Gameboy, color: "#8bac0f" },
  { name: Theme.Atari, color: "#7a4009" },
  { name: Theme.Nintendo, color: "#104cb0" },
  { name: Theme.Arcade, color: "#F07CD4" },
  { name: Theme.NeoGeo, color: "#dc2626" },
  { name: Theme.SoftPop, color: "#4B3F99" },
];

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="flex items-center justify-between gap-2 border-y border-dashed p-5">
      <div className="w-64">
        <Select
          value={activeTheme}
          onValueChange={(val) => setActiveTheme(val as Theme)}
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
                    className="inline-block h-3 w-3 rounded-sm border border-foreground"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="capitalize">{theme.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Copy</Button>
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
