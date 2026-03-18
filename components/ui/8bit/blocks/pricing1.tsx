import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface PricingFeature {
  included: boolean;
  text: string;
}

export interface PricingTier {
  badge?: string;
  cta: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  name: string;
  price: string;
  period?: string;
}

interface Pricing1Props {
  className?: string;
  description?: string;
  tiers?: PricingTier[];
  title?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Squire",
    price: "Free",
    description: "For casual adventurers just starting out.",
    cta: "START FREE",
    features: [
      { text: "3 dungeon runs per day", included: true },
      { text: "Basic gear access", included: true },
      { text: "Community chat", included: true },
      { text: "Custom character skins", included: false },
      { text: "Priority matchmaking", included: false },
    ],
  },
  {
    name: "Knight",
    price: "$9",
    period: "/mo",
    description: "For serious players who want the edge.",
    cta: "GO KNIGHT",
    badge: "POPULAR",
    highlighted: true,
    features: [
      { text: "Unlimited dungeon runs", included: true },
      { text: "Rare gear access", included: true },
      { text: "Community chat", included: true },
      { text: "Custom character skins", included: true },
      { text: "Priority matchmaking", included: false },
    ],
  },
  {
    name: "Legend",
    price: "$29",
    period: "/mo",
    description: "For those who conquer everything.",
    cta: "GO LEGEND",
    features: [
      { text: "Unlimited dungeon runs", included: true },
      { text: "Legendary gear access", included: true },
      { text: "Private guild chat", included: true },
      { text: "Custom character skins", included: true },
      { text: "Priority matchmaking", included: true },
    ],
  },
];

export default function Pricing1({
  title = "Choose Your Tier",
  description = "Every adventurer needs a plan",
  tiers = defaultTiers,
  className,
}: Pricing1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-5xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-xl text-muted-foreground text-xs">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-x-6 gap-y-1 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              className={cn(
                "relative flex flex-col",
                tier.highlighted && "border-primary",
              )}
              key={tier.name}
            >
              {tier.badge && (
                <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="text-[9px]">{tier.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="retro text-sm">{tier.name}</CardTitle>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="retro font-bold text-3xl">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground text-xs">
                      {tier.period}
                    </span>
                  )}
                </div>
                <CardDescription className="mt-2 text-xs">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className="flex flex-1 flex-col pt-4">
                <ul className="mb-6 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li
                      className={cn(
                        "flex items-center gap-2 text-xs",
                        !feature.included && "text-muted-foreground line-through",
                      )}
                      key={feature.text}
                    >
                      <span className="retro text-[10px]">
                        {feature.included ? "[+]" : "[-]"}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <div className="-mx-1.5">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
