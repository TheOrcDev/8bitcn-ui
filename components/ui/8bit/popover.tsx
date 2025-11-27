import type * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Popover as ShadcnPopover,
  PopoverAnchor as ShadcnPopoverAnchor,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

const Popover = ShadcnPopover;

const PopoverTrigger = ShadcnPopoverTrigger;

const PopoverAnchor = ShadcnPopoverAnchor;

export const popOverVariants = cva("", {
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

export interface BitPopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popOverVariants> {}

function PopoverContent({
  children,
  font,
  className,
  ...props
}: BitPopoverProps) {
  return (
    <ShadcnPopoverContent
      className={cn(
        "relative mt-1 rounded-none border-foreground border-y-6 bg-card dark:border-ring",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      {children}

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </ShadcnPopoverContent>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
