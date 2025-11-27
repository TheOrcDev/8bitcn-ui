"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/8bit/chart";

export const description = "An area chart with axes";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartExample() {
  return (
    <ChartContainer
      className={`min-h-[200px] w-full ${"retro"}`}
      config={chartConfig}
    >
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <XAxis
          axisLine={false}
          dataKey="month"
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <YAxis
          axisLine={false}
          tickCount={3}
          tickLine={false}
          tickMargin={8}
          width={47}
        />
        <Area
          dataKey="mobile"
          fill="var(--chart-2)"
          stackId="a"
          stroke="var(--chart-2)"
        />
        <Area
          dataKey="desktop"
          fill="var(--chart-1)"
          stackId="a"
          stroke="var(--chart-1)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
