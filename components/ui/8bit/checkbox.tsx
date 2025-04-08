import * as React from "react";

import { Press_Start_2P } from "next/font/google";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const checkboxVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
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
    <div className={cn("relative flex items-center justify-center", className)}>
      <ShadcnCheckbox
        className={cn(
          "rounded-none size-5 ring-0 border-none",
          font !== "normal" && pressStart.className,
          className
        )}
        {...props}
      />

      <div className="absolute -top-1 left-0 w-full h-1 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1 w-full h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring" />
    </div>
  );
}

export { Checkbox };
