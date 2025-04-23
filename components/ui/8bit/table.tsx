"use client"

import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCaption as ShadcnTableCaption,
  TableCell as ShadcnTableCell,
  TableFooter as ShadcnTableFooter,
  TableHead as ShadcnTableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const tableVariants = cva("", {
  variants: {
    variant: {
      default: "p-4 py-2.5 border-y-6 border-foreground dark:border-ring",
      borderless: "",
    },
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
  },
})

function Table({
  className,
  font,
  variant,
  ...props
}: React.ComponentProps<"table"> & {
  font?: VariantProps<typeof tableVariants>["font"]
  variant?: VariantProps<typeof tableVariants>["variant"]
}) {
  return (
    <div
      className={cn(
        "relative flex justify-center w-fit",
        tableVariants({ font, variant })
      )}
    >
      <ShadcnTable className={className} {...props} />

      {variant !== "borderless" && (
        <div
          className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <ShadcnTableHeader className={cn(className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <ShadcnTableBody className={cn(className)} {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <ShadcnTableFooter className={cn(className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <ShadcnTableRow
      className={cn(
        className,
        "border-dashed border-foreground dark:border-ring"
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return <ShadcnTableHead className={cn(className)} {...props} />
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <ShadcnTableCell className={cn(className)} {...props} />
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return <ShadcnTableCaption className={cn(className)} {...props} />
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
}
