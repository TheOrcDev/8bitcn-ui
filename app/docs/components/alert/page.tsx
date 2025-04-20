import { Metadata } from "next"

import { alertMetaData } from "@/lib/metadata"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/8bit/alert"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Alert",
  description:
    "Displays an alert or a component that looks like a 8-bit alert.",
  openGraph: {
    images: alertMetaData,
  },
}

export default function AlertPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Alert</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-alert.json`}
          command={"pnpm dlx shadcn@canary add 8bit-alert"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an alert or a component that looks like a 8-bit alert.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit alert component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-alert" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-alert.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/8bit/alert"`}</CodeSnippet>

      <CodeSnippet>{`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}</CodeSnippet>
    </div>
  )
}
