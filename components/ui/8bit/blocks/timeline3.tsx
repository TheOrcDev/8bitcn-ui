import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface TimelineEvent {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

interface Timeline3Props {
  className?: string;
  description?: string;
  events?: TimelineEvent[];
  title?: string;
}

const defaultEvents: TimelineEvent[] = [
  {
    icon: "Q1",
    title: "Public Launch",
    description:
      "50+ components available. Registry goes live. Community Discord opens.",
    badge: "DONE",
  },
  {
    icon: "Q2",
    title: "Block System",
    description:
      "Full-page blocks: hero, pricing, FAQ, social proof. Build landing pages in minutes.",
    badge: "NOW",
  },
  {
    icon: "Q3",
    title: "Pro Templates",
    description:
      "Complete landing page templates. One-click deploy. Premium themes.",
  },
  {
    icon: "Q4",
    title: "Animation Pack",
    description:
      "Pixel transitions, sprite animations, and retro loading screens.",
  },
  {
    icon: "Q5",
    title: "Game UI Kit",
    description:
      "Inventory systems, dialogue boxes, battle UIs. Full game interface toolkit.",
  },
];

function EventCard({ event, align = "left" }: { event: TimelineEvent; align?: "left" | "right" }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className={cn("flex items-center gap-4", align === "right" && "flex-row-reverse justify-end")}>
          <CardTitle className={cn("retro text-xs", align === "right" && "text-right")}>{event.title}</CardTitle>
          {event.badge && (
            <Badge className="text-[9px]">{event.badge}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className={cn("text-muted-foreground text-[10px] leading-relaxed", align === "right" && "text-right")}>
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Timeline3({
  title = "Roadmap",
  description = "Where we've been and where we're going",
  events = defaultEvents,
  className,
}: Timeline3Props) {
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
              <p className="retro text-muted-foreground text-[9px]">{description}</p>
            )}
          </div>
        )}

        {/* Mobile: simple vertical (icon left + card right) */}
        <div className="flex flex-col gap-6 md:hidden">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-border" />
            {events.map((event) => (
              <div className="relative flex gap-4 pb-6" key={event.title}>
                <div className="retro relative z-10 flex size-12 shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold text-sm">
                  {event.icon}
                </div>
                <div className="flex-1 pt-1">
                  <EventCard event={event} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: zigzag (alternating left/right) */}
        <div className="relative hidden md:block">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-border" />

          <div className="flex flex-col gap-8">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  className="relative flex items-center"
                  key={event.title}
                >
                  {/* Left side */}
                  <div className="flex-1 pr-8">
                    {isLeft && (
                      <div>
                        <EventCard align="right" event={event} />
                      </div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="retro relative z-10 flex size-12 shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold text-sm">
                    {event.icon}
                  </div>

                  {/* Right side */}
                  <div className="flex-1 pl-8">
                    {!isLeft && <EventCard event={event} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
