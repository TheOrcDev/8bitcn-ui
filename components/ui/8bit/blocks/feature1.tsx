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

export interface FeatureItem {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

interface FeatureGridProps {
  className?: string;
  columns?: 3 | 6 | 9;
  description?: string;
  items?: FeatureItem[];
  title?: string;
}

const defaultItems: FeatureItem[] = [
  {
    icon: "I",
    title: "Battle System",
    description:
      "Turn-based combat with pixel-perfect hit detection and combo chains.",
  },
  {
    icon: "II",
    title: "Armor Crafting",
    description:
      "Forge legendary gear from rare drops. Each piece boosts unique stats.",
  },
  {
    icon: "III",
    title: "World Map",
    description:
      "Explore 16 biomes, each with hidden dungeons and boss encounters.",
  },
  {
    icon: "IV",
    title: "Leaderboards",
    description: "Compete globally. Daily, weekly, and all-time rankings.",
    badge: "NEW",
  },
  {
    icon: "V",
    title: "Chiptune Audio",
    description: "Original 8-bit soundtrack with dynamic battle themes.",
  },
  {
    icon: "VI",
    title: "Cloud Saves",
    description:
      "Your progress syncs across all devices. Never lose a save again.",
    badge: "COMING SOON",
  },
];

export default function Feature1({
  title = "Game Features",
  description = "Everything you need for the ultimate retro experience",
  items = defaultItems,
  columns = 3,
  className,
}: FeatureGridProps) {
  const gridCols = {
    3: "sm:grid-cols-2 lg:grid-cols-3",
    6: "sm:grid-cols-2 lg:grid-cols-3",
    9: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
  };

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

        <div className={cn("grid gap-x-4 gap-y-1", gridCols[columns])}>
          {items.map((item) => (
            <Card className="relative" key={item.title}>
              {item.badge && (
                <div className="absolute top-2 right-4 z-10">
                  <Badge className="text-[9px]">{item.badge}</Badge>
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
