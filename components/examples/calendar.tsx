"use client";

import { useState } from "react";

import { Calendar } from "../ui/8bit/calendar";

export function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      className="h-max w-full bg-card"
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  );
}
