import { Metadata } from "next"

import { progressMetaData } from "@/lib/metadata"
import { Progress } from "@/components/ui/8bit/progress"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Progress",
  description: "Displays an 8-bit progress component.",
  openGraph: {
    images: progressMetaData,
  },
}

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Progress</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-progress.json`}
          command={"pnpm dlx shadcn@canary add 8bit-progress"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit progress component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit progress component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-progress" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center min-h-[400px] mx-auto w-96">
          <Progress value={70} />
          <Progress value={70} variant="retro" />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-progress.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Progress } from "@/components/ui/8bit/progress"`}</CodeSnippet>

      <CodeSnippet>{`<Progress value={70} />`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Retro Variant</h3>

      <CodeSnippet>{`<Progress value={70} variant="retro" />`}</CodeSnippet>
    </div>
  )
}
