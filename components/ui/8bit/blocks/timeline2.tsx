import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/components/ui/8bit/styles/retro.css";

export interface TimelineStep {
  description: string;
  icon: ReactNode;
  title: string;
}

interface Timeline2Props {
  className?: string;
  description?: string;
  steps?: TimelineStep[];
  title?: string;
}

const defaultSteps: TimelineStep[] = [
  {
    icon: "I",
    title: "Design",
    description: "Plan your layout and pick your blocks.",
  },
  {
    icon: "II",
    title: "Develop",
    description: "Install components and wire them up.",
  },
  {
    icon: "III",
    title: "Test",
    description: "Check responsiveness and dark mode.",
  },
  {
    icon: "IV",
    title: "Deploy",
    description: "Push to production. Game over (in a good way).",
  },
];

export default function Timeline2({
  title = "The Quest Line",
  description = "Your path from idea to launch",
  steps = defaultSteps,
  className,
}: Timeline2Props) {
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

        {/* Horizontal on desktop, vertical on mobile */}
        <div className="relative flex flex-col gap-8 md:flex-row md:gap-0">
          {/* Horizontal line (desktop) */}
          <div className="absolute top-7 right-0 left-0 hidden h-0 border-t-2 border-dashed border-border md:block" />

          {steps.map((step, idx) => (
            <div
              className="relative flex flex-1 flex-col items-center text-center"
              key={step.title}
            >
              {/* Checkpoint */}
              <div className="retro relative z-10 mb-4 flex size-14 items-center justify-center border-2 border-primary bg-background font-bold">
                {step.icon}
              </div>

              <h3 className="retro mb-1 font-bold text-xs">{step.title}</h3>
              <p className="max-w-[160px] text-muted-foreground text-[10px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
