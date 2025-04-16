import { Metadata } from "next"

import { Slider } from "@/components/ui/8bit/slider"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Slider",
  description:
    "Displays a slider or a component that looks like a 8-bit slider.",
}

export default function SliderPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Slider</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-slider.json`}
          command={"pnpm dlx shadcn@canary add 8bit-slider"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a slider or a component that looks like a 8-bit slider.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit slider component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-slider" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center min-h-[400px] mx-auto w-96">
          <Slider defaultValue={[33]} max={100} step={1} />
          <Slider defaultValue={[33]} max={100} step={1} variant="retro" />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-slider.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Slider } from "@/components/ui/8bit/slider"`}</CodeSnippet>

      <CodeSnippet>{`<Slider defaultValue={[33]} max={100} step={1} />`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Retro Variant</h3>

      <CodeSnippet>{`<Slider defaultValue={[33]} max={100} step={1} variant="retro" />`}</CodeSnippet>
    </div>
  )
}
