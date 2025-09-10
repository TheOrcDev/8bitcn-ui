# Player Profile Card Component

A comprehensive, reusable Player Profile Card component for the 8bitcn UI library that displays detailed player information in a retro, 8-bit style.

## Features

- **Retro 8-bit Design**: Consistent with 8bitcn visual style using pixel borders and retro fonts
- **Player Avatar**: Uses the 8bitcn Avatar component with pixel frame styling
- **Comprehensive Stats Display**: Health, Mana, and Experience bars with retro styling
- **Multiple Variants**: Default, Compact, and Detailed layouts
- **Custom Stats Support**: Add custom stat bars with configurable colors
- **Responsive Design**: Adapts to different screen sizes
- **Configurable Display**: Show/hide individual stat types
- **Bio Section**: Optional player description/bio text

## Usage

```tsx
import PlayerProfileCard from "@/components/ui/8bit/blocks/player-profile-card";

// Basic usage
<PlayerProfileCard
  playerName="OrcDev"
  avatarSrc="/avatars/orcdev.jpeg"
  avatarFallback="OD"
  level={25}
  stats={{
    health: { current: 850, max: 1000 },
    mana: { current: 320, max: 400 },
    experience: { current: 7500, max: 10000 }
  }}
  bio="A legendary pixel warrior who has conquered countless dungeons."
/>

// Compact variant
<PlayerProfileCard
  variant="compact"
  playerName="Shadow Mage"
  avatarFallback="SM"
  level={18}
  stats={{
    health: { current: 450, max: 600 },
    mana: { current: 180, max: 250 },
    experience: { current: 3200, max: 5000 }
  }}
  bio="Master of dark arts and shadow magic."
/>

// Detailed variant with custom stats
<PlayerProfileCard
  variant="detailed"
  playerName="Dragon Slayer"
  avatarFallback="DS"
  level={42}
  stats={{
    health: { current: 1200, max: 1500 },
    mana: { current: 500, max: 600 },
    experience: { current: 15000, max: 20000 }
  }}
  bio="A fearless warrior who has slain over 100 dragons."
  customStats={[
    { label: "Strength", value: 95, max: 100, color: "bg-red-500" },
    { label: "Defense", value: 88, max: 100, color: "bg-blue-500" },
    { label: "Speed", value: 72, max: 100, color: "bg-green-500" }
  ]}
/>
```

## Props

### PlayerProfileCardProps

| Prop             | Type                                   | Default     | Description                                 |
| ---------------- | -------------------------------------- | ----------- | ------------------------------------------- |
| `className`      | `string`                               | -           | Additional CSS classes                      |
| `playerName`     | `string`                               | -           | **Required.** Player's display name         |
| `avatarSrc`      | `string`                               | -           | URL to player's avatar image                |
| `avatarFallback` | `string`                               | -           | Fallback text for avatar (usually initials) |
| `level`          | `number`                               | `1`         | Player's current level                      |
| `stats`          | `PlayerStats`                          | -           | Player's health, mana, and experience stats |
| `bio`            | `string`                               | -           | Optional player biography/description       |
| `variant`        | `"default" \| "compact" \| "detailed"` | `"default"` | Layout variant                              |
| `showLevel`      | `boolean`                              | `true`      | Whether to display the level badge          |
| `showHealth`     | `boolean`                              | `true`      | Whether to display the health bar           |
| `showMana`       | `boolean`                              | `true`      | Whether to display the mana bar             |
| `showExperience` | `boolean`                              | `true`      | Whether to display the experience bar       |
| `customStats`    | `CustomStat[]`                         | `[]`        | Array of custom stat bars                   |

### PlayerStats Interface

```tsx
interface PlayerStats {
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
  [key: string]: any; // Allow custom stats
}
```

### CustomStat Interface

```tsx
interface CustomStat {
  label: string; // Display name for the stat
  value: number; // Current value
  max?: number; // Maximum value (for percentage calculation)
  color?: string; // Background color class (e.g., "bg-red-500")
  variant?: "retro" | "default"; // Progress bar variant
}
```

## Variants

### Default

- Standard size with full bio display
- All stat bars visible
- Best for detailed player profiles

### Compact

- Smaller avatar and reduced spacing
- Condensed bio display
- Ideal for lists or sidebars

### Detailed

- Additional information section
- Shows class and guild information
- Perfect for comprehensive player views

## Styling

The component uses the 8bitcn design system:

- **Retro Font**: All text uses the retro font class
- **Pixel Borders**: Card uses the 8bitcn Card component with pixel borders
- **Progress Bars**: Health, Mana, and Experience use the 8bitcn Progress component with retro variant
- **Avatar**: Uses the 8bitcn Avatar component with pixel frame styling
- **Badge**: Level display uses the 8bitcn Badge component

## Responsive Behavior

- **Mobile**: Single column layout, full-width cards
- **Tablet**: Two-column grid for multiple cards
- **Desktop**: Three-column grid for multiple cards
- **Avatar sizes**: Automatically adjust based on variant

## Examples

### Basic Player Card

```tsx
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
  bio="A legendary pixel warrior who has conquered countless dungeons and defeated the most fearsome bosses."
/>
```

### Multiple Cards Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <PlayerProfileCard variant="compact" playerName="Fire Wizard" ... />
  <PlayerProfileCard variant="compact" playerName="Ice Queen" ... />
  <PlayerProfileCard variant="compact" playerName="Storm Knight" ... />
</div>
```

### Custom Stats

```tsx
<PlayerProfileCard
  playerName="Dragon Slayer"
  customStats={[
    { label: "Strength", value: 95, max: 100, color: "bg-red-500" },
    { label: "Defense", value: 88, max: 100, color: "bg-blue-500" },
    { label: "Speed", value: 72, max: 100, color: "bg-green-500" }
  ]}
  ...
/>
```

## Dependencies

- `@/components/ui/8bit/avatar` - Avatar component with pixel styling
- `@/components/ui/8bit/card` - Card component with retro borders
- `@/components/ui/8bit/badge` - Badge component for level display
- `@/components/ui/8bit/health-bar` - Health bar component
- `@/components/ui/8bit/mana-bar` - Mana bar component
- `@/components/ui/8bit/progress` - Progress bar component
- `@/lib/utils` - Utility functions for class merging

## Installation

```bash
pnpm dlx shadcn@latest add @8bitcn/player-profile-card
```

## License

Part of the 8bitcn UI library. See the main project license for details.
