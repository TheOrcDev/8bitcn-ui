import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Progress } from "@/components/ui/8bit/progress";

import "@/components/ui/8bit/styles/retro.css";

export interface Milestone {
  label: string;
  reached: boolean;
}

interface GameHero2Props {
  actions?: Array<{
    href?: string;
    label: string;
    variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
  }>;
  className?: string;
  description?: string;
  level?: number;
  milestones?: Milestone[];
  title: string;
  xpValue?: number;
}

const defaultMilestones: Milestone[] = [
  { label: "Lv 1", reached: true },
  { label: "Lv 10", reached: true },
  { label: "Lv 25", reached: true },
  { label: "Lv 50", reached: false },
  { label: "Lv 99", reached: false },
];

export default function GameHero2({
  title = "YOUR JOURNEY SO FAR",
  description = "Every line of code levels you up. Keep shipping to unlock the next milestone.",
  level = 25,
  xpValue = 62,
  milestones = defaultMilestones,
  actions = [
    { label: "KEEP BUILDING", variant: "default", href: "/docs" },
    { label: "VIEW SKILLS", variant: "outline", href: "/v2" },
  ],
  className,
}: GameHero2Props) {
  return (
    <section className={cn("relative w-full px-4 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6">
          <Badge>LEVEL {level}</Badge>
        </div>

        <h1 className="retro mb-4 font-bold text-3xl tracking-tight md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground retro text-[9px] leading-relaxed">
            {description}
          </p>
        )}

        {/* XP bar */}
        <div className="mx-auto mb-4 max-w-md">
          <div className="retro mb-2 flex justify-between text-[10px]">
            <span>XP Progress</span>
            <span>{xpValue}%</span>
          </div>
          <Progress className="h-3" value={xpValue} />
        </div>

        {/* Milestones */}
        <div className="mx-auto mb-8 flex max-w-md justify-between">
          {milestones.map((m) => (
            <Badge key={m.label} variant={m.reached ? "default" : "secondary"}>
              {m.label}
            </Badge>
          ))}
        </div>

        {actions.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {actions.map((action) =>
              action.href ? (
                <Button asChild key={action.label} variant={action.variant}>
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ) : (
                <Button key={action.label} variant={action.variant}>
                  {action.label}
                </Button>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
