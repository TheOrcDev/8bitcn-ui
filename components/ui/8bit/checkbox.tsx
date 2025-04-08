import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Press_Start_2P } from "next/font/google";
import { cva, VariantProps } from "class-variance-authority";

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
    <div className="relative">
      <ShadcnCheckbox
        className={cn(
          "rounded-none h-5 w-5 border-none bg-input data-[state=checked]:bg-foreground",
          font !== "normal" && pressStart.className,
          className
        )}
        {...props}
      />
      
      <div className="absolute top-0 left-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    </div>
  );
}

export { Checkbox };