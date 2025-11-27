"use client";

import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cva } from "class-variance-authority";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const menubarVariants = cva("", {
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

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "!p-0 relative border-foreground border-y-6 dark:border-ring",
      menubarVariants({ font: "retro" }),
      className
    )}
  >
    <MenubarPrimitive.Root
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )}
      ref={ref}
      {...props}
    />
    <div
      aria-hidden="true"
      className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
    />
  </div>
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm border-transparent border-b-4 px-3 py-1.5 pt-2 font-medium text-sm outline-none focus:border-foreground focus:border-y-4 focus:border-dashed focus:text-accent-foreground data-[state=open]:border-foreground data-[state=open]:border-b-4 data-[state=open]:border-dashed data-[state=open]:text-accent-foreground data-[state=open]:dark:border-ring focus:dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    className={cn(
      "flex h-10 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:border-foreground focus:border-y-4 focus:border-dashed focus:text-accent-foreground data-[state=open]:border-foreground data-[state=open]:border-y-4 data-[state=open]:border-dashed data-[state=open]:text-accent-foreground data-[state=open]:dark:border-ring focus:dark:border-ring",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <svg
      aria-label="chevron-right"
      className="ml-auto size-7"
      fill="currentColor"
      height="50"
      stroke="currentColor"
      strokeWidth="0.25"
      viewBox="0 0 256 256"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="14" rx="1" width="14" x="128" y="136" />
      <rect height="14" rx="1" width="14" x="112" y="152" />
      <rect height="14" rx="1" width="14" x="96" y="72" />
      <rect height="14" rx="1" width="14" x="96" y="168" />
      <rect height="14" rx="1" width="14" x="144" y="120" />
      <rect height="14" rx="1" width="14" x="128" y="104" />
      <rect height="14" rx="1" width="14" x="112" y="88" />
    </svg>
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border-6 border-foreground bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 mt-1 min-w-[12rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border-6 border-foreground bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in dark:border-ring",
          menubarVariants({ font: "retro" }),
          className
        )}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    className={cn(
      "relative flex h-9 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:border-foreground focus:border-y-4 focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "relative flex h-9 cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:border-foreground focus:border-y-4 focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <svg
          aria-label="check"
          className="size-7"
          fill="currentColor"
          height="50"
          stroke="currentColor"
          strokeWidth="0.25"
          viewBox="0 0 256 256"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height="14"
            rx="1"
            transform="rotate(90 80 128)"
            width="14"
            x="80"
            y="128"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 96 144)"
            width="14"
            x="96"
            y="144"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 112 160)"
            width="14"
            x="112"
            y="160"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 128 144)"
            width="14"
            x="128"
            y="144"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 144 128)"
            width="14"
            x="144"
            y="128"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 160 112)"
            width="14"
            x="160"
            y="112"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 176 96)"
            width="14"
            x="176"
            y="96"
          />
          <rect
            height="14"
            rx="1"
            transform="rotate(90 192 80)"
            width="14"
            x="192"
            y="80"
          />
        </svg>
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    className={cn(
      "relative flex h-9 cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:border-foreground focus:border-y-4 focus:border-dashed focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest",
      className
    )}
    {...props}
  />
);
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
