import type * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  ToggleGroup as ShadcnToggleGroup,
  ToggleGroupItem as ShadcnToggleGroupItem,
} from "../toggle-group";
import "./styles/retro.css";

export const toggleGroupVariants = cva("", {
  variants: {
    font: { normal: "", retro: "retro" },
    variant: {
      default: "bg-transparent",
      outline:
        "bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 min-w-9 px-2",
      sm: "h-4 min-w-4 px-1.5",
      lg: "h-10 min-w-10 px-2.5",
    },
  },
  defaultVariants: { variant: "default", font: "retro", size: "default" },
});

export type BitToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleGroupVariants>;

export type BitToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  VariantProps<typeof toggleGroupVariants>;

function ToggleGroup({ ...props }: BitToggleGroupProps) {
  const { className, font, children } = props;

  return (
    <ShadcnToggleGroup
      className={cn("gap-3", className, font !== "normal" && "retro")}
      {...props}
    >
      {" "}
      {children}{" "}
    </ShadcnToggleGroup>
  );
}
function ToggleGroupItem({ ...props }: BitToggleGroupItemProps) {
  const { className, font, children, variant } = props;
  return (
    <ShadcnToggleGroupItem
      className={cn(
        "relative transition-transform active:translate-x-1 active:translate-y-1",
        className,
        font !== "normal" && "retro"
      )}
      {...props}
    >
      {" "}
      {children}{" "}
      {variant === "outline" && (
        <>
          {" "}
          <div
            aria-hidden="true"
            className="-my-1.5 pointer-events-none absolute inset-0 border-foreground border-y-6 dark:border-ring"
          />{" "}
          <div
            aria-hidden="true"
            className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
          />{" "}
        </>
      )}{" "}
    </ShadcnToggleGroupItem>
  );
}

export { ToggleGroup, ToggleGroupItem };
