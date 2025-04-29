import * as React from "react"
import type { Metadata } from "next"

import { radioGroupMetaData } from "@/lib/metadata"
import { Label } from "@/components/ui/8bit/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/8bit/radio-group"
import { Separator } from "@/components/ui/separator"
import CodeSnippet from "@/app/docs/components/code-snippet"
import CopyCommandButton from "@/app/docs/components/copy-command-button"
import InstallationCommands from "@/app/docs/components/installation-commands"
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Radio Group",
  description:
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  openGraph: {
    images: radioGroupMetaData,
  },
}

export default function RadioGroupPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Radio Group</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-radio-group.json`}
          command={"pnpm dlx shadcn@canary add 8bit-radio-group"}
        />
      </div>

      <p className="text-muted-foreground">
        A set of checkable buttons—known as radio buttons—where no more than one
        of the buttons can be checked at a time.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit radio group component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-dropdown-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-radio-group.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Label } from "@/components/ui/8bit/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/8bit/radio-group"`}</CodeSnippet>

      <CodeSnippet>{` 
<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>
      `}</CodeSnippet>
    </div>
  )
}
