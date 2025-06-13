import type { Metadata } from "next";

import { calendarMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import { CalendarExample } from "@/components/examples/calendar";
import { Calendar13 } from "@/components/examples/calendars/calendar-13";
import { RangeCalendar } from "@/components/examples/range-calendar";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Calendar",
  description: "Displays an 8-bit calendar component.",
  openGraph: {
    images: calendarMetaData,
  },
};

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar.json`}
          command={"pnpm dlx shadcn@canary add 8bit-calendar"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit calendar component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit calendar component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-calendar" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <CalendarExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Calendar } from "@/components/ui/8bit/calendar"`}</CodeSnippet>

      <CodeSnippet>{`const [date, setDate] = React.useState<Date | undefined>(new Date())
      
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Range Calendar</h3>

      <Separator />

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit range calendar component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <RangeCalendar />
        </div>
      </div>

      <CodeSnippet>{`"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/8bit/calendar";

export function RangeCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
    />
  );
}
`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Month and Year Selector</h3>

      <Separator />

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit calendar component
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <Calendar13 />
        </div>
      </div>

      <CodeSnippet>{`"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/8bit/calendar";
import { Label } from "@/components/ui/8bit/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";

export function Calendar13() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
      />
      <div className="flex flex-col gap-3">
        <Label htmlFor="dropdown" className="px-1">
          Dropdown
        </Label>
        <Select
          value={dropdown}
          onValueChange={(value) =>
            setDropdown(
              value as React.ComponentProps<typeof Calendar>["captionLayout"]
            )
          }
        >
          <SelectTrigger id="dropdown" className="bg-background w-full">
            <SelectValue placeholder="Dropdown" />
          </SelectTrigger>
          <SelectContent align="center">
            <SelectItem value="dropdown">Month and Year</SelectItem>
            <SelectItem value="dropdown-months">Month Only</SelectItem>
            <SelectItem value="dropdown-years">Year Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
`}</CodeSnippet>
    </div>
  );
}
