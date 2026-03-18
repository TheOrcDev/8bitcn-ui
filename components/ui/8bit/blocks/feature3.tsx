import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface BentoItem {
  badge?: string;
  className?: string;
  description: string;
  icon: ReactNode;
  size?: "default" | "wide" | "tall";
  title: string;
}

interface Feature3Props {
  className?: string;
  description?: string;
  items?: BentoItem[];
  title?: string;
}

const defaultItems: BentoItem[] = [
  {
    icon: ">>",
    title: "Lightning Fast",
    description:
      "Zero runtime overhead. Components render at the speed of light — or at least 60fps.",
    size: "wide",
  },
  {
    icon: "{}",
    title: "Type Safe",
    description: "Full TypeScript support. Every prop is typed. No guessing.",
  },
  {
    icon: "##",
    title: "Accessible",
    description:
      "Keyboard navigation, screen readers, focus management. All handled.",
  },
  {
    icon: "</>",
    title: "Copy Paste Ready",
    description:
      "Not a dependency. Copy the code into your project. Own it. Modify it. Ship it.",
    size: "tall",
  },
  {
    icon: "~~",
    title: "Themeable",
    description: "Dark mode, light mode, custom palettes. CSS variables make it easy.",
    badge: "NEW",
  },
  {
    icon: "[]",
    title: "Composable",
    description:
      "Mix and match blocks. Every component works standalone or together.",
    size: "wide",
  },
];

function getSizeClasses(size?: "default" | "wide" | "tall"): string {
  if (size === "wide") {
    return "sm:col-span-2";
  }
  if (size === "tall") {
    return "sm:row-span-2";
  }
  return "";
}

export default function Feature3({
  title = "Built Different",
  description = "Not just pixel art. Real engineering under the hood.",
  items = defaultItems,
  className,
}: Feature3Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-5xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-xl text-muted-foreground text-xs">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              className={cn("relative", getSizeClasses(item.size), item.className)}
              key={item.title}
            >
              {item.badge && (
                <div className="absolute -top-2 right-4 z-10">
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="retro mb-2 text-2xl">{item.icon}</div>
                <CardTitle className="retro text-sm">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
