import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Progress } from "@/components/ui/8bit/progress";

import "@/components/ui/8bit/styles/retro.css";

export interface MetricCard {
  badge?: string;
  change?: string;
  icon: ReactNode;
  progress?: number;
  title: string;
  value: string;
}

interface Advanced2Props {
  className?: string;
  description?: string;
  metrics?: MetricCard[];
  title?: string;
}

const defaultMetrics: MetricCard[] = [
  {
    icon: "HP",
    title: "Active Players",
    value: "12,847",
    change: "+23% this week",
    progress: 78,
  },
  {
    icon: "XP",
    title: "Total XP Earned",
    value: "4.2M",
    change: "+180K today",
    badge: "RECORD",
  },
  {
    icon: "GP",
    title: "Gold Collected",
    value: "891K",
    change: "+12% this month",
    progress: 45,
  },
  {
    icon: "LV",
    title: "Avg Player Level",
    value: "34",
    change: "+2 this week",
    progress: 68,
  },
];

export default function Advanced2({
  title = "Stats Dashboard",
  description = "Real-time metrics from the battlefield",
  metrics = defaultMetrics,
  className,
}: Advanced2Props) {
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

        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((metric) => (
            <Card className="relative" key={metric.title}>
              {metric.badge && (
                <div className="absolute -top-2 right-4 z-10">
                  <Badge>{metric.badge}</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xs text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <span className="retro font-bold text-sm">{metric.icon}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="retro mb-1 font-bold text-2xl">
                  {metric.value}
                </div>
                {metric.change && (
                  <p className="retro mb-2 text-muted-foreground text-[10px]">
                    {metric.change}
                  </p>
                )}
                {metric.progress !== undefined && (
                  <Progress className="h-2" value={metric.progress} />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
