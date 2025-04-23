import { Metadata } from "next"

import { badgeMetaData } from "@/lib/metadata"
import { Badge } from "@/components/ui/8bit/badge"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Badge",
  description: "Displays a badge or a component that looks like a 8-bit badge.",
  openGraph: {
    images: badgeMetaData,
  },
}

export default function BadgePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Badge</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-badge.json`}
          command={"pnpm dlx shadcn@canary add 8bit-badge"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a badge or a component that looks like a 8-bit badge.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit badge component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-badge" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Badge>Badge</Badge>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-badge.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Badge } from "@/components/ui/8bit/badge"`}</CodeSnippet>

      <CodeSnippet>{`<Badge>Badge</Badge>`}</CodeSnippet>
    </div>
  )
}
