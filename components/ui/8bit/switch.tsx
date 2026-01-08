"use client";

import type * as React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-4 w-8 shrink-0 items-center border border-transparent shadow-xs transition-all outline-none border-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-primary data-[state=checked]:bg-primary-foreground dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground pointer-events-none block size-4 data-[state=checked]:border-l data-[state=unchecked]:border-r border-foreground dark:border-ring ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0"
        )}
      />

      <div
        className="absolute inset-0 border-y-4 -my-1 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
