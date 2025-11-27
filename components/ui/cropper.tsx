"use client";

import { Cropper as CropperPrimitive } from "@origin-space/image-cropper";

import { cn } from "@/lib/utils";

function Cropper({
  className,
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Root>) {
  return (
    <CropperPrimitive.Root
      className={cn(
        "relative flex w-full cursor-move touch-none items-center justify-center overflow-hidden focus:outline-none",
        className
      )}
      data-slot="cropper"
      {...props}
    />
  );
}

function CropperDescription({
  className,
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Description>) {
  return (
    <CropperPrimitive.Description
      className={cn("sr-only", className)}
      data-slot="cropper-description"
      {...props}
    />
  );
}

function CropperImage({
  className,
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Image>) {
  return (
    <CropperPrimitive.Image
      className={cn(
        "pointer-events-none h-full w-full object-cover",
        className
      )}
      data-slot="cropper-image"
      {...props}
    />
  );
}

function CropperCropArea({
  className,
  ...props
}: React.ComponentProps<typeof CropperPrimitive.CropArea>) {
  return (
    <CropperPrimitive.CropArea
      className={cn(
        "pointer-events-none absolute border-3 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] in-[[data-slot=cropper]:focus-visible]:ring-[3px] in-[[data-slot=cropper]:focus-visible]:ring-white/50",
        className
      )}
      data-slot="cropper-crop-area"
      {...props}
    />
  );
}

export { Cropper, CropperDescription, CropperImage, CropperCropArea };
