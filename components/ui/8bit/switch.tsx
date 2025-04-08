"use client";

import * as React from "react";
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
        "relative peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 border border-foreground dark:border-ring ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />

      <div className="absolute -top-1 left-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute -bottom-1 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />

      <div className="absolute top-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
