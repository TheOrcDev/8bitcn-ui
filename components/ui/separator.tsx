"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "data-[orientation=horizontal]:bg-[length:16px_2px]  data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--primary),var(--primary)_75%,transparent_75%,transparent_100%)] shrink-0 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1 data-[orientation=vertical]:bg-[length:2px_16px] data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--primary),var(--primary)_75%,transparent_75%,transparent_100%)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
