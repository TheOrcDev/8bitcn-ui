"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";
import { Input } from "@/components/ui/8bit/input";

import "@/components/ui/8bit/styles/retro.css";

export interface FAQItem {
  answer: string;
  category?: string;
  question: string;
}

interface FAQ3Props {
  className?: string;
  description?: string;
  items?: FAQItem[];
  title?: string;
}

const defaultItems: FAQItem[] = [
  {
    category: "General",
    question: "What is 8bitcn?",
    answer:
      "A retro-styled component library for React. Think shadcn/ui but everything looks like it came from a 1985 arcade cabinet.",
  },
  {
    category: "General",
    question: "Is this production ready?",
    answer:
      "Yes. Every component is accessible, responsive, and tested. The pixel borders are decorative — the engineering is serious.",
  },
  {
    category: "Setup",
    question: "How do I install components?",
    answer:
      "Use the shadcn CLI: pnpm dlx shadcn@latest add @8bitcn/button. Components are copied into your project — no runtime dependency.",
  },
  {
    category: "Setup",
    question: "Does it work with existing shadcn?",
    answer:
      "Absolutely. 8bitcn wraps shadcn components. Your existing setup stays intact. Just add the retro layer on top.",
  },
  {
    category: "Billing",
    question: "Is the library free?",
    answer:
      "The core library is MIT licensed and free forever. Premium blocks and templates will be available separately.",
  },
  {
    category: "Billing",
    question: "Do you offer team licenses?",
    answer:
      "Not yet, but it's on the roadmap. For now, one purchase covers your entire team since components are copy-pasted.",
  },
];

export default function FAQ3({
  title = "Help Center",
  description = "Search or browse common questions",
  items = defaultItems,
  className,
}: FAQ3Props) {
  const [search, setSearch] = useState("");

  const filtered = search
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase()),
      )
    : items;

  const categories = [...new Set(filtered.map((item) => item.category).filter(Boolean))];

  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-2xl">
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

        {/* Search */}
        <div className="mb-8">
          <Input
            className="retro text-xs"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            type="search"
            value={search}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="retro py-8 text-center text-muted-foreground text-xs">
            No results found. Try a different search.
          </p>
        ) : categories.length > 0 ? (
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="retro mb-3 text-muted-foreground text-[10px] uppercase tracking-widest">
                  {category}
                </h3>
                <Accordion collapsible type="single">
                  {filtered
                    .filter((item) => item.category === category)
                    .map((item, idx) => (
                      <AccordionItem
                        key={item.question}
                        value={`${category}-${idx}`}
                      >
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
            ))}
          </div>
        ) : (
          <Accordion collapsible type="single">
            {filtered.map((item, idx) => (
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
        )}
      </div>
    </section>
  );
}
