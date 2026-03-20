"use client";

import { CreemCheckout } from "@creem_io/nextjs";
import { getSponsorProductId, type SponsorTier } from "@/lib/creem";

interface SponsorClaimProps {
  tier: SponsorTier;
  className?: string;
  labelClassName?: string;
  textClassName?: string;
  text: string;
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
      <button className={className} type="button">
        <div className={labelClassName}>
          <span className={textClassName}>{text}</span>
        </div>
      </button>
    </CreemCheckout>
  );
}
