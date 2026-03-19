import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface Testimonial {
  badge?: string;
  name: string;
  quote: string;
  role: string;
}

interface SocialProof2Props {
  className?: string;
  description?: string;
  items?: Testimonial[];
  title?: string;
}

const defaultItems: Testimonial[] = [
  {
    name: "PixelKnight",
    role: "Indie Dev",
    quote:
      "Shipped my landing page in 2 hours. The retro vibe got me 3x more signups than my boring old design.",
    badge: "TOP PLAYER",
  },
  {
    name: "CodeMage42",
    role: "Full-Stack Dev",
    quote:
      "Finally a component library that doesn't look like every other SaaS. My users actually comment on the design now.",
  },
  {
    name: "DungeonMaster",
    role: "Game Dev",
    quote:
      "Used the blocks for our game's website. Feels native to the product. 10/10 would loot again.",
  },
  {
    name: "RetroRogue",
    role: "Designer",
    quote:
      "The attention to detail on those pixel borders is chef's kiss. Dark mode is flawless.",
    badge: "VERIFIED",
  },
];

export default function SocialProof2({
  title = "Wall of Fame",
  description = "What the guild is saying",
  items = defaultItems,
  className,
}: SocialProof2Props) {
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
              <p className="retro text-muted-foreground text-[9px]">{description}</p>
            )}
          </div>
        )}

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
          {items.map((item) => (
            <Card className="relative" key={item.name}>
              {item.badge && (
                <div className="absolute top-2 right-4 z-10">
                  <Badge className="text-[9px]">{item.badge}</Badge>
                </div>
              )}
              <CardContent className="pt-6">
                <p className="mb-4 retro text-[9px] leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <div>
                  <span className="retro font-bold text-[10px]">
                    {item.name}
                  </span>
                  <span className="retro text-muted-foreground text-[10px]">
                    {" "}
                    / {item.role}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
