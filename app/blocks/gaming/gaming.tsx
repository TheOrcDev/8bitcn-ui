import ChapterIntro from "@/components/ui/8bit/blocks/chapter-intro";
import Dialogue from "@/components/ui/8bit/blocks/dialogue";
import DifficultySelect from "@/components/ui/8bit/blocks/difficulty-select";
import GameOver from "@/components/ui/8bit/blocks/game-over";
import MainMenu from "@/components/ui/8bit/blocks/main-menu";
import PauseMenu from "@/components/ui/8bit/blocks/pause-menu";
import EnemyHealthDisplay from "@/components/ui/8bit/enemy-health-display";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";

import AudioSettings from "../../../components/ui/8bit/blocks/audio-settings";
import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function GamingBlocks() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Chapter intro
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/chapter-intro"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/chapter-intro"
            />
            <OpenInV0Button name="8bit-chapter-intro" className="w-fit" />
          </div>
        </div>

        <ChapterIntro
          className="w-full md:w-[800px] mx-auto text-white"
          title="LEVEL 1: FIERY SKELETONS"
          subtitle="Defeat the skeletons to unlock the gate."
          backgroundSrc="/images/fiery-skeletons.png"
          height="md"
          align="center"
          darken={0.5}
        />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Main menu</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/main-menu"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/main-menu"
            />
            <OpenInV0Button name="8bit-main-menu" className="w-fit" />
          </div>
        </div>

        <MainMenu className="md:w-[400px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Difficulty select
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/difficulty-select"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/difficulty-select"
            />
            <OpenInV0Button name="8bit-difficulty-select" className="w-fit" />
          </div>
        </div>

        <DifficultySelect className="md:w-[400px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Dialogue</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/dialogue"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/dialogue"
            />
            <OpenInV0Button name="8bit-dialogue" className="w-fit" />
          </div>
        </div>

        <div className="py-14 flex flex-col gap-4 md:w-[600px] mx-auto">
          <Dialogue
            avatarSrc="/images/pixelized-8bitcnorc.jpg"
            avatarFallback="Orc"
            title="Orc"
            description="I bring you a gift… it's called AXE TO THE FACE! SLASH!!"
          />

          <div className="flex justify-end">
            <Dialogue
              avatarSrc="/images/goblin.png"
              avatarFallback="Goblin"
              title="Goblin"
              description="`Screeches like a dying flute`"
              player={false}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Pause menu</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/pause-menu"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/pause-menu"
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
              command="pnpm dlx shadcn@latest add @8bitcn/game-over"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/game-over"
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
              command="pnpm dlx shadcn@latest add @8bitcn/audio-settings"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/audio-settings"
            />
            <OpenInV0Button name="8bit-audio-settings" className="w-fit" />
          </div>
        </div>

        <AudioSettings className="w-full md:w-[600px] mx-auto" />
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[200px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Health bar</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/health-bar"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/health-bar"
            />
            <OpenInV0Button name="8bit-health-bar" className="w-fit" />
          </div>
        </div>

        <div className="py-14 flex flex-col gap-4 items-center">
          <p className="text-sm text-muted-foreground text-center">Default</p>
          <HealthBar className="w-full md:w-[600px] mx-auto" value={20} />

          <p className="text-sm text-muted-foreground text-center">Retro</p>
          <HealthBar
            className="w-full md:w-[600px] mx-auto"
            variant="retro"
            value={85}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[200px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">Mana bar</h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/mana-bar"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/mana-bar"
            />
            <OpenInV0Button name="8bit-mana-bar" className="w-fit" />
          </div>
        </div>

        <div className="py-14 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground text-center">Default</p>
          <ManaBar className="w-full md:w-[600px] mx-auto" value={80} />

          <p className="text-sm text-muted-foreground text-center">Retro</p>
          <ManaBar
            className="w-full md:w-[600px] mx-auto"
            variant="retro"
            value={70}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Enemy Health Display
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="pnpm dlx shadcn@latest add @8bitcn/enemy-health-display"
              copyCommand="pnpm dlx shadcn@latest add @8bitcn/enemy-health-display"
            />
            <OpenInV0Button
              name="8bit-enemy-health-display"
              className="w-fit"
            />
          </div>
        </div>

        <div className="py-14 flex flex-col gap-6 items-center">
          <div className="w-full md:w-[600px] space-y-10">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Boss Enemy (High Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Fire Dragon"
                level={25}
                currentHealth={850}
                maxHealth={1000}
                healthBarVariant="retro"
                healthBarColor="bg-red-500"
                enemyNameColor="text-red-500"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Regular Enemy (Low Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Goblin Warrior"
                level={5}
                currentHealth={45}
                maxHealth={100}
                healthBarVariant="retro"
                healthBarColor="bg-orange-500"
                enemyNameColor="text-green-500"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Elite Enemy (Critical Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Dark Knight"
                level={15}
                currentHealth={12}
                maxHealth={200}
                healthBarVariant="retro"
                healthBarColor="bg-purple-500"
                enemyNameColor="text-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
