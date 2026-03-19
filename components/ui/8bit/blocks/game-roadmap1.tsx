import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface Quest {
  description: string;
  status: "completed" | "in-progress" | "locked";
  title: string;
}

interface GameRoadmap1Props {
  className?: string;
  description?: string;
  quests?: Quest[];
  title?: string;
}

const statusConfig = {
  completed: { badge: "CLEARED", variant: "default" as const },
  "in-progress": { badge: "ACTIVE", variant: "secondary" as const },
  locked: { badge: "LOCKED", variant: "outline" as const },
};

const defaultQuests: Quest[] = [
  {
    title: "Chapter 1: Core Components",
    description: "50+ base components. Buttons, cards, inputs, dialogs. The foundation.",
    status: "completed",
  },
  {
    title: "Chapter 2: Gaming Blocks",
    description: "Health bars, leaderboards, game over screens, victory animations.",
    status: "completed",
  },
  {
    title: "Chapter 3: Page Blocks",
    description: "27 full page sections. Hero, pricing, FAQ, social proof, timelines.",
    status: "in-progress",
  },
  {
    title: "Chapter 4: Game UI Pack",
    description: "Game-themed blocks. Quest roadmaps, loot pricing, skill trees.",
    status: "in-progress",
  },
  {
    title: "Chapter 5: Templates",
    description: "Full landing page templates. One-click deploy to Vercel.",
    status: "locked",
  },
  {
    title: "Chapter 6: Icon Pack",
    description: "Native 8-bit pixel icon library. No external dependencies.",
    status: "locked",
  },
];

export default function GameRoadmap1({
  title = "Quest Log",
  description = "Your journey through the 8bitcn universe",
  quests = defaultQuests,
  className,
}: GameRoadmap1Props) {
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

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-border" />

          <div className="flex flex-col gap-4">
            {quests.map((quest) => {
              const config = statusConfig[quest.status];
              const isLocked = quest.status === "locked";

              return (
                <div className="relative flex gap-4" key={quest.title}>
                  <div
                    className={cn(
                      "retro relative z-10 flex size-12 shrink-0 items-center justify-center border-2 bg-background text-[10px] font-bold",
                      isLocked
                        ? "border-muted-foreground/30 text-muted-foreground/30"
                        : "border-foreground",
                    )}
                  >
                    {quest.status === "completed"
                      ? "+"
                      : quest.status === "in-progress"
                        ? ">>"
                        : "--"}
                  </div>

                  <Card
                    className={cn(
                      "flex-1",
                      isLocked && "opacity-50",
                    )}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="retro text-xs">
                          {quest.title}
                        </CardTitle>
                        <Badge variant={config.variant}>{config.badge}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-[10px] leading-relaxed">
                        {quest.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
