import { Metadata } from "next";

import { switchMetaData } from "@/lib/metadata";

import { Label } from "@/components/ui/8bit/label";
import { Switch } from "@/components/ui/8bit/switch";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Switch",
  description: "Displays an 8-bit switch component.",
  openGraph: {
    images: switchMetaData,
  },
};

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Switch</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-switch.json`}
          command={"pnpm dlx shadcn@canary add 8bit-switch"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit switch component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit switch component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-switch" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] space-x-3">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-switch.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Switch } from "@/components/ui/8bit/switch"`}</CodeSnippet>

      <CodeSnippet>{`<Switch />`}</CodeSnippet>
    </div>
  );
}
