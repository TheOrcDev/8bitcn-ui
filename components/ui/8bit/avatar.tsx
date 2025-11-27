import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import type React from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const avatarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "",
      retro: "",
      pixel: "",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "pixel",
  },
});

const Avatar = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    font?: "normal" | "retro";
    variant?: "default" | "retro" | "pixel";
  }
>(({ className = "", font, variant = "pixel", ...props }, ref) => {
  const isPixel = variant === "pixel";

  return (
    <div className={cn("relative size-max", className)}>
      {/* Pixel frame (only show if pixel variant) */}
      {isPixel && (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ zIndex: 10 }}
        >
          {/* Top section - Row 1 */}
          <div className="absolute top-0 right-[23%] left-[23%] h-[7%] bg-foreground dark:bg-ring" />

          {/* Top section - Row 2 */}
          <div className="absolute top-[6.25%] right-[17%] left-[17%] h-[7%] bg-foreground dark:bg-ring" />

          {/* Top section - Row 3 */}
          <div className="absolute top-[12.5%] left-[11%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[12.5%] right-[11%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Top section - Row 4 */}
          <div className="absolute top-[18.75%] left-[5%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[18.75%] right-[5%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Top section - Row 5 */}
          <div className="absolute top-[25%] left-0 h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[25%] right-0 h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Top section - Rows 6-7 */}
          <div className="absolute top-[31.25%] left-0 h-[13%] w-[13.5%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[31.25%] right-0 h-[13%] w-[13.5%] bg-foreground dark:bg-ring" />

          {/* Top section - Rows 8-10 */}
          <div className="absolute top-[43.75%] left-0 h-[7%] w-[13.5%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[43.75%] right-0 h-[7%] w-[13.5%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Rows 8-10 (mirror) */}
          <div className="absolute top-[50%] left-0 h-[7%] w-[13.5%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[50%] right-0 h-[7%] w-[13.5%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Rows 6-7 (mirror) */}
          <div className="absolute top-[56.25%] left-0 h-[13%] w-[13.5%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[56.25%] right-0 h-[13%] w-[13.5%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Row 5 (mirror) */}
          <div className="absolute top-[68.75%] left-0 h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[68.75%] right-0 h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Row 4 (mirror) */}
          <div className="absolute top-[75%] left-[5%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[75%] right-[5%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Row 3 (mirror) */}
          <div className="absolute top-[81.25%] left-[11%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />
          <div className="absolute top-[81.25%] right-[11%] h-[7%] w-[20%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Row 2 (mirror) */}
          <div className="absolute top-[87.5%] right-[17%] left-[17%] h-[7%] bg-foreground dark:bg-ring" />

          {/* Bottom section - Row 1 (mirror) */}
          <div className="absolute right-[23%] bottom-0 left-[23%] h-[7%] bg-foreground dark:bg-ring" />
        </div>
      )}

      <AvatarPrimitive.Root
        className={cn(
          "relative flex size-10 shrink-0 overflow-hidden text-xs",
          !isPixel && "rounded-none",
          isPixel && "rounded-full",
          font !== "normal" && "retro",
          variant === "retro" && "image-rendering-pixelated",
          className
        )}
        data-slot="avatar"
        ref={ref}
        {...props}
      />

      {/* Original border styling (only show if not pixel variant) */}
      {!isPixel && (
        <>
          <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring" />
          <div className="-left-1.5 pointer-events-none absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-left-1.5 pointer-events-none absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-right-1.5 pointer-events-none absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
          <div className="-right-1.5 pointer-events-none absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        </>
      )}
    </div>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface BitAvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  font?: "normal" | "retro";
  variant?: "default" | "retro" | "pixel";
}

const AvatarImage = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  BitAvatarImageProps
>(({ className, font, ...props }, ref) => (
  <AvatarPrimitive.Image
    className={cn(
      "aspect-square h-full w-full",
      font === "retro" && "retro",
      className
    )}
    data-slot="avatar-image"
    ref={ref}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
      className
    )}
    data-slot="avatar-fallback"
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
