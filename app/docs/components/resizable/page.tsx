import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"
import { ResizableDemo } from "./_demo/ResizableDemo"

export const metadata: Metadata = {
  title: "8bit Resizable Panel",
  description:
    "Accessible resizable panel groups and layouts with keyboard support.",
}

export default function ResizablePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Resizable</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-resizable.json`}
          command={"pnpm dlx shadcn@canary add 8bit-badge"}
        />
      </div>

      <p className="text-muted-foreground">
        Accessible resizable panel groups and layouts with keyboard support.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit resizable panel component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-resizable" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ResizableDemo />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-resizable.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Badge } from "@/components/ui/8bit/resizable"`}</CodeSnippet>

      <CodeSnippet>{`<Badge>Badge</Badge>`}</CodeSnippet>
    </div>
  )
}
