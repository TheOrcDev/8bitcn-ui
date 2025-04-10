"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const avatarVariants = cva("", {
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

export interface BitAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  asChild?: boolean;
  className?: string;
}

export interface BitAvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    VariantProps<typeof avatarVariants> {
  pixelated?: boolean;
}

export interface BitAvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  BitAvatarProps
>(({ className = "", font, ...props }, ref) => (
  <div className={cn("relative", className)}>
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-none",
        font !== "normal" && pressStart.className,
        className
      )}
      {...props}
    />
    <div className="absolute top-0 left-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute top-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute top-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
  </div>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  BitAvatarImageProps
>(({ className, font, pixelated = false, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "aspect-square h-full w-full",
      pixelated && [
        "image-rendering-pixelated",
        "contrast-125 brightness-110 saturate-150",
      ],
      font !== "normal" && pressStart.className,
      className
    )}
    style={
      pixelated
        ? {
            imageRendering: "pixelated",
            filter: "contrast(1.25) brightness(1.1) saturate(1.5)",
          }
        : undefined
    }
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  BitAvatarFallbackProps
>(({ className, font, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center bg-muted",
      font !== "normal" && pressStart.className,
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
