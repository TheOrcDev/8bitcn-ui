---
name: 8bit-docs-patterns
description: Create documentation with gaming-specific examples, retro styling, and 8-bit terminology. Apply when documenting gaming blocks, RPG components, or retro-styled UI elements.
---

## 8-bit Documentation Patterns

Create documentation that emphasizes the gaming and retro aspects of 8-bit components.

### Gaming Terminology

Use gaming-specific language in descriptions and examples:

```mdx
---
title: Quest Log
description: Displays an 8-bit mission and task tracking system.
---
```

### Realistic Game Data

Use meaningful, game-related data in examples:

```tsx
<QuestLog
  quests={[
    {
      id: "quest-1",
      title: "Defeat the Goblin King",
      description: "The Goblin King has been terrorizing the village for weeks.",
      status: "active",
      shortDescription: "Defeat the Goblin King in the Dark Forest.",
    },
    {
      id: "quest-2",
      title: "Collect Dragon Scales",
      description: "The local blacksmith needs dragon scales to forge armor.",
      status: "completed",
      shortDescription: "Collect 10 dragon scales.",
    },
  ]}
/>
```

### Health Bar Examples

Use realistic health values and context:

```mdx
<HealthBar value={75} />

<div className="flex justify-between text-sm mb-2 retro">
  <span>Health</span>
  <span>75%</span>
</div>
<HealthBar value={75} />

<p className="text-sm text-muted-foreground mb-2">
  Default health bar
</p>
<HealthBar value={75} />

<p className="text-sm text-muted-foreground mb-2">
  Critical health (25%)
</p>
<HealthBar value={25} variant="retro" />
```

### Pixel Font Usage

Apply `.retro` class for pixel font styling:

```tsx
<div className="flex justify-between text-sm mb-2 retro">
  <span>Health</span>
  <span>75/100</span>
</div>
```

### Wrapper Pattern in Examples

Remember 8-bit components wrap shadcn/ui:

```tsx
// Import the 8-bit component
import { Button } from "@/components/ui/8bit/button";

// Not the base shadcn component
import { Button } from "@/components/ui/button"; // Wrong!
```

### retro.css Awareness

All 8-bit components require retro.css:

```tsx
// This import is required in the component source
import "@/components/ui/8bit/styles/retro.css";

// Documentation shows usage with 8-bit components
<Button className="retro">START GAME</Button>
```

### Multiple Variants

Show default vs retro variants:

```mdx
<ComponentPreview title="8-bit Health Bar component" name="health-bar">
  <div className="md:min-w-[300px] min-w-[200px] flex flex-col gap-8">
    <div>
      <p className="text-sm text-muted-foreground mb-2">
        Default health bar
      </p>
      <HealthBar value={75} />
    </div>
    <div>
      <p className="text-sm text-muted-foreground mb-2">
        Retro health bar
      </p>
      <HealthBar value={45} variant="retro" />
    </div>
  </div>
</ComponentPreview>
```

### Gaming Block Documentation

For blocks (multiple components):

```mdx
---
title: Quest Log
description: Displays an 8-bit mission and task tracking system.
---

<ComponentPreview title="8-bit Quest Log block" name="quest-log">
  <QuestLog
    quests={[
      {
        id: "quest-1",
        title: "Defeat the Goblin King",
        status: "active",
      },
    ]}
  />
</ComponentPreview>
```

### Key Principles

1. **Gaming context** - Use game-related terminology
2. **Realistic data** - Show actual game scenarios
3. **Retro styling** - Use `.retro` class for pixel fonts
4. **Wrapper awareness** - Import from `@/components/ui/8bit/`
5. **Variant showcase** - Demonstrate multiple variants
6. **Block complexity** - Handle multi-component documentation
7. **8-bit specific** - Emphasize unique 8-bit features

### Reference Examples

- `content/docs/blocks/gaming/quest-log.mdx` - Quest tracking pattern
- `content/docs/components/health-bar.mdx` - Health bar variants
- `content/docs/blocks/gaming/leaderboard.mdx` - Gaming list pattern
