"use client";

import * as React from "react";

import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Label as ShadcnLabel } from "@/components/ui/label";

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

interface BitLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Label({ className, font, ...props }: BitLabelProps) {
  return (
    <ShadcnLabel
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    />
  );
}

export { Label };
