import { Press_Start_2P } from "next/font/google"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuGroup as ShadcnDropdownMenuGroup,
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownMenu = ShadcnDropdownMenu

const DropdownMenuPortal = ShadcnDropdownMenuPortal

const DropdownMenuTrigger = ShadcnDropdownMenuTrigger

const DropdownMenuGroup = ShadcnDropdownMenuGroup

const DropdownMenuLabel = ShadcnDropdownMenuLabel

const DropdownMenuSeparator = ShadcnDropdownMenuSeparator

const DropdownMenuShortcut = ShadcnDropdownMenuShortcut

const DropdownMenuSub = ShadcnDropdownMenuSub

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuSubTrigger>) {
  return (
    <ShadcnDropdownMenuSubTrigger
      className={cn(
        "hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-none border-dotted border-y-4 border-transparent focus:border-foreground hover:border-foreground dark:focus:border-ring bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-foreground dark:data-[state=open]:border-ring",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnDropdownMenuSubTrigger>
  )
}

function DropdownMenuItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <ShadcnDropdownMenuItem
      className={cn(
        "hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-none border-dotted border-y-4 border-transparent focus:border-foreground hover:border-foreground dark:focus:border-ring bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnDropdownMenuItem>
  )
}

export const dropDownVariants = cva("", {
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

function DropdownMenuSubContent({
  children,
  className,
  font,
  ...props
}: BitDropownMenuContentProps) {
  return (
    <ShadcnDropdownMenuSubContent
      {...props}
      className={cn(
        "bg-popover",
        font !== "normal" && pressStart.className,
        className
      )}
    >
      {children}

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnDropdownMenuSubContent>
  )
}

export interface BitDropownMenuContentProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof dropDownVariants> {}

function DropdownMenuContent({
  children,
  font,
  className,
  ...props
}: BitDropownMenuContentProps) {
  return (
    <ShadcnDropdownMenuContent
      className={cn(
        "bg-popover mt-1 py-2",
        font !== "normal" && pressStart.className,
        className
      )}
      {...props}
    >
      {children}

      <div
        className="mt-2.5 absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="mt-1 absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnDropdownMenuContent>
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
  DropdownMenuSub,
}
