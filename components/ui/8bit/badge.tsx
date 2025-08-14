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
      default: "bg-primary border-primary",
      destructive: "bg-destructive border-destructive",
      outline: "bg-background border-background",
      secondary: "bg-secondary border-secondary",
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

  // spacing-related Tailwind classes
  const spacingClasses = classes.filter((c) =>
    /^(m|p|mt|mr|mb|ml|mx|my|pt|pr|pb|pl|px|py|top|bottom|left|right|inset|inset-x|inset-y)-/.test(
      c
    )
  );

  // visual classes for badge and sidebars
  const visualClasses = classes.filter(
    (c) =>
      c.startsWith("bg-") ||
      c.startsWith("border-") ||
      c.startsWith("text-") ||
      c.startsWith("rounded-")
  );

  return (
    <div className={cn("relative inline-flex", spacingClasses)}>
      <ShadcnBadge
        {...props}
        className={cn(
          "rounded-none",
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
          "absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5",
          color,
          visualClasses
        )}
      />
      {/* Right pixel bar */}
      <div
        className={cn(
          "absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5",
          color,
          visualClasses
        )}
      />
    </div>
  );
}

export { Badge };
