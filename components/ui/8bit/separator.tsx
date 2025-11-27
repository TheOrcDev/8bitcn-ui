"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:bg-[length:16px_8px] data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--foreground)_75%,transparent_75%)] data-[orientation=vertical]:bg-[length:2px_16px] data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--foreground)_75%,transparent_75%)] dark:data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--ring)_75%,transparent_75%)] dark:data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--ring)_75%,transparent_75%)]",
        className
      )}
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
