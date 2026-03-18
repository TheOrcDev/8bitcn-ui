import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";

import "@/components/ui/8bit/styles/retro.css";

export interface FAQItem {
  answer: string;
  question: string;
}

interface FAQ1Props {
  className?: string;
  description?: string;
  items?: FAQItem[];
  title?: string;
}

const defaultItems: FAQItem[] = [
  {
    question: "What platforms do you support?",
    answer:
      "We support all major platforms: Windows, macOS, Linux, and even your grandma's old CRT monitor. If it has pixels, we got you.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "Yes! The Squire tier is completely free. You get 3 dungeon runs per day, basic gear, and access to community chat. No credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. No contracts, no exit fees, no guilt trips. Cancel from your settings page and your subscription ends at the billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee. If the game isn't for you, just reach out and we'll refund your gold — no questions asked.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      "Head to Settings and pick a new tier. The upgrade takes effect immediately and we'll prorate the difference. No downtime, no lost progress.",
  },
];

export default function FAQ1({
  title = "Frequently Asked Questions",
  description = "Got questions? We've got answers.",
  items = defaultItems,
  className,
}: FAQ1Props) {
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
              <p className="mx-auto max-w-xl text-muted-foreground text-xs">
                {description}
              </p>
            )}
          </div>
        )}

        <Accordion type="single" collapsible>
          {items.map((item, idx) => (
            <AccordionItem key={item.question} value={`faq-${idx}`}>
              <AccordionTrigger className="retro text-left text-xs">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
