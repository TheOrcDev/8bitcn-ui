import { Label } from "@/components/ui/8bit/label";
import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";

export default function LabelPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Label</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-label.json`}
          command={"pnpm dlx shadcn@canary add 8bit-label"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a label or a component that looks like a 8-bit label.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit label component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-label" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Label>Label</Label>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-label.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Label } from "@/components/ui/8bit/label"`}</CodeSnippet>

      <CodeSnippet>{`<Label>Label</Label>`}</CodeSnippet>
    </div>
  );
}
