"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className={cn("relative w-full", className)}>
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      ref={ref}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-5 border-2 border-foreground bg-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 dark:border-ring dark:bg-ring" />
    </SliderPrimitive.Root>

    <div
      aria-hidden="true"
      className="-my-1 pointer-events-none absolute inset-0 border-foreground border-y-4 dark:border-ring"
    />

    <div
      aria-hidden="true"
      className="-mx-1 pointer-events-none absolute inset-0 border-foreground border-x-4 dark:border-ring"
    />
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
