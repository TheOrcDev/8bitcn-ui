import * as React from "react"
import { Metadata } from "next"

import { drawerMetaData } from "@/lib/metadata"
import { Separator } from "@/components/ui/separator"
import { DrawerExample } from "@/components/examples/drawer"
import CodeSnippet from "@/app/docs/components/code-snippet"
import CopyCommandButton from "@/app/docs/components/copy-command-button"
import InstallationCommands from "@/app/docs/components/installation-commands"
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Drawer",
  description: "Displays an 8-bit drawer component.",
  openGraph: {
    images: drawerMetaData,
  },
}

export default function DrawerPaged() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Drawer</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-drawer.json`}
          command={"pnpm dlx shadcn@canary add 8bit-drawer"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit drawer component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit drawer component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-drawer" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          {/* {Demo here} */}
          <DrawerExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-drawer.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/8bit/drawer"`}</CodeSnippet>

      <CodeSnippet>{`<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}</CodeSnippet>
    </div>
  )
}
