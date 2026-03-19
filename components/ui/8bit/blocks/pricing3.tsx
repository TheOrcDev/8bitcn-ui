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

export interface ComparisonFeature {
  name: string;
  tiers: Record<string, boolean | string>;
}

export interface ComparisonTier {
  cta: string;
  highlighted?: boolean;
  name: string;
  price: string;
}

interface Pricing3Props {
  className?: string;
  description?: string;
  features?: ComparisonFeature[];
  tiers?: ComparisonTier[];
  title?: string;
}

const defaultTiers: ComparisonTier[] = [
  { name: "Free", price: "$0", cta: "START" },
  { name: "Pro", price: "$19/mo", cta: "UPGRADE", highlighted: true },
  { name: "Elite", price: "$49/mo", cta: "GO ELITE" },
];

const defaultFeatures: ComparisonFeature[] = [
  { name: "Dungeon Access", tiers: { Free: "Basic", Pro: "All", Elite: "All + Secret" } },
  { name: "Save Slots", tiers: { Free: "1", Pro: "10", Elite: "Unlimited" } },
  { name: "Custom Skins", tiers: { Free: false, Pro: true, Elite: true } },
  { name: "Guild Creation", tiers: { Free: false, Pro: false, Elite: true } },
  { name: "Priority Queue", tiers: { Free: false, Pro: true, Elite: true } },
  { name: "Legendary Loot", tiers: { Free: false, Pro: false, Elite: true } },
  { name: "Support", tiers: { Free: "Community", Pro: "Email", Elite: "Dedicated" } },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return (
      <span className={cn("retro text-[10px]", value ? "text-foreground" : "text-muted-foreground")}>
        {value ? "+" : "-"}
      </span>
    );
  }
  return <span className="text-xs">{value}</span>;
}

export default function Pricing3({
  title = "Compare Plans",
  description = "Side-by-side — pick your power level",
  tiers = defaultTiers,
  features = defaultFeatures,
  className,
}: Pricing3Props) {
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
              <p className="retro mx-auto max-w-xl text-muted-foreground text-[9px]">
                {description}
              </p>
            )}
          </div>
        )}

        <Card>
          {/* Header row with tier names + prices */}
          <CardHeader>
            <div className="grid grid-cols-4 gap-4">
              <div />
              {tiers.map((tier) => (
                <div className="text-center" key={tier.name}>
                  <CardTitle
                    className={cn(
                      "retro text-xs",
                      tier.highlighted && "text-primary",
                    )}
                  >
                    {tier.name}
                  </CardTitle>
                  <div className="retro mt-1 font-bold text-lg">{tier.price}</div>
                  {tier.highlighted && (
                    <Badge className="mt-1">RECOMMENDED</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardHeader>

          <Separator />

          {/* Feature rows */}
          <CardContent className="pt-4">
            <div className="flex flex-col">
              {features.map((feature, idx) => (
                <div key={feature.name}>
                  <div className="grid grid-cols-4 gap-4 py-3">
                    <span className="text-xs font-medium">{feature.name}</span>
                    {tiers.map((tier) => (
                      <div className="text-center" key={tier.name}>
                        <CellValue value={feature.tiers[tier.name] ?? false} />
                      </div>
                    ))}
                  </div>
                  {idx < features.length - 1 && (
                    <Separator />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              <div />
              {tiers.map((tier) => (
                <div className="text-center" key={tier.name}>
                  <Button
                    className="w-full"
                    size="sm"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
