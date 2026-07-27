import type * as React from "react";

import { cn } from "@/lib/utils";

import {
  ButtonGroup as ShadcnButtonGroup,
  ButtonGroupText as ShadcnButtonGroupText,
  buttonGroupVariants,
} from "@/components/ui/button-group";

import "@/components/ui/8bit/styles/retro.css";

export { buttonGroupVariants };

// ─── ButtonGroup ──────────────────────────────────────────────────────────────

export type BitButtonGroupProps = React.ComponentProps<
  typeof ShadcnButtonGroup
>;

/**
 * 8-bit ButtonGroup wraps the shadcn ButtonGroup and adds a shared retro
 * pixelated border around the whole group.
 *
 * API matches shadcn: `orientation`, `data-slot="button-group"`.
 * No React context — child button sizing and layout is handled via CSS
 * child selectors in `buttonGroupVariants`, identical to shadcn.
 */
function ButtonGroup({
  className,
  orientation = "horizontal",
  children,
  ...props
}: BitButtonGroupProps) {
  return (
    <div
      className={cn(
        "relative inline-flex",
        orientation === "vertical" ? "flex-col" : "flex-row"
      )}
    >
      {/* Shared outer pixelated border */}
      {/* Top */}
      <div className="absolute -top-1.5 left-1.5 right-1.5 h-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      {/* Bottom */}
      <div className="absolute -bottom-1.5 left-1.5 right-1.5 h-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      {/* Left */}
      <div className="absolute -left-1.5 top-1.5 bottom-1.5 w-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      {/* Right */}
      <div className="absolute -right-1.5 top-1.5 bottom-1.5 w-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      {/* Corners */}
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring pointer-events-none z-10" />

      <ShadcnButtonGroup
        className={cn(
          // The group draws one shared border, so the per-button pixel borders
          // would double it up on the outer edges and paint across every
          // junction.
          "[&_[data-slot=button-decorations]]:hidden",
          className
        )}
        orientation={orientation}
        {...props}
      >
        {children}
      </ShadcnButtonGroup>
    </div>
  );
}

// ─── ButtonGroupSeparator ────────────────────────────────────────────────────

export type BitButtonGroupSeparatorProps = React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};

/**
 * 8-bit ButtonGroupSeparator renders a solid pixel divider between items.
 * Defaults to `orientation="vertical"` for use inside a horizontal ButtonGroup.
 *
 * This deliberately does not reuse the 8-bit Separator: that one paints a
 * dashed pattern whose transparent segments would expose the page background
 * through the group, reading as gaps between the buttons. It is also sized to
 * the same 6px grid as the group's border rather than the Separator's 2px.
 */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: BitButtonGroupSeparatorProps) {
  return (
    <div
      aria-orientation={orientation}
      className={cn(
        "shrink-0 self-stretch bg-foreground dark:bg-ring",
        orientation === "vertical" ? "w-1.5" : "h-1.5",
        className
      )}
      data-orientation={orientation}
      data-slot="button-group-separator"
      role="separator"
      {...props}
    />
  );
}

// ─── ButtonGroupText ─────────────────────────────────────────────────────────

export type BitButtonGroupTextProps = React.ComponentProps<
  typeof ShadcnButtonGroupText
>;

/**
 * 8-bit ButtonGroupText renders a retro-styled text label inside a ButtonGroup.
 * Useful for split-button patterns (e.g. a label prefix before action buttons).
 */
function ButtonGroupText({ className, ...props }: BitButtonGroupTextProps) {
  return (
    <ShadcnButtonGroupText
      className={cn("rounded-none border-none retro", className)}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
