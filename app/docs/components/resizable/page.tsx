import { Metadata } from "next"

import { resizableMetaData } from "@/lib/metadata"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"
import {
  ResizableDemo,
  ResizableDemoWithHeader,
  ResizableHandleDemo,
} from "./_demo/resizable-demo"

export const metadata: Metadata = {
  title: "8bit Resizable Panel",
  description:
    "Accessible resizable panel groups and layouts with keyboard support.",
  openGraph: {
    images: resizableMetaData,
  },
}

export default function ResizablePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Resizable</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-resizable.json`}
          command={"pnpm dlx shadcn@canary add 8bit-resizable"}
        />
      </div>

      <p className="text-muted-foreground">
        Accessible resizable panel groups and layouts with keyboard support.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[400px]  justify-center relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit resizable panel component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-resizable" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center h-[250px] relative">
          <ResizableDemo />
        </div>
      </div>

      <p className="text-muted-foreground">With Handle</p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit resizable panel component with handle
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-resizable" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center h-[250px] relative">
          <ResizableHandleDemo />
        </div>
      </div>

      <p className="text-muted-foreground">Orientation</p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit resizable panel component with column
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-resizable" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center h-[250px] relative">
          <ResizableDemoWithHeader />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-resizable.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/8bit/resizable"
`}</CodeSnippet>

      <CodeSnippet>{`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
    `}</CodeSnippet>
    </div>
  )
}
