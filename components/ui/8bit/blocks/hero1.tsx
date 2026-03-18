import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface HeroBadge {
  label: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

interface HeroAction {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
}

interface Hero1Props {
  actions?: HeroAction[];
  badges?: HeroBadge[];
  children?: ReactNode;
  className?: string;
  description?: string;
  subtitle?: string;
  title: string;
}

export default function Hero1({
  title,
  subtitle,
  description,
  actions = [],
  badges = [],
  className,
  children,
}: Hero1Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-4 py-16 md:py-24",
        className,
      )}
    >
      {/* Scanline overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <Badge key={badge.label} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="retro mb-4 font-bold text-3xl tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="retro mb-4 text-muted-foreground text-xs md:text-sm">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        )}

        {/* Actions */}
        {actions.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {actions.map((action) => (
              <Button
                key={action.label}
                onClick={action.onClick}
                variant={action.variant}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}

        {/* Optional extra content */}
        {children}
      </div>
    </section>
  );
}
