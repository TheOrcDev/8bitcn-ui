"use client";

import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/8bit/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-xs">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild className="hover:cursor-pointer">
            <div className="relative">
              <svg
                width="25"
                height="25"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                color=""
                className="absolute bottom-2"
                aria-label="chevron-up"
              >
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 120 128)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 104 144)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 184 160)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 88 160)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 136 112)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 152 128)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 168 144)"
                ></rect>
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                color=""
                className="relative top-2"
                aria-label="chevron-down"
              >
                <rect
                  x="120"
                  y="128"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 120 128)"
                ></rect>
                <rect
                  x="104"
                  y="112"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 104 112)"
                ></rect>
                <rect
                  x="184"
                  y="96"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 184 96)"
                ></rect>
                <rect
                  x="88"
                  y="96"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 88 96)"
                ></rect>
                <rect
                  x="136"
                  y="144"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 136 144)"
                ></rect>
                <rect
                  x="152"
                  y="128"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 152 128)"
                ></rect>
                <rect
                  x="168"
                  y="112"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(90 168 112)"
                ></rect>
              </svg>
            </div>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border-dashed border px-4 py-2  text-xs shadow-sm">
            @radix-ui/primitives
          </div>
          <div className="rounded-md border-dashed border px-4 py-2  text-xs shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border-dashed border px-4 py-2  text-xs shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
