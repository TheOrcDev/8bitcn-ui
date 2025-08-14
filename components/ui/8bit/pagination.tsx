import { type VariantProps, cva } from "class-variance-authority";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import { ChevronLeftIcon } from "@/components/ui/8bit/assets/chevronLeftIcon";
import { ChevronRightIcon } from "@/components/ui/8bit/assets/chevronRightIcon";
import {
  Pagination as ShadcnPagination,
  PaginationContent as ShadcnPaginationContent,
  PaginationEllipsis as ShadcnPaginationEllipsis,
  PaginationItem as ShadcnPaginationItem,
  PaginationLink as ShadcnPaginationLink,
} from "@/components/ui/pagination";

import { Button } from "../button";
import "./styles/retro.css";

export const paginationVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "text-card-foreground",
      destructive:
        "text-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BitPaginationProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & VariantProps<typeof paginationVariants>;

function Pagination({ ...props }: BitPaginationProps<"nav">) {
  const { variant, className, font } = props;
  return (
    <ShadcnPagination
      {...props}
      className={cn(
        paginationVariants({ variant }),
        font !== "normal" && "retro",
        className
      )}
    />
  );
}

function PaginationContent({ ...props }: BitPaginationProps<"ul">) {
  const { className, font } = props;
  return (
    <ShadcnPaginationContent
      className={cn("gap-2", font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: BitPaginationProps<"li">) {
  const { className, font } = props;
  return (
    <ShadcnPaginationItem
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  BitPaginationProps<"a">;

function PaginationLink({ ...props }: PaginationLinkProps) {
  const { font, children, isActive, className } = props;
  return (
    <ShadcnPaginationLink
      className={cn(
        font !== "normal" && "retro",
        className,
        "relative group",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border-y-4 border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        "hover:border-foreground focus:border-foreground",
        "active:border-transparent",
        "data-[active=true]:border-none aria-[current=page]:border-none"
      )}
      {...props}
    >
      {children}

      {isActive && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none"
            aria-hidden="true"
          />
        </div>
      )}
    </ShadcnPaginationLink>
  );
}

function PaginationPrevious({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { font, className } = props;
  return (
    <PaginationLink
      className={cn(
        "relative group",
        "flex flex-row w-full text-sm",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border-y-4 border-transparent",
        "hover:border-foreground focus:border-foreground active:border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        "data-[active=true]:border-none aria-[current=page]:border-none",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { font, className } = props;

  return (
    <PaginationLink
      className={cn(
        "relative group",
        "flex flex-row w-full text-sm",
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent",
        "rounded-none border-dashed border-y-4 border-transparent",
        "hover:border-foreground focus:border-foreground active:border-transparent",
        "dark:hover:border-ring dark:focus:border-ring",
        "data-[active=true]:border-none aria-[current=page]:border-none",
        "flex flex-row text-sm w-full",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ ...props }: BitPaginationProps<"span">) {
  const { font, className } = props;

  return (
    <ShadcnPaginationEllipsis
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    >
      <MoreHorizontal className={cn("size-7", "retro")} />
      <span className="sr-only">More pages</span>
    </ShadcnPaginationEllipsis>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
