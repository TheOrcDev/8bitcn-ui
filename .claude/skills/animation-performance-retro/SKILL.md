---
name: animation-performance-retro
description: Optimize 8-bit animations for smooth performance. Apply when creating animated pixel art, game UI effects, or any retro-styled animations.
---

## Animation Performance for Retro UI

Optimize animations for smooth pixel art rendering and game-like interfaces.

### Hardware Acceleration

Use CSS transforms for GPU-accelerated animations:

```tsx
<div className="transition-transform hover:scale-110" />
<div className="translate-x-0 translate-y-0" />
```

**Avoid animating:**
- `width`, `height` (triggers layout)
- `margin`, `padding` (triggers layout)
- `top`, `left` (triggers layout)

**Prefer animating:**
- `transform` (GPU accelerated)
- `opacity` (GPU accelerated)
- `filter` (GPU accelerated)

### Pixelated Animations

Wrap animated SVGs in divs for hardware acceleration:

```tsx
function PixelSpinner() {
  return (
    <div className="animate-spin">
      <svg viewBox="0 0 16 16">
        <rect x="2" y="2" width="4" height="4" fill="currentColor" />
      </svg>
    </div>
  );
}
```

### Loading States

Use pulse animations for retro loading indicators:

```tsx
function RetroSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="h-20 bg-muted" />
    </div>
  );
}
```

### Custom Retro Animations

Define pixel-art-specific animations:

```tsx
<div
  className="retro animate-[blink_0.5s_step-end_infinite]"
  style={{
    textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff"
  }}
>
  LEVEL UP!
</div>

<style>{`
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`}</style>
```

### Conditional Animation States

Apply animations based on game state:

```tsx
<div
  className={cn(
    "transition-all duration-300",
    health <= 25 && "animate-pulse bg-red-500/20",
    isLevelUp && "animate-bounce"
  )}
/>
```

### Radix UI Animations

Use Radix state-based animations for overlays:

```tsx
<DialogContent
  className={cn(
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
  )}
/>

<AccordionContent
  className={cn(
    "overflow-hidden data-[state=closed]:animate-accordion-up",
    "data-[state=open]:animate-accordion-down"
  )}
/>
```

### Key Principles

1. **Wrap SVGs** - Always wrap in div for hardware acceleration
2. **Use transforms** - Prefer `transform` over `top`/`left`
3. **Step animations** - Use `step-end` for pixel-art feel
4. **Conditional classes** - Apply animations based on game state
5. **Custom keyframes** - Define retro-specific animations
6. **Text shadows** - White shadow for legibility on colored backgrounds

### Performance Checklist

- [ ] Animated elements wrapped in divs
- [ ] No layout-triggering properties animated
- [ ] Loading states use `animate-pulse`
- [ ] Conditional animations properly gated
- [ ] Custom animations use step timing functions

### Reference Components

- `components/ui/8bit/spinner.tsx` - Animated spinner
- `components/ui/8bit/xp-bar.tsx` - Custom blink animation
- `components/ui/8bit/skeleton.tsx` - Loading skeleton
- `components/ui/8bit/accordion.tsx` - Radix state animations
