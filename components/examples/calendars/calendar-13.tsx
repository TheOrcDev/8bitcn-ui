"use client";

import { type ComponentProps, useState } from "react";

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
    useState<ComponentProps<typeof Calendar>["captionLayout"]>("dropdown");
  const [date, setDate] = useState<Date | undefined>(
    () => new Date(2025, 5, 12)
  );

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        captionLayout={dropdown}
        defaultMonth={date}
        mode="single"
        onSelect={setDate}
        selected={date}
      />
      <div className="flex flex-col gap-3">
        <Label className="px-1" htmlFor="dropdown">
          Dropdown
        </Label>
        <Select
          onValueChange={(value) =>
            setDropdown(
              value as ComponentProps<typeof Calendar>["captionLayout"]
            )
          }
          value={dropdown}
        >
          <SelectTrigger className="w-full bg-background" id="dropdown">
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
