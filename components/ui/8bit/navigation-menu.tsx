import { Indicator, Root, Viewport } from "@radix-ui/react-navigation-menu";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import {
  NavigationMenuContent as ShadcnNavigationMenuContent,
  type NavigationMenuIndicator as ShadcnNavigationMenuIndicator,
  NavigationMenuItem as ShadcnNavigationMenuItem,
  NavigationMenuLink as ShadcnNavigationMenuLink,
  NavigationMenuList as ShadcnNavigationMenuList,
  NavigationMenuTrigger as ShadcnNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const navigationMenuVariants = cva("", {
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

type FontVariantProps = VariantProps<typeof navigationMenuVariants>;

const getFontClassName = (font: FontVariantProps["font"]) =>
  navigationMenuVariants({ font });

function NavigationMenu({
  className,
  font,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof Root> & {
  viewport?: boolean;
} & FontVariantProps) {
  return (
    <Root
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        getFontClassName(font),
        className
      )}
      data-slot="navigation-menu"
      data-viewport={viewport}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </Root>
  );
}

function NavigationMenuList({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuList> &
  VariantProps<typeof navigationMenuVariants>) {
  return (
    <ShadcnNavigationMenuList
      className={cn(getFontClassName(font), className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuItem> & FontVariantProps) {
  return (
    <ShadcnNavigationMenuItem
      className={cn("static", getFontClassName(font), className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuTrigger> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuTrigger
      className={cn(getFontClassName(font), className)}
      {...props}
    />
  );
}

function NavigationMenuContent({
  className,
  font,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuContent> &
  FontVariantProps) {
  return (
    <ShadcnNavigationMenuContent
      className={cn(getFontClassName(font), className)}
      {...props}
    >
      {children}
    </ShadcnNavigationMenuContent>
  );
}

function NavigationMenuViewport({
  className,
  font,
  ...props
}: React.ComponentProps<typeof Viewport> & FontVariantProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <Viewport
        className={cn(
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
          getFontClassName(font),
          "shadow-[6px_0px_0px_0px_var(--foreground),-6px_0px_0px_0px_var(--foreground),0px_-6px_0px_0px_var(--foreground),0px_6px_0px_0px_var(--foreground)]",
          "dark:shadow-[6px_0px_0px_0px_var(--ring),-6px_0px_0px_0px_var(--ring),0px_-6px_0px_0px_var(--ring),0px_6px_0px_0px_var(--ring)]",
          className
        )}
        data-slot="navigation-menu-viewport"
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuLink> & FontVariantProps) {
  return (
    <ShadcnNavigationMenuLink
      className={cn(getFontClassName(font), className)}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  font,
  ...props
}: React.ComponentProps<typeof ShadcnNavigationMenuIndicator> &
  FontVariantProps) {
  return (
    <Indicator
      className={cn(
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in",
        getFontClassName(font),
        className
      )}
      data-slot="navigation-menu-indicator"
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-foreground shadow-md dark:bg-ring" />
    </Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
