import { Press_Start_2P } from "next/font/google"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from "@/components/ui/tabs"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary",
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

export interface BitTabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {
  asChild?: boolean
}

function Tabs({ className, ...props }: BitTabsProps) {
  const { font } = props

  return (
    <ShadcnTabs
      {...props}
      className={cn(
        "relative",
        font !== "normal" && pressStart.className,
        className
      )}
    />
  )
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsList>) {
  return (
    <div>
      <ShadcnTabsList
        {...props}
        className={cn("relative bg-card rounded-none mb-1", className)}
      >
        <div className="absolute -top-1.5 w-2/3 -left-0.5 h-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -top-1.5 w-2/3 -right-0.5 h-1.5 bg-foreground dark:bg-ring" />

        <div className="absolute -top-0.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-0.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />

        <div className="absolute -top-0.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-0.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />

        <div className="absolute -bottom-1.5 w-2/3 -left-0.5 h-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-1.5 w-2/3 -right-0.5 h-1.5 bg-foreground dark:bg-ring" />
        {children}
      </ShadcnTabsList>
    </div>
  )
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      className={cn(
        "border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnTabsTrigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnTabsContent>) {
  return <ShadcnTabsContent className={cn("", className)} {...props} />
}

export { Tabs, TabsList, TabsContent, TabsTrigger }
