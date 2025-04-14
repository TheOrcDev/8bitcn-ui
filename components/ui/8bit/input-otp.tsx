import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  InputOTP as ShadcnInputOTP,
  InputOTPGroup as ShadcnInputOTPGroup,
  InputOTPSeparator as ShadcnInputOTPSeparator,
  InputOTPSlot as ShadcnInputOTPSlot,
} from "@/components/ui/input-otp"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const inputVariants = cva("", {
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

interface SharedProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof inputVariants> {
  className?: string
  children?: React.ReactNode
}

export const InputOTP = ({ className, font, ...props }: SharedProps) => {
  return (
    <div className={cn("relative w-fit", className)}>
      <ShadcnInputOTP
        {...props}
        className={cn(font !== "normal" && pressStart.className, className)}
      />
    </div>
  )
}

export const InputOTPGroup = ({ className, ...props }: SharedProps) => {
  return (
    <ShadcnInputOTPGroup {...props} className={cn("flex gap-2", className)} />
  )
}

export const InputOTPSlot = ({
  className,
  font,
  index,
  ...props
}: SharedProps & { index?: number }) => {
  return (
    <div className="relative w-12 h-12">
      <ShadcnInputOTPSlot
        index={index}
        {...props}
        className={cn(
          "w-full h-full text-center text-xl tracking-widest caret-transparent border-none bg-background",
          font !== "normal" && pressStart.className,
          className
        )}
      />
      {/* 8-bit border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    </div>
  )
}

export const InputOTPSeparator = ({ className, ...props }: SharedProps) => {
  return <ShadcnInputOTPSeparator {...props} className={cn("", className)} />
}
