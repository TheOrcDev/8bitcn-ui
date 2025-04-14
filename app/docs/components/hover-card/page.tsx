"use client"

import { Button } from "@/components/ui/8bit/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/8bit/hover-card"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

const HoverCardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Hover Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-hover-card.json`}
          command={"pnpm dlx shadcn@canary add 8bit-hover-card"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a hover card or a component that looks like a 8-bit hover card.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit hover card component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-hover-card" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="link">Hover</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              For the Horde! ⚔️
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-hover-card.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/8bit/hover-card"`}</CodeSnippet>

      <CodeSnippet>{`<HoverCard>
  <HoverCardTrigger>
      <Button variant="link">Hover</Button>
  </HoverCardTrigger>
  <HoverCardContent>For the Horde! ⚔️</HoverCardContent>
</HoverCard>`}</CodeSnippet>
    </div>
  )
}

export default HoverCardPage
