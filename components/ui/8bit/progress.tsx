import { Press_Start_2P } from "next/font/google"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const progressVariants = cva("", {
  variants: {
    variant: {
      default: "",
      retro: pressStart.className,
    },
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  className?: string
  font?: VariantProps<typeof progressVariants>["font"]
}

function Progress({ ...props }: BitProgressProps) {
  const { className, font } = props

  return (
    <div className={cn("relative w-full", className)}>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          font !== "normal" && pressStart.className,
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            "h-full transition-all",
            props.variant === "retro" ? "flex" : "bg-primary w-full flex-1"
          )}
          style={
            props.variant === "retro"
              ? undefined
              : { transform: `translateX(-${100 - (props.value || 0)}%)` }
          }
        >
          {props.variant === "retro" && (
            <div className="flex w-full">
              {Array.from({ length: 20 }).map((_, i) => {
                const filledSquares = Math.round(
                  ((props.value || 0) / 100) * 20
                )
                return (
                  <div
                    key={i}
                    className={cn(
                      "size-2 mx-[1px] w-full",
                      i < filledSquares ? "bg-primary" : "bg-transparent"
                    )}
                  />
                )
              })}
            </div>
          )}
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>

      <div className="absolute -top-1 left-0 w-full h-[4px] bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-foreground dark:bg-ring pointer-events-none" />

      <div className="absolute top-0 -right-1 w-1.5 h-full bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-0 -left-1 w-1.5 h-full bg-foreground dark:bg-ring pointer-events-none" />
    </div>
  )
}

export { Progress }
