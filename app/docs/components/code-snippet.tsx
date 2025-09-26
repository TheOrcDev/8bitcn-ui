"use client";

import { useState } from "react";

import { Check, Clipboard } from "lucide-react";
import ShikiHighlighter from "react-shiki";

import { cn } from "@/lib/utils";

import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// Custom theme that uses CSS variables from the current theme
const createCustomTheme = () => ({
  name: "custom-theme",
  type: "dark" as const,
  colors: {
    "editor.background": "var(--background)",
    "editor.foreground": "var(--foreground)",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "var(--muted-foreground)",
        fontStyle: "italic",
      },
    },
    {
      scope: ["string", "string.quoted"],
      settings: {
        foreground: "var(--foreground)",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.other",
      ],
      settings: {
        foreground: "var(--primary)",
        fontStyle: "bold",
      },
    },
    {
      scope: ["variable", "variable.other", "variable.parameter"],
      settings: {
        foreground: "var(--foreground)",
      },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "var(--chart-3)",
      },
    },
    {
      scope: ["constant", "constant.numeric", "constant.language"],
      settings: {
        foreground: "var(--chart-4)",
      },
    },
    {
      scope: ["entity.name.type", "entity.name.class"],
      settings: {
        foreground: "var(--chart-5)",
        fontStyle: "bold",
      },
    },
    {
      scope: ["punctuation", "punctuation.separator", "punctuation.terminator"],
      settings: {
        foreground: "var(--muted-foreground)",
      },
    },
    {
      scope: ["meta.brace", "punctuation.section.brackets"],
      settings: {
        foreground: "var(--border)",
      },
    },
    {
      scope: ["text", "source"],
      settings: {
        foreground: "var(--foreground)",
      },
    },
  ],
});

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

  const customTheme = createCustomTheme();

  return (
    <ScrollArea
      className={cn("relative overflow-x-auto h-max max-w-full border")}
    >
      <ShikiHighlighter
        addDefaultStyles={false}
        language="jsx"
        showLanguage={false}
        theme={customTheme}
        as="div"
        className="w-full text-sm [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:whitespace-pre-wrap [&>pre]:break-words [&>pre]:bg-background [&>pre]:text-foreground"
      >
        {children?.toString().trim() || ""}
      </ShikiHighlighter>

      <Button
        variant="ghost"
        onClick={handleCopy}
        className="absolute z-10 top-2 right-2 hover:bg-accent hover:text-accent-foreground rounded-md"
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
