"use client";

import { useState } from "react";

import { Check, Clipboard } from "lucide-react";
import ShikiHighlighter from "react-shiki";

import { cn } from "@/lib/utils";

import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

function countLines(code: string) {
  return code.split("\n").length;
}

export default function CodeSnippet({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);

    toast("Copied to clipboard");
  };

  return (
    <ScrollArea className={cn("relative overflow-x-auto h-max")}>
      <ShikiHighlighter
        addDefaultStyles={false}
        language="jsx"
        showLanguage={false}
        theme={{
          light: "laserwave",
          dark: "laserwave",
        }}
        as="div"
        className="w-full text-sm [&>pre]:p-4"
      >
        {children?.toString().trim() || ""}
      </ShikiHighlighter>

      <Button
        variant="ghost"
        onClick={handleCopy}
        className="absolute z-10 top-2 right-2 text-white hover:bg-zinc-800 rounded-md hover:text-white"
      >
        {copied ? (
          <Check className="size-3" />
        ) : (
          <Clipboard className="size-3" />
        )}
      </Button>
    </ScrollArea>
  );
}
