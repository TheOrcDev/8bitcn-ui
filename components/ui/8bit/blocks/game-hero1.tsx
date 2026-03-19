import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import HealthBar from "@/components/ui/8bit/health-bar";

import "@/components/ui/8bit/styles/retro.css";

interface GameHero1Props {
  actions?: Array<{
    href?: string;
    label: string;
    variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
  }>;
  className?: string;
  description?: string;
  healthLabel?: string;
  healthValue?: number;
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
  healthLabel = "Launch Progress",
  healthValue = 87,
  className,
}: GameHero1Props) {
  return (
    <section
      className={cn("relative w-full px-4 py-16 md:py-24", className)}
    >
      <div className="mx-auto max-w-2xl text-center">
        {subtitle && (
          <div className="mb-6">
            <Badge variant="outline">{subtitle}</Badge>
          </div>
        )}

        <h1 className="retro mb-4 font-bold text-3xl tracking-tight md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mb-8 max-w-lg text-muted-foreground text-xs leading-relaxed">
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
            <span>{healthLabel}</span>
            <span>{healthValue}%</span>
          </div>
          <HealthBar value={healthValue} />
        </div>
      </div>
    </section>
  );
}
