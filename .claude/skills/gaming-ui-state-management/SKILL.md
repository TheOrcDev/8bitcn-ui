---
name: gaming-ui-state-management
description: Patterns for game-like interfaces - health bars, XP bars, mana bars. Apply when building RPG/retro gaming UI components with state-driven visuals.
---

## Gaming UI State Management

Create game-like interfaces with state-driven visuals for health, XP, mana, and other game metrics.

### Progress Bar Pattern

Build on the Progress component with game-specific variants:

```tsx
import { Progress } from "@/components/ui/8bit/progress";

function HealthBar({ value = 100, ...props }: BitProgressProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant="retro"
      progressBg="bg-red-500"
    />
  );
}

function ManaBar({ value = 100, ...props }: BitProgressProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant="retro"
      progressBg="bg-blue-500"
    />
  );
}

function XpBar({ value = 0, ...props }: BitProgressProps) {
  return (
    <Progress
      {...props}
      value={value}
      variant="retro"
      progressBg="bg-yellow-500"
    />
  );
}
```

### Level Up Notification

Show animated messages when thresholds are reached:

```tsx
function XpBar({
  value,
  levelUpMessage = "LEVEL UP!",
  ...props
}: XpBarProps) {
  const isLevelUp = value === 100;

  return (
    <div className="relative">
      <Progress
        {...props}
        value={value}
        progressBg="bg-yellow-500"
        className={cn(isLevelUp && "animate-pulse")}
      />

      {isLevelUp && (
        <div
          className={cn(
            "retro",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-[0.625rem] text-black",
            "pointer-events-none whitespace-nowrap z-10",
            "drop-shadow-[1px_1px_0_#fff] [text-shadow:1px_1px_0_#fff,-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff]",
            "animate-[blink_0.5s_step-end_infinite]"
          )}
        >
          {levelUpMessage}
        </div>
      )}
    </div>
  );
}
```

### Conditional Animations

Use conditional classes for game state feedback:

```tsx
<div
  className={cn(
    "transition-colors duration-300",
    health <= 25 ? "animate-pulse bg-red-500/20" : "bg-green-500",
    health > 25 && health <= 50 && "bg-yellow-500/20"
  )}
/>
```

### Enemy Health Display

Compact display for combat scenarios:

```tsx
function EnemyHealth({ health, maxHealth }: EnemyHealthProps) {
  const percentage = (health / maxHealth) * 100;

  return (
    <div className="retro text-xs">
      <div className="flex justify-between mb-1">
        <span>ENEMY</span>
        <span>{health}/{maxHealth}</span>
      </div>
      <HealthBar value={percentage} className="h-2" />
    </div>
  );
}
```

### Key Principles

1. **Base component** - Extend Progress, don't reimplement
2. **Color coding** - Red (health), Blue (mana), Yellow (XP), Green (stamina)
3. **Retro text** - Use `.retro` class for pixel font numbers
4. **State animations** - Use `animate-pulse`, `animate-blink` for feedback
5. **Text shadows** - White text-shadow for legibility on colored backgrounds
6. **Compact sizing** - Smaller text (text-xs, text-[0.625rem]) for game UIs

### Reference Components

- `components/ui/8bit/health-bar.tsx` - Health bar implementation
- `components/ui/8bit/xp-bar.tsx` - XP bar with level up notification
- `components/ui/8bit/mana-bar.tsx` - Mana bar implementation
