"use client";

import { useState } from "react";

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

export interface PricingPlan {
  badge?: string;
  cta: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  monthlyPrice: string;
  name: string;
  yearlyPrice: string;
}

interface Pricing2Props {
  className?: string;
  description?: string;
  plans?: PricingPlan[];
  title?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Try the basics. No gold required.",
    cta: "PLAY FREE",
    features: ["5 battles/day", "1 save slot", "Basic weapons"],
  },
  {
    name: "Pro",
    monthlyPrice: "$12",
    yearlyPrice: "$99",
    description: "The full arsenal. Most popular.",
    cta: "UPGRADE",
    badge: "BEST VALUE",
    highlighted: true,
    features: [
      "Unlimited battles",
      "10 save slots",
      "Rare weapons",
      "Custom skins",
      "Priority servers",
    ],
  },
  {
    name: "Guild",
    monthlyPrice: "$39",
    yearlyPrice: "$349",
    description: "For teams and clans.",
    cta: "FORM GUILD",
    features: [
      "Everything in Pro",
      "Unlimited save slots",
      "Legendary weapons",
      "Guild hall",
      "Dedicated server",
      "Custom branding",
    ],
  },
];

export default function Pricing2({
  title = "Level Up Your Plan",
  description = "Monthly or yearly — your call, adventurer",
  plans = defaultPlans,
  className,
}: Pricing2Props) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-5xl">
        {(title || description) && (
          <div className="mb-6 text-center">
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

        {/* Toggle */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <Button
            onClick={() => setYearly(false)}
            size="sm"
            variant={yearly ? "outline" : "default"}
          >
            MONTHLY
          </Button>
          <Button
            onClick={() => setYearly(true)}
            size="sm"
            variant={yearly ? "default" : "outline"}
          >
            YEARLY
          </Button>
          {yearly && (
            <Badge variant="secondary">SAVE 30%</Badge>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              className={cn(
                "relative flex flex-col",
                plan.highlighted && "border-primary",
              )}
              key={plan.name}
            >
              {plan.badge && (
                <div className="absolute -top-2 right-4 z-10">
                  <Badge>{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="retro text-sm">{plan.name}</CardTitle>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="retro font-bold text-3xl">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {yearly ? "/yr" : "/mo"}
                  </span>
                </div>
                <CardDescription className="mt-2 text-xs">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className="flex flex-1 flex-col pt-4">
                <ul className="mb-6 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li className="flex items-center gap-2 text-xs" key={feature}>
                      <span className="retro text-[10px]">[+]</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
