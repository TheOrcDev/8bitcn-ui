"use client";

import { useState } from "react";

import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/8bit/calendar";

export function RangeCalendar() {
  const [date, setDate] = useState<DateRange | undefined>(() => ({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 12),
  }));

  return (
    <Calendar
      defaultMonth={date?.from}
      mode="range"
      numberOfMonths={2}
      onSelect={setDate}
      selected={date}
    />
  );
}
