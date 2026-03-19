import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Badge as ShadcnBadge } from "@/components/ui/badge";

export const badgeVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "border-primary bg-primary",
      destructive: "border-destructive bg-destructive",
      outline: "border-background bg-background",
      secondary: "border-secondary bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  children,
  className = "",
  font,
  variant,
  ...props
}: BitButtonProps) {
  const color = badgeVariants({ variant, font });

  const classes = className.split(" ");

  // Strip pseudo-prefixes (hover:, dark:, focus:, etc.) to check the base utility
  const getBaseClass = (c: string) => c.replace(/^[a-z-]+:/g, "");

  const isVisualClass = (c: string) => {
    const base = getBaseClass(c);
    return (
      base.startsWith("bg-") ||
      base.startsWith("border-") ||
      base.startsWith("text-") ||
      base.startsWith("rounded-")
    );
  };

  // visual classes for badge and sidebars
  const visualClasses = classes.filter(isVisualClass);

  // Convert hover: classes to group-hover: for pixel bar sidebars
  const sidebarVisualClasses = visualClasses.map((c) =>
    c.startsWith("hover:") ? c.replace("hover:", "group-hover:") : c
  );

  // Container should accept all non-visual utility classes (e.g., size, spacing, layout)
  const containerClasses = classes.filter((c) => !isVisualClass(c));

  return (
    <div className={cn("group relative inline-flex items-stretch transition-colors", color, containerClasses, visualClasses)}>
      <ShadcnBadge
        {...props}
        className={cn(
          "h-full",
          "rounded-none",
          "w-full",
          font !== "normal" && "retro",
          visualClasses
        )}
        variant={variant}
      >
        {children}
      </ShadcnBadge>

      {/* Left pixel bar */}
      <div
        className={cn(
          "-left-1.5 absolute inset-y-[4px] w-1.5 bg-inherit",
        )}
      />
      {/* Right pixel bar */}
      <div
        className={cn(
          "-right-1.5 absolute inset-y-[4px] w-1.5 bg-inherit",
        )}
      />
    </div>
  );
}

export { Badge };
