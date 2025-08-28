import { Metadata } from "next";

import { buttonMetaData } from "@/lib/metadata";

import ManaBar from "@/components/ui/8bit/mana-bar";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Button",
  description: "Displays an 8-bit button component.",
  openGraph: {
    images: buttonMetaData,
  },
};

export default function ManaBarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Mana Bar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-mana-bar.json`}
          command={"pnpm dlx shadcn@canary add 8bit-mana-bar"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit mana bar component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit mana bar component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-mana-bar" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-[500px] mx-auto">
          <div className="md:min-w-[300px] min-w-[200px] flex flex-col gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Default mana bar
              </p>
              <div className="flex justify-between text-sm mb-2 retro">
                <span>Mana</span>
                <span>75%</span>
              </div>
              <ManaBar value={75} />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Retro mana bar
              </p>
              <div className="flex justify-between text-sm mb-2 retro">
                <span>Mana</span>
                <span>45%</span>
              </div>
              <ManaBar value={45} variant="retro" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="mana-bar" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { ManaBar } from "@/components/ui/8bit/mana-bar"`}</CodeSnippet>

      <CodeSnippet>{`<ManaBar value={75} />`}</CodeSnippet>

      <CodeSnippet>{`<ManaBar value={75} variant="retro" />`}</CodeSnippet>
    </div>
  );
}
