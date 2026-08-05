"use client";

import Image from "next/image";
import { useEffect } from "react";
import { DatePicker } from "@/components/examples/date-picker";
import Dialogue from "@/components/ui/8bit/blocks/dialogue";
import GameOver from "@/components/ui/8bit/blocks/game-over";
import NotFound1 from "@/components/ui/8bit/blocks/not-found1";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import EnemyHealthDisplay from "@/components/ui/8bit/enemy-health-display";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Spinner } from "@/components/ui/8bit/spinner";
import XpBar from "@/components/ui/8bit/xp-bar";

interface FeatureColumnProps {
  onReady?: () => void;
}

export function FeatureColumn({ onReady }: FeatureColumnProps = {}) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <div className="flex flex-col gap-1 lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm">Party (3/5)</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="p-2">
              <div className="w-full">
                <div className="retro mb-1 flex justify-between text-[10px]">
                  <span>Wizard MP</span>
                  <span>140/180</span>
                </div>
                <ManaBar className="w-full" value={65} variant="retro" />
              </div>
              <Image
                alt="Wizard"
                className="pixelated mx-auto mt-2"
                height={140}
                src="/images/8bit-wizard.png"
                width={140}
              />
            </div>

            <div className="p-2">
              <div className="w-full">
                <div className="retro mb-1 flex justify-between text-[10px]">
                  <span>Troll HP</span>
                  <span>320/450</span>
                </div>
                <HealthBar className="w-full" value={71} variant="retro" />
              </div>
              <Image
                alt="Troll"
                className="pixelated mx-auto mt-2"
                height={140}
                src="/images/8bit-troll.png"
                width={140}
              />
            </div>

            <div className="p-2">
              <div className="w-full">
                <div className="retro mb-1 flex justify-between text-[10px]">
                  <span>Orc XP</span>
                  <span>980/1200</span>
                </div>
                <XpBar levelUpMessage="DING" value={82} variant="retro" />
              </div>
              <Image
                alt="Orc Warrior"
                className="pixelated mx-auto mt-2"
                height={140}
                src="/images/8bit-orc-warrior.png"
                width={140}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <Spinner className="size-10" variant="diamond" />
            <Spinner className="size-10" variant="classic" />
            <Select>
              <SelectTrigger aria-label="Theme" className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center justify-center">
              <DatePicker className="w-full max-w-[300px]" />
            </div>
            <EnemyHealthDisplay
              currentHealth={850}
              enemyName="Fire Dragon"
              level={25}
              maxHealth={1000}
            />

            <div className="w-full">
              <div className="retro mb-1 flex justify-between text-[10px]">
                <span>XP</span>
                <span>1400/1400</span>
              </div>
              <XpBar levelUpMessage="DING" value={100} variant="retro" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <Dialogue
            avatarFallback="Orc"
            avatarSrc="/images/pixelized-8bitcnorc.jpg"
            description="I bring you a gift… it's called AXE TO THE FACE! SLASH!!"
            title="Orc"
          />

          <div className="flex justify-end">
            <Dialogue
              avatarFallback="Goblin"
              avatarSrc="/images/goblin.png"
              description="`Screeches like a dying flute`"
              player={false}
              title="Goblin"
            />
          </div>
        </CardContent>
      </Card>

      <GameOver />

      <Card>
        <CardContent>
          <NotFound1 />
        </CardContent>
      </Card>
    </div>
  );
}
