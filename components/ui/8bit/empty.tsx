"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "relative flex size-12 shrink-0 items-center justify-center bg-muted text-foreground",
      },
      font: {
        normal: "",
        retro: "retro",
      },
    },
    defaultVariants: {
      variant: "default",
      font: "retro",
    },
  }
);

function Empty({
  className,
  font,
  ...props
}: React.ComponentProps<"div"> & { font?: "normal" | "retro" }) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        font !== "normal" && "retro",
        className
      )}
      data-slot="empty"
      {...props}
    />
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      data-slot="empty-header"
      {...props}
    />
  );
}

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div className={cn("relative size-max", className)}>
      <div
        className={cn(emptyMediaVariants({ variant, className }))}
        data-slot="empty-icon"
        data-variant={variant}
        {...props}
      />
      {variant !== "default" && (
        <>
          <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="-left-1.5 pointer-events-none absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-left-1.5 pointer-events-none absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-right-1.5 pointer-events-none absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-right-1.5 pointer-events-none absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        </>
      )}
    </div>
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-medium text-lg tracking-tight", className)}
      data-slot="empty-title"
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="empty-description"
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        className
      )}
      data-slot="empty-content"
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
