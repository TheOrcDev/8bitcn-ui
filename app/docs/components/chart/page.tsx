import { Metadata } from "next"

import { chartMetaData } from "@/lib/metadata"
import { ChartExample } from "@/components/ui/8bit/blocks/chart"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Chart",
  description: "Displays an 8-bit chart.",
  openGraph: {
    images: chartMetaData,
  },
}

export default function ChartPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Chart</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-chart.json`}
          command={"pnpm dlx shadcn@canary add 8bit-chart"}
        />
      </div>

      <p className="text-muted-foreground">Displays an 8-bit chart.</p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit chart component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-chart" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ChartExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-chart.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { ChartExample } from "@/components/ui/8bit/blocks/chart"`}</CodeSnippet>

      <CodeSnippet>{`<ChartExample />`}</CodeSnippet>
    </div>
  )
}
