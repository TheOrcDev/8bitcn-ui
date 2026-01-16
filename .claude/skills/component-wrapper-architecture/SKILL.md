---
name: component-wrapper-architecture
description: Best practices for wrapping shadcn/ui components. Apply when creating 8-bit styled variants of existing shadcn/ui components.
---

## Component Wrapper Architecture

8-bit components wrap shadcn/ui components rather than replacing them. This pattern maintains compatibility while adding retro styling.

### Basic Wrapper Pattern

**Structure:**
1. Import base component with alias
2. Define variants using class-variance-authority
3. Export separate interface for props
4. Use ref prop (not forwardRef for React 19)

```tsx
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import "@/components/ui/8bit/styles/retro.css";

export const buttonVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-foreground",
      // ...
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, asChild, ...props }: BitButtonProps) {
  const { variant, size, className, font } = props;

  return (
    <ShadcnButton
      {...props}
      className={cn(
        "rounded-none active:translate-y-1 transition-transform",
        className
      )}
      size={size}
      variant={variant}
      asChild={asChild}
    >
      {children}
    </ShadcnButton>
  );
}
```

### Re-exporting Base Components

For components with multiple sub-components, re-export unchanged parts:

```tsx
import {
  Dialog as ShadcnDialog,
  DialogHeader as ShadcnDialogHeader,
  DialogFooter as ShadcnDialogFooter,
  DialogDescription as ShadcnDialogDescription,
} from "@/componentsconst Dialog = ShadcnDialog;
const DialogHeader =/ui/dialog";

 ShadcnDialogHeader;
const DialogFooter = ShadcnDialogFooter;
const DialogDescription = ShadcnDialogDescription;

export {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  // ...custom implementations
};
```

### Card Wrapper Pattern

Use outer wrapper for pixelated borders while keeping base component:

```tsx
function Card({ className, font, ...props }: BitCardProps) {
  return (
    <div
      className={cn(
        "relative border-y-6 border-foreground dark:border-ring !p-0",
        className
      )}
    >
      <ShadcnCard
        {...props}
        className={cn(
          "rounded-none border-0 !w-full",
          font !== "normal" && "retro",
          className
        )}
      />

      {/* Pixelated side borders */}
      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
```

### Key Principles

1. **Alias imports** - Use `as ShadcnComponent` pattern for base components
2. **Empty cva base** - Variants often start empty, relying on CSS for styling
3. **Separate prop interface** - Export `BitComponentProps` for TypeScript
4. **React 19 ref** - Use `ref?: React.Ref<T>` instead of forwardRef
5. **rounded-none** - Remove all border radius from base component
6. **Pass through props** - Forward all props including `size`, `variant`, `className`
7. **Conditional retro** - Use `font !== "normal" && "retro"` pattern

### Component Examples

- `components/ui/8bit/button.tsx` - Basic wrapper with pixel borders
- `components/ui/8bit/card.tsx` - Card with outer wrapper
- `components/ui/8bit/dialog.tsx` - Multi-subcomponent wrapper
