import { Press_Start_2P } from "next/font/google"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Popover as ShadcnPopover,
  PopoverAnchor as ShadcnPopoverAnchor,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/ui/popover"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const Popover = ShadcnPopover

const PopoverTrigger = ShadcnPopoverTrigger

const PopoverAnchor = ShadcnPopoverAnchor

export const popOverVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitPopoverProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof popOverVariants> {}

function PopoverContent({
  children,
  font,
  className,
  ...props
}: BitPopoverProps) {
  return (
    <ShadcnPopoverContent
      className={cn(
        "relative bg-card border-y-6 border-foreground dark:border-ring rounded-none mt-1",
        font !== "normal" && pressStart.className,
        className
      )}
      {...props}
    >
      {children}

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnPopoverContent>
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
