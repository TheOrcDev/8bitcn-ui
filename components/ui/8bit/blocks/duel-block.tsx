"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription } from "@/components/ui/8bit/alert";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import HealthBar from "@/components/ui/8bit/health-bar";

import "@/components/ui/8bit/styles/retro.css";

interface Fighter {
  className?: string;
  hp: number;
  image: string;
  maxHp: number;
  name: string;
  subtitle: string;
}

interface DuelBlockProps {
  className?: string;
  leftFighter?: Fighter;
  rightFighter?: Fighter;
}

const hitMessages = [
  "Critical strike!",
  "Holy damage!",
  "Shield block!",
  "Orc smash!",
  "Combo x2!",
  "Parried!",
  "Devastating blow!",
  "Glancing hit!",
];

export default function DuelBlock({
  leftFighter = {
    name: "Paladin",
    subtitle: "Holy Vanguard",
    image: "/images/8bit-paladin.png",
    hp: 100,
    maxHp: 100,
  },
  rightFighter = {
    name: "Orc Warrior",
    subtitle: "Arena Berserker",
    image: "/images/8bit-orc-warrior.png",
    hp: 100,
    maxHp: 100,
  },
  className,
}: DuelBlockProps) {
  const [left, setLeft] = useState(leftFighter);
  const [right, setRight] = useState(rightFighter);
  const [round, setRound] = useState(1);
  const [log, setLog] = useState<string[]>(["Round 1 — Fight!"]);
  const [lastHit, setLastHit] = useState<"left" | "right" | null>(null);

  const winner =
    left.hp <= 0 ? right.name : right.hp <= 0 ? left.name : null;

  const handleHit = useCallback(() => {
    if (winner) {
      return;
    }

    const damage = Math.floor(Math.random() * 20) + 5;
    const msg = hitMessages[Math.floor(Math.random() * hitMessages.length)];

    if (round % 2 === 1) {
      // Paladin attacks orc
      setRight((f) => ({ ...f, hp: Math.max(0, f.hp - damage) }));
      setLog((l) => [...l, `${left.name}: ${msg} -${damage} HP`]);
      setLastHit("right");
    } else {
      // Orc attacks paladin
      setLeft((f) => ({ ...f, hp: Math.max(0, f.hp - damage) }));
      setLog((l) => [...l, `${right.name}: ${msg} -${damage} HP`]);
      setLastHit("left");
    }

    setRound((r) => r + 1);
  }, [round, winner, left.name, right.name]);

  const handleReset = useCallback(() => {
    setLeft(leftFighter);
    setRight(rightFighter);
    setRound(1);
    setLog(["Round 1 — Fight!"]);
    setLastHit(null);
  }, [leftFighter, rightFighter]);

  return (
    <div
      className={cn(
        "retro w-full px-4 py-12 md:py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-2xl">
        {/* Badge */}
        <div className="mb-6 text-center">
          <Badge variant="secondary">ARENA MODE</Badge>
        </div>

        {/* Fighters row */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Left fighter */}
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="w-full max-w-[120px]">
              <div className="retro mb-1 flex justify-between text-[8px]">
                <span>HP</span>
                <span>
                  {left.hp}/{left.maxHp}
                </span>
              </div>
              <HealthBar value={(left.hp / left.maxHp) * 100} variant="retro" />
            </div>
            <Image
              alt={left.name}
              className={cn(
                "pixelated transition-transform duration-200",
                lastHit === "left" && "scale-90",
              )}
              height={120}
              src={left.image}
              width={120}
            />
            <p className="retro font-bold text-xs">{left.name}</p>
            <p className="retro text-muted-foreground text-[8px]">
              {left.subtitle}
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-3">
            <p className="retro font-bold text-2xl sm:text-3xl">VS</p>
            {winner ? (
              <div className="flex flex-col items-center gap-2">
                <Badge>{winner} wins!</Badge>
                <Button onClick={handleReset} size="sm" variant="outline">
                  Rematch
                </Button>
              </div>
            ) : (
              <Button onClick={handleHit} size="sm">
                Hit
              </Button>
            )}

          </div>

          {/* Right fighter */}
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="w-full max-w-[120px]">
              <div className="retro mb-1 flex justify-between text-[8px]">
                <span>HP</span>
                <span>
                  {right.hp}/{right.maxHp}
                </span>
              </div>
              <HealthBar value={(right.hp / right.maxHp) * 100} variant="retro" />
            </div>
            <Image
              alt={right.name}
              className={cn(
                "pixelated transition-transform duration-200",
                lastHit === "right" && "scale-90",
              )}
              height={120}
              src={right.image}
              width={120}
            />
            <p className="retro font-bold text-xs">{right.name}</p>
            <p className="retro text-muted-foreground text-[8px]">
              {right.subtitle}
            </p>
          </div>
        </div>

        {/* Battle Log */}
        <div className="mt-6 max-h-[160px] space-y-2 overflow-y-auto">
          {[...log].reverse().map((entry, i) => (
            <Alert key={`log-${i}-${entry}`} variant={i === 0 ? "default" : undefined}>
              <AlertDescription className="retro text-[9px]">
                {entry}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
}
