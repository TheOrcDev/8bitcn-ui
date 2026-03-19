import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

interface GameCTA1Props {
  bossDescription?: string;
  bossTitle?: string;
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  description?: string;
  powerUpDescription?: string;
  powerUpTitle?: string;
  title?: string;
}

export default function GameCTA1({
  title = "Face the Final Boss",
  description = "Every builder faces the same enemy. Here is your power-up.",
  bossTitle = "THE PROBLEM",
  bossDescription = "Building landing pages from scratch. Hours of layout work. Generic templates that all look the same. Wasted time.",
  powerUpTitle = "THE POWER-UP",
  powerUpDescription = "27 copy-paste blocks. Retro aesthetic that stands out. Dark mode built-in. Ship in minutes, not days.",
  ctaLabel = "EQUIP POWER-UP",
  ctaHref = "/docs",
  className,
}: GameCTA1Props) {
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

        <div className="grid gap-x-4 gap-y-1 md:grid-cols-2">
          {/* Boss */}
          <Card>
            <CardHeader className="pb-2">
              <Badge variant="destructive">{bossTitle}</Badge>
              <CardTitle className="retro mt-2 text-sm">The Boss</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {bossDescription}
              </p>
            </CardContent>
          </Card>

          {/* Power-up */}
          <Card className="border-primary">
            <CardHeader className="pb-2">
              <Badge>{powerUpTitle}</Badge>
              <CardTitle className="retro mt-2 text-sm">Your Weapon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground text-xs leading-relaxed">
                {powerUpDescription}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href={ctaHref}>
            <Button>{ctaLabel}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
