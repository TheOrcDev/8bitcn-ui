import { Users } from "lucide-react";

import { ChartExample } from "@/components/ui/8bit/blocks/chart";
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
            <Users className="size-4 text-muted-foreground" />
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
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <ChartBarMultiple />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
