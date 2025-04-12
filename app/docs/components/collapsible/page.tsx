"use client";

import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import { Separator } from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/8bit/collapsible";

import React from "react";

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Collapsible</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-collapsible.json`}
          command={"pnpm dlx shadcn@canary add 8bit-collapsible"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an collapsible or a component that looks like a 8-bit
        collapsible.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit collapsible component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-collapsible" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
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
                    className="raster-icon absolute bottom-2"
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
                    className="raster-icon relative top-2"
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
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-collapsible.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/8bit/collapsible"`}</CodeSnippet>

      <CodeSnippet>{`<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
`}</CodeSnippet>
    </div>
  );
}
