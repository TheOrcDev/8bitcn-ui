import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Input as ShadcnInput } from "@/components/ui/input"

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

export interface BitInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function Input({ ...props }: BitInputProps) {
  const { className, font } = props

  return (
    <div className={cn("relative w-full", className)}>
      <ShadcnInput
        {...props}
        className={cn(
          "rounded-none transition-transform ring-0",
          font !== "normal" && pressStart.className,
          className
        )}
      />

      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    </div>
  )
}

export { Input }
