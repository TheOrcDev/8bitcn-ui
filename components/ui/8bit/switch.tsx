"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer relative inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-xs border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-4 border border-foreground bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:border-ring dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
        )}
        data-slot="switch-thumb"
      />

      <div
        aria-hidden="true"
        className="-my-1 pointer-events-none absolute inset-0 border-foreground border-y-4 dark:border-ring"
      />

      <div
        aria-hidden="true"
        className="-mx-1 pointer-events-none absolute inset-0 border-foreground border-x-4 dark:border-ring"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
