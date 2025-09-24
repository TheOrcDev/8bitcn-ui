import { Metadata } from "next";

import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";

export const metadata: Metadata = {
  title: "8-bit Retro Mode Switcher",
  description:
    "A retro-styled theme toggle component with pixel art sun and moon icons. Perfect for 8-bit themed applications that need a nostalgic theme switcher.",
};

export default function RetroModeSwitcherPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Retro Mode Switcher</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/retro-mode-switcher"
          command="pnpm dlx shadcn@latest add @8bitcn/retro-mode-switcher"
        />
      </div>

      <p className="text-muted-foreground">
        A retro-styled theme toggle component with pixel art sun and moon icons.
        Perfect for 8-bit themed applications that need a nostalgic theme
        switcher.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit retro mode switcher component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <RetroModeSwitcher />
              <span className="text-sm text-muted-foreground">
                Click to toggle between light and dark themes
              </span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="retro-mode-switcher" />

      <h3 className="text-lg font-bold">Wrap your root layout</h3>
      <p className="text-muted-foreground text-sm">
        Add the ThemeProvider to your root layout and add the
        suppressHydrationWarning prop to the html tag.
      </p>

      <Separator />

      <CodeSnippet>{`import { ThemeProvider } from "@/components/theme-provider"
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher"`}</CodeSnippet>

      <CodeSnippet>{`<RetroModeSwitcher />`}</CodeSnippet>
    </div>
  );
}
