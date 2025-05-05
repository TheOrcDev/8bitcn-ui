import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/8bit/scroll-area"
import { Separator } from "@/components/ui/8bit/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48">
      <div className=" p-4 w-full relative">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}

export interface Artwork {
  artist: string
  art: string
  id: number
}

export const works: Artwork[] = [
  {
    id: 1,
    artist: "8bitcnorc",
    art: "/images/pixelized-8bitcnorc.jpg",
  },
  {
    id: 2,
    artist: "8bitcnorc",
    art: "/images/pixelized-8bitcnorc.jpg",
  },
  {
    id: 3,
    artist: "8bitcnorc",
    art: "/images/pixelized-8bitcnorc.jpg",
  },
]

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap overflow-hidden">
      <div className="flex w-max space-x-4 p-2">
        {works.map((artwork) => (
          <figure key={artwork.id} className="basis-[200px]">
            <Image
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="aspect-square object-cover"
              width={300}
              height={300}
            />
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
