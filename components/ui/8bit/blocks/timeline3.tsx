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
    description: "50+ components available. Registry goes live. Community Discord opens.",
    badge: "DONE",
  },
  {
    icon: "Q2",
    title: "Block System",
    description: "Full-page blocks: hero, pricing, FAQ, social proof. Build landing pages in minutes.",
    badge: "NOW",
  },
  {
    icon: "Q3",
    title: "Pro Templates",
    description: "Complete landing page templates. One-click deploy. Premium themes.",
  },
  {
    icon: "Q4",
    title: "Animation Pack",
    description: "Pixel transitions, sprite animations, and retro loading screens.",
  },
  {
    icon: "Q5",
    title: "Game UI Kit",
    description: "Inventory systems, dialogue boxes, battle UIs. Full game interface toolkit.",
  },
];

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
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
        )}

        <div className="relative">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-border md:block" />

          <div className="flex flex-col gap-6">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  className="relative flex flex-col md:flex-row md:items-center"
                  key={event.title}
                >
                  {/* Left content or spacer */}
                  <div className={cn("flex-1", !isLeft && "hidden md:block")} >
                    {isLeft && (
                      <div className="md:pr-8 md:text-right">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 md:justify-end">
                              <CardTitle className="retro text-xs">
                                {event.title}
                              </CardTitle>
                              {event.badge && (
                                <Badge variant="secondary">{event.badge}</Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-[10px] leading-relaxed">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="retro relative z-10 mb-2 flex size-12 shrink-0 items-center justify-center border-2 border-foreground bg-background font-bold text-sm md:mb-0">
                    {event.icon}
                  </div>

                  {/* Right content or spacer */}
                  <div className={cn("flex-1", isLeft && "hidden md:block")}>
                    {!isLeft && (
                      <div className="md:pl-8">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                              <CardTitle className="retro text-xs">
                                {event.title}
                              </CardTitle>
                              {event.badge && (
                                <Badge variant="secondary">{event.badge}</Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-[10px] leading-relaxed">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>

                  {/* Mobile fallback — show card below icon for odd items */}
                  {!isLeft && (
                    <div className="md:hidden">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <CardTitle className="retro text-xs">
                              {event.title}
                            </CardTitle>
                            {event.badge && (
                              <Badge variant="secondary">{event.badge}</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-[10px] leading-relaxed">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
