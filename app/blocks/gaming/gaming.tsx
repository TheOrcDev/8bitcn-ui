import DialogueBox from "@/components/ui/8bit/blocks/dialogue-box";
import GameOver from "@/components/ui/8bit/blocks/game-over";
import HealthBar from "@/components/ui/8bit/blocks/health-bar";
import MainMenu from "@/components/ui/8bit/blocks/main-menu";
import PauseMenu from "@/components/ui/8bit/blocks/pause-menu";

import AudioSettings from "../../../components/ui/8bit/blocks/audio-settings";
import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function GamingBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Main menu</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-main-menu"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-main-menu.json`}
            />
            <OpenInV0Button name="8bit-main-menu" className="w-fit" />
          </div>
        </div>

        <MainMenu className="md:w-[400px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Pause menu</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-pause-menu"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-pause-menu.json`}
            />
            <OpenInV0Button name="8bit-pause-menu" className="w-fit" />
          </div>
        </div>

        <PauseMenu className="md:w-[400px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Game over</h2>

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

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Audio settings
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-audio-settings"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-audio-settings.json`}
            />
            <OpenInV0Button name="8bit-audio-settings" className="w-fit" />
          </div>
        </div>

        <AudioSettings className="w-full md:w-[600px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[250px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Dialogue box
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-dialogue-box"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-dialogue-box.json`}
            />
            <OpenInV0Button name="8bit-dialogue-box" className="w-fit" />
          </div>
        </div>

        <div className="py-14">
          <DialogueBox className="w-full md:w-[600px] mx-auto" />
        </div>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[200px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Health bar</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-health-bar"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-health-bar.json`}
            />
            <OpenInV0Button name="8bit-health-bar" className="w-fit" />
          </div>
        </div>

        <div className="py-14">
          <HealthBar className="w-full md:w-[600px] mx-auto" />
        </div>
      </div>
    </div>
  );
}
