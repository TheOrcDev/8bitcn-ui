"use client"

import type * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider as ShadcnTooltipProvider,
  TooltipTrigger as ShadcnTooltipTrigger,
} from "@/components/ui/tooltip"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const tooltipVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>,
    VariantProps<typeof tooltipVariants> {}

function TooltipContent({
  className,
  children,
  font,
  ...props
}: BitTooltipContentProps) {
  const color = tooltipVariants({ font })

  return (
    <div className={cn("relative inline-flex", className)}>
      <ShadcnTooltipContent
        {...props}
        data-slot="tooltip-content"
        className={cn("rounded-none", color, className)}
      >
        {children}
        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-primary",
            color
          )}
        />
        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5 bg-primary ",
            color
          )}
        />
      </ShadcnTooltipContent>
    </div>
  )
}

export interface BitTooltipProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltip>,
    VariantProps<typeof tooltipVariants> {}

function Tooltip({ children, ...props }: BitTooltipProps) {
  return (
    <ShadcnTooltip data-slot="tooltip" {...props}>
      {children}
    </ShadcnTooltip>
  )
}

export interface BitTooltipProviderProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipProvider> {
  delayDuration?: number
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
  )
}

function TooltipTrigger({
  children,
  asChild = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnTooltipTrigger>) {
  return (
    <ShadcnTooltipTrigger
      data-slot="tooltip-trigger"
      asChild={asChild}
      {...props}
    >
      {children}
    </ShadcnTooltipTrigger>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
