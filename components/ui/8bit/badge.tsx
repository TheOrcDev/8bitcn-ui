import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Badge as ShadcnBadge } from "@/components/ui/badge"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const badgeVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "bg-primary border-primary",
      destructive: "bg-destructive border-destructive",
      outline: "bg-background border-background",
      secondary: "bg-secondary border-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({ children, ...props }: BitButtonProps) {
  const { variant, className, font } = props

  const color = badgeVariants({ variant, font })

  return (
    <div className={cn("relative inline-flex", className)}>
      <ShadcnBadge
        {...props}
        className={cn(
          "rounded-none",
          font !== "normal" && pressStart.className,
          className
        )}
        variant={variant}
      >
        {children}
      </ShadcnBadge>

      <div
        className={`absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 border ${color}`}
      />
      <div
        className={`absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5 border ${color}`}
      />
    </div>
  )
}

export { Badge }
