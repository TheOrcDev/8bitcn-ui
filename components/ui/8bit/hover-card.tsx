import type * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cva, type VariantProps } from "class-variance-authority";
import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const hoverCardVariants = cva("", {
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

export interface BitHoverCardProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardVariants> {}

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <ShadcnHoverCard {...props} />;
}

function HoverCardTrigger({
  className,
  asChild = true,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <ShadcnHoverCardTrigger
      asChild={asChild}
      className={cn(className)}
      {...props}
    />
  );
}

function HoverCardContent({
  children,
  className,
  font,
  ...props
}: BitHoverCardProps) {
  return (
    <ShadcnHoverCardContent
      className={cn(
        "relative",
        hoverCardVariants({
          font,
          className,
        })
      )}
      {...props}
    >
      {children}

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
      <div
        aria-hidden="true"
        className="-my-1.5 pointer-events-none absolute inset-0 border-foreground border-y-6 dark:border-ring"
      />
    </ShadcnHoverCardContent>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
