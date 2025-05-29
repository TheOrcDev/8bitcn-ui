import * as React from "react";

import { Press_Start_2P } from "next/font/google";

import { Indicator, Root, Viewport } from "@radix-ui/react-navigation-menu";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  NavigationMenuContent as ShadcnNavigationMenuContent,
  NavigationMenuIndicator as ShadcnNavigationMenuIndicator,
  NavigationMenuItem as ShadcnNavigationMenuItem,
  NavigationMenuLink as ShadcnNavigationMenuLink,
  NavigationMenuList as ShadcnNavigationMenuList,
  NavigationMenuTrigger as ShadcnNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const navigationMenuVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
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
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        getFontClassName(font),
        className
      )}
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
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          getFontClassName(font),
          "shadow-[6px_0px_0px_0px_var(--foreground),-6px_0px_0px_0px_var(--foreground),0px_-6px_0px_0px_var(--foreground),0px_6px_0px_0px_var(--foreground)]",
          "dark:shadow-[6px_0px_0px_0px_var(--ring),-6px_0px_0px_0px_var(--ring),0px_-6px_0px_0px_var(--ring),0px_6px_0px_0px_var(--ring)]",
          className
        )}
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
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        getFontClassName(font),
        className
      )}
      {...props}
    >
      <div className="bg-foreground dark:bg-ring relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
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
