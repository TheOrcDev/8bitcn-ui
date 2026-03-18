import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface UseCase {
  badge?: string;
  cta: string;
  description: string;
  href?: string;
  icon: ReactNode;
  title: string;
}

interface CTA2Props {
  className?: string;
  description?: string;
  items?: UseCase[];
  title?: string;
}

const defaultItems: UseCase[] = [
  {
    icon: "DEV",
    title: "Indie Developers",
    description: "Ship landing pages for your side projects that actually stand out from the Next.js template crowd.",
    cta: "START BUILDING",
  },
  {
    icon: "MKT",
    title: "Marketers",
    description: "Create campaign pages that stop the scroll. Retro aesthetics convert better than you think.",
    cta: "SEE TEMPLATES",
    badge: "POPULAR",
  },
  {
    icon: "GME",
    title: "Game Developers",
    description: "Build game websites that match your product. Pixel-perfect UI for pixel-perfect games.",
    cta: "VIEW GAME BLOCKS",
  },
  {
    icon: "DSN",
    title: "Designers",
    description: "Prototype unique interfaces fast. Every component is customizable down to the pixel.",
    cta: "EXPLORE COMPONENTS",
  },
];

export default function CTA2({
  title = "Built For You",
  description = "No matter what you're building",
  items = defaultItems,
  className,
}: CTA2Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-4xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
        )}

        <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {items.map((item) => (
            <Card className="relative flex flex-col" key={item.title}>
              {item.badge && (
                <div className="absolute top-2 right-4 z-10">
                  <Badge className="text-[9px]">{item.badge}</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="retro mb-2 text-xl">{item.icon}</div>
                <CardTitle className="retro text-sm">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="mb-4 flex-1 text-xs leading-relaxed">
                  {item.description}
                </CardDescription>
                <Button className="w-full" size="sm" variant="outline">
                  {item.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
