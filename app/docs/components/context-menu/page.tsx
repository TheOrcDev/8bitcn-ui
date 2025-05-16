import { Metadata } from "next"

import { contextMenuMetaData } from "@/lib/metadata"
import { Button } from "@/components/ui/8bit/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/8bit/context-menu"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Context Menu",
  description: "Displays an 8-bit context menu component.",
  openGraph: {
    images: contextMenuMetaData,
  },
}

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Context Menu</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-context-menu.json`}
          command={"pnpm dlx shadcn@canary add 8bit-context-menu"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit context menu component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit context menu component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-context-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ContextMenu>
            <ContextMenuTrigger>
              <Button>Right click me</Button>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
              <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-context-menu.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { ContextMenu } from "@/components/ui/8bit/context-menu"`}</CodeSnippet>

      <CodeSnippet>{`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</CodeSnippet>
    </div>
  )
}
