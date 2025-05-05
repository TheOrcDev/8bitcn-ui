"use client"

import { Press_Start_2P } from "next/font/google"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/8bit/chart"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const description = "An area chart with axes"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartExample() {
  return (
    <ChartContainer
      config={chartConfig}
      className={`min-h-[200px] w-full ${pressStart.className}`}
    >
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <YAxis
          width={45}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickCount={3}
        />
        <Area
          dataKey="mobile"
          fill="var(--chart-2)"
          stroke="var(--chart-2)"
          stackId="a"
        />
        <Area
          dataKey="desktop"
          fill="var(--chart-1)"
          stroke="var(--chart-1)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
