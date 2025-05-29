import { Metadata } from "next";
import Link from "next/link";

import { datePickerMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import { DatePicker } from "@/components/examples/date-picker";
import { DatePickerWithPresets } from "@/components/examples/date-picker-with-presets";
import { DatePickerWithRange } from "@/components/examples/date-range-picker";

import CodeSnippet from "../code-snippet";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Date Picker",
  description: "Displays an 8-bit date picker component.",
  openGraph: {
    images: datePickerMetaData,
  },
};

export default function DatePickerPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Date Picker</h1>
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit date picker component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit date picker component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-date-picker" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <DatePicker />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <p>
        The Date Picker is built using a composition of the{" "}
        <span className="font-mono bg-accent text-accent-foreground px-1">
          {"<Popover />"}
        </span>{" "}
        and the{" "}
        <span className="font-mono bg-accent text-accent-foreground px-1">
          {"<Calendar />"}
        </span>{" "}
        components. See installation instructions for the Popover and the
        Calendar components.
      </p>

      <p>
        See installation instructions for the{" "}
        <Link className="underline" href="/docs/components/popover">
          Popover
        </Link>{" "}
        and the{" "}
        <Link className="underline" href="/docs/components/calendar">
          Calendar
        </Link>{" "}
        components.
      </p>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/8bit/button"
import { Calendar } from "@/components/ui/8bit/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[310px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="border-y-0"
        />
      </PopoverContent>
    </Popover>
  )
}
`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Date Range Picker</h3>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit date picker component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-date-picker" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <DatePickerWithRange />
        </div>
      </div>

      <h3 className="text-lg font-bold mt-10">Installation</h3>

      <Separator />

      <CodeSnippet>{`"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/8bit/button"
import { Calendar } from "@/components/ui/8bit/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[440px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="border-y-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Date Range with presets</h3>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit date picker component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-date-picker" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <DatePickerWithPresets />
        </div>
      </div>

      <h3 className="text-lg font-bold mt-10">Installation</h3>

      <Separator />

      <CodeSnippet>{`"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/8bit/button"
import { Calendar } from "@/components/ui/8bit/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select"

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
`}</CodeSnippet>
    </div>
  );
}
