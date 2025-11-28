"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";
import { Button } from "@/components/ui/button";
import { getThemeCode } from "@/lib/themes";

import { useThemeConfig } from "./active-theme";
import CodeSnippet from "./code-snippet";
import { SelectThemeDropdown } from "./select-theme-dropdown";
import { ScrollArea } from "./ui/8bit/scroll-area";

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="flex items-center justify-between gap-2 border-y border-dashed p-5">
      <div className="w-64">
        <SelectThemeDropdown
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Copy</Button>
        </DialogTrigger>
        <DialogContent>
          <ScrollArea className="max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Theme</DialogTitle>
              <DialogDescription>
                Copy and paste the following code into your CSS file.
              </DialogDescription>
            </DialogHeader>

            <CodeSnippet>{getThemeCode(activeTheme)}</CodeSnippet>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
