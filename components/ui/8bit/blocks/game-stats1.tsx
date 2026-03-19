import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface MatchStat {
  label: string;
  value: string;
}

interface GameStats1Props {
  className?: string;
  description?: string;
  stats?: MatchStat[];
  title?: string;
}

const defaultStats: MatchStat[] = [
  { value: "1,700+", label: "STARS" },
  { value: "50+", label: "COMPONENTS" },
  { value: "37", label: "BLOCKS" },
  { value: "100+", label: "CONTRIBUTORS" },
  { value: "10K+", label: "DOWNLOADS" },
  { value: "0", label: "RUNTIME DEPS" },
];

export default function GameStats1({
  title = "Match Complete",
  description = "End-of-round stats",
  stats = defaultStats,
  className,
}: GameStats1Props) {
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
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
        )}

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {stats.map((stat, idx) => (
                <div className="text-center" key={stat.label}>
                  <div className="retro mb-1 font-bold text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="retro text-muted-foreground text-[10px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
