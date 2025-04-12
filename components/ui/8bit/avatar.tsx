import type React from "react"
import { forwardRef } from "react"
import { Press_Start_2P } from "next/font/google"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const avatarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
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
})

const Avatar = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    font?: "normal" | "retro"
    variant?: "default" | "retro" | "pixel"
  }
>(({ className = "", font, variant = "pixel", ...props }, ref) => {
  const isPixel = variant === "pixel"

  return (
    <div className={cn("relative size-max", className)}>
      {/* Pixel frame (only show if pixel variant) */}
      {isPixel && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Top black border */}
          <div className="absolute top-0 left-[25%] right-[25%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Second row */}
          <div className="absolute top-[6.25%] left-[18.75%] right-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Third row */}
          <div className="absolute top-[12.5%] left-[12.5%] h-[6.25%] bg-foreground dark:bg-ring w-[18.75%]"></div>
          <div className="absolute top-[12.5%] right-[12.5%] h-[6.25%] bg-foreground dark:bg-ring w-[18.75%]"></div>

          {/* Fourth row */}
          <div className="absolute top-[18.75%] left-[6.25%] w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[18.75%] right-[6.25%] w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Fifth row */}
          <div className="absolute top-[25%] left-0 w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[25%] right-0 w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Rows 6-7 */}
          <div className="absolute top-[31.25%] left-0 w-[12.5%] h-[12.5%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[31.25%] right-0 w-[12.5%] h-[12.5%] bg-foreground dark:bg-ring"></div>

          {/* Rows 8-10 */}
          <div className="absolute top-[43.75%] left-0 w-[12.5%] h-[18.75%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[43.75%] right-0 w-[12.5%] h-[18.75%] bg-foreground dark:bg-ring"></div>

          {/* Rows 11-12 */}
          <div className="absolute top-[62.5%] left-0 w-[12.5%] h-[12.5%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[62.5%] right-0 w-[12.5%] h-[12.5%] bg-foreground dark:bg-ring"></div>

          {/* Row 13 */}
          <div className="absolute top-[75%] left-0 w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[75%] right-0 w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Row 14 */}
          <div className="absolute top-[81.25%] left-[6.25%] w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>
          <div className="absolute top-[81.25%] right-[6.25%] w-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Row 15 */}
          <div className="absolute top-[87.5%] left-[12.5%] right-[12.5%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Row 16 */}
          <div className="absolute top-[93.75%] left-[18.75%] right-[18.75%] h-[6.25%] bg-foreground dark:bg-ring"></div>

          {/* Bottom row */}
          <div className="absolute bottom-0 left-[25%] right-[25%] h-[6.25%] bg-foreground dark:bg-ring"></div>
        </div>
      )}

      <AvatarPrimitive.Root
        ref={ref}
        data-slot="avatar"
        className={cn(
          "relative flex size-10 shrink-0 overflow-hidden text-xs",
          !isPixel && "rounded-none",
          isPixel && "rounded-full",
          font !== "normal" && pressStart.className,
          variant === "retro" && "image-rendering-pixelated",
          className
        )}
        {...props}
      />

      {/* Original border styling (only show if not pixel variant) */}
      {!isPixel && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-0 w-full h-1 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute top-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-1 -left-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute top-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
          <div className="absolute bottom-1 -right-1 w-1 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
        </>
      )}
    </div>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

interface BitAvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  font?: "normal" | "retro"
  variant?: "default" | "retro" | "pixel"
}

const AvatarImage = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  BitAvatarImageProps
>(({ className, font, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "aspect-square h-full w-full",
        font === "retro" && pressStart.className,
        className
      )}
      {...props}
    />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
