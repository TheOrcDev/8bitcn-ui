"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/8bit/carousel";

import "@/components/ui/8bit/styles/retro.css";

export interface Review {
  badge?: string;
  name: string;
  quote: string;
  rating: number;
  role: string;
}

interface SocialProof3Props {
  className?: string;
  description?: string;
  items?: Review[];
  title?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="retro text-[10px]">
      {"[*]".repeat(rating)}
      {"[.]".repeat(5 - rating)}
    </span>
  );
}

const defaultItems: Review[] = [
  {
    name: "SwordSmith",
    role: "Founder",
    quote: "Replaced our entire component library in a weekend. Customers love the retro feel.",
    rating: 5,
  },
  {
    name: "ArcadePro",
    role: "Frontend Dev",
    quote: "The carousel and accordion components are rock solid. Zero accessibility issues.",
    rating: 5,
    badge: "POWER USER",
  },
  {
    name: "NeonByte",
    role: "Solo Dev",
    quote: "I was skeptical about pixel borders in production. My bounce rate dropped 40%.",
    rating: 4,
  },
  {
    name: "QuestRunner",
    role: "Agency Owner",
    quote: "We use this for all our gaming clients. Saves us weeks of custom work.",
    rating: 5,
  },
  {
    name: "GlitchHero",
    role: "Open Source",
    quote: "Great DX. The docs are clear and components just work. Contributed my first PR in 10 minutes.",
    rating: 5,
    badge: "CONTRIBUTOR",
  },
];

export default function SocialProof3({
  title = "Player Reviews",
  description = "Real feedback from the community",
  items = defaultItems,
  className,
}: SocialProof3Props) {
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

        <Carousel
          className="mx-auto w-full max-w-3xl"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                className="sm:basis-1/2"
                key={item.name}
              >
                <div className="h-full p-2">
                  <Card className="relative h-full">
                    {item.badge && (
                      <div className="absolute top-2 right-4 z-10">
                        <Badge className="text-[9px]">{item.badge}</Badge>
                      </div>
                    )}
                    <CardContent className="flex h-full flex-col pt-6">
                      <StarRating rating={item.rating} />
                      <p className="mt-3 flex-1 text-xs leading-relaxed">
                        &quot;{item.quote}&quot;
                      </p>
                      <div className="mt-4">
                        <span className="retro font-bold text-[10px]">
                          {item.name}
                        </span>
                        <span className="retro text-muted-foreground text-[10px]">
                          {" "}/ {item.role}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
