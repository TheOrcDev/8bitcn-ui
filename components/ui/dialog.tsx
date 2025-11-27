"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:rounded-lg",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <svg
          aria-label="x"
          className="h-9 w-9"
          color=""
          fill="currentColor"
          height={50}
          stroke="currentColor"
          strokeWidth={0.25}
          viewBox="0 0 256 256"
          width={50}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 120 152)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 104 168)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 184 184)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 88 184)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 168 104)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 184 88)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 200 72)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 200 200)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 152 120)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 152 152)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 136 136)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 120 120)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 136 136)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 168 168)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 88 88)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 72 72)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 72 200)"
            width={14}
          />
          <rect
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 104 104)"
            width={14}
          />
        </svg>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn(
      "font-semibold text-lg leading-none tracking-tight",
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
