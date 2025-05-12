import { Metadata } from "next"
import { Bold, Italic, Underline } from "lucide-react"

import { toggleMetaData } from "@/lib/metadata"
import { Toggle } from "@/components/ui/8bit/toggle"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Toggle",
  description: "Displays an 8-bit toggle component.",
  openGraph: {
    images: toggleMetaData,
  },
}

export default function TogglePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Toggle</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toggle.json`}
          command={"pnpm dlx shadcn@canary add 8bit-toggle"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit toggle component. The toggle can be used to trigger an
        action or to toggle between two states.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit toggle component with outline variant
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toggle" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Toggle variant="outline" aria-label="Toggle Bold">
                <Bold className="size-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle Italic">
                <Italic className="size-4" />
                <span>Italic</span>
              </Toggle>
              <Toggle variant="outline" disabled aria-label="Toggle Disabled">
                <Underline className="size-4" />
                <span>Disabled</span>
              </Toggle>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toggle.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`// Basic outline toggle
<Toggle variant="outline">
  <Bold className="size-4" />
</Toggle>

// With text
<Toggle variant="outline">
  <Italic className="size-4" />
  <span>Italic</span>
</Toggle>

// Disabled outline toggle
<Toggle variant="outline" disabled>
  <Underline className="size-4" />
  <span>Disabled</span>
</Toggle>`}</CodeSnippet>
    </div>
  )
}
