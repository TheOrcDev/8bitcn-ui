"use client";

import { useThemeConfig } from "@/components/active-theme";
import CodeSnippet from "@/components/code-snippet";
import InstallationCommands from "@/components/installation-commands";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";
import { Badge } from "@/components/ui/8bit/badge";
import { Theme } from "@/lib/themes";

import { Button } from "../ui/8bit/button";
import { Separator } from "../ui/8bit/separator";

export default function ThemeSelectorExample() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="font-medium text-sm">Theme Selector</div>
          <p className="text-muted-foreground text-xs">
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
          <div className="font-medium text-sm">Current Theme</div>
          <div className="flex items-center gap-4">
            <Badge>{activeTheme}</Badge>
            <span className="text-muted-foreground text-xs">
              Active theme applied to this page
            </span>
          </div>
        </div>
      </div>

      {/* Available Themes Grid */}
      <div className="retro space-y-4">
        <h4 className="font-medium text-md">Available Themes</h4>
        <p className="text-muted-foreground text-sm">
          Click on any theme below to switch to it instantly
        </p>
        <div className="flex flex-wrap gap-5">
          {Object.values(Theme).map((theme) => (
            <Button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              variant={activeTheme === theme ? "outline" : "default"}
            >
              {theme.replace("-", " ")}
            </Button>
          ))}
        </div>
      </div>

      <h3 className="font-bold text-lg">Installation</h3>

      <Separator />

      <InstallationCommands packageName="theme-selector" />

      {/* Usage Examples */}
      <div className="space-y-4">
        <h4 className="font-medium text-md">Put it in your layout</h4>

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

        <h4 className="font-medium text-md">Usage Examples</h4>
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

          <h4 className="font-medium text-md">Custom With Button</h4>

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
