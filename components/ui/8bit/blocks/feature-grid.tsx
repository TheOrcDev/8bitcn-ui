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

function PixelIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2 flex size-10 items-center justify-center">
      {children}
    </div>
  );
}

/** Pixel sword icon */
function SwordIcon() {
  return (
    <svg
      aria-label="sword"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="2" x="12" y="0" />
      <rect height="2" width="2" x="10" y="2" />
      <rect height="2" width="2" x="12" y="2" />
      <rect height="2" width="2" x="8" y="4" />
      <rect height="2" width="2" x="10" y="4" />
      <rect height="2" width="2" x="6" y="6" />
      <rect height="2" width="2" x="8" y="6" />
      <rect height="2" width="2" x="4" y="8" />
      <rect height="2" width="2" x="6" y="8" />
      <rect height="2" width="2" x="2" y="8" />
      <rect height="2" width="2" x="2" y="10" />
      <rect height="2" width="2" x="4" y="10" />
      <rect height="2" width="2" x="0" y="12" />
      <rect height="2" width="2" x="0" y="14" />
      <rect height="2" width="2" x="2" y="12" />
    </svg>
  );
}

/** Pixel shield icon */
function ShieldIcon() {
  return (
    <svg
      aria-label="shield"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="8" x="4" y="0" />
      <rect height="2" width="2" x="2" y="2" />
      <rect height="2" width="8" x="4" y="2" />
      <rect height="2" width="2" x="12" y="2" />
      <rect height="8" width="2" x="2" y="4" />
      <rect height="8" width="2" x="12" y="4" />
      <rect height="2" width="2" x="4" y="12" />
      <rect height="2" width="2" x="10" y="12" />
      <rect height="2" width="4" x="6" y="14" />
    </svg>
  );
}

/** Pixel map icon */
function MapIcon() {
  return (
    <svg
      aria-label="map"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="12" x="2" y="2" />
      <rect height="2" width="2" x="2" y="4" />
      <rect height="2" width="2" x="12" y="4" />
      <rect height="2" width="2" x="2" y="6" />
      <rect height="2" width="2" x="6" y="6" />
      <rect height="2" width="2" x="12" y="6" />
      <rect height="2" width="2" x="2" y="8" />
      <rect height="2" width="2" x="8" y="8" />
      <rect height="2" width="2" x="12" y="8" />
      <rect height="2" width="2" x="2" y="10" />
      <rect height="2" width="2" x="12" y="10" />
      <rect height="2" width="12" x="2" y="12" />
    </svg>
  );
}

/** Pixel trophy icon */
function TrophyIcon() {
  return (
    <svg
      aria-label="trophy"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="8" x="4" y="0" />
      <rect height="2" width="2" x="2" y="2" />
      <rect height="2" width="8" x="4" y="2" />
      <rect height="2" width="2" x="12" y="2" />
      <rect height="2" width="2" x="0" y="4" />
      <rect height="2" width="2" x="14" y="4" />
      <rect height="2" width="2" x="4" y="4" />
      <rect height="2" width="2" x="10" y="4" />
      <rect height="2" width="2" x="0" y="6" />
      <rect height="2" width="2" x="14" y="6" />
      <rect height="2" width="2" x="4" y="6" />
      <rect height="2" width="2" x="10" y="6" />
      <rect height="2" width="2" x="4" y="8" />
      <rect height="2" width="2" x="6" y="8" />
      <rect height="2" width="2" x="8" y="8" />
      <rect height="2" width="2" x="10" y="8" />
      <rect height="2" width="4" x="6" y="10" />
      <rect height="2" width="8" x="4" y="12" />
    </svg>
  );
}

/** Pixel music note icon */
function MusicIcon() {
  return (
    <svg
      aria-label="music"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="2" x="6" y="0" />
      <rect height="2" width="6" x="6" y="2" />
      <rect height="2" width="2" x="6" y="4" />
      <rect height="2" width="2" x="10" y="4" />
      <rect height="2" width="2" x="6" y="6" />
      <rect height="2" width="2" x="10" y="6" />
      <rect height="2" width="2" x="6" y="8" />
      <rect height="2" width="4" x="8" y="8" />
      <rect height="2" width="2" x="6" y="10" />
      <rect height="2" width="4" x="2" y="10" />
      <rect height="2" width="4" x="2" y="12" />
    </svg>
  );
}

/** Pixel save/floppy icon */
function SaveIcon() {
  return (
    <svg
      aria-label="save"
      className="size-8"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="2" width="12" x="2" y="2" />
      <rect height="2" width="2" x="2" y="4" />
      <rect height="4" width="6" x="4" y="4" />
      <rect height="2" width="2" x="12" y="4" />
      <rect height="2" width="2" x="2" y="6" />
      <rect height="2" width="2" x="12" y="6" />
      <rect height="2" width="2" x="2" y="8" />
      <rect height="2" width="2" x="12" y="8" />
      <rect height="2" width="2" x="2" y="10" />
      <rect height="4" width="6" x="6" y="10" />
      <rect height="2" width="2" x="12" y="10" />
      <rect height="2" width="12" x="2" y="12" />
    </svg>
  );
}

const ICON_MAP: Record<string, () => ReactNode> = {
  sword: () => <SwordIcon />,
  shield: () => <ShieldIcon />,
  map: () => <MapIcon />,
  trophy: () => <TrophyIcon />,
  music: () => <MusicIcon />,
  save: () => <SaveIcon />,
};

export interface FeatureItem {
  badge?: string;
  description: string;
  icon: string;
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
    icon: "sword",
    title: "Battle System",
    description:
      "Turn-based combat with pixel-perfect hit detection and combo chains.",
  },
  {
    icon: "shield",
    title: "Armor Crafting",
    description:
      "Forge legendary gear from rare drops. Each piece boosts unique stats.",
  },
  {
    icon: "map",
    title: "World Map",
    description:
      "Explore 16 biomes, each with hidden dungeons and boss encounters.",
  },
  {
    icon: "trophy",
    title: "Leaderboards",
    description: "Compete globally. Daily, weekly, and all-time rankings.",
    badge: "NEW",
  },
  {
    icon: "music",
    title: "Chiptune Audio",
    description: "Original 8-bit soundtrack with dynamic battle themes.",
  },
  {
    icon: "save",
    title: "Cloud Saves",
    description:
      "Your progress syncs across all devices. Never lose a save again.",
    badge: "COMING SOON",
  },
];

export default function FeatureGrid({
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
              <p className="mx-auto max-w-xl text-muted-foreground text-sm">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn("grid gap-4", gridCols[columns])}>
          {items.map((item) => {
            const renderIcon = ICON_MAP[item.icon];

            return (
              <Card className="relative" key={item.title}>
                {item.badge && (
                  <div className="absolute -top-2 right-4 z-10">
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <PixelIcon>
                    {renderIcon ? renderIcon() : <span className="retro text-lg">{item.icon}</span>}
                  </PixelIcon>
                  <CardTitle className="retro text-sm">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
