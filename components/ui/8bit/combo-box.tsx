"use client"

// 8-bit ComboBox
import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"
import { ChevronDownIcon } from "raster-react"

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

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})
export interface ComboBoxItem {
  value: string
  label: string
}

const number: ComboBoxItem[] = [
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
  options?: ComboBoxItem[]
  placeholder?: string
  ref?: React.Ref<HTMLButtonElement>
}
export function Combobox({ ...props }: ComboBoxProps) {
  const { font, className, options = number, placeholder } = props
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          <span
            className={cn(
              "text-[12px]",
              font !== "normal" && pressStart.className,
              className
            )}
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
          </span>
          <ChevronDownIcon
            className="w-12 h-12"
            size={16}
            strokeWidth={0.25}
            radius={1}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "w-[240px] h-[180px] top-2 p-0 rounded-none relative",
          font !== "normal" && pressStart.className,
          className
        )}
      >
        <Command className="p-2">
          <CommandInput
            className="text-[12px]"
            placeholder="Search number..."
          />
          <CommandList>
            <CommandEmpty>No Values found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="text-[12px] hover:bg-white/30 bg-transparent rounded-none border-dotted border-y-4 border-transparent 
                  hover:border-ring focus:border-foreground focus:bg-transparent data-[selected]:bg-transparent
                  dark:focus:border-ring dark:data-[selected]:bg-transparent"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
