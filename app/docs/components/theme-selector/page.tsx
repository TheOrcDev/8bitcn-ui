import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

import ThemeSelectorExample from "@/components/examples/theme-selector";
import ThemeSelectorShowcase from "@/components/examples/theme-selector-showcase";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";

export const metadata: Metadata = {
  title: "8-bit Theme Selector",
  description:
    "A complete theme selector component with dropdown selection and code copy functionality. Includes theme context provider for managing active themes across the application.",
};

export default function ThemeSelectorPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Theme Selector</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/theme-selector"
          command="pnpm dlx shadcn@latest add @8bitcn/theme-selector"
        />
      </div>

      <p className="text-muted-foreground">
        A complete theme selector component with dropdown selection and code
        copy functionality. Includes theme context provider for managing active
        themes across the application.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit theme selector component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="flex flex-col items-center gap-6">
            <ThemeSelectorShowcase />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="theme-selector" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { ThemeSelector } from "@/components/theme-selector"`}</CodeSnippet>

      <CodeSnippet>{`<ThemeSelector />`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Examples</h3>

      <Separator />

      <div className="mt-4">
        <ThemeSelectorExample />
      </div>
    </div>
  );
}
