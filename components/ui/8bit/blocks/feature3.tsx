"use client";

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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/8bit/carousel";

import "@/components/ui/8bit/styles/retro.css";

export interface CarouselFeature {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

interface Feature3Props {
  className?: string;
  description?: string;
  items?: CarouselFeature[];
  title?: string;
}

const defaultItems: CarouselFeature[] = [
  {
    icon: "01",
    title: "Choose Your Class",
    description:
      "Warrior, Mage, or Rogue. Each with unique skill trees, gear sets, and playstyles.",
  },
  {
    icon: "02",
    title: "Enter the Dungeon",
    description:
      "Procedurally placed loot with hand-designed encounters. Every run feels fresh.",
    badge: "FAN FAVORITE",
  },
  {
    icon: "03",
    title: "Defeat Bosses",
    description:
      "12 legendary bosses, each with unique attack patterns. Learn, adapt, conquer.",
  },
  {
    icon: "04",
    title: "Upgrade Your Gear",
    description:
      "Combine drops at the forge to create legendary items. The grind is the game.",
  },
  {
    icon: "05",
    title: "Climb the Ranks",
    description:
      "Global leaderboards updated in real-time. Prove you are the best.",
    badge: "COMPETITIVE",
  },
];

export default function Feature3({
  title = "The Adventure Awaits",
  description = "Swipe through to discover what makes this game legendary",
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

        <Carousel
          className="mx-auto w-full max-w-4xl"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
                key={item.title}
              >
                <Card className="relative h-full">
                  {item.badge && (
                    <div className="absolute -top-2 right-4 z-10">
                      <Badge variant="secondary">{item.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="retro mb-2 text-2xl">{item.icon}</div>
                    <CardTitle className="retro text-sm">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
