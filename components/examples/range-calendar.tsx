"use client";

import * as React from "react";

import { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/8bit/calendar";

export function RangeCalendar() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 12),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={date?.from}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
    />
  );
}
