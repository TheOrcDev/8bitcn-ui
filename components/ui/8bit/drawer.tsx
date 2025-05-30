import { type VariantProps, cva } from "class-variance-authority";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

import {
  Drawer as ShadcnDrawer,
  DrawerClose as ShadcnDrawerClose,
  DrawerDescription as ShadcnDrawerDescription,
  DrawerFooter as ShadcnDrawerFooter,
  DrawerHeader as ShadcnDrawerHeader,
  DrawerOverlay as ShadcnDrawerOverlay,
  DrawerPortal as ShadcnDrawerPortal,
  DrawerTitle as ShadcnDrawerTitle,
  DrawerTrigger as ShadcnDrawerTrigger,
} from "@/components/ui/drawer";

import "./styles/retro.css";

const Drawer = ShadcnDrawer;

const DrawerPortal = ShadcnDrawerPortal;

const DrawerOverlay = ShadcnDrawerOverlay;

const DrawerClose = ShadcnDrawerClose;

function DrawerTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <ShadcnDrawerTitle className={cn(className, "retro")} {...props}>
      {children}
    </ShadcnDrawerTitle>
  );
}

function DrawerDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <ShadcnDrawerDescription className={cn(className, "retro")} {...props}>
      {children}
    </ShadcnDrawerDescription>
  );
}

function DrawerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <>
      <ShadcnDrawerTrigger
        className={cn(
          "border-foreground dark:border-ring hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-none border-4 focus:border-foreground hover:border-foreground dark:focus:border-ring bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-foreground dark:data-[state=open]:border-ring",
          className,
          "retro"
        )}
        {...props}
      >
        {children}
      </ShadcnDrawerTrigger>
    </>
  );
}

export const drawerVariants = cva("", {
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

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Content> &
  VariantProps<typeof drawerVariants> & {
    side?: "right" | "bottom" | "left";
  };

function DrawerContent({ className, children, side, ...props }: DrawerProps) {
  return (
    <ShadcnDrawerPortal data-slot="drawer-portal">
      <ShadcnDrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "border-foreground dark:border-ring rounded-none",
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          side === "right" &&
            "border-l-4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
          side === "left" &&
            "border-r-4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
          side === "bottom" &&
            "border-t-4 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto",
          className,
          "retro"
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-none group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </ShadcnDrawerPortal>
  );
}

function DrawerHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnDrawerHeader className={cn("", className, "retro")} {...props}>
      {children}
    </ShadcnDrawerHeader>
  );
}

function DrawerFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnDrawerFooter className={cn("", className, "retro")} {...props}>
      {children}
    </ShadcnDrawerFooter>
  );
}

export {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerDescription,
};
