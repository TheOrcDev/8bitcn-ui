"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface PortalTransition1Props {
  badge?: string;
  className?: string;
  description?: string;
  href?: string;
  hrefSecondary?: string;
  imageSrc?: string;
  onEnter?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  title?: string;
  travelingText?: string;
}

export default function PortalTransition1({
  title = "Click to go through the portal",
  description = "The gateway is open. One step and you're in the next realm.",
  badge = "FAST TRAVEL",
  primaryLabel = "Enter Portal",
  secondaryLabel = "Choose Destination",
  travelingText = "Traveling...",
  href = "/docs",
  hrefSecondary = "/docs/blocks",
  imageSrc = "/images/8bit-portal.png",
  onEnter,
  className,
}: PortalTransition1Props) {
  const [traveling, setTraveling] = useState(false);

  const handleEnter = useCallback(() => {
    setTraveling(true);
    if (onEnter) {
      setTimeout(() => {
        onEnter();
        setTraveling(false);
      }, 800);
    } else {
      setTimeout(() => {
        setTraveling(false);
      }, 800);
    }
  }, [onEnter]);

  return (
    <div
      className={cn(
        "retro flex w-full flex-col items-center gap-6 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      {badge && (
        <Badge variant="secondary">{traveling ? travelingText : badge}</Badge>
      )}

      <h2 className="retro max-w-md font-bold text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>

      <p className="retro max-w-sm text-muted-foreground text-[9px]">
        {description}
      </p>

      {/* Portal image */}
      {imageSrc && (
        <button
          className={cn(
            "group relative cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300",
            traveling ? "scale-110" : "hover:scale-105",
          )}
          onClick={handleEnter}
          type="button"
        >
          <Image
            alt="Portal"
            className={cn(
              "pixelated transition-opacity duration-300",
              traveling && "animate-pulse",
            )}
            height={220}
            src={imageSrc}
            width={220}
          />
        </button>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4">
        {href ? (
          <Link href={href}>
            <Button disabled={traveling}>
              {traveling ? travelingText : primaryLabel}
            </Button>
          </Link>
        ) : (
          <Button disabled={traveling} onClick={handleEnter}>
            {traveling ? travelingText : primaryLabel}
          </Button>
        )}

        {secondaryLabel && hrefSecondary && (
          <Link href={hrefSecondary}>
            <Button variant="outline">{secondaryLabel}</Button>
          </Link>
        )}
      </div>

      <p className="retro text-muted-foreground text-[8px]">
        {traveling ? "Opening gateway..." : "No cooldown required."}
      </p>
    </div>
  );
}
