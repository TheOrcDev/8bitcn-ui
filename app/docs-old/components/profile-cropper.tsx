"use client";

import React, { useCallback, useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui/8bit/avatar";
import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/8bit/dialog";
import { Slider } from "@/components/ui/8bit/slider";
import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "@/components/ui/cropper";

interface Props {
  toggleImageCropper: (state?: boolean) => void;
  open: boolean;
  tempImage: string | null;
  setProfileImage: (imageUrl: string) => void;
}

type Area = { x: number; y: number; width: number; height: number };

// Converts an image URL (or DataURL) and crop area into a cropped DataURL
export async function getCroppedDataUrl(
  imageSrc: string,
  pixelCrop: Area,
  outputWidth: number = pixelCrop.width,
  outputHeight: number = pixelCrop.height
): Promise<string> {
  // Helper: load image
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });

  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }

  canvas.width = outputWidth;
  canvas.height = outputHeight;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputWidth,
    outputHeight
  );

  // ✅ Return Data URL instead of Blob
  return canvas.toDataURL("image/jpeg", 0.9); // 0.9 = quality
}

const ProfileCropper = ({
  toggleImageCropper,
  open,
  tempImage,
  setProfileImage,
}: Props) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImgUrl, setCroppedImgUrl] = useState<string | null>(null);
  const [isCropping, setIsCropping] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleCropChange = useCallback((pixels: Area | null) => {
    setCroppedAreaPixels(pixels);
  }, []);

  if (!tempImage) return null;

  const handleCrop = async () => {
    if (!croppedAreaPixels) return;
    setIsCropping(true);
    try {
      const croppedUrl = await getCroppedDataUrl(tempImage, croppedAreaPixels);
      setCroppedImgUrl(croppedUrl);
    } catch (error) {
      console.error("Crop failed:", error);
    } finally {
      setIsCropping(false);
    }
  };

  const handleCancel = () => {
    setCroppedImgUrl(null);
    toggleImageCropper(false);
  };
  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && handleCancel()} open={open}>
      <DialogContent>
        <DialogTitle>Crop Your Avatar</DialogTitle>
        {croppedImgUrl ? (
          <div className="flex flex-col gap-4 items-center">
            <Avatar className="size-40" variant="retro">
              <AvatarImage src={croppedImgUrl} alt={"Avatar"} />
            </Avatar>
            <div className="w-full flex gap-6 items-center mt-6">
              <Button
                variant={"outline"}
                onClick={() => setCroppedImgUrl(null)}
                className="flex-1"
              >
                Undo
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => {
                  setProfileImage(croppedImgUrl);
                  toggleImageCropper(false);
                  setCroppedImgUrl(null);
                }}
                className="flex-1"
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Cropper
              className="h-80"
              image={tempImage}
              onCropChange={handleCropChange}
              zoom={zoom}
              onZoomChange={setZoom}
            >
              <CropperDescription />
              <CropperImage />
              <CropperCropArea />
            </Cropper>
            <div className="mx-auto flex w-full max-w-80 items-center gap-4 py-5">
              <Slider
                defaultValue={[1]}
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                onValueChange={(value) => setZoom(value[0])}
                aria-label="Zoom slider"
              />
              <output className="block w-10 shrink-0 text-right text-sm font-medium tabular-nums">
                {parseFloat(zoom.toFixed(1))}x
              </output>
            </div>
            <Button
              variant={"outline"}
              onClick={handleCrop}
              disabled={!croppedAreaPixels || isCropping}
            >
              {isCropping ? "Cropping..." : "Crop"}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileCropper;
