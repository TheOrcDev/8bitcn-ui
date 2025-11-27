"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCaption as ShadcnTableCaption,
  TableCell as ShadcnTableCell,
  TableFooter as ShadcnTableFooter,
  TableHead as ShadcnTableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const tableVariants = cva("", {
  variants: {
    variant: {
      default: "border-foreground border-y-6 p-4 py-2.5 dark:border-ring",
      borderless: "",
    },
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
  },
});

function Table({
  className,
  font,
  variant,
  ...props
}: React.ComponentProps<"table"> & {
  font?: VariantProps<typeof tableVariants>["font"];
  variant?: VariantProps<typeof tableVariants>["variant"];
}) {
  return (
    <div
      className={cn(
        "relative flex w-fit justify-center",
        tableVariants({ font, variant })
      )}
    >
      <ShadcnTable className={className} {...props} />

      {variant !== "borderless" && (
        <div
          aria-hidden="true"
          className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
        />
      )}
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <ShadcnTableHeader
      className={cn(className, "border-foreground border-b-4 dark:border-ring")}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <ShadcnTableBody className={cn(className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <ShadcnTableFooter className={cn(className)} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <ShadcnTableRow
      className={cn(
        className,
        "border-foreground border-b-4 border-dashed dark:border-ring"
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return <ShadcnTableHead className={cn(className)} {...props} />;
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <ShadcnTableCell className={cn(className)} {...props} />;
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return <ShadcnTableCaption className={cn(className)} {...props} />;
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
