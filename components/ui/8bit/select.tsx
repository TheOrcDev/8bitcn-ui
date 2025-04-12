import { Press_Start_2P } from "next/font/google"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectLabel as ShadcnSelectLabel,
  SelectScrollDownButton as ShadcnSelectScrollDownButton,
  SelectScrollUpButton as ShadcnSelectScrollUpButton,
  SelectSeparator as ShadcnSelectSeparator,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select"

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

export interface BitSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function Select({ ...props }: React.ComponentProps<typeof ShadcnSelect>) {
  return <ShadcnSelect {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <ShadcnSelectGroup {...props} />
}

interface BitSelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function SelectValue({ ...props }: BitSelectValueProps) {
  const { font } = props

  return (
    <ShadcnSelectValue
      className={cn(font !== "normal" && pressStart.className)}
      {...props}
    />
  )
}

interface BitSelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function SelectTrigger({ children, ...props }: BitSelectTriggerProps) {
  const { className, font } = props

  return (
    <div
      className={cn(
        "relative w-full",
        className,
        font !== "normal" && pressStart.className
      )}
    >
      <ShadcnSelectTrigger
        className={cn("rounded-none ring-0 w-full", className)}
        {...props}
      >
        {children}
      </ShadcnSelectTrigger>

      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring" />
    </div>
  )
}

export interface BitSelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

function SelectContent({
  className,
  children,
  ...props
}: BitSelectContentProps) {
  const { font } = props

  return (
    <ShadcnSelectContent
      className={cn(
        font !== "normal" && pressStart.className,
        className,
        "rounded-none border-4 border-foreground dark:border-ring -ml-[3px]"
      )}
      {...props}
    >
      {children}
    </ShadcnSelectContent>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <ShadcnSelectLabel className={cn(className)} {...props} />
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <ShadcnSelectItem className={cn(className)} {...props}>
      {children}
    </ShadcnSelectItem>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <ShadcnSelectSeparator className={cn(className)} {...props} />
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnSelectScrollUpButton>) {
  return <ShadcnSelectScrollUpButton className={cn(className)} {...props} />
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <ShadcnSelectScrollDownButton className={cn(className)} {...props} />
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
