import { Input } from "@/components/ui/8bit/input";
import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";

export default function InputPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Input</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-input.json`}
          command={"pnpm dlx shadcn@canary add 8bit-input"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a input or a component that looks like a 8-bit button.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit input component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-input" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <Input placeholder="Enter text" />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-input.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Input } from "@/components/ui/8bit/input"`}</CodeSnippet>

      <CodeSnippet>{`<Input placeholder="Enter text" />`}</CodeSnippet>
    </div>
  );
}
