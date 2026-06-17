import type * as React from "react";

import { cn } from "@/lib/utils";

import {
  ButtonGroup as ShadcnButtonGroup,
  ButtonGroupText as ShadcnButtonGroupText,
  buttonGroupVariants,
} from "@/components/ui/button-group";
import { Separator } from "@/components/ui/8bit/separator";

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
        className={cn(className)}
        orientation={orientation}
        {...props}
      >
        {children}
      </ShadcnButtonGroup>
    </div>
  );
}

// ─── ButtonGroupSeparator ────────────────────────────────────────────────────

export type BitButtonGroupSeparatorProps = React.ComponentProps<
  typeof Separator
>;

/**
 * 8-bit ButtonGroupSeparator renders a pixel-art dashed divider between items.
 * Wraps the 8-bit Separator component (which uses a pixel-dash background pattern).
 * Defaults to `orientation="vertical"` for use inside a horizontal ButtonGroup.
 */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: BitButtonGroupSeparatorProps) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn("relative m-0! self-stretch", className)}
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
