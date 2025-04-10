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
    variant: {
      default: "",
      retro: "",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
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
    VariantProps<typeof avatarVariants> {}

export interface BitAvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarVariants> {}

function Avatar({ className = "", font, variant, ...props }: BitAvatarProps) {
  return (
    <div className={cn("relative", className)}>
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
          "relative flex size-10 shrink-0 overflow-hidden rounded-none text-xs",
          font !== "normal" && pressStart.className,
          variant === "retro" && "image-rendering-pixelated",
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
  );
}

function AvatarImage({
  className,
  font,
  variant,
  ...props
}: BitAvatarImageProps) {
  const isRetro = variant === "retro";

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square h-full w-full",
        isRetro && [
          "image-rendering-pixelated",
          "contrast-125 brightness-110 saturate-150",
        ],
        font === "retro" && pressStart.className,
        className
      )}
      style={
        isRetro
          ? {
              imageRendering: "pixelated",
              filter: "contrast(1.25) brightness(1.1) saturate(1.5)",
            }
          : undefined
      }
      {...props}
    />
  );
}

function AvatarFallback({ className, font, ...props }: BitAvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex h-full w-full items-center justify-center bg-muted",
        font === "retro" && pressStart.className,
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
