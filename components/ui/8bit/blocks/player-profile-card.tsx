import React from "react";

import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/8bit/card";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";
import { Progress } from "@/components/ui/8bit/progress";
import "@/components/ui/8bit/styles/retro.css";

export interface PlayerStats {
  health?: {
    current: number;
    max: number;
  };
  mana?: {
    current: number;
    max: number;
  };
  experience?: {
    current: number;
    max: number;
  };
  level?: number;
  [key: string]: unknown; // Allow custom stats
}

export interface PlayerProfileCardProps {
  className?: string;
  playerName: string;
  avatarSrc?: string;
  avatarFallback?: string;
  level?: number;
  stats?: PlayerStats;
  playerClass?: string;
  showLevel?: boolean;
  showHealth?: boolean;
  showMana?: boolean;
  showExperience?: boolean;
  customStats?: Array<{
    label: string;
    value: number;
    max?: number;
    color?: string;
    variant?: "retro" | "default";
  }>;
}

export default function PlayerProfileCard({
  className,
  playerName,
  avatarSrc,
  avatarFallback,
  level = 1,
  stats,
  playerClass,
  showLevel = true,
  showHealth = true,
  showMana = true,
  showExperience = true,
  customStats = [],
  ...props
}: PlayerProfileCardProps) {
  const healthPercentage = stats?.health
    ? Math.round((stats.health.current / stats.health.max) * 100)
    : 0;

  const manaPercentage = stats?.mana
    ? Math.round((stats.mana.current / stats.mana.max) * 100)
    : 0;

  const experiencePercentage = stats?.experience
    ? Math.round((stats.experience.current / stats.experience.max) * 100)
    : 0;

  return (
    <Card className={cn("w-full max-w-md", className)} {...props}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-16" variant="pixel" font="retro">
            <AvatarImage src={avatarSrc} alt={playerName} />
            <AvatarFallback className="text-lg">
              {avatarFallback || playerName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2 justify-between">
                <h3 className="font-bold truncate md:text-lg">{playerName}</h3>
                {showLevel && (
                  <span>
                    <Badge className="text-xs">Lv.{level}</Badge>
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {playerClass && (
                  <span className="text-xs text-muted-foreground">
                    {playerClass}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Health Bar */}
        {showHealth && stats?.health && (
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Health</span>
              <span className="text-[9px] sm:text-xs text-muted-foreground retro">
                {stats.health.current}/{stats.health.max}
              </span>
            </div>
            <HealthBar
              value={healthPercentage}
              variant="retro"
              className="h-3"
            />
          </div>
        )}

        {/* Mana Bar */}
        {showMana && stats?.mana && (
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Mana</span>
              <span className="text-[9px] sm:text-xs text-muted-foreground retro">
                {stats.mana.current}/{stats.mana.max}
              </span>
            </div>
            <ManaBar value={manaPercentage} variant="retro" className="h-3" />
          </div>
        )}

        {/* Experience Bar */}
        {showExperience && stats?.experience && (
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Experience</span>
              <span className="text-[9px] sm:text-xs text-muted-foreground retro">
                {stats.experience.current}/{stats.experience.max} XP
              </span>
            </div>
            <Progress
              value={experiencePercentage}
              variant="retro"
              progressBg="bg-yellow-500"
              className="h-3"
            />
          </div>
        )}

        {/* Custom Stats */}
        {customStats.length > 0 && (
          <div className="space-y-2">
            {customStats.map((stat, index) => {
              const percentage = stat.max
                ? Math.round((stat.value / stat.max) * 100)
                : 0;

              return (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{stat.label}</span>
                    <span className="text-[9px] sm:text-xs text-muted-foreground retro">
                      {stat.value}
                      {stat.max ? `/${stat.max}` : ""}
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    variant={stat.variant || "retro"}
                    progressBg={stat.color || "bg-primary"}
                    className="h-3"
                  />
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
