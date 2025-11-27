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
import { cn } from "@/lib/utils";
import "@/components/ui/8bit/styles/retro.css";

export type PlayerStats = {
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
};

export type PlayerProfileCardProps = {
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
};

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
          <Avatar className="size-16" font="retro" variant="pixel">
            <AvatarImage alt={playerName} src={avatarSrc} />
            <AvatarFallback className="text-lg">
              {avatarFallback || playerName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="space-y-2">
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center md:gap-2">
                <h3 className="truncate font-bold md:text-lg">{playerName}</h3>
                {showLevel && (
                  <span>
                    <Badge className="text-xs">Lv.{level}</Badge>
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {playerClass && (
                  <span className="text-muted-foreground text-xs">
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
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Health</span>
              <span className="retro text-[9px] text-muted-foreground sm:text-xs">
                {stats.health.current}/{stats.health.max}
              </span>
            </div>
            <HealthBar
              className="h-3"
              value={healthPercentage}
              variant="retro"
            />
          </div>
        )}

        {/* Mana Bar */}
        {showMana && stats?.mana && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Mana</span>
              <span className="retro text-[9px] text-muted-foreground sm:text-xs">
                {stats.mana.current}/{stats.mana.max}
              </span>
            </div>
            <ManaBar className="h-3" value={manaPercentage} variant="retro" />
          </div>
        )}

        {/* Experience Bar */}
        {showExperience && stats?.experience && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Experience</span>
              <span className="retro text-[9px] text-muted-foreground sm:text-xs">
                {stats.experience.current}/{stats.experience.max} XP
              </span>
            </div>
            <Progress
              className="h-3"
              progressBg="bg-yellow-500"
              value={experiencePercentage}
              variant="retro"
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
                <div className="space-y-1" key={stat.label}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{stat.label}</span>
                    <span className="retro text-[9px] text-muted-foreground sm:text-xs">
                      {stat.value}
                      {stat.max ? `/${stat.max}` : ""}
                    </span>
                  </div>
                  <Progress
                    className="h-3"
                    progressBg={stat.color || "bg-primary"}
                    value={percentage}
                    variant={stat.variant || "retro"}
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
