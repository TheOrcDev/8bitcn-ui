"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { useNearViewport } from "@/hooks/use-near-viewport";

const MythicSponsor = dynamic(() => import("../mythic-sponsor"), {
  ssr: false,
});

interface LazyMythicSponsorProps {
  alt: string;
  className?: string;
  height?: number;
  pixelSize?: number;
  scale?: number;
  src: string;
  width?: number;
}

export function LazyMythicSponsor({
  alt,
  className,
  height = 250,
  pixelSize,
  scale,
  src,
  width = 250,
}: LazyMythicSponsorProps) {
  const { isNearViewport, ref } = useNearViewport("600px 0px");

  return (
    <div className="h-full w-full" ref={ref}>
      {isNearViewport ? (
        <MythicSponsor
          className={className}
          height={height}
          pixelSize={pixelSize}
          scale={scale}
          src={src}
          width={width}
        />
      ) : (
        <Image
          alt={alt}
          className={className}
          height={height}
          src={src}
          width={width}
        />
      )}
    </div>
  );
}
