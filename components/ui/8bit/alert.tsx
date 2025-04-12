import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Alert as ShadcnAlert,
  AlertDescription as ShadcnAlertDescription,
  AlertTitle as ShadcnAlertTitle,
} from "@/components/ui/alert"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const alertVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "bg-card text-card-foreground",
      destructive:
        "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BitAlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

function Alert({ children, ...props }: BitAlertProps) {
  const { variant, className, font } = props

  return (
    <div className={cn("relative", className)}>
      <ShadcnAlert
        {...props}
        variant={variant}
        className={cn(
          "relative rounded-none border-none bg-background",
          font !== "normal" && pressStart.className,
          className
        )}
      >
        {children}
      </ShadcnAlert>

      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  )
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertTitle
      className={cn("line-clamp-1 font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertDescription
      className={cn(
        "text-muted-foreground grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
