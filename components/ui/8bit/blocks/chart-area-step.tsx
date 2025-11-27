"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
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
        data={chartData}
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          content={<ChartTooltipContent hideLabel />}
          cursor={false}
        />
        <Area
          activeDot={{
            fill: "var(--chart-active-dot)",
          }}
          dataKey="desktop"
          fill="var(--color-desktop)"
          stroke="var(--color-desktop)"
          type="step"
        />
      </AreaChart>
    </ChartContainer>
  );
}
