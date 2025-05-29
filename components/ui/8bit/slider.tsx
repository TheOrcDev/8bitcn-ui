"use client";

import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className={cn("relative w-full", className)}>
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-5 border-2 border-foreground dark:border-ring bg-foreground dark:bg-ring ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>

    <div
      className="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none"
      aria-hidden="true"
    />

    <div
      className="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none"
      aria-hidden="true"
    />
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
