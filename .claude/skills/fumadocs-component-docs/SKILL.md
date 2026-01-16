---
name: fumadocs-component-docs
description: Create component documentation with installation, usage examples, and preview sections. Apply when documenting 8-bit components with proper structure and examples.
---

## Component Documentation Pattern

Create comprehensive documentation for 8-bit components following the standard structure.

### Component Preview Structure

Wrap component examples in ComponentPreview with realistic data:

```mdx
<ComponentPreview title="8-bit ComponentName component" name="component-name">
  <div className="md:min-w-[300px] min-w-[200px] flex flex-col gap-8">
    <div>
      <p className="text-sm text-muted-foreground mb-2">
        Description of first variant
      </p>
      <ComponentName prop={value} />
    </div>
    <div>
      <p className="text-sm text-muted-foreground mb-2">
        Description of second variant
      </p>
      <ComponentName prop={value} variant="retro" />
    </div>
  </div>
</ComponentPreview>
```

### Simple Component Example

For basic components like Button:

```mdx
<ComponentPreview title="8-bit button component" name="button">
  <Button>Button</Button>
</ComponentPreview>
```

### Complex Component Example

For components with multiple sub-components like Sheet:

```mdx
<ComponentPreview title="8-bit Sheet component" name="sheet">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription className="text-xs">
          Make changes to your profile here.
        </SheetDescription>
      </SheetHeader>
      <div className="p-4 flex flex-col gap-4">
        <Label>Name</Label>
        <Input placeholder="Project name" />
      </div>
      <SheetFooter className="flex-row-reverse">
        <SheetClose asChild>
          <Button size="sm">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</ComponentPreview>
```

### Usage Section Pattern

**Single import** (simple components):

```mdx
```tsx
import { Button } from "@/components/ui/8bit/button"
```
```

**Multiple imports** (complex components):

```mdx
```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/8bit/sheet"
```
```

### Props Documentation

For components with props tables, use tables:

```mdx
### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `string` | `"default"` | Visual style variant |
| size | `string` | `"default"` | Size of the button |
| asChild | `boolean` | `false` | Whether to merge props onto child |
```

### Variant Examples

Show multiple variants in preview:

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

### Copy Command Button

Place before ComponentPreview:

```mdx
<div className="flex flex-col md:flex-row items-center justify-end gap-2 mb-2">
  <CopyCommandButton
    copyCommand="pnpm dlx shadcn@latest add @8bitcn/component-name"
    command="pnpm dlx shadcn@latest add @8bitcn/component-name"
  />
</div>
```

### Key Principles

1. **Preview first** - Show component before explaining
2. **Multiple variants** - Demonstrate different prop combinations
3. **Realistic data** - Use meaningful values in examples
4. **Import completeness** - Include all used imports
5. **Code block labels** - Use ```tsx for TypeScript
6. **8-bit components** - Import from `@/components/ui/8bit/`
7. **Consistent spacing** - Use gap-4, p-4, mb-2 patterns

### Reference Examples

- `content/docs/components/button.mdx` - Simple component pattern
- `content/docs/components/health-bar.mdx` - Variant demonstration
- `content/docs/components/sheet.mdx` - Complex sub-component pattern
