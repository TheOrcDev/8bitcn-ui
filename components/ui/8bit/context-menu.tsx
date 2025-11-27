"use client";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ChevronRight, Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    className={cn(
      "flex h-8 cursor-default select-none items-center rounded-sm border-dashed px-2 py-1.5 text-sm outline-none focus:border-foreground focus:border-y-4 focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:dark:border-ring",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-context-menu-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <div className="relative">
      <ContextMenuPrimitive.Content
        className={cn(
          "fade-in-80 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] origin-[--radix-context-menu-content-transform-origin] animate-in overflow-y-auto overflow-x-hidden rounded-md border-foreground border-x-4 border-y-6 bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in dark:border-ring",
          "retro",
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
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    className={cn(
      "relative flex h-8 cursor-default select-none items-center rounded-sm border-dashed px-2 py-1.5 text-sm outline-none focus:border-foreground focus:border-y-4 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "relative flex h-8 cursor-default select-none items-center rounded-sm border-dashed py-1.5 pr-2 pl-8 text-sm outline-none focus:border-foreground focus:border-y-4 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <svg
          aria-label="check"
          className="size-9"
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
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    className={cn(
      "relative flex h-8 cursor-default select-none items-center rounded-sm border-dashed py-1.5 pr-2 pl-8 text-sm outline-none focus:border-foreground focus:border-y-4 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:dark:border-ring",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    className={cn(
      "px-2 py-1.5 font-semibold text-foreground text-sm",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
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
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
