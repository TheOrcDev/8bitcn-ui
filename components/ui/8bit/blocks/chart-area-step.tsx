"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/8bit/chart";

export const description = "A step area chart";

const chartData = [
  { month: "January", desktop: 99 },
  { month: "February", desktop: 204 },
  { month: "March", desktop: 180 },
  { month: "April", desktop: 120 },
  { month: "May", desktop: 180 },
  { month: "June", desktop: 42 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: Activity,
  },
} satisfies ChartConfig;

export default function ChartAreaStep() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Area
          dataKey="desktop"
          type="step"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
          activeDot={{
            fill: "var(--chart-active-dot)",
          }}
        />
      </AreaChart>
    </ChartContainer>
  );
}
