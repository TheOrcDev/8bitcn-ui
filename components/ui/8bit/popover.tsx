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
        "relative bg-card",
        font !== "normal" && pressStart.className,
        className
      )}
      {...props}
    >
      {children}
      <div
        className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnPopoverContent>
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
