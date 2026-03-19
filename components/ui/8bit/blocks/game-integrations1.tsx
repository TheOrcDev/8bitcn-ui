import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";

import "@/components/ui/8bit/styles/retro.css";

export interface InventorySlot {
  empty?: boolean;
  label: string;
  rarity?: "common" | "epic" | "legendary" | "rare";
  symbol: ReactNode;
}

interface GameIntegrations1Props {
  className?: string;
  description?: string;
  slots?: InventorySlot[];
  title?: string;
}

const rarityBorder: Record<string, string> = {
  common: "border-muted-foreground/30",
  rare: "border-blue-500",
  epic: "border-purple-500",
  legendary: "border-amber-500",
};

const defaultSlots: InventorySlot[] = [
  { symbol: "Nx", label: "Next.js", rarity: "legendary" },
  { symbol: "Re", label: "React", rarity: "legendary" },
  { symbol: "Ts", label: "TypeScript", rarity: "epic" },
  { symbol: "Tw", label: "Tailwind", rarity: "epic" },
  { symbol: "Sh", label: "shadcn", rarity: "rare" },
  { symbol: "Rd", label: "Radix", rarity: "rare" },
  { symbol: "Vc", label: "Vercel", rarity: "rare" },
  { symbol: "Gt", label: "GitHub", rarity: "common" },
  { symbol: "Pm", label: "pnpm", rarity: "common" },
  { symbol: "Bm", label: "Biome", rarity: "common" },
  { symbol: "Em", label: "Embla", rarity: "common" },
  { symbol: "--", label: "Empty", empty: true },
];

export default function GameIntegrations1({
  title = "Inventory",
  description = "Your equipped tools and integrations",
  slots = defaultSlots,
  className,
}: GameIntegrations1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="retro text-muted-foreground text-[9px]">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {slots.map((slot) => (
            <div
              className={cn(
                "flex flex-col items-center gap-2 border-2 bg-card p-3 text-center transition-all",
                slot.empty
                  ? "border-dashed border-muted-foreground/20"
                  : rarityBorder[slot.rarity ?? "common"],
              )}
              key={slot.label}
            >
              <div
                className={cn(
                  "retro font-bold text-lg",
                  slot.empty && "text-muted-foreground/20",
                )}
              >
                {slot.symbol}
              </div>
              <span
                className={cn(
                  "retro text-[10px]",
                  slot.empty
                    ? "text-muted-foreground/20"
                    : "text-muted-foreground",
                )}
              >
                {slot.label}
              </span>
              {!slot.empty && slot.rarity && (
                <Badge variant="secondary">
                  {slot.rarity.toUpperCase()}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
