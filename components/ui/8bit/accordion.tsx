"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as React from "react";
import {
  Accordion as ShadcnAccordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export interface BitAccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  asChild?: boolean;
}

function AccordionItem({
  className,
  children,
  ...props
}: BitAccordionItemProps) {
  return (
    <ShadcnAccordionItem
      className={cn(
        "relative border-foreground border-b-4 border-dashed dark:border-ring",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnAccordionItem>
  );
}

export interface BitAccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  font?: "normal" | "retro";
}

function AccordionTrigger({
  className,
  children,
  font,
  ...props
}: BitAccordionTriggerProps) {
  return (
    <ShadcnAccordionTrigger
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    >
      {children}
    </ShadcnAccordionTrigger>
  );
}

export interface BitAccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  font?: "normal" | "retro";
}

function AccordionContent({
  className,
  children,
  font,
  ...props
}: BitAccordionContentProps) {
  return (
    <div className="relative">
      <ShadcnAccordionContent
        className={cn(
          "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          font !== "normal" && "retro",
          className
        )}
        {...props}
      >
        <div className="relative z-10 p-1 pt-0 pb-4">{children}</div>
      </ShadcnAccordionContent>

      <AccordionPrimitive.Content asChild forceMount />
    </div>
  );
}

const Accordion = ShadcnAccordion;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
