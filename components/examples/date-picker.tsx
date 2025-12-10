"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { type HTMLAttributes, useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import { Calendar } from "@/components/ui/8bit/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/8bit/popover";
import { cn } from "@/lib/utils";

export function DatePicker({ className }: HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[310px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          variant={"outline"}
        >
          <CalendarIcon className="mr-2 size-4" />
          <span className="truncate">
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar
          className="border-y-0"
          mode="single"
          onSelect={setDate}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
}
