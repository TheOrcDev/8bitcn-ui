import Link from "next/link";
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

interface Hero2Props {
  actions?: HeroAction[];
  badges?: HeroBadge[];
  children?: ReactNode;
  className?: string;
  description?: string;
  subtitle?: string;
  title: string;
  visual?: ReactNode;
}

export default function Hero2({
  title,
  subtitle,
  description,
  actions = [],
  badges = [],
  className,
  children,
  visual,
}: Hero2Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-4 py-16 md:py-24",
        className,
      )}
    >
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:gap-12">
        {/* Text side */}
        <div className="flex-1">
          {/* Badges */}
          {badges.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-4">
              {badges.map((badge) => (
                <Badge key={badge.label} variant={badge.variant}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="retro mb-4 font-bold text-3xl tracking-tight md:text-5xl">
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
            <p className="mb-8 text-muted-foreground text-xs leading-relaxed">
              {description}
            </p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {actions.map((action) =>
                action.href ? (
                  <Button asChild key={action.label} variant={action.variant}>
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ) : (
                  <Button
                    key={action.label}
                    onClick={action.onClick}
                    variant={action.variant}
                  >
                    {action.label}
                  </Button>
                ),
              )}
            </div>
          )}

          {children}
        </div>

        {/* Visual side */}
        <img src="/images/8bit-orc.png" alt="Hero 2" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
