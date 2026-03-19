import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";

import "@/components/ui/8bit/styles/retro.css";

export interface Checkpoint {
  answer: string;
  question: string;
  status: "cleared" | "current" | "locked";
}

interface GameFAQ1Props {
  className?: string;
  description?: string;
  items?: Checkpoint[];
  title?: string;
}

const statusConfig = {
  cleared: { icon: "+", badge: "CLEARED", variant: "default" as const },
  current: { icon: ">>", badge: "ACTIVE", variant: "secondary" as const },
  locked: { icon: "--", badge: "LOCKED", variant: "secondary" as const },
};

const defaultItems: Checkpoint[] = [
  {
    question: "What is 8bitcn?",
    answer: "A retro-styled component library for React. Think shadcn/ui but everything looks like it came from a 1985 arcade cabinet.",
    status: "cleared",
  },
  {
    question: "How do I install components?",
    answer: "Use the shadcn CLI: pnpm dlx shadcn@latest add @8bitcn/button. Components are copied into your project — no runtime dependency.",
    status: "cleared",
  },
  {
    question: "Does it work with existing shadcn?",
    answer: "Yes. 8bitcn wraps shadcn components. Your existing setup stays intact. Just add the retro layer on top.",
    status: "current",
  },
  {
    question: "Is it production ready?",
    answer: "Every component is accessible, responsive, and tested. The pixel borders are decorative — the engineering is serious.",
    status: "current",
  },
  {
    question: "What about templates?",
    answer: "Full landing page templates are on the roadmap. For now, combine blocks to build pages in minutes.",
    status: "locked",
  },
  {
    question: "When is the icon pack coming?",
    answer: "The native 8-bit pixel icon library is planned. Follow the roadmap for updates.",
    status: "locked",
  },
];

export default function GameFAQ1({
  title = "Checkpoints",
  description = "Clear each checkpoint to proceed",
  items = defaultItems,
  className,
}: GameFAQ1Props) {
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
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
        )}

        <Accordion collapsible type="single">
          {items.map((item, idx) => {
            const config = statusConfig[item.status];
            const isLocked = item.status === "locked";

            return (
              <AccordionItem
                className={cn(isLocked && "opacity-50")}
                key={item.question}
                value={`checkpoint-${idx}`}
              >
                <AccordionTrigger className="retro text-left text-xs">
                  <div className="flex items-center gap-3">
                    <span className="retro shrink-0 font-bold text-[10px]">
                      {config.icon}
                    </span>
                    <span className="flex-1">{item.question}</span>
                    <Badge variant={config.variant}>{config.badge}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
