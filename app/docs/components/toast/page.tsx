import { Metadata } from "next";

import { buttonMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import { ToastExample } from "@/components/examples/toast";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Toast",
  description: "Displays an 8-bit toast component.",
  openGraph: {
    images: buttonMetaData,
  },
};

export default function ToastPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Toast</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toast.json`}
          command={"pnpm dlx shadcn@canary add 8bit-toast"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit toast component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit toast component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-toast" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ToastExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-toast.json`}
      />

      <p>
        8bitcn Toast is using Sonner under the hood. Add the Sonner Toaster
        component to your layout
      </p>

      <CodeSnippet>{`import { Toaster } from "@/components/ui/sonner"
      
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { toast } from "@/components/ui/8bit/toast"`}</CodeSnippet>

      <CodeSnippet>{`toast("8bitcn is an awesome project!")`}</CodeSnippet>
    </div>
  );
}
