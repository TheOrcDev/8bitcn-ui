import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface ChangelogEntry {
  badge?: string;
  date: string;
  description: string;
  title: string;
}

interface Team2Props {
  className?: string;
  description?: string;
  entries?: ChangelogEntry[];
  title?: string;
}

const defaultEntries: ChangelogEntry[] = [
  {
    date: "Mar 2026",
    title: "v2.0 — Block System",
    description:
      "21 production-ready blocks across 8 categories. Hero, pricing, FAQ, social proof, and more.",
    badge: "LATEST",
  },
  {
    date: "Feb 2026",
    title: "v1.5 — Gaming Components",
    description:
      "Health bars, mana bars, leaderboards, game over screens, and victory animations.",
  },
  {
    date: "Jan 2026",
    title: "v1.0 — Public Launch",
    description:
      "50+ base components. Registry goes live. Open source from day one.",
  },
];

export default function Team2({
  title = "Changelog",
  description = "What we shipped and when",
  entries = defaultEntries,
  className,
}: Team2Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-2xl">
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

        <div className="flex flex-col gap-4">
          {entries.map((entry, idx) => (
            <div key={entry.title}>
              <Card className="relative">
                {entry.badge && (
                  <div className="absolute -top-2 right-4 z-10">
                    <Badge>{entry.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="retro mb-1 text-muted-foreground text-[10px]">
                    {entry.date}
                  </div>
                  <CardTitle className="retro text-sm">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs leading-relaxed">
                    {entry.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {idx < entries.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
