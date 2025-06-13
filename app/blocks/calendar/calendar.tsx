import type { Metadata } from "next";

import { calendarMetaData } from "@/lib/metadata";

import { CalendarExample } from "@/components/examples/calendar";
import { Calendar13 } from "@/components/examples/calendars/calendar-13";
import { RangeCalendar } from "@/components/examples/range-calendar";

import CopyCommandButton from "@/app/docs/components/copy-command-button";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Calendar",
  description: "Displays an 8-bit calendar component.",
  openGraph: {
    images: calendarMetaData,
  },
};

export default function CalendarBlocks() {
  return (
    <>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple calendar
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-calendar"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar.json`}
            />
            <OpenInV0Button name="8bit-calendar" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <CalendarExample />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          A calendar with a range of dates.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <CopyCommandButton
            command="npx shadcn@latest add 8bit-calendar-range"
            copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar-range.json`}
          />
          <OpenInV0Button name="8bit-calendar-range" className="w-fit" />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[400px] relative border rounded-md">
        <div className="flex items-center justify-center min-h-[400px] relative">
          <RangeCalendar />
        </div>
      </div>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A calendar with a single date
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-login-form-2"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-login-form-2.json`}
            />
            <OpenInV0Button name="8bit-calendar-single" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Calendar13 />
        </div>
      </div>
    </>
  );
}
