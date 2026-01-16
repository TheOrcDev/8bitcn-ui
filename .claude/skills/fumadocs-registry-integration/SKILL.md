---
name: fumadocs-registry-integration
description: Register 8-bit components in registry.json for shadcn/ui add command. Apply when adding new components to the component library distribution.
---

## Registry Integration

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
  "name": "quest-log",
  "type": "registry:block",
  "title": "8-bit Quest Log",
  "description": "An 8-bit quest and mission tracking system.",
  "registryDependencies": ["card", "accordion"],
  "categories": ["gaming"],
  "files": [
    {
      "path": "components/ui/8bit/quest-log.tsx",
      "type": "registry:block",
      "target": "components/ui/8bit/quest-log.tsx"
    },
    {
      "path": "components/ui/8bit/styles/retro.css",
      "type": "registry:component",
      "target": "components/ui/8bit/styles/retro.css"
    }
  ]
}
```

### Required retro.css

Always include `retro.css` in files array:

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

Use gaming-specific categories for game components:

```json
"categories": ["gaming"]
```

Available categories: `gaming`, `layout`, `form`, `data-display`, `feedback`, `navigation`, `overlay`.

### Registry Dependencies

List base shadcn dependencies (not 8-bit versions):

```json
"registryDependencies": ["button", "dialog", "progress"]
```

For blocks with multiple components:

```json
"registryDependencies": ["card", "button", "progress", "tabs"]
```

### Type Selection

**registry:component** - Single reusable component:

```json
{
  "type": "registry:component",
  "files": [...]
}
```

**registry:block** - Pre-built layout or feature:

```json
{
  "type": "registry:block",
  "categories": ["gaming"],
  "files": [...]
}
```

### Complete Example

```json
{
  "name": "health-bar",
  "type": "registry:component",
  "title": "8-bit Health Bar",
  "description": "An 8-bit health bar component for game UI.",
  "registryDependencies": ["progress"],
  "files": [
    {
      "path": "components/ui/8bit/health-bar.tsx",
      "type": "registry:component",
      "target": "components/ui/8bit/health-bar.tsx"
    },
    {
      "path": "components/ui/8bit/progress.tsx",
      "type": "registry:component",
      "target": "components/ui/8bit/progress.tsx"
    },
    {
      "path": "components/ui/8bit/styles/retro.css",
      "type": "registry:component",
      "target": "components/ui/8bit/styles/retro.css"
    }
  ]
}
```

### Key Principles

1. **Type** - Use `registry:component` for single, `registry:block` for layouts
2. **retro.css required** - Always include in files array
3. **Target path** - Same path for source and target
4. **Categories** - Use `gaming` for retro-themed blocks
5. **Dependencies** - List base shadcn/ui components (not 8-bit)
6. **Description** - Clear, concise for CLI output
7. **Files order** - Component first, retro.css last

### Adding a New Component

1. Create component in `components/ui/8bit/component.tsx`
2. Create documentation in `content/docs/components/component.mdx`
3. Add entry to `registry.json`:
   - Copy existing component as template
   - Update name, title, description
   - Set correct registryDependencies
   - Include retro.css in files
4. Test: `pnpm dlx shadcn@latest add @8bitcn/component`

### Reference

- `registry.json` - Full component registry
- `content/docs/components/*.mdx` - Component documentation
