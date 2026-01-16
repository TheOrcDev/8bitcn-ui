---
name: registry-component-patterns
description: Register components in registry.json for shadcn/ui add command. Apply when adding new 8-bit components to the component library.
---

## Registry Component Patterns

Register 8-bit components in `registry.json` for discovery via `shadcn add @8bitcn/[component-name]`.

### Component Entry Pattern

```json
{
  "name": "button",
  "type": "registry:component",
  "title": "8-bit Button",
  "description": "A simple 8-bit button component",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "components/ui/8bit/button.tsx",
      "type": "registry:component",
      "target": "components/ui/8bit/button.tsx"
    },
    {
      "path": "components/ui/8bit/styles/retro.css",
      "type": "registry:component",
      "target": "components/ui/8bit/styles/retro.css"
    }
  ]
}
```

### Block Entry Pattern

For pre-built layouts like game UIs:

```json
{
  "name": "chapter-intro",
  "type": "registry:block",
  "title": "8-bit Chapter Intro",
  "description": "A cinematic chapter/level intro with pixel art background.",
  "registryDependencies": ["card"],
  "categories": ["gaming"],
  "files": [
    {
      "path": "components/ui/8bit/blocks/chapter-intro.tsx",
      "type": "registry:block",
      "target": "components/ui/8bit/blocks/chapter-intro.tsx"
    },
    {
      "path": "components/ui/8bit/styles/retro.css",
      "type": "registry:component",
      "target": "components/ui/8bit/styles/retro.css"
    },
    {
      "path": "components/ui/8bit/card.tsx",
      "type": "registry:component",
      "target": "components/ui/8bit/card.tsx"
    }
  ]
}
```

### Required retro.css

Always include `retro.css` in registry entries:

```json
"files": [
  {
    "path": "components/ui/8bit/new-component.tsx",
    "type": "registry:component",
    "target": "components/ui/8bit/new-component.tsx"
  },
  {
    "path": "components/ui/8bit/styles/retro.css",
    "type": "registry:component",
    "target": "components/ui/8bit/styles/retro.css"
  }
]
```

### Categories

Use gaming-specific categories:

```json
"categories": ["gaming"]
```

Available categories: `gaming`, `layout`, `form`, `data-display`, `feedback`, `navigation`, `overlay`.

### Registry Dependencies

List base shadcn dependencies:

```json
"registryDependencies": ["button", "dialog"]
```

For blocks with multiple components:

```json
"registryDependencies": ["card", "button", "progress"]
```

### Key Principles

1. **Type** - Use `registry:component` for single components, `registry:block` for layouts
2. **retro.css required** - Always include in files array
3. **Target path** - Use same path for source and target
4. **Categories** - Use `gaming` for retro-themed components
5. **Dependencies** - List base shadcn/ui components (not 8-bit versions)
6. **Description** - Clear, concise description for CLI output

### Adding a New Component

1. Create component in `components/ui/8bit/component.tsx`
2. Update `registry.json` with entry (copy existing component as template)
3. Include `retro.css` dependency
4. Test with: `pnpm dlx shadcn@latest add @8bitcn/component`
