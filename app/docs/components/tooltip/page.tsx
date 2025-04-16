import { Metadata } from "next"

import { Button } from "@/components/ui/8bit/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/8bit/tooltip"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Tooltip",
  description:
    "Displays a tooltip or a component that looks like a 8-bit tooltip.",
}

export default function TooltipPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-tooltip.json`}
          command={"pnpm dlx shadcn@canary add 8bit-tooltip"}
        />
      </div>

      <p className="text-muted-foreground">
        A popup that displays information related to an element when the element
        receives keyboard focus or the mouse hovers over it.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit tooltip component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-tooltip" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <TooltipProvider>
            <Tooltip delayDuration={500}>
              <TooltipTrigger>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-tooltip.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>
        {`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/8bit/tooltip"`}
      </CodeSnippet>

      <CodeSnippet>
        {`<TooltipProvider>
    <Tooltip delayDuration={500}>
        <TooltipTrigger>
            <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Add to library</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>`}
      </CodeSnippet>
    </div>
  )
}
