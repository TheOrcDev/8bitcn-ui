import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbEllipsis as ShadcnBreadcrumbEllipsis,
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbList as ShadcnBreadcrumbList,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import "./styles/retro.css";

export const breadcrumbVariants = cva("", {
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

interface BitBreadcrumbNavigationProps
  extends React.ComponentProps<"nav">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbOrderedListProps
  extends React.ComponentProps<"ol">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbSpanProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbListItemProps
  extends React.ComponentProps<"li">,
    VariantProps<typeof breadcrumbVariants> {}

interface BitBreadcrumbLinkProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof breadcrumbVariants> {}

const ChevronRight = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      color=""
      className="size-7"
      aria-label="chevron-right"
    >
      <rect x="128" y="136" width="14" height="14" rx="1"></rect>
      <rect x="112" y="152" width="14" height="14" rx="1"></rect>
      <rect x="96" y="72" width="14" height="14" rx="1"></rect>
      <rect x="96" y="168" width="14" height="14" rx="1"></rect>
      <rect x="144" y="120" width="14" height="14" rx="1"></rect>
      <rect x="128" y="104" width="14" height="14" rx="1"></rect>
      <rect x="112" y="88" width="14" height="14" rx="1"></rect>
    </svg>
  );
};

function Breadcrumb({ children, ...props }: BitBreadcrumbNavigationProps) {
  const { variant, className, font } = props;

  return (
    <div
      className={cn(
        "mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground",
        className
      )}
    >
      <ShadcnBreadcrumb
        {...props}
        className={cn(
          "relative rounded-none border-none bg-background",
          breadcrumbVariants({ variant }),
          font !== "normal" && "retro",
          className
        )}
      >
        {children}
      </ShadcnBreadcrumb>
    </div>
  );
}

function BreadcrumbList({ ...props }: BitBreadcrumbOrderedListProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbList
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    />
  );
}

function BreadcrumbItem({ ...props }: BitBreadcrumbListItemProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbItem
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  ...props
}: BitBreadcrumbLinkProps & {
  asChild?: boolean;
}) {
  const { font, className } = props;

  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    />
  );
}

function BreadcrumbPage({ ...props }: BitBreadcrumbSpanProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbPage
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ ...props }: BitBreadcrumbListItemProps) {
  const { font, children, className } = props;

  return (
    <ShadcnBreadcrumbSeparator
      className={cn(className, font !== "normal" && "retro", "[&>svg]:size-7")}
      {...props}
    >
      {children ?? <ChevronRight />}
    </ShadcnBreadcrumbSeparator>
  );
}

function BreadcrumbEllipsis({ ...props }: BitBreadcrumbSpanProps) {
  const { font, className } = props;

  return (
    <ShadcnBreadcrumbEllipsis
      className={cn(className, font !== "normal" && "retro")}
      {...props}
    >
      <MoreHorizontal className={cn("size-7", "retro")} />
      <span className="sr-only">More</span>
    </ShadcnBreadcrumbEllipsis>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
