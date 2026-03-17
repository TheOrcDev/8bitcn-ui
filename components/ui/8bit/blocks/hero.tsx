import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface HeroBadge {
  label: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

interface HeroAction {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
}

interface HeroProps {
  actions?: HeroAction[];
  badges?: HeroBadge[];
  className?: string;
  description?: string;
  subtitle?: string;
  title: string;
  variant?: "centered" | "split";
}

export default function Hero({
  title,
  subtitle,
  description,
  actions = [],
  badges = [],
  variant = "centered",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "retro relative w-full overflow-hidden px-4 py-16 md:py-24",
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

      <div
        className={cn(
          "relative mx-auto max-w-4xl",
          variant === "centered" && "text-center",
          variant === "split" && "flex flex-col gap-8 md:flex-row md:items-center md:gap-12",
        )}
      >
        <div className={cn(variant === "split" && "flex-1")}>
          {/* Badges */}
          {badges.length > 0 && (
            <div
              className={cn(
                "mb-6 flex flex-wrap gap-4",
                variant === "centered" && "justify-center",
              )}
            >
              {badges.map((badge) => (
                <Badge key={badge.label} variant={badge.variant}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className={cn(
              "retro mb-4 font-bold text-3xl tracking-tight md:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="retro mb-4 text-muted-foreground text-sm md:text-base">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p
              className={cn(
                "mb-8 text-muted-foreground text-xs leading-relaxed",
                variant === "centered" && "mx-auto max-w-2xl",
              )}
            >
              {description}
            </p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-4",
                variant === "centered" && "justify-center",
              )}
            >
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
        </div>

        {/* Split variant visual slot */}
        {variant === "split" && (
          <div className="flex flex-1 items-center justify-center">
            <div className="retro flex size-48 items-center justify-center border-4 border-dashed border-muted-foreground/30 text-muted-foreground text-xs md:size-64">
              [ Visual Slot ]
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
