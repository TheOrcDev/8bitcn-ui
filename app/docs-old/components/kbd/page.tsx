import type { Metadata } from "next";

import { kbdMetaData } from "@/lib/metadata";

import { Button } from "@/components/ui/8bit/button";
import { Kbd, KbdGroup } from "@/components/ui/8bit/kbd";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import CopyCommandButton from "../../../../components/copy-command-button";
import InstallationCommands from "../../../../components/installation-commands";
import { OpenInV0Button } from "../../../../components/open-in-v0-button";
import CodeSnippet from "../code-snippet";

export const metadata: Metadata = {
  title: "8-bit Kbd",
  description: "Displays an 8-bit keyboard key component.",
  openGraph: {
    images: kbdMetaData,
  },
};

export default function KbdPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Kbd</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/kbd"
          command="pnpm dlx shadcn@latest add @8bitcn/kbd"
        />
      </div>

      <p className="text-muted-foreground">
        Used to display textual user input from keyboard.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit keyboard key component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="kbd" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <KbdGroup>
            <Kbd>↑</Kbd>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>IDDQD</Kbd>
          </KbdGroup>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="kbd" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Kbd } from "@/components/ui/8bit/kbd"`}</CodeSnippet>

      <CodeSnippet>{`<Kbd>IDDQD</Kbd>`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Group</h3>

      <p className="text-muted-foreground">
        Use the KbdGroup component to group keyboard keys together.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit keyboard key groups
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="kbd" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <p className="text-muted-foreground text-sm">
            Use{" "}
            <KbdGroup>
              <Kbd>↑↑↓↓←→←→</Kbd>
              <Kbd>AB</Kbd>
            </KbdGroup>{" "}
            to activate the Konami Code
          </p>
        </div>
      </div>

      <CodeSnippet>{`<p className="text-muted-foreground text-sm">
  Use{" "}
  <KbdGroup>
    <Kbd>↑↑↓↓←→←→</Kbd>
    <Kbd>AB</Kbd>
  </KbdGroup>{" "}
  to activate the Konami Code
</p>`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Button</h3>

      <p className="text-muted-foreground">
        Use the Kbd component inside a Button component to display a keyboard
        key inside a button.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit keyboard keys in buttons
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="kbd" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center min-h-[400px] gap-4">
          <Button variant="outline" size="sm" className="pr-2">
            Start Game <Kbd>Enter</Kbd>
          </Button>
          <Button variant="outline" size="sm" className="pr-2">
            Pause <Kbd>Esc</Kbd>
          </Button>
          <Button variant="outline" size="sm" className="pr-2">
            God Mode <Kbd>IDDQD</Kbd>
          </Button>
        </div>
      </div>

      <CodeSnippet>{`<Button variant="outline" size="sm" className="pr-2">
  Start Game <Kbd>Enter</Kbd>
</Button>
<Button variant="outline" size="sm" className="pr-2">
  Pause <Kbd>Esc</Kbd>
</Button>
<Button variant="outline" size="sm" className="pr-2">
  God Mode <Kbd>IDDQD</Kbd>
</Button>`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Tooltip</h3>

      <p className="text-muted-foreground">
        You can use the Kbd component inside a Tooltip component to display a
        tooltip with a keyboard key.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit keyboard keys in tooltips
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="kbd" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center min-h-[400px] gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Save Game
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Quick Save <Kbd>F5</Kbd>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Load Game
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Quick Load{" "}
                <KbdGroup>
                  <Kbd>F9</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Cheat Menu
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Open Console{" "}
                <KbdGroup>
                  <Kbd>~</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <CodeSnippet>{`<Tooltip>
  <TooltipTrigger asChild>
    <Button size="sm" variant="outline">
      Save Game
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="flex items-center gap-2">
      Quick Save <Kbd>F5</Kbd>
    </div>
  </TooltipContent>
</Tooltip>
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="sm" variant="outline">
      Load Game
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="flex items-center gap-2">
      Quick Load{" "}
      <KbdGroup>
        <Kbd>F9</Kbd>
      </KbdGroup>
    </div>
  </TooltipContent>
</Tooltip>
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="sm" variant="outline">
      Cheat Menu
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="flex items-center gap-2">
      Open Console{" "}
      <KbdGroup>
        <Kbd>~</Kbd>
      </KbdGroup>
    </div>
  </TooltipContent>
</Tooltip>`}</CodeSnippet>
    </div>
  );
}
