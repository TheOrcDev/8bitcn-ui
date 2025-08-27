import { ChartExample } from "@/components/ui/8bit/blocks/chart";
import ChartAreaStep from "@/components/ui/8bit/blocks/chart-area-step";
import ChartBarMultiple from "@/components/ui/8bit/blocks/chart-bar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function ChartsBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple bar chart
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-chart"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-chart.json`}
            />
            <OpenInV0Button name="8bit-chart" className="w-fit" />
          </div>
        </div>

        <Card className="w-full md:w-[600px] mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total visitors in the last 6 months
            </CardTitle>
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              className="size-6"
              aria-label="user"
            >
              <rect x="64" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="80" width="14" height="14" rx="1"></rect>
              <rect x="144" y="80" width="14" height="14" rx="1"></rect>
              <rect x="192" y="192" width="14" height="14" rx="1"></rect>
              <rect x="176" y="192" width="14" height="14" rx="1"></rect>
              <rect x="64" y="192" width="14" height="14" rx="1"></rect>
              <rect x="48" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="192" width="14" height="14" rx="1"></rect>
              <rect x="192" y="160" width="14" height="14" rx="1"></rect>
              <rect x="176" y="144" width="14" height="14" rx="1"></rect>
              <rect x="192" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="160" width="14" height="14" rx="1"></rect>
              <rect x="96" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="48" width="14" height="14" rx="1"></rect>
              <rect x="128" y="48" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="96" width="14" height="14" rx="1"></rect>
              <rect x="128" y="96" width="14" height="14" rx="1"></rect>
              <rect x="80" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="144" width="14" height="14" rx="1"></rect>
              <rect x="112" y="144" width="14" height="14" rx="1"></rect>
              <rect x="128" y="144" width="14" height="14" rx="1"></rect>
              <rect x="144" y="144" width="14" height="14" rx="1"></rect>
              <rect x="160" y="144" width="14" height="14" rx="1"></rect>
              <rect x="80" y="192" width="14" height="14" rx="1"></rect>
              <rect x="96" y="192" width="14" height="14" rx="1"></rect>
              <rect x="112" y="192" width="14" height="14" rx="1"></rect>
              <rect x="128" y="192" width="14" height="14" rx="1"></rect>
              <rect x="144" y="192" width="14" height="14" rx="1"></rect>
              <rect x="160" y="192" width="14" height="14" rx="1"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <ChartExample />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A multiple bar chart
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-chart-bar"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-chart-bar.json`}
            />
            <OpenInV0Button name="8bit-chart-bar" className="w-fit" />
          </div>
        </div>

        <Card className="w-full md:w-[600px] mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total visitors in the last 6 months
            </CardTitle>
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              className="size-6"
              aria-label="user"
            >
              <rect x="64" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="80" width="14" height="14" rx="1"></rect>
              <rect x="144" y="80" width="14" height="14" rx="1"></rect>
              <rect x="192" y="192" width="14" height="14" rx="1"></rect>
              <rect x="176" y="192" width="14" height="14" rx="1"></rect>
              <rect x="64" y="192" width="14" height="14" rx="1"></rect>
              <rect x="48" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="192" width="14" height="14" rx="1"></rect>
              <rect x="192" y="160" width="14" height="14" rx="1"></rect>
              <rect x="176" y="144" width="14" height="14" rx="1"></rect>
              <rect x="192" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="160" width="14" height="14" rx="1"></rect>
              <rect x="96" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="48" width="14" height="14" rx="1"></rect>
              <rect x="128" y="48" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="96" width="14" height="14" rx="1"></rect>
              <rect x="128" y="96" width="14" height="14" rx="1"></rect>
              <rect x="80" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="144" width="14" height="14" rx="1"></rect>
              <rect x="112" y="144" width="14" height="14" rx="1"></rect>
              <rect x="128" y="144" width="14" height="14" rx="1"></rect>
              <rect x="144" y="144" width="14" height="14" rx="1"></rect>
              <rect x="160" y="144" width="14" height="14" rx="1"></rect>
              <rect x="80" y="192" width="14" height="14" rx="1"></rect>
              <rect x="96" y="192" width="14" height="14" rx="1"></rect>
              <rect x="112" y="192" width="14" height="14" rx="1"></rect>
              <rect x="128" y="192" width="14" height="14" rx="1"></rect>
              <rect x="144" y="192" width="14" height="14" rx="1"></rect>
              <rect x="160" y="192" width="14" height="14" rx="1"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <ChartBarMultiple />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A step area chart
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-chart-area-step"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-chart-area-step.json`}
            />
            <OpenInV0Button name="8bit-chart-area-step" className="w-fit" />
          </div>
        </div>

        <Card className="w-full md:w-[600px] mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total visitors in the last 6 months
            </CardTitle>
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              className="size-6"
              aria-label="user"
            >
              <rect x="64" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="80" width="14" height="14" rx="1"></rect>
              <rect x="144" y="80" width="14" height="14" rx="1"></rect>
              <rect x="192" y="192" width="14" height="14" rx="1"></rect>
              <rect x="176" y="192" width="14" height="14" rx="1"></rect>
              <rect x="64" y="192" width="14" height="14" rx="1"></rect>
              <rect x="48" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="192" width="14" height="14" rx="1"></rect>
              <rect x="192" y="160" width="14" height="14" rx="1"></rect>
              <rect x="176" y="144" width="14" height="14" rx="1"></rect>
              <rect x="192" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="160" width="14" height="14" rx="1"></rect>
              <rect x="96" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="48" width="14" height="14" rx="1"></rect>
              <rect x="128" y="48" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="96" width="14" height="14" rx="1"></rect>
              <rect x="128" y="96" width="14" height="14" rx="1"></rect>
              <rect x="80" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="144" width="14" height="14" rx="1"></rect>
              <rect x="112" y="144" width="14" height="14" rx="1"></rect>
              <rect x="128" y="144" width="14" height="14" rx="1"></rect>
              <rect x="144" y="144" width="14" height="14" rx="1"></rect>
              <rect x="160" y="144" width="14" height="14" rx="1"></rect>
              <rect x="80" y="192" width="14" height="14" rx="1"></rect>
              <rect x="96" y="192" width="14" height="14" rx="1"></rect>
              <rect x="112" y="192" width="14" height="14" rx="1"></rect>
              <rect x="128" y="192" width="14" height="14" rx="1"></rect>
              <rect x="144" y="192" width="14" height="14" rx="1"></rect>
              <rect x="160" y="192" width="14" height="14" rx="1"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <ChartAreaStep />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
