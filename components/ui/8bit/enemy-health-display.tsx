import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import HealthBar from "@/components/ui/8bit/health-bar";

import "./styles/retro.css";

export const enemyHealthDisplayVariants = cva("", {
  variants: {
    variant: {
      default: "",
      retro: "retro",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    textColor: {
      red: "text-red-500",
      orange: "text-orange-500",
      yellow: "text-yellow-500",
      green: "text-green-500",
      blue: "text-blue-500",
      purple: "text-purple-500",
    },
  },
  defaultVariants: {
    variant: "retro",
    size: "md",
    textColor: "red",
  },
});

export interface EnemyHealthDisplayProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof enemyHealthDisplayVariants> {
  enemyName: string;
  level?: number;
  currentHealth: number;
  maxHealth: number;
  showLevel?: boolean;
  showHealthText?: boolean;
  healthBarVariant?: "retro" | "default";
  healthBarColor?: string;
  enemyNameColor?: string;
}

export default function EnemyHealthDisplay({
  className,
  variant,
  size,
  textColor,
  enemyName,
  level,
  currentHealth,
  maxHealth,
  showLevel = true,
  showHealthText = true,
  healthBarVariant = "retro",
  healthBarColor = "bg-red-500",
  enemyNameColor = "text-foreground",
  ...props
}: EnemyHealthDisplayProps) {
  const healthPercentage = Math.max(
    0,
    Math.min(100, (currentHealth / maxHealth) * 100)
  );
  const healthText = `${currentHealth}/${maxHealth}`;

  return (
    <div
      className={cn(
        "relative w-full space-y-2",
        enemyHealthDisplayVariants({ variant, size, textColor }),
        className
      )}
      {...props}
    >
      {/* Enemy Name and Level */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("font-bold", enemyNameColor)}>{enemyName}</span>
          {showLevel && level && (
            <span className="text-muted-foreground">Lv.{level}</span>
          )}
        </div>
        {showHealthText && (
          <span className="text-muted-foreground text-[9px]">{healthText}</span>
        )}
      </div>

      {/* Health Bar Container */}
      <div className="relative">
        <HealthBar
          value={healthPercentage}
          variant={healthBarVariant}
          className="w-full"
          props={{ progressBg: healthBarColor }}
        />

        {/* Health percentage overlay for retro variant */}
        {healthBarVariant === "retro" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white drop-shadow-lg bg-black/50 px-1 rounded">
              {Math.round(healthPercentage)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
