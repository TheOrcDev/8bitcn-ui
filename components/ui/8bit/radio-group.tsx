"use client";

import * as React from "react";

import { Press_Start_2P } from "next/font/google";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { RadioGroup as ShadcnRadioGroup } from "@/components/ui/radio-group";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const radioGroupVariants = cva("", {
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
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-none border-none py-3 peer border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator>
          <svg
            viewBox="0 0 256 256"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0"
            className="w-2.5"
            aria-label="square"
          >
            <rect x="30" y="35" width="200" height="200" rx="0" />
            <rect x="80" y="5" width="100" height="200" rx="0" />
            <rect x="0" y="85" width="100" height="100" rx="0" />
            <rect x="80" y="65" width="100" height="200" rx="0" />
            <rect x="200" y="85" width="100" height="100" rx="0" />
          </svg>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      <div className="absolute top-[0px] w-2.5 left-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[0px] w-2.5 right-1.5 h-1 bg-foreground dark:bg-ring" />

      <div className="absolute bottom-[0px] w-2.5 left-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[0px] w-2.5 right-1.5 h-1 bg-foreground dark:bg-ring" />

      <div className="absolute top-[4px] -left-1 w-1 h-[15px] bg-foreground dark:bg-ring" />
      <div className="absolute top-[4px] -right-1 w-1 h-[15px] bg-foreground dark:bg-ring" />

      <div className="absolute top-[2px] -right-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[2px] -left-0.5 w-1 h-1 bg-foreground dark:bg-ring" />

      <div className="absolute bottom-[2px] -right-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[2px] -left-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
