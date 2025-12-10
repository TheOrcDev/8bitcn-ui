import type * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

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
import { Separator } from "@/components/ui/8bit/separator";
import "@/components/ui/8bit/styles/retro.css";

export interface PrimaryAttribute {
  name: string;
  shortName: string;
  value: number;
  max?: number;
  color?: string;
}

export interface SecondaryStat {
  name: string;
  value: number;
  max?: number;
  isPercentage?: boolean;
  icon?: React.ReactNode;
  color?: string;
}

export interface EquipmentItem {
  slot: string;
  name: string;
  rarity?: "common" | "uncommon" | "rare" | "epic" | "legendary";
  icon?: React.ReactNode;
}

export interface CustomSection {
  title: string;
  content: React.ReactNode;
}

export const characterSheetVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface CharacterSheetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof characterSheetVariants> {
  characterName: string;
  characterClass?: string;
  characterTitle?: string;
  characterLevel?: number;
  avatarSrc?: string;
  avatarFallback?: string;

  primaryAttributes?: PrimaryAttribute[];

  secondaryStats?: SecondaryStat[];

  health?: { current: number; max: number };
  mana?: { current: number; max: number };
  experience?: { current: number; max: number };

  equipment?: EquipmentItem[];

  customSections?: CustomSection[];

  showAvatar?: boolean;
  showLevel?: boolean;
  showHealth?: boolean;
  showMana?: boolean;
  showExperience?: boolean;
  showAttributes?: boolean;
  showSecondaryStats?: boolean;
  showEquipment?: boolean;
}

const defaultPrimaryAttributes: PrimaryAttribute[] = [
  { name: "Strength", shortName: "STR", value: 10 },
  { name: "Dexterity", shortName: "DEX", value: 10 },
  { name: "Intelligence", shortName: "INT", value: 10 },
  { name: "Vitality", shortName: "VIT", value: 10 },
  { name: "Wisdom", shortName: "WIS", value: 10 },
  { name: "Charisma", shortName: "CHA", value: 10 },
];

export function CharacterSheet({
  className,
  font,
  characterName,
  characterClass,
  characterTitle,
  characterLevel = 1,
  avatarSrc,
  avatarFallback,
  primaryAttributes,
  secondaryStats,
  health,
  mana,
  experience,
  equipment,
  customSections,
  showAvatar = true,
  showLevel = true,
  showHealth = true,
  showMana = true,
  showExperience = true,
  showAttributes = true,
  showSecondaryStats = true,
  showEquipment = true,
  ...props
}: CharacterSheetProps) {
  const attributes = primaryAttributes || defaultPrimaryAttributes;

  const healthPercentage = health
    ? Math.round((health.current / health.max) * 100)
    : 0;

  const manaPercentage = mana
    ? Math.round((mana.current / mana.max) * 100)
    : 0;

  const experiencePercentage = experience
    ? Math.round((experience.current / experience.max) * 100)
    : 0;

  return (
    <Card
      className={cn(
        "w-full",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      {/* Character Header */}
      <CardHeader className="pb-4">
        <div className="flex sm:flex-row flex-col items-start gap-4">
          {showAvatar && (
            <Avatar className="size-20" variant="pixel" font="retro">
              <AvatarImage src={avatarSrc} alt={characterName} />
              <AvatarFallback className="text-xl">
                {avatarFallback || characterName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}

          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex flex-wrap flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold truncate">{characterName}</h2>
              {showLevel && (
                <Badge className="text-xs w-fit">LV. {characterLevel}</Badge>
              )}
            </div>

            {(characterClass || characterTitle) && (
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {characterClass && <span>{characterClass}</span>}
                {characterTitle && (
                  <span className="text-amber-500">{characterTitle}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Health/Mana/XP Bars */}
        {(showHealth || showMana || showExperience) && (
          <div className="space-y-3">
            {showHealth && health && (
              <div className="space-y-1">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <span className="text-sm font-medium text-red-500">
                    Health
                  </span>
                  <span className="text-xs text-muted-foreground retro">
                    {health.current}/{health.max}
                  </span>
                </div>
                <HealthBar
                  value={healthPercentage}
                  variant="retro"
                  className="h-3"
                />
              </div>
            )}

            {showMana && mana && (
              <div className="space-y-1">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <span className="text-sm font-medium text-blue-500">
                    Mana
                  </span>
                  <span className="text-xs text-muted-foreground retro">
                    {mana.current}/{mana.max}
                  </span>
                </div>
                <ManaBar
                  value={manaPercentage}
                  variant="retro"
                  className="h-3"
                />
              </div>
            )}

            {showExperience && experience && (
              <div className="space-y-1">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <span className="text-sm font-medium text-yellow-500">
                    Experience
                  </span>
                  <span className="text-xs text-muted-foreground retro">
                    {experience.current}/{experience.max} XP
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
          </div>
        )}

        {/* Primary Attributes */}
        {showAttributes && attributes.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Attributes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {attributes.map((attr) => (
                  <div
                    key={attr.shortName}
                    className="flex items-center justify-between p-2 bg-muted/30 border-2"
                  >
                    <span className="text-xs font-bold">
                      {attr.shortName}
                    </span>
                    <span className="text-xs font-bold">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Secondary Stats */}
        {showSecondaryStats && secondaryStats && secondaryStats.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Stats
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {secondaryStats.map((stat) => (
                  <div
                    key={stat.name}
                    className="flex items-center justify-between py-1.5 px-2"
                  >
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      {stat.icon}
                      {stat.name}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-bold",
                        stat.color || "text-foreground"
                      )}
                    >
                      {stat.value}
                      {stat.isPercentage && "%"}
                      {stat.max && !stat.isPercentage && `/${stat.max}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Equipment */}
        {showEquipment && equipment && equipment.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Equipment
              </h3>
              <div className="space-y-2">
                {equipment.map((item) => (
                  <div
                    key={item.slot}
                    className="flex sm:flex-row flex-col items-center justify-between py-2 px-3 bg-muted/30 border-2"
                  >
                    <span className="text-xs text-muted-foreground uppercase">
                      {item.slot}
                    </span>
                    <span className="text-sm font-medium flex items-center gap-1">
                      {item.icon}
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Custom Sections */}
        {customSections &&
          customSections.map((section, index) => (
            <div key={index}>
              <Separator />
              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wide">
                  {section.title}
                </h3>
                {section.content}
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}


export function CharacterSheetStatRow({
  label,
  value,
  icon,
  color,
  className,
}: {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between py-1.5 px-2",
        className
      )}
    >
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        {icon}
        {label}
      </span>
      <span className={cn("text-sm font-bold", color || "text-foreground")}>
        {value}
      </span>
    </div>
  );
}

export function CharacterSheetAttributeBox({
  shortName,
  value,
  color,
  className,
}: {
  shortName: string;
  value: number;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-2 bg-muted/30 border-2",
        className
      )}
    >
      <span
        className={cn("text-xs font-bold", color || "text-foreground")}
      >
        {shortName}
      </span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}

export default CharacterSheet;
