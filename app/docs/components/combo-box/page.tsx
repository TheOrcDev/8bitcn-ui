import type { Metadata } from "next";

import { comboBoxMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import { ComboBoxExample } from "@/components/examples/combobox";

import CodeSnippet from "@/app/docs/components/code-snippet";
import CopyCommandButton from "@/app/docs/components/copy-command-button";
import InstallationCommands from "@/app/docs/components/installation-commands";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Combo Box",
  description: "Displays an 8-bit combo box component.",
  openGraph: {
    images: comboBoxMetaData,
  },
};

export default function ComboBoxPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Combo box</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-combo-box.json`}
          command={"pnpm dlx shadcn@canary add 8bit-combo-box"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit combo box component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit combo box component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-dropdown-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ComboBoxExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-combo-box.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/8bit/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboBoxExample() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto px-10"
        >
          <div className="flex items-center">
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="absolute right-4 size-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto md:w-[320px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className={cn(
                      "mr-2 size-6",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                    aria-label="check"
                  >
                    <rect
                      x="80"
                      y="128"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 80 128)"
                    ></rect>
                    <rect
                      x="96"
                      y="144"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 96 144)"
                    ></rect>
                    <rect
                      x="112"
                      y="160"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 112 160)"
                    ></rect>
                    <rect
                      x="128"
                      y="144"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 128 144)"
                    ></rect>
                    <rect
                      x="144"
                      y="128"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 144 128)"
                    ></rect>
                    <rect
                      x="160"
                      y="112"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 160 112)"
                    ></rect>
                    <rect
                      x="176"
                      y="96"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 176 96)"
                    ></rect>
                    <rect
                      x="192"
                      y="80"
                      width="14"
                      height="14"
                      rx="1"
                      transform="rotate(90 192 80)"
                    ></rect>
                  </svg>
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
`}</CodeSnippet>
    </div>
  );
}
