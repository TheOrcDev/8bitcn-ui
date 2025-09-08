import CopyCommandButton from "@/app/docs/components/copy-command-button";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

import LeaderboardBlock from "./leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[600px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Leaderboard Component
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/leaderboard"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/leaderboard"
            />
            <OpenInV0Button name="8bit-leaderboard" className="w-fit" />
          </div>
        </div>

        <LeaderboardBlock />
      </div>
    </div>
  );
}
