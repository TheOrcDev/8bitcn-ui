import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface FeatureRow {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

interface Feature2Props {
  className?: string;
  description?: string;
  items?: FeatureRow[];
  title?: string;
}

const defaultItems: FeatureRow[] = [
  {
    icon: "01",
    title: "Create Your Character",
    description:
      "Pick a class, customize your stats, and choose your starting gear. Every decision shapes your journey.",
  },
  {
    icon: "02",
    title: "Explore the World",
    description:
      "16 handcrafted biomes with secrets hidden in every corner. No procedural filler — just pure design.",
  },
  {
    icon: "03",
    title: "Battle Enemies",
    description:
      "Turn-based combat with a combo system that rewards skill. Chain attacks for devastating finishers.",
    badge: "ENHANCED",
  },
  {
    icon: "04",
    title: "Collect Loot",
    description:
      "Over 200 items to discover. Craft legendary weapons from rare drops found in the deepest dungeons.",
  },
];

export default function Feature2({
  title = "How It Works",
  description = "Four steps to retro glory",
  items = defaultItems,
  className,
}: Feature2Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-xl retro text-muted-foreground text-[9px]">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col">
          {items.map((item, index) => (
            <div key={item.title}>
              <div className="flex gap-6 py-6">
                {/* Icon / number */}
                <div className="retro flex size-14 shrink-0 items-center justify-center border-2 border-foreground text-xl font-bold">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="retro font-bold text-sm">{item.title}</h3>
                    {item.badge && (
                      <Badge className="text-[9px]">{item.badge}</Badge>
                    )}
                  </div>
                  <p className="mt-2 text-muted-foreground retro text-[9px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < items.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
