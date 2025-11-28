"use client";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InstallationCommandsProps {
  packageName: string;
}

export default function InstallationCommands({
  packageName,
}: InstallationCommandsProps) {
  const [command, setCommand] = useState(
    `pnpm dlx shadcn@latest add @8bitcn/${packageName}`
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast("Command copied to clipboard");

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="overflow-hidden border">
      <div className="bg-background">
        <Tabs defaultValue="pnpm">
          <TabsList className="h-12 w-full justify-between rounded-none border-b bg-background px-2">
            <div>
              <TabsTrigger
                className="rounded-none px-2 data-[state=active]:border-x-2 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                onClick={() =>
                  setCommand(
                    `pnpm dlx shadcn@latest add @8bitcn/${packageName}`
                  )
                }
                value="pnpm"
              >
                pnpm
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none px-2 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                onClick={() =>
                  setCommand(`npx shadcn@latest add @8bitcn/${packageName}`)
                }
                value="npm"
              >
                npm
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none px-2 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                onClick={() =>
                  setCommand(
                    `yarn dlx shadcn@latest add @8bitcn/${packageName}`
                  )
                }
                value="yarn"
              >
                yarn
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none px-2 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                onClick={() =>
                  setCommand(
                    `bunx --bun shadcn@latest add @8bitcn/${packageName}`
                  )
                }
                value="bun"
              >
                bun
              </TabsTrigger>
            </div>

            <Button
              className="rounded-md hover:bg-primary/20"
              onClick={handleCopy}
              size="icon"
              variant="ghost"
            >
              {copied ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </Button>
          </TabsList>

          <TabsContent className="p-4 pt-2" value="pnpm">
            <div className="font-mono text-sm">
              pnpm dlx shadcn@latest add @8bitcn/{packageName}
            </div>
          </TabsContent>

          <TabsContent className="p-4 pt-2" value="npm">
            <div className="font-mono text-sm">
              npx shadcn@latest add @8bitcn/{packageName}
            </div>
          </TabsContent>

          <TabsContent className="p-4 pt-2" value="yarn">
            <div className="font-mono text-sm">
              yarn dlx shadcn@latest add @8bitcn/{packageName}
            </div>
          </TabsContent>

          <TabsContent className="p-4 pt-2" value="bun">
            <div className="font-mono text-sm">
              bunx --bun shadcn@latest add @8bitcn/{packageName}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
