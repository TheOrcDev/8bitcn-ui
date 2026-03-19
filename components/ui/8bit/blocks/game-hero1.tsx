import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Progress } from "@/components/ui/8bit/progress";

import "@/components/ui/8bit/styles/retro.css";

interface GameHero1Props {
  actions?: Array<{
    href?: string;
    label: string;
    variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
  }>;
  className?: string;
  description?: string;
  xpLabel?: string;
  xpValue?: number;
  subtitle?: string;
  title: string;
}

export default function GameHero1({
  title = "LAUNCH SEQUENCE INITIATED",
  subtitle = "v2.0 — Now Live",
  description = "Your product is ready for battle. Ship it before the competition respawns.",
  actions = [
    { label: "DEPLOY NOW", variant: "default", href: "/docs" },
    { label: "VIEW ARSENAL", variant: "outline", href: "/blocks" },
  ],
  xpLabel = "XP to Next Level",
  xpValue = 72,
  className,
}: GameHero1Props) {
  return (
    <section
      className={cn("relative w-full px-4 py-16 md:py-24", className)}
    >
      <div className="mx-auto max-w-2xl text-center">
        {subtitle && (
          <div className="mb-6">
            <Badge >{subtitle}</Badge>
          </div>
        )}

        <h1 className="retro mb-4 font-bold text-3xl tracking-tight md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground retro text-[9px] leading-relaxed">
            {description}
          </p>
        )}

        {actions.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-4">
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

        {/* Health bar */}
        <div className="mx-auto max-w-sm">
          <div className="retro mb-2 flex justify-between text-[10px]">
            <span>{xpLabel}</span>
            <span>{xpValue}%</span>
          </div>
          <Progress className="h-3" value={xpValue} />
        </div>
      </div>
    </section>
  );
}
