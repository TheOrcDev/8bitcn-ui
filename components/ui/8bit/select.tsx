import type * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
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
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const inputVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Select({ ...props }: React.ComponentProps<typeof ShadcnSelect>) {
  return <ShadcnSelect {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <ShadcnSelectGroup {...props} />;
}

interface BitSelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function SelectValue({ ...props }: BitSelectValueProps) {
  const { font } = props;

  return (
    <ShadcnSelectValue
      className={cn(font !== "normal" && "retro")}
      {...props}
    />
  );
}

interface BitSelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function SelectTrigger({ children, ...props }: BitSelectTriggerProps) {
  const { className, font } = props;

  return (
    <div
      className={cn(
        "relative border-foreground border-y-6 dark:border-ring",
        className,
        font !== "normal" && "retro"
      )}
    >
      <ShadcnSelectTrigger
        {...props}
        className={cn("w-full rounded-none border-0 ring-0", className)}
      >
        {children}
      </ShadcnSelectTrigger>

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </div>
  );
}

export interface BitSelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function SelectContent({
  className,
  children,
  ...props
}: BitSelectContentProps) {
  const { font } = props;

  return (
    <ShadcnSelectContent
      className={cn(
        font !== "normal" && "retro",
        className,
        "-ml-1 relative mt-1 rounded-none border-4 border-foreground dark:border-ring"
      )}
      {...props}
    >
      {children}
    </ShadcnSelectContent>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <ShadcnSelectLabel className={cn(className)} {...props} />;
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <ShadcnSelectItem
      className={cn(
        className,
        "rounded-none border-ring/0 border-y-3 border-dashed hover:border-foreground dark:hover:border-ring"
      )}
      {...props}
    >
      {children}
    </ShadcnSelectItem>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <ShadcnSelectSeparator className={cn(className)} {...props} />;
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnSelectScrollUpButton>) {
  return <ShadcnSelectScrollUpButton className={cn(className)} {...props} />;
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <ShadcnSelectScrollDownButton className={cn(className)} {...props} />;
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
};
