import CopyCommandButton from "@/app/docs/components/copy-command-button";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

import StatusEffectsBlock from "./status-effects";

export default function StatusEffectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[600px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Status Effect Indicator Component
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/status-effect-indicator"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/status-effect-indicator"
            />
            <OpenInV0Button name="8bit-status-effects" className="w-fit" />
          </div>
        </div>
        <StatusEffectsBlock />
      </div>
    </div>
  );
}