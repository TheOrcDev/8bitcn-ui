"use client"

// 8-bit ComboBox
import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"
import { CheckIcon, ChevronDownIcon } from "raster-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const number = [
  {
    value: "1",
    label: "Number 1",
  },
  {
    value: "2",
    label: "Number 2",
  },
  {
    value: "3",
    label: "Number 3",
  },
]
export const comboBoxVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
})

export interface ComboBoxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof comboBoxVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}
export function Combobox({ ...props }: ComboBoxProps) {
  const { font, className } = props
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-[250px]">
          <div className="absolute -top-1 w-[230px] left-1.5 h-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute -top-1 w-[10px] right-1.5 h-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute -bottom-1.5 w-[230px] left-1.5 h-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute -bottom-1.5 w-[10px] right-1.5 h-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute top-2 -left-1.5 h-[20px] w-1.5 bg-foreground dark:bg-ring" />
          <div className="absolute top-2 -right-1.5 h-[20px] w-1.5 bg-foreground dark:bg-ring" />
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between relative -z-1 bg-background"
          >
            <span
              className={cn(
                "text-[12px]",
                font !== "normal" && pressStart.className,
                className
              )}
            >
              {value
                ? number.find((number) => number.value === value)?.label
                : "Select Number..."}
            </span>
            <ChevronDownIcon
              className="w-12 h-12"
              size={16}
              strokeWidth={0.25}
              radius={1}
            />
          </Button>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "w-[240px] h-[180px] top-4 p-0 rounded-none active:translate-y-1 transition-transform relative",
          font !== "normal" && pressStart.className,
          className
        )}
      >
        <div className="absolute -top-1 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute -top-1 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute top-2 -left-1.5 h-[165px] w-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />
        <div className="absolute top-2 -right-1.5 h-[165px] w-1.5 bg-foreground dark:bg-foreground dark:bg-ring" />

        <Command>
          <CommandInput
            className="text-[12px]"
            placeholder="Search number..."
          />
          <CommandList>
            <CommandEmpty>No Values found.</CommandEmpty>
            <CommandGroup>
              {number.map((number) => (
                <CommandItem
                  className="text-[12px] hover:bg-white/30 bg-transparent rounded-none border-dotted border-y-4 border-transparent 
                  hover:border-ring focus:border-foreground focus:bg-transparent data-[selected]:bg-transparent
                  dark:focus:border-ring dark:data-[selected]:bg-transparent"
                  key={number.value}
                  value={number.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 w-4 h-4",
                      value === number.value ? "opacity-100" : "opacity-0"
                    )}
                    size={16}
                    strokeWidth={0.25}
                    radius={1}
                  />

                  {number.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
