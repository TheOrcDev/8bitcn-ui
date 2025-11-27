"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
  TooltipTrigger as ShadcnTooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const tooltipVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>,
    VariantProps<typeof tooltipVariants> {}

function TooltipContent({
  className,
  children,
  font,
  ...props
}: BitTooltipContentProps) {
  const color = tooltipVariants({ font });

  return (
    <div className={cn("relative inline-flex", className)}>
      <ShadcnTooltipContent
        {...props}
        className={cn("rounded-none", color, className)}
        data-slot="tooltip-content"
      >
        {children}
        <div
          className={cn(
            "-left-1.5 absolute top-1.5 bottom-1.5 w-1.5 bg-primary",
            color
          )}
        />
        <div
          className={cn(
            "-right-1.5 absolute top-1.5 bottom-1.5 w-1.5 bg-primary",
            color
          )}
        />
      </ShadcnTooltipContent>
    </div>
  );
}

export interface BitTooltipProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltip>,
    VariantProps<typeof tooltipVariants> {}

function Tooltip({ children, ...props }: BitTooltipProps) {
  return (
    <ShadcnTooltip data-slot="tooltip" {...props}>
      {children}
    </ShadcnTooltip>
  );
}

export interface BitTooltipProviderProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipProvider> {
  delayDuration?: number;
}

function TooltipProvider({
  children,
  delayDuration = 0,
  ...props
}: BitTooltipProviderProps) {
  return (
    <ShadcnTooltipProvider delayDuration={delayDuration} {...props}>
      {children}
    </ShadcnTooltipProvider>
  );
}

function TooltipTrigger({
  children,
  asChild = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTooltipTrigger>) {
  return (
    <ShadcnTooltipTrigger
      asChild={asChild}
      data-slot="tooltip-trigger"
      {...props}
    >
      {children}
    </ShadcnTooltipTrigger>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
