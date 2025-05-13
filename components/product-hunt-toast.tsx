"use client"

import { Heart } from "lucide-react"

import { Button } from "@/components/ui/8bit/button"

export function ProductHuntToast() {
  return (
    <div className="flex flex-col gap-2 items-center py-2">
      <Button
        onClick={() => {
          window.open("https://www.producthunt.com/posts/8bitcn", "_blank")
        }}
        className="w-11/12 text-xs md:text-base"
      >
        <span className="hidden md:block">We are on Product Hunt today!</span>
        <span className="md:hidden">Product Hunt!</span>
        <Heart className="size-4 fill-white" />
        Upvote
      </Button>
    </div>
  )
}
