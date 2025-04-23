import React from "react"
import { Metadata } from "next"

import { collapsibleMetaData } from "@/lib/metadata"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"
import { CollapsibleDemo } from "./_demo/CollapsibleDemo"

export const metadata: Metadata = {
  title: "8bit Collapsible",
  description:
    "Displays an collapsible or a component that looks like a 8-bit collapsible.",
  openGraph: {
    images: collapsibleMetaData,
  },
}

export default function CollapsiblePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-collapsible.json`}
          command={"pnpm dlx shadcn@canary add 8bit-collapsible"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an collapsible or a component that looks like a 8-bit
        collapsible.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit collapsible component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-collapsible" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <CollapsibleDemo />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-collapsible.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/8bit/collapsible"`}</CodeSnippet>

      <CodeSnippet>{`<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
`}</CodeSnippet>
    </div>
  )
}
