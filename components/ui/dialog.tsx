"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <svg
          width={50}
          height={50}
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth={0.25}
          color=""
          className="w-9 h-9"
          aria-label="x"
        >
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 120 152)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 104 168)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 184 184)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 88 184)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 168 104)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 184 88)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 200 72)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 200 200)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 152 120)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 152 152)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 136 136)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 120 120)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 136 136)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 168 168)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 88 88)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 72 72)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 72 200)"
          />
          <rect
            width={14}
            height={14}
            rx={1}
            transform="matrix(0 -1 -1 0 104 104)"
          />
        </svg>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

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
)
DialogHeader.displayName = "DialogHeader"

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
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

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
}
