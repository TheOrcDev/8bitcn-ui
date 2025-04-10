import { Textarea } from "@/components/ui/8bit/textarea";
import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "../code-snippet";

export default function TextareaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Textarea</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-textarea.json`}
          command={"pnpm dlx shadcn@canary add 8bit-textarea"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a textarea or a component that looks like a 8-bit textarea.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit textarea component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-textarea" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <Textarea />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-textarea.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Textarea } from "@/components/ui/8bit/textarea"`}</CodeSnippet>

      <CodeSnippet>{`<Textarea />`}</CodeSnippet>
    </div>
  );
}
