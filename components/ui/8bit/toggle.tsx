"use client";

import type * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { Toggle as ShadcnToggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

const toggleVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-transparent",
      outline:
        "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 min-w-9 px-2",
      sm: "h-8 min-w-8 px-1.5",
      lg: "h-10 min-w-10 px-2.5",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "retro",
    size: "default",
  },
});

export interface BitToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ children, font, ...props }: BitToggleProps) {
  const { variant, className } = props;

  return (
    <ShadcnToggle
      {...props}
      className={cn(
        "relative rounded-none border-none transition-transform active:translate-x-1 active:translate-y-1",
        "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        font !== "normal" && "retro",
        className
      )}
    >
      {children}

      {variant === "outline" && (
        <>
          <div
            aria-hidden="true"
            className="-my-1.5 pointer-events-none absolute inset-0 border-foreground border-y-6 dark:border-ring"
          />

          <div
            aria-hidden="true"
            className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
          />
        </>
      )}
    </ShadcnToggle>
  );
}

export { Toggle, toggleVariants };
