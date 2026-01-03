import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/8bit/button";

import "./styles/retro.css";

const inputGroupVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

function InputGroup({ className, font, children, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "relative border-y-6 border-foreground dark:border-ring !p-0 flex items-center has-[textarea]:flex-col has-[input:disabled]:opacity-50 has-[textarea:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed has-[textarea:disabled]:cursor-not-allowed",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex shrink-0 items-center gap-2 px-3 py-2 [&>svg]:pointer-events-none [&>svg]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first flex-none",
        "inline-end":
          "order-last flex-none",
        "block-start":
          "order-first w-full justify-between flex-none",
        "block-end":
          "order-last w-full justify-between flex-none",
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

function InputGroupAddon({ className, align, ...props }: InputGroupAddonProps) {
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
      xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5",
      "icon-xs": "size-6",
      sm: "h-7 gap-1.5 px-2.5 has-[>svg]:px-2",
      "icon-sm": "size-7",
    },
  },
  defaultVariants: {
    inputGroupSize: "xs",
  },
})

type InputGroupButtonSize = "xs" | "icon-xs" | "sm" | "icon-sm"
type InputGroupButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size"> {
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

interface InputGroupInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  font?: "normal" | "retro"
}

function InputGroupInput({ className, font, ...props }: InputGroupInputProps) {
  return (
    <input
      data-slot="input-group-control"
      className={cn(
        "flex-1 border-0 bg-transparent px-3 py-2 text-base shadow-none outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    />
  )
}

interface InputGroupTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  font?: "normal" | "retro"
}

function InputGroupTextarea({
  className,
  font,
  ...props
}: InputGroupTextareaProps) {
  return (
    <textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 min-h-16 w-full border-0 bg-transparent px-3 py-2 text-base shadow-none outline-none resize-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        font !== "normal" && "retro",
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
