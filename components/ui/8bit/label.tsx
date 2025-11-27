"use client";

import type * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { Label as ShadcnLabel } from "@/components/ui/label";
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
