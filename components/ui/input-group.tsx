import type * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputGroupVariants = cva(
  "flex min-w-0 relative items-center has-[input:disabled]:opacity-50 has-[textarea:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed has-[textarea:disabled]:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border-input rounded-md border shadow-xs focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-destructive/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

function InputGroup({ className, variant, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      className={cn(inputGroupVariants({ variant }), className)}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex shrink-0 items-center gap-2 px-3 [&>svg]:pointer-events-none [&>svg]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first row-span-full self-stretch border-r border-transparent",
        "inline-end":
          "order-last row-span-full self-stretch border-l border-transparent",
        "block-start":
          "order-first w-full justify-between border-b border-transparent py-2",
        "block-end":
          "order-last w-full justify-between border-t border-transparent py-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupAddonVariants> {}

function InputGroupAddon({
  className,
  align,
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      data-slot="input-group-addon"
      className={cn(inputGroupAddonVariants({ align }), className)}
      {...props}
    />
  )
}

function InputGroupText({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva("", {
  variants: {
    inputGroupSize: {
      xs: "h-6 gap-1 rounded-sm px-2 text-xs has-[>svg]:px-1.5",
      "icon-xs": "size-6 rounded-sm",
      sm: "h-7 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2",
      "icon-sm": "size-7 rounded-md",
    },
  },
  defaultVariants: {
    inputGroupSize: "xs",
  },
})

type InputGroupButtonSize = "xs" | "icon-xs" | "sm" | "icon-sm"
type InputGroupButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size" | "variant"> {
  size?: InputGroupButtonSize
  variant?: InputGroupButtonVariant
}

function InputGroupButton({
  className,
  size = "xs",
  variant = "ghost",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      data-slot="input-group-button"
      size="sm"
      variant={variant}
      className={cn(inputGroupButtonVariants({ inputGroupSize: size }), className)}
      {...props}
    />
  )
}

interface InputGroupInputProps extends React.ComponentProps<typeof Input> {}

function InputGroupInput({ className, ...props }: InputGroupInputProps) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 border-0 shadow-none focus-visible:ring-0",
        className
      )}
      {...props}
    />
  )
}

interface InputGroupTextareaProps
  extends React.ComponentProps<typeof Textarea> {}

function InputGroupTextarea({ className, ...props }: InputGroupTextareaProps) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 border-0 shadow-none focus-visible:ring-0",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
}
