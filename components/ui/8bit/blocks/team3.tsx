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

export interface CaseStudy {
  cta?: string;
  description: string;
  href?: string;
  kpis: string[];
  title: string;
}

interface Team3Props {
  className?: string;
  description?: string;
  items?: CaseStudy[];
  title?: string;
}

const defaultItems: CaseStudy[] = [
  {
    title: "PixelForge Studio",
    description:
      "Rebuilt their entire landing page with 8bitcn blocks. Went from template to shipped in a single weekend.",
    kpis: ["3x signups", "2 day build", "40% less bounce"],
    cta: "READ MORE",
  },
  {
    title: "RetroRun Games",
    description:
      "Used the gaming components for their multiplayer game lobby. Players love the retro aesthetic.",
    kpis: ["50K players", "98% uptime", "4.8 rating"],
    cta: "READ MORE",
  },
  {
    title: "IndieStack",
    description:
      "Switched from a generic UI library. The unique 8-bit style became part of their brand identity.",
    kpis: ["Brand recognition", "0 dependencies", "2x engagement"],
    cta: "READ MORE",
  },
];

export default function Team3({
  title = "Case Studies",
  description = "Real results from real builders",
  items = defaultItems,
  className,
}: Team3Props) {
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

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card className="flex flex-col" key={item.title}>
              <CardHeader className="pb-2">
                <CardTitle className="retro text-sm">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="mb-4 flex-1 text-xs leading-relaxed">
                  {item.description}
                </CardDescription>

                {/* KPI badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.kpis.map((kpi) => (
                    <Badge key={kpi}>
                      {kpi}
                    </Badge>
                  ))}
                </div>

                {item.cta && (
                  <Button className="w-full" size="sm" variant="outline">
                    {item.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
