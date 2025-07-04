import GameOver from "@/components/ui/8bit/blocks/game-over";
import MainMenu from "@/components/ui/8bit/blocks/main-menu";

import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function GamingBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">A main menu</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-main-menu"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-main-menu.json`}
            />
            <OpenInV0Button name="8bit-main-menu" className="w-fit" />
          </div>
        </div>

        <MainMenu />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A game over screen
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-game-over"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-game-over.json`}
            />
            <OpenInV0Button name="8bit-game-over" className="w-fit" />
          </div>
        </div>

        <GameOver className="w-full md:w-[600px] mx-auto" />
      </div>
    </div>
  );
}
