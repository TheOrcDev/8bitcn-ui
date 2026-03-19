import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";

import "@/components/ui/8bit/styles/retro.css";

export interface TimelineStep {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
}

interface Timeline1Props {
  className?: string;
  description?: string;
  steps?: TimelineStep[];
  title?: string;
}

const defaultSteps: TimelineStep[] = [
  {
    icon: "01",
    title: "Install",
    description: "One command. Components copied to your project. No runtime dependency.",
  },
  {
    icon: "02",
    title: "Customize",
    description: "Change colors, borders, fonts. Everything is yours to modify.",
    badge: "EASY",
  },
  {
    icon: "03",
    title: "Build",
    description: "Combine blocks into full pages. Hero, features, pricing — all ready.",
  },
  {
    icon: "04",
    title: "Ship",
    description: "Deploy your retro masterpiece. Watch the compliments roll in.",
  },
];

export default function Timeline1({
  title = "How It Works",
  description = "From zero to retro in four steps",
  steps = defaultSteps,
  className,
}: Timeline1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-2xl">
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-border" />

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <div className="relative flex gap-6" key={step.title}>
                {/* Step number */}
                <div className="retro relative z-10 flex size-14 shrink-0 items-center justify-center border-2 border-foreground bg-background text-xl font-bold">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex items-center gap-4">
                    <h3 className="retro font-bold text-sm">{step.title}</h3>
                    {step.badge && (
                      <Badge className="text-[9px]">{step.badge}</Badge>
                    )}
                  </div>
                  <p className="mt-1 text-muted-foreground retro text-[9px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
