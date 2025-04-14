import { Press_Start_2P } from "next/font/google"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from "@/components/ui/hover-card"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const hoverCardVariants = cva("", {
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

export interface BitHoverCardProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardVariants> {}

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <ShadcnHoverCard {...props} />
}

function HoverCardTrigger({
  className,
  asChild = true,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <ShadcnHoverCardTrigger
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  )
}

function HoverCardContent({
  children,
  className,
  font,
  ...props
}: BitHoverCardProps) {
  return (
    <ShadcnHoverCardContent
      className={cn(
        "relative",
        hoverCardVariants({
          font,
          className,
        })
      )}
      {...props}
    >
      {children}
      <div
        className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
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
    </ShadcnHoverCardContent>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
