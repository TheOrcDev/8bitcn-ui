"use client"

import React, { useEffect, useState } from "react"
import { Press_Start_2P } from "next/font/google"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const sliderVariants = cva("", {
  variants: {
    variant: {
      default: "",
      retro: pressStart.className,
    },
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  className?: string
  font?: VariantProps<typeof sliderVariants>["font"]
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  BitSliderProps
>(({ className, font, variant, onValueChange, ...props }, ref) => {
  const [currentValue, setCurrentValue] = useState<number[]>(
    Array.isArray(props.value)
      ? props.value
      : Array.isArray(props.defaultValue)
        ? props.defaultValue
        : [0]
  )

  useEffect(() => {
    if (props.value) {
      setCurrentValue(props.value)
    }
  }, [props.value])

  const handleValueChange = (value: number[]) => {
    setCurrentValue(value)
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <SliderPrimitive.Root
        ref={ref}
        data-slot="slider"
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          font !== "normal" && pressStart.className
        )}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative h-2 w-full grow overflow-hidden rounded-none bg-primary/20"
          )}
        >
          {variant === "retro" ? (
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0 h-full w-full flex">
                {Array.from({ length: 20 }).map((_, i) => {
                  const percentage = (currentValue[0] || 0) / (props.max || 100)
                  const filledSquares = Math.round(percentage * 20)

                  return (
                    <div
                      key={i}
                      className={cn(
                        "h-full mx-[1px] flex-1",
                        i < filledSquares ? "bg-primary" : "bg-transparent"
                      )}
                    />
                  )
                })}
              </div>
            </div>
          ) : (
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          )}
        </SliderPrimitive.Track>

        {variant === "retro" ? (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            className="relative block size-6"
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-2 border-foreground dark:border-ring bg-background">
              <div className="w-full h-full border-r border-b border-foreground dark:border-ring"></div>
              <div className="w-full h-full border-l border-b border-foreground dark:border-ring"></div>
              <div className="w-full h-full border-r border-t border-foreground dark:border-ring"></div>
              <div className="w-full h-full border-l border-t border-foreground dark:border-ring"></div>
            </div>
          </SliderPrimitive.Thumb>
        ) : (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            className="block h-5 w-5 border-2 border-foreground dark:border-ring bg-background shadow rounded-full"
          />
        )}
      </SliderPrimitive.Root>

      <div className="absolute -top-1 left-0 w-full h-[4px] bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-0 -right-1 w-1.5 h-full bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-0 -left-1 w-1.5 h-full bg-foreground dark:bg-ring pointer-events-none" />
    </div>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
