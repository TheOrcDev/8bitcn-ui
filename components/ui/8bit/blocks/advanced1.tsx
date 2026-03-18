import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface TerminalLine {
  color?: string;
  text: string;
  type: "input" | "output" | "comment";
}

interface Advanced1Props {
  className?: string;
  lines?: TerminalLine[];
  title?: string;
}

const defaultLines: TerminalLine[] = [
  { type: "comment", text: "# Install 8bitcn components" },
  { type: "input", text: "pnpm dlx shadcn@latest add @8bitcn/button" },
  { type: "output", text: "Installing @8bitcn/button..." },
  { type: "output", text: "Created components/ui/8bit/button.tsx" },
  { type: "output", text: "Created components/ui/8bit/styles/retro.css" },
  { type: "output", text: "Done in 1.2s" },
  { type: "comment", text: "" },
  { type: "comment", text: "# Add a block" },
  { type: "input", text: "pnpm dlx shadcn@latest add @8bitcn/hero1" },
  { type: "output", text: "Installing @8bitcn/hero1..." },
  { type: "output", text: "Created components/ui/8bit/blocks/hero1.tsx" },
  { type: "output", text: "Done in 0.8s" },
];

function lineClass(type: TerminalLine["type"]): string {
  if (type === "input") {
    return "text-foreground";
  }
  if (type === "comment") {
    return "text-muted-foreground";
  }
  return "text-muted-foreground/70";
}

function linePrefix(type: TerminalLine["type"]): string {
  if (type === "input") {
    return "> ";
  }
  return "";
}

export default function Advanced1({
  title = "Terminal",
  lines = defaultLines,
  className,
}: Advanced1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-2xl">
        <Card className="bg-background">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-destructive" />
                <div className="size-2.5 rounded-full bg-yellow-500" />
                <div className="size-2.5 rounded-full bg-green-500" />
              </div>
              <CardTitle className="retro text-[10px] text-muted-foreground">
                {title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0.5">
              {lines.map((line, idx) => (
                <p
                  className={cn("retro text-[10px] leading-relaxed", lineClass(line.type))}
                  key={`${line.text}-${idx}`}
                >
                  {linePrefix(line.type)}
                  {line.text}
                </p>
              ))}
              <p className="retro animate-pulse text-[10px] text-foreground">
                {">"} _
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
