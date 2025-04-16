import { Separator } from "@/components/ui/8bit/separator"
import { Separator as ShadcnSeparator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export default function SeparatorPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Separator</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-separator.json`}
          command={"pnpm dlx shadcn@canary add 8bit-separator"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a separator or a component that looks like a 8-bit separator.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit separator component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-separator" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
                8bit-separator
              </h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <ShadcnSeparator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-separator.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <ShadcnSeparator />

      <CodeSnippet>
        {`import { Separator } from "@/components/ui/separator"`}
      </CodeSnippet>

      <CodeSnippet>{`<Separator />`}</CodeSnippet>
    </div>
  )
}
