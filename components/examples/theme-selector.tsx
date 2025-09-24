"use client";

import { Theme } from "@/lib/themes";

import { Badge } from "@/components/ui/8bit/badge";

import { useThemeConfig } from "@/components/active-theme";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";

import CodeSnippet from "@/app/docs/components/code-snippet";
import InstallationCommands from "@/app/docs/components/installation-commands";

import { Button } from "../ui/8bit/button";
import { Separator } from "../ui/8bit/separator";

export default function ThemeSelectorExample() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Theme Selector</label>
          <p className="text-xs text-muted-foreground">
            Theme selector with retro themes dropdown
          </p>
          <div className="w-64">
            <SelectThemeDropdown
              activeTheme={activeTheme}
              setActiveTheme={setActiveTheme}
            />
          </div>
        </div>
      </div>

      {/* Current Theme Display */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Theme</label>
          <div className="flex items-center gap-4">
            <Badge>{activeTheme}</Badge>
            <span className="text-xs text-muted-foreground">
              Active theme applied to this page
            </span>
          </div>
        </div>
      </div>

      {/* Available Themes Grid */}
      <div className="space-y-4 retro">
        <h4 className="text-md font-medium">Available Themes</h4>
        <p className="text-sm text-muted-foreground">
          Click on any theme below to switch to it instantly
        </p>
        <div className="flex flex-wrap gap-5">
          {Object.values(Theme).map((theme) => (
            <Button key={theme} onClick={() => setActiveTheme(theme)}>
              {theme.replace("-", " ")}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <InstallationCommands packageName="theme-selector" />

      {/* Usage Examples */}
      <div className="space-y-4">
        <h4 className="text-md font-medium">Put it in your layout</h4>

        <CodeSnippet>
          {`import { ActiveThemeProvider } from "@/components/active-theme"

// You can also overwrite your globals.css file
import "./retro-globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    ...
    <ActiveThemeProvider>
      {children}
    </ActiveThemeProvider>
    ...
  )
}`}
        </CodeSnippet>

        <h4 className="text-md font-medium">Usage Examples</h4>
        <div className="space-y-4">
          <CodeSnippet>
            {`import { SelectThemeDropdown } from "@/components/select-theme-dropdown";
          
  export default function Component() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <SelectThemeDropdown
      activeTheme={activeTheme}
      setActiveTheme={setActiveTheme}
    />
  )
}`}
          </CodeSnippet>

          <h4 className="text-md font-medium">Custom With Button</h4>

          <CodeSnippet>
            {`import { useThemeConfig } from "@/components/active-theme"
import { Theme } from "@/lib/themes"

function MyComponent() {
  const { activeTheme, setActiveTheme } = useThemeConfig()
  
  return (
    <div>
      <p>Current theme: {activeTheme}</p>
      <button onClick={() => setActiveTheme(Theme.Sega)}>
        Switch to Sega
      </button>
    </div>
  )
}`}
          </CodeSnippet>
        </div>
      </div>
    </div>
  );
}
