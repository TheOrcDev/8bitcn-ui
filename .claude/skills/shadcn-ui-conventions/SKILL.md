---
name: shadcn-ui-conventions
description: UI component conventions for 8-bit styled components. Use when working with shadcn/ui components or implementing retro-styled UI elements.
---

## UI Component Conventions

The `components/ui` directory uses different conventions from the rest of the project. It's excluded from Biome/Ultracite linting to preserve shadcn/ui patterns.

### When to use this skill
- When creating new UI components
- When modifying existing shadcn/ui components
- When implementing 8-bit retro styling
- When working with component imports and types

### Linting

- **Biome excludes this directory**: `biome.jsonc` has `"!components/ui"` in the includes
- **No Ultracite formatting**: Components use their own patterns
- **Run lint manually** when needed: `npx biome check components/ui/`

### Import Patterns

**Base components** (e.g., `button.tsx`):

```tsx
import type * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
```

**8bit components** (e.g., `8bit/button.tsx`):

```tsx
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Button as ShadcnButton } from "@/components/ui/button";

import "@/components/ui/8bit/styles/retro.css";
```

Import order:
1. External libraries (class-variance-authority, @radix-ui)
2. Internal utils (`@/lib/utils`)
3. Base component alias (`@/components/ui/component`)
4. Retro stylesheet (`@/components/ui/8bit/styles/retro.css`)

### Type Definitions

**Base components**: Inline props type with function

```tsx
function Button({
  className,
  variant,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  })
```

**8bit components**: Export interface separately

```tsx
export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, asChild, ...props }: BitButtonProps)
```

### Ref Handling

**Base components**: Use `React.forwardRef`

```tsx
const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} {...props} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
```

**8bit components**: Use `ref` prop (React 19 pattern)

```tsx
export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ ref, ...props }: BitButtonProps) {
  return <ShadcnButton ref={ref} {...props} />
}
```

### 8bit Component Patterns

**Retro CSS import**: Required for all 8bit components

```tsx
import "@/components/ui/8bit/styles/retro.css";
```

**Base component alias**: Import base component with alias

```tsx
import { Button as ShadcnButton } from "@/components/ui/button";
```

**Variant overrides**: 8bit variants often have minimal styles (borders/colors handled by CSS)

```tsx
export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-foreground",
      // ...
    },
  },
});
```

### Reference Files

- `components/ui/button.tsx` - Base component example
- `components/ui/8bit/button.tsx` - 8bit wrapper example
- `components/ui/dialog.tsx` - Complex base component with Radix primitives
