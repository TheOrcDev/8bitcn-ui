"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent as ShadcnCollapsibleContent,
  CollapsibleTrigger as ShadcnCollapsibleTrigger,
} from "@radix-ui/react-collapsible";

import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export interface BitCollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  asChild?: boolean;
}

function Collapsible({ children, ...props }: BitCollapsibleProps) {
  const { className } = props;

  return (
    <div className={cn("relative", className)}>
      <ShadcnCollapsible
        {...props}
        className={cn(className, pressStart.className)}
      >
        {children}
      </ShadcnCollapsible>
    </div>
  );
}

function CollapsibleTrigger({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  const { className } = props;
  return (
    <ShadcnCollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnCollapsibleTrigger>
  );
}

function CollapsibleContent({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  const { className } = props;
  return (
    <ShadcnCollapsibleContent
      data-slot="collapsible-content"
      className={cn(className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnCollapsibleContent>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
