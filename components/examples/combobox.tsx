"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/8bit/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover";
import { cn } from "@/lib/utils";

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
];

export function ComboBoxExample() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-auto px-10"
          role="combobox"
          variant="outline"
        >
          <div className="flex items-center">
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="absolute right-4 size-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 md:w-[320px]">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={framework.value}
                >
                  <svg
                    className={cn(
                      "mr-2 size-6",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                    fill="currentColor"
                    height="50"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    viewBox="0 0 256 256"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check</title>
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 80 128)"
                      width="14"
                      x="80"
                      y="128"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 96 144)"
                      width="14"
                      x="96"
                      y="144"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 112 160)"
                      width="14"
                      x="112"
                      y="160"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 128 144)"
                      width="14"
                      x="128"
                      y="144"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 144 128)"
                      width="14"
                      x="144"
                      y="128"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 160 112)"
                      width="14"
                      x="160"
                      y="112"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 176 96)"
                      width="14"
                      x="176"
                      y="96"
                    />
                    <rect
                      height="14"
                      rx="1"
                      transform="rotate(90 192 80)"
                      width="14"
                      x="192"
                      y="80"
                    />
                  </svg>
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
