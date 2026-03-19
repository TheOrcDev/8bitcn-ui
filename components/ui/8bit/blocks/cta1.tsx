import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import "@/components/ui/8bit/styles/retro.css";

export interface ComparisonRow {
  feature: string;
  theirs: string;
  yours: string;
}

interface CTA1Props {
  className?: string;
  description?: string;
  rows?: ComparisonRow[];
  theirsLabel?: string;
  title?: string;
  yoursLabel?: string;
}

const defaultRows: ComparisonRow[] = [
  { feature: "Setup Time", yours: "2 minutes", theirs: "2 hours" },
  { feature: "Customizable", yours: "+ Full source", theirs: "- Config only" },
  { feature: "Dependencies", yours: "0 runtime", theirs: "5+ packages" },
  { feature: "Dark Mode", yours: "+ Built-in", theirs: "- Manual" },
  { feature: "Pixel Borders", yours: "+ Obviously", theirs: "- Nope" },
  { feature: "Fun Factor", yours: "MAX", theirs: "Corporate" },
];

export default function CTA1({
  title = "Why Us?",
  description = "Side-by-side. No fluff.",
  yoursLabel = "8bitcn",
  theirsLabel = "Others",
  rows = defaultRows,
  className,
}: CTA1Props) {
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

        <Card>
          <CardHeader>
            <div className="grid grid-cols-3 gap-4">
              <CardTitle className="retro text-[10px] text-muted-foreground">
                FEATURE
              </CardTitle>
              <CardTitle className="retro text-center text-xs text-primary">
                {yoursLabel}
              </CardTitle>
              <CardTitle className="retro text-center text-xs text-muted-foreground">
                {theirsLabel}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col divide-y">
              {rows.map((row) => (
                <div className="grid grid-cols-3 gap-4 py-3" key={row.feature}>
                  <span className="text-xs font-medium">{row.feature}</span>
                  <span className="retro text-center text-[10px]">
                    {row.yours}
                  </span>
                  <span className="retro text-center text-[10px] text-muted-foreground">
                    {row.theirs}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
