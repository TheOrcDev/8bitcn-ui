"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/hooks/use-near-viewport";
import type { SponsorTier } from "@/lib/creem";
import { cn } from "@/lib/utils";

const SponsorClaim = dynamic(() => import("../sponsor-claim"), {
  ssr: false,
});

interface LazySponsorClaimProps {
  className?: string;
  labelClassName?: string;
  text: string;
  textClassName?: string;
  tier: SponsorTier;
}

export function LazySponsorClaim({
  className,
  labelClassName,
  text,
  textClassName,
  tier,
}: LazySponsorClaimProps) {
  const { isNearViewport, ref } = useNearViewport("600px 0px");

  return (
    <div className="contents" ref={ref}>
      {isNearViewport ? (
        <SponsorClaim
          className={className}
          labelClassName={labelClassName}
          text={text}
          textClassName={textClassName}
          tier={tier}
        />
      ) : (
        <span
          aria-disabled="true"
          className={cn("block", className, labelClassName)}
          data-sponsor-claim-placeholder={tier}
        >
          <span className={textClassName}>{text}</span>
        </span>
      )}
    </div>
  );
}
