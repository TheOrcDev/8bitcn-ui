"use client"

import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Toggle as ShadcnToggle } from "@/components/ui/toggle"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const toggleVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "bg-transparent",
      outline:
        "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "retro",
  },
})

export interface BitToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ children, font, ...props }: BitToggleProps) {
  const { variant, className } = props

  const isOutlineVariant = variant === "outline"

  return (
    <ShadcnToggle
      {...props}
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative",
        "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        font !== "normal" && pressStart.className,
        className
      )}
    >
      {children}

      <>
        {isOutlineVariant && (
          <>
            <div className="absolute -top-1 left-0 w-full h-1 bg-foreground dark:bg-ring" />
            <div className="absolute -bottom-1 w-full h-1 bg-foreground dark:bg-ring" />
            <div className="absolute top-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
            <div className="absolute bottom-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
            <div className="absolute top-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
            <div className="absolute bottom-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
          </>
        )}
      </>
    </ShadcnToggle>
  )
}

export { Toggle, toggleVariants }
