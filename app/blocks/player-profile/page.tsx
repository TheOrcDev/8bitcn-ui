import PlayerProfileCard from "@/components/ui/8bit/blocks/player-profile-card";

import CopyCommandButton from "../../docs/components/copy-command-button";
import { OpenInV0Button } from "../../docs/components/open-in-v0-button";

export default function PlayerProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Player Profile Card
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <CopyCommandButton
                command="pnpm dlx shadcn@latest add @8bitcn/player-profile-card"
                copyCommand="pnpm dlx shadcn@latest add @8bitcn/player-profile-card"
              />
              <OpenInV0Button
                name="8bit-player-profile-card"
                className="w-fit"
              />
            </div>
          </div>

          <div className="py-14 flex flex-col gap-6">
            <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
              {/* Default Variant */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Default Variant
                </p>
                <div className="flex justify-center">
                  <PlayerProfileCard
                    playerName="OrcDev"
                    avatarSrc="/avatars/orcdev.jpeg"
                    avatarFallback="OD"
                    level={25}
                    stats={{
                      health: { current: 850, max: 1000 },
                      mana: { current: 320, max: 400 },
                      experience: { current: 7500, max: 10000 },
                    }}
                    playerClass="Pixel Warrior"
                  />
                </div>
              </div>

              {/* Custom Stats Example */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Custom Stats Example
                </p>
                <div className="flex justify-center">
                  <PlayerProfileCard
                    playerName="Dragon Slayer"
                    avatarFallback="DS"
                    level={42}
                    stats={{
                      health: { current: 1200, max: 1500 },
                      mana: { current: 500, max: 600 },
                      experience: { current: 15000, max: 20000 },
                    }}
                    playerClass="Dragon Slayer"
                    customStats={[
                      {
                        label: "Strength",
                        value: 95,
                        max: 100,
                        color: "bg-red-500",
                      },
                      {
                        label: "Defense",
                        value: 88,
                        max: 100,
                        color: "bg-blue-500",
                      },
                      {
                        label: "Speed",
                        value: 72,
                        max: 100,
                        color: "bg-green-500",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
