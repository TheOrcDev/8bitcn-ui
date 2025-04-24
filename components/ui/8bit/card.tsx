import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Card as ShadcnCard,
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const cardVariants = cva("", {
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

export interface BitCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

function Card({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <div
      className={cn(
        "relative border-y-6 border-foreground dark:border-ring !p-0",
        className
      )}
    >
      <ShadcnCard
        {...props}
        className={cn(
          "rounded-none border-0 !w-full",
          font !== "normal" && pressStart.className,
          className
        )}
      />

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

function CardHeader({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardHeader
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function CardTitle({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardTitle
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function CardDescription({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardDescription
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function CardAction({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardAction
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function CardContent({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardContent
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function CardFooter({ ...props }: BitCardProps) {
  const { className, font } = props

  return (
    <ShadcnCardFooter
      data-slot="card-footer"
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
