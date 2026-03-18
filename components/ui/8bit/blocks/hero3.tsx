"use client";

import Link from "next/link";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

interface HeroStat {
  label: string;
  value: string;
}

interface HeroAction {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
}

interface Hero3Props {
  actions?: HeroAction[];
  children?: ReactNode;
  className?: string;
  description?: string;
  stats?: HeroStat[];
  subtitle?: string;
  title: string;
}

function BlinkingText({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={visible ? "opacity-100" : "opacity-0"}>
      {children}
    </span>
  );
}

export default function Hero3({
  title,
  subtitle,
  description,
  actions = [],
  stats = [],
  className,
  children,
}: Hero3Props) {
  const defaultStats: HeroStat[] = stats.length > 0 ? stats : [
    { label: "COMPONENTS", value: "50+" },
    { label: "GITHUB STARS", value: "1.7K" },
    { label: "CONTRIBUTORS", value: "100+" },
  ];

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
        {/* Subtitle badge */}
        {subtitle && (
          <div className="mb-6">
            <Badge>{subtitle}</Badge>
          </div>
        )}

        {/* Title — large game-style */}
        <h1 className="retro mb-6 font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        )}

        {/* Stats row */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {defaultStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex flex-col items-center px-6 py-4">
                <span className="retro font-bold text-xl md:text-2xl">
                  {stat.value}
                </span>
                <span className="retro mt-1 text-muted-foreground text-[10px]">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        {actions.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
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
        ) : (
          <div className="retro text-muted-foreground text-xs">
            <BlinkingText>PRESS START</BlinkingText>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
