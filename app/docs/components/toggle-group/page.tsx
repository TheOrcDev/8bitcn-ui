import { Metadata } from "next";

import { Separator } from "@radix-ui/react-select";
import { Bold, Italic, Underline } from "lucide-react";

import { toggleGroupMetaData } from "@/lib/metadata";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/8bit/toggle-group";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Toggle Group",
  description: "Displays an 8-bit toggle group component.",
  openGraph: {
    images: toggleGroupMetaData,
  },
};

export default function ToggleGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Toggle Group</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toggle-group.json`}
          command={"pnpm dlx shadcn@canary add 8bit-toggle-group"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays an 8-bit toggle group component.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit toggle group component
          </h2>
          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toggle-group" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ToggleGroup type="multiple">
            <ToggleGroupItem
              variant="outline"
              value="bold"
              aria-label="Toggle bold"
            >
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <h3 className="text-lg font-bold">Installation</h3> <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toggle-group.json`}
      />
      <h3 className="text-lg font-bold">Examples</h3> <Separator />
      <h3 className="text-lg font-bold">Default</h3>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Default example
          </h2>
          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toggle-group" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <CodeSnippet>{`<ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>`}</CodeSnippet>
      <h3 className="text-lg font-bold">Outline</h3>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Outline example
          </h2>
          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toggle-group" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ToggleGroup type="multiple">
            <ToggleGroupItem
              variant="outline"
              value="bold"
              aria-label="Toggle bold"
            >
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant="outline"
              value="italic"
              aria-label="Toggle italic"
            >
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              variant="outline"
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <CodeSnippet>{`<ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>`}</CodeSnippet>
        <h3 className="text-lg font-bold">Single</h3>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Single example
            </h2>
            <div className="flex items-center gap-2">
              <OpenInV0Button name="8bit-toggle-group" className="w-fit" />
            </div>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ToggleGroup type="single">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="strikethrough"
                aria-label="Toggle strikethrough"
              >
                <Underline className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <CodeSnippet>{`<ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>`}</CodeSnippet>
        <h3 className="text-lg font-bold">Disabled</h3>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Disabled example
            </h2>
            <div className="flex items-center gap-2">
              <OpenInV0Button name="8bit-toggle-group" className="w-fit" />
            </div>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ToggleGroup type="multiple" disabled>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-1 w-1" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-1 w-1" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="strikethrough"
                aria-label="Toggle strikethrough"
              >
                <Underline className="h-1 w-1" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <CodeSnippet>{`<ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>`}</CodeSnippet>
      </div>
    </div>
  );
}
