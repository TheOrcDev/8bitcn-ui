import { Press_Start_2P } from "next/font/google"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Dialog as ShadcnDialog,
  DialogClose as ShadcnDialogClose,
  DialogContent as ShadcnDialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger as ShadcnDialogTrigger,
} from "@/components/ui/dialog"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const Dialog = ShadcnDialog

const DialogTrigger = ShadcnDialogTrigger

const DialogHeader = ShadcnDialogHeader

const DialogDescription = ShadcnDialogDescription

const DialogClose = ShadcnDialogClose

const DialogFooter = ShadcnDialogFooter

export interface BitDialogProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof dialogContentVariants> {}

function DialogTitle({ ...props }: BitDialogProps) {
  const { className, font } = props
  return (
    <ShadcnDialogTitle
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

export const dialogContentVariants = cva("", {
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

function DialogContent({
  className,
  children,
  font,
  ...props
}: BitDialogProps) {
  return (
    <ShadcnDialogContent
      className={cn(
        "bg-card rounded-none border-none",
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
        className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
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
    </ShadcnDialogContent>
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogClose,
}
