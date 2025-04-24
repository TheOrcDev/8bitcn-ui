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
            <div
              className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
              aria-hidden="true"
            />
          </>
        )}
      </>
    </ShadcnToggle>
  )
}

export { Toggle, toggleVariants }
