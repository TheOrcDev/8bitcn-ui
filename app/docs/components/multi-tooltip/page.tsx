import { Metadata } from "next";

import { multiTooltipMetaData } from "@/lib/metadata";

import { Button } from "@/components/ui/8bit/button";
import {
  MultiTooltip,
  MultiTooltipProvider,
  MultiTooltipTrigger,
} from "@/components/ui/8bit/multi-tooltip";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit MultiTooltip",
  description:
    "Displays multiple 8-bit tooltips around a single trigger element.",
  openGraph: {
    images: multiTooltipMetaData,
  },
};

export default function MultiTooltipPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">MultiTooltip</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/multitooltip"
          command="pnpm dlx shadcn@latest add @8bitcn/multitooltip"
        />
      </div>

      <p className="text-muted-foreground">
        Displays multiple 8-bit tooltips around a single trigger element with
        customizable positioning.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit multitooltip component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-multitooltip" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <MultiTooltipProvider delayDuration={200}>
            <MultiTooltip
              tooltips={[
                { content: "Save file", position: "top" },
                { content: "Ctrl+S", position: "right" },
                { content: "Updated 2 mins ago", position: "bottom" },
                { content: "File.txt", position: "left" },
              ]}
            >
              <MultiTooltipTrigger>
                <Button variant="outline">Hover me</Button>
              </MultiTooltipTrigger>
            </MultiTooltip>
          </MultiTooltipProvider>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="multitooltip" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>
        {`import {
  MultiTooltip,
  MultiTooltipProvider,
  MultiTooltipTrigger,
} from "@/components/ui/8bit/multitooltip"`}
      </CodeSnippet>

      <CodeSnippet>
        {`<MultiTooltipProvider delayDuration={500}>
  <MultiTooltip tooltips={[
    { content: "Save file", position: "top" },
    { content: "Ctrl+S", position: "right" },
    { content: "Updated 2 mins ago", position: "bottom" },
    { content: "File.txt", position: "left" }
  ]}>
    <MultiTooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </MultiTooltipTrigger>
  </MultiTooltip>
</MultiTooltipProvider>`}
      </CodeSnippet>
    </div>
  );
}
