export type SponsorTier = "mythic" | "legendary" | "regular";

const sponsorProductIds: Record<SponsorTier, string> = {
  mythic: process.env.CREEM_PRODUCT_ID_MYTHIC ?? "prod_2MKieCPMWLwdzmWXf49hQd",
  legendary:
    process.env.CREEM_PRODUCT_ID_LEGENDARY ?? "prod_47OwvIAEqaGTGM5W16VbRA",
  regular:
    process.env.CREEM_PRODUCT_ID_REGULAR ?? "prod_69HQd6QqRdLBZlBZ0H4Jwa",
};

export function getSponsorProductId(tier: SponsorTier): string {
  return sponsorProductIds[tier];
}

export function isSponsorTier(value: string): value is SponsorTier {
  return value === "mythic" || value === "legendary" || value === "regular";
}
