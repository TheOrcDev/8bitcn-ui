import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"
import {
  ScrollArea as ShadcnScrollArea,
  ScrollBar as ShadcnScrollbar,
} from "@/components/ui/scroll-area"

const ScrollArea = ShadcnScrollArea

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ShadcnScrollbar
      className={cn("bg-red-300", className)}
      {...props}
    ></ShadcnScrollbar>
  )
}

export { ScrollArea, ScrollBar }
