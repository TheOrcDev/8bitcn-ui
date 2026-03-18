import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface FAQItem {
  answer: string;
  question: string;
}

interface FAQ2Props {
  className?: string;
  description?: string;
  items?: FAQItem[];
  title?: string;
}

const defaultItems: FAQItem[] = [
  {
    question: "What do I get?",
    answer: "50+ retro-styled components, blocks, and a full registry. Copy, paste, ship.",
  },
  {
    question: "Is it free?",
    answer: "The core library is 100% open source. Premium blocks and themes coming soon.",
  },
  {
    question: "What frameworks?",
    answer: "Built for React and Next.js. Works with any project that uses shadcn/ui.",
  },
  {
    question: "How do I install?",
    answer: "Run the shadcn CLI: pnpm dlx shadcn@latest add @8bitcn/button. That's it.",
  },
  {
    question: "Can I customize?",
    answer: "Everything is yours. Copy the source, change the colors, modify the borders. No lock-in.",
  },
  {
    question: "Need help?",
    answer: "Join our Discord or open a GitHub issue. The community is active and friendly.",
  },
];

export default function FAQ2({
  title = "Quick Answers",
  description = "No scrolling through walls of text",
  items = defaultItems,
  className,
}: FAQ2Props) {
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
              <p className="mx-auto max-w-xl text-muted-foreground text-xs">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.question}>
              <CardHeader className="pb-2">
                <CardTitle className="retro text-xs">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
