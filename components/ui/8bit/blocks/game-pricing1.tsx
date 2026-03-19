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
import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface LootTier {
  cta: string;
  features: string[];
  highlighted?: boolean;
  href?: string;
  name: string;
  price: string;
  rarity: string;
}

interface GamePricing1Props {
  className?: string;
  description?: string;
  tiers?: LootTier[];
  title?: string;
}

const rarityColors: Record<string, string> = {
  COMMON: "text-muted-foreground",
  RARE: "text-blue-500",
  EPIC: "text-purple-500",
  LEGENDARY: "text-amber-500",
};

const defaultTiers: LootTier[] = [
  {
    name: "Starter",
    rarity: "COMMON",
    price: "Free",
    cta: "EQUIP",
    features: ["5 components", "Community support", "Basic docs"],
  },
  {
    name: "Pro",
    rarity: "RARE",
    price: "$19/mo",
    cta: "UPGRADE",
    highlighted: true,
    features: [
      "All components",
      "All blocks",
      "Priority support",
      "Custom themes",
    ],
  },
  {
    name: "Enterprise",
    rarity: "LEGENDARY",
    price: "$99/mo",
    cta: "CONTACT",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom blocks",
      "SLA guarantee",
      "Team licenses",
    ],
  },
];

export default function GamePricing1({
  title = "Choose Your Rarity",
  description = "Every tier unlocks more power",
  tiers = defaultTiers,
  className,
}: GamePricing1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-4xl">
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

        <div className="grid gap-x-6 gap-y-1 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              className={cn(
                "relative flex flex-col",
                tier.highlighted && "border-primary",
              )}
              key={tier.name}
            >
              <CardHeader className="text-center">
                <div className="mb-1">
                  <Badge variant="outline">
                    <span className={rarityColors[tier.rarity] ?? ""}>
                      {tier.rarity}
                    </span>
                  </Badge>
                </div>
                <CardTitle className="retro text-sm">{tier.name}</CardTitle>
                <div className="retro mt-2 font-bold text-2xl">{tier.price}</div>
              </CardHeader>

              <Separator />

              <CardContent className="flex flex-1 flex-col pt-4">
                <ul className="mb-6 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li
                      className="flex items-center gap-2 text-xs"
                      key={feature}
                    >
                      <span className="retro text-[10px]">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="-mx-1.5">
                  {tier.href ? (
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      <Link href={tier.href}>{tier.cta}</Link>
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
