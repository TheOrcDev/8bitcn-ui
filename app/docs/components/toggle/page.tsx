import { Bold, Italic, Underline } from "lucide-react"

import { Toggle } from "@/components/ui/8bit/toggle"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

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
        Displays a toggle or a component that looks like a 8-bit toggle. A
        toggle can be used to trigger an action or to toggle between two states.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit toggle component with different variants and sizes
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toggle" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-md font-semibold">Default Toggle</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Toggle aria-label="Toggle Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-md font-semibold">Outline Toggle</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Toggle variant="outline" aria-label="Toggle Bold">
                <Bold className="h-4 w-4" />
                <span>Bold</span>
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle Italic">
                <Italic className="h-4 w-4" />
                <span>Italic</span>
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle Underline">
                <Underline className="h-4 w-4" />
                <span>Underline</span>
              </Toggle>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-md font-semibold">Toggle Sizes</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Toggle size="sm" aria-label="Small Toggle">
                <Bold className="h-3 w-3" />
                <span>Small</span>
              </Toggle>
              <Toggle aria-label="Default Toggle">
                <Bold className="h-4 w-4" />
                <span>Default</span>
              </Toggle>
              <Toggle size="lg" aria-label="Large Toggle">
                <Bold className="h-5 w-5" />
                <span>Large</span>
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

      <CodeSnippet>{`<Toggle>
  <Bold className="h-4 w-4" />
  <span>Bold</span>
</Toggle>

<Toggle variant="outline">
  <Italic className="h-4 w-4" />
  <span>Italic</span>
</Toggle>

<Toggle size="sm">
  <Underline className="h-3 w-3" />
  <span>Small</span>
</Toggle>`}</CodeSnippet>
    </div>
  )
}
