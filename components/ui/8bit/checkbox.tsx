import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const checkboxVariants = cva("", {
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

export interface BitCheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  asChild?: boolean;
}

function Checkbox({ className, font, ...props }: BitCheckboxProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center border-foreground border-y-6 dark:border-ring",
        className
      )}
    >
      <ShadcnCheckbox
        className={cn(
          "size-5 rounded-none border-none ring-0",
          font !== "normal" && "retro",
          className
        )}
        {...props}
      />

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </div>
  );
}

export { Checkbox };
