import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Sheet as ShadcnSheet,
  SheetClose as ShadcnSheetClose,
  SheetDescription as ShadcnSheetDescription,
  SheetFooter as ShadcnSheetFooter,
  SheetHeader as ShadcnSheetHeader,
  SheetTitle as ShadcnSheetTitle,
  SheetTrigger as ShadcnSheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

const Sheet = ShadcnSheet;

const SheetTrigger = ShadcnSheetTrigger;

const SheetClose = ShadcnSheetClose;

const SheetDescription = ShadcnSheetDescription;

const SheetFooter = ShadcnSheetFooter;

const SheetHeader = ShadcnSheetHeader;

const SheetTitle = ShadcnSheetTitle;

export const sheetVariants = cva("", {
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

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  );
}

export type BitSheetProps = React.ComponentProps<
  typeof SheetPrimitive.Content
> &
  VariantProps<typeof sheetVariants> & {
    side?: "top" | "right" | "bottom" | "left";
  };

function SheetContent({
  className,
  children,
  side = "right",
  font,
  ...props
}: BitSheetProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto",
          sheetVariants({
            font,
            className,
          })
        )}
        data-slot="sheet-content"
        {...props}
      >
        <div className="relative h-full w-full">
          {children}
          {/* 8 bit borders */}
          {side !== "top" && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring"
            />
          )}
          {side !== "bottom" && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring"
            />
          )}
          {side !== "left" && (
            <>
              <div
                aria-hidden="true"
                className="-left-1 pointer-events-none absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              />
              <div
                aria-hidden="true"
                className="-left-1 pointer-events-none absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              />
            </>
          )}
          {side !== "right" && (
            <>
              <div
                aria-hidden="true"
                className="-right-1 pointer-events-none absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              />
              <div
                aria-hidden="true"
                className="-right-1 pointer-events-none absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring"
              />
            </>
          )}
        </div>
        <SheetPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <svg
            aria-label="x"
            className="h-6 w-6"
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
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
};
