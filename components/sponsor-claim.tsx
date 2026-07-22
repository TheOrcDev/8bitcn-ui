"use client";

import { CreemCheckout } from "@creem_io/nextjs";
import { getSponsorProductId, type SponsorTier } from "@/lib/creem";
import { cn } from "@/lib/utils";

interface SponsorClaimProps {
  className?: string;
  labelClassName?: string;
  text: string;
  textClassName?: string;
  tier: SponsorTier;
}

export default function SponsorClaim({
  tier,
  className,
  labelClassName,
  textClassName,
  text,
}: SponsorClaimProps) {
  return (
    <CreemCheckout
      metadata={{ sponsorTier: tier }}
      productId={getSponsorProductId(tier)}
      successUrl="/sponsors?checkout=success"
    >
      <span className={cn("block", className, labelClassName)}>
        <span className={textClassName}>{text}</span>
      </span>
    </CreemCheckout>
  );
}
