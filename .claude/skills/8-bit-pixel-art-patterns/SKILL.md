---
name: 8-bit-pixel-art-patterns
description: Create pixelated borders, shadows, and effects for 8-bit retro components. Apply when building 8-bit styled UI components that need authentic pixel art aesthetics.
---

## 8-bit Pixel Art Patterns

Create authentic pixelated borders and shadows using absolute-positioned divs. These patterns are essential for the retro aesthetic of 8-bit components.

### Pixelated Border Pattern

Use 9 div elements to create a pixelated border effect:

```tsx
<div className="relative">
  <ShadcnButton {...props} className="rounded-none" />

  {/* Corner pixels */}
  <div className="absolute top-0 left-0 size-1.5 bg-foreground" />
  <div className="absolute top-0 right-0 size-1.5 bg-foreground" />
  <div className="absolute bottom-0 left-0 size-1.5 bg-foreground" />
  <div className="absolute bottom-0 right-0 size-1.5 bg-foreground" />

  {/* Edge segments */}
  <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground" />
  <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground" />
  <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground" />
  <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground" />

  {/* Side borders */}
  <div className="absolute top-1.5 -left-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground" />
  <div className="absolute top-1.5 -right-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground" />
</div>
```

### Pixelated Shadow Pattern

Add depth with pixelated shadows:

```tsx
{variant !== "outline" && (
  <>
    {/* Top shadow */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
    <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />

    {/* Bottom shadow */}
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
    <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
  </>
)}
```

### Icon Button Pattern

Smaller, self-contained pixel borders for icon buttons:

```tsx
{size === "icon" && (
  <>
    {/* Top/bottom full bars */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground" />
    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground" />

    {/* Side segments */}
    <div className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground" />
    <div className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground" />
    <div className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground" />
    <div className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground" />
  </>
)}
```

### Dark Mode Considerations

Use CSS custom properties or dark mode variants:

```tsx
<div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
```

### Key Principles

1. **Use `rounded-none`** - Remove all border radius from base components
2. **Fixed pixel sizes** - Use consistent pixel values (1.5, 3px) for retro feel
3. **Absolute positioning** - All border elements are absolute within relative container
4. **Dark mode colors** - Use `ring` or `foreground` with dark variant for contrast
5. **Conditional rendering** - Only show borders for appropriate variants (not ghost, link, icon)

### Reference Component

See `components/ui/8bit/button.tsx` for complete implementation.
