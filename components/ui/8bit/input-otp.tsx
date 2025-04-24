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
  extends React.ComponentProps<"div">,
    VariantProps<typeof inputVariants> {
  className?: string
  children?: React.ReactNode
}

interface InputOTPProps {
  maxLength: number
  value?: string
  onChange?: (value: string) => unknown
  children?: React.ReactNode
  className?: string
  font?: "normal" | "retro"
}

export const InputOTP = ({
  className,
  font,
  maxLength,
  value,
  onChange,
  children,
  ...otherProps
}: InputOTPProps) => {
  return (
    <div className={cn("relative w-fit", className)}>
      <ShadcnInputOTP
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        {...otherProps}
        className={cn(font !== "normal" && pressStart.className, className)}
      >
        {children}
      </ShadcnInputOTP>
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
  index = 0,
  ...props
}: SharedProps & { index?: number }) => {
  return (
    <div className="relative size-12 border-y-6 border-foreground dark:border-ring">
      <ShadcnInputOTPSlot
        index={index}
        {...props}
        className={cn(
          "pl-1 size-full text-center text-xl tracking-widest z-0 ring-0 border-transparent ",
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

export const InputOTPSeparator = ({ className, ...props }: SharedProps) => {
  return <ShadcnInputOTPSeparator {...props} className={cn("", className)} />
}
