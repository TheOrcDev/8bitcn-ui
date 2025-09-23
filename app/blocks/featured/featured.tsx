import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import DashboardPage from "../../dashboard/page";
import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function FeaturedBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[600px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Complete 8-bit Dashboard
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/dashboard-01"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/dashboard-01"
            />
            <OpenInV0Button name="8bit-dashboard-01" className="w-fit" />
          </div>
        </div>

        <div className="w-full">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                8-bit Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px] border-0 rounded-b-lg overflow-x-hidden overflow-y-auto relative">
                <div className="scale-75 origin-top-left w-[133%] h-[133%] min-h-[800px]">
                  <DashboardPage />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
