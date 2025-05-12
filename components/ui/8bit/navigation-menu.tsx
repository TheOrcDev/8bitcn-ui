import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  NavigationMenu as ShadcnNavigationMenu,
  NavigationMenuContent as ShadcnNavigationMenuContent,
  NavigationMenuIndicator as ShadcnNavigationMenuIndicator,
  NavigationMenuItem as ShadcnNavigationMenuItem,
  NavigationMenuLink as ShadcnNavigationMenuLink,
  NavigationMenuList as ShadcnNavigationMenuList,
  NavigationMenuTrigger as ShadcnNavigationMenuTrigger,
  NavigationMenuViewport as ShadcnNavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const navigationMenuVariants = cva("", {
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

type FontVariantProps = VariantProps<typeof navigationMenuVariants>

export interface BitNavigationMenuProps
  extends React.ComponentProps<typeof ShadcnNavigationMenu>,
    VariantProps<typeof navigationMenuVariants> {
  asChild?: boolean
}

function NavigationMenu({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenu> & FontVariantProps) {
  return (
    <ShadcnNavigationMenu
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function NavigationMenuList({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuList> &
  VariantProps<typeof navigationMenuVariants>) {
  return (
    <ShadcnNavigationMenuList
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuItem> & FontVariantProps) {
  return (
    <ShadcnNavigationMenuItem
      className={cn(
        "static",
        font !== "normal" && pressStart.className,
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuTrigger({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuTrigger> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuTrigger
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function NavigationMenuContent({
  className,
  font,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuContent> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuContent
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    >
      {children}
    </ShadcnNavigationMenuContent>
  )
}

function NavigationMenuViewport({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuViewport> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuViewport
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function NavigationMenuLink({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuLink> & FontVariantProps) {
  return (
    <ShadcnNavigationMenuLink
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuIndicator> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuIndicator
      className={cn(font !== "normal" && pressStart.className, className)}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
}
