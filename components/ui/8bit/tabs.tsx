import type * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from "@/components/ui/tabs";

import "@/components/ui/8bit/styles/retro.css";

export const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary",
      retro: "retro",
    },
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitTabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {
  asChild?: boolean;
}

function Tabs({ className, ...props }: BitTabsProps) {
  const { font } = props;

  return (
    <ShadcnTabs
      {...props}
      className={cn("relative", font !== "normal" && "retro", className)}
    />
  );
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      {...props}
      className={cn("relative bg-card rounded-none", className)}
    >
      <div
        className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      {children}
    </ShadcnTabsList>
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      className={cn(
        "border-none data-[state=active]:bg-accent data-[state=active]:text-foreground text-muted-foreground rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnTabsTrigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnTabsContent>) {
  return <ShadcnTabsContent className={cn("", className)} {...props} />;
}

export { Tabs, TabsList, TabsContent, TabsTrigger };
