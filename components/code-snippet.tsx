"use client";

import { Check, Clipboard } from "lucide-react";
import { isValidElement, type ReactNode, useState } from "react";
import ShikiHighlighter from "react-shiki";
import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

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

export default function CodeSnippet({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  // Extract text content from React children
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }
    if (typeof node === "number") {
      return String(node);
    }
    if (Array.isArray(node)) {
      return node.map(getTextContent).join("");
    }
    if (isValidElement(node)) {
      const props = node.props as { children?: ReactNode };
      if (props.children) {
        return getTextContent(props.children);
      }
    }
    return "";
  };

  const codeContent =
    typeof children === "string" ? children : getTextContent(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);

    toast("Copied to clipboard");
  };

  const customTheme = createCustomTheme();

  return (
    <ScrollArea
      className={cn("relative h-max max-w-full overflow-x-auto border")}
    >
      <ShikiHighlighter
        addDefaultStyles={false}
        as="div"
        className="w-full text-[13px] [&>pre]:overflow-x-auto [&>pre]:whitespace-pre-wrap [&>pre]:break-words [&>pre]:bg-background [&>pre]:p-4 [&>pre]:text-foreground"
        language="jsx"
        showLanguage={false}
        theme={customTheme}
      >
        {codeContent.trim() || ""}
      </ShikiHighlighter>

      <Button
        className="absolute top-2 right-2 z-10 rounded-md hover:bg-accent hover:text-accent-foreground"
        onClick={handleCopy}
        variant="ghost"
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
