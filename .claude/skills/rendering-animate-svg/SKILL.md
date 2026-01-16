---
name: rendering-animate-svg
description: Wrap animated SVG elements in a div to enable hardware acceleration. Apply when animating SVG icons or elements, especially in 8-bit retro components with pixel art animations.
---

## Animate SVG Wrapper Instead of SVG Element

Many browsers don't have hardware acceleration for CSS3 animations on SVG elements. Wrap SVG in a `<div>` and animate the wrapper instead. Important for 8-bit components with pixel art icons and animations.

**Incorrect (animating SVG directly - no hardware acceleration):**

```tsx
function PixelSpinner() {
  return (
    <svg
      className="animate-spin"
      viewBox="0 0 16 16"
    >
      <rect x="2" y="2" width="4" height="4" fill="currentColor" />
    </svg>
  )
}
```

**Correct (animating wrapper div - hardware accelerated):**

```tsx
function PixelSpinner() {
  return (
    <div className="animate-spin">
      <svg
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <rect x="2" y="2" width="4" height="4" fill="currentColor" />
      </svg>
    </div>
  )
}
```

**For 8-bit icon components with hover effects:**

```tsx
function RetroIcon({ icon: Icon, className }: RetroIconProps) {
  return (
    <div className={cn("transition-transform hover:scale-110", className)}>
      <Icon />
    </div>
  )
}
```

This applies to all CSS transforms and transitions (`transform`, `opacity`, `translate`, `scale`, `rotate`). The wrapper div allows browsers to use GPU acceleration for smoother animations, which is especially noticeable for retro pixel art animations.
