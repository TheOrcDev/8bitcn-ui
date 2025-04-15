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
        "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-2 min-w-9",
      sm: "h-8 px-1.5 min-w-8",
      lg: "h-10 px-2.5 min-w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "retro",
    size: "default",
  },
})

export interface BitToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ children, font, ...props }: BitToggleProps) {
  const { variant, className } = props

  return (
    <ShadcnToggle
      {...props}
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative border-none active:translate-x-1",
        "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        font !== "normal" && pressStart.className,
        className
      )}
    >
      {children}

      <>
        {variant === "outline" && (
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
