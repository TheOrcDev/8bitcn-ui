"use client";

import { useState } from "react";

import { Check, Clipboard } from "lucide-react";

import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CopyCommandButton from "@/app/docs/components/copy-command-button";

export default function QuickStart() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setCopiedId(id);
      toast("Copied to clipboard");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 retro">
          Quick Start
        </CardTitle>
        <CardDescription>
          Get up and running with 8bitcn/ui in just a few steps
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <h3 className="font-semibold">
            1. Add the 8bitcn registry to your components.json
          </h3>
          <div className="relative bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`{
    "registries": {
        "@8bitcn": "https://8bitcn.com/r/{name}.json"
    }
}`}
            </pre>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() =>
                handleCopy(
                  `
"registries": {
    "@8bitcn": "https://8bitcn.com/r/{name}.json"
}
    `,
                  "components.json"
                )
              }
            >
              {copied && copiedId === "components.json" ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">2. Start adding components!</h3>
          <div className="bg-muted p-4 rounded-lg relative">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/button"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/button"
            />

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2"
              onClick={() =>
                handleCopy(
                  "pnpm dlx shadcn@latest add @8bitcn/button",
                  "button"
                )
              }
            >
              {copied && copiedId === "button" ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">3. Initialize MCP</h3>
          <p className="text-sm text-muted-foreground">
            This adds configuration to your IDE, enabling you to use the
            components directly in your code with AI assistance. The AI will
            have full context of the entire 8bitcn library.
          </p>
          <div className="bg-muted p-4 rounded-lg relative">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest mcp init"
              copyCommand="pnpm dlx shadcn@latest mcp init"
            />

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2"
              onClick={() =>
                handleCopy("pnpm dlx shadcn@latest mcp init", "mcp")
              }
            >
              {copied && copiedId === "mcp" ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
