"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import type * as React from "react";
import { RadioGroup as ShadcnRadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const radioGroupVariants = cva("", {
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

function RadioGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnRadioGroup>) {
  return <ShadcnRadioGroup className={cn("", className)} {...props} />;
}

function RadioGroupItem({
  className,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<typeof RadioGroupPrimitive.Item>>;
}) {
  return (
    <div className={cn("relative", className)}>
      <RadioGroupPrimitive.Item
        className={cn(
          "peer flex size-4 shrink-0 items-center justify-center rounded-none border-input border-none py-3 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary",
          className
        )}
        ref={ref}
        {...props}
      >
        <RadioGroupPrimitive.Indicator>
          <svg
            aria-label="square"
            className="w-2.5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="200" rx="0" width="200" x="30" y="35" />
            <rect height="200" rx="0" width="100" x="80" y="5" />
            <rect height="100" rx="0" width="100" x="0" y="85" />
            <rect height="200" rx="0" width="100" x="80" y="65" />
            <rect height="100" rx="0" width="100" x="200" y="85" />
          </svg>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      <div className="absolute top-[0px] left-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-[0px] right-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />

      <div className="absolute bottom-[0px] left-1.5 h-1 w-2.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-1.5 bottom-[0px] h-1 w-2.5 bg-foreground dark:bg-ring" />

      <div className="-left-1 absolute top-[4px] h-[15px] w-1 bg-foreground dark:bg-ring" />
      <div className="-right-1 absolute top-[4px] h-[15px] w-1 bg-foreground dark:bg-ring" />

      <div className="-right-0.5 absolute top-[2px] h-1 w-1 bg-foreground dark:bg-ring" />
      <div className="-left-0.5 absolute top-[2px] h-1 w-1 bg-foreground dark:bg-ring" />

      <div className="-right-0.5 absolute bottom-[2px] h-1 w-1 bg-foreground dark:bg-ring" />
      <div className="-left-0.5 absolute bottom-[2px] h-1 w-1 bg-foreground dark:bg-ring" />
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
