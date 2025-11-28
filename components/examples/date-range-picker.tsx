"use client";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { type HTMLAttributes, useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/8bit/button";
import { Calendar } from "@/components/ui/8bit/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover";
import { cn } from "@/lib/utils";

export function DatePickerWithRange({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const getDateRangeDisplay = () => {
    if (!date?.from) {
      return <span>Pick a date</span>;
    }
    if (date.to) {
      return (
        <>
          {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
        </>
      );
    }
    return format(date.from, "LLL dd, y");
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-[440px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            id="date"
            variant={"outline"}
          >
            <CalendarIcon />
            {getDateRangeDisplay()}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            className="border-y-0"
            defaultMonth={date?.from}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={setDate}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
