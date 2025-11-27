import { cva, type VariantProps } from "class-variance-authority";
import type { DayPicker } from "react-day-picker";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import "./styles/retro.css";

export const calendarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export type CalendarProps = React.ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants>;

function Calendar({ className, classNames, font, ...props }: CalendarProps) {
  return (
    <div
      className={cn(
        "relative w-max border-foreground border-y-6 bg-popover dark:border-ring",
        className
      )}
    >
      <ShadcnCalendar
        className={cn(
          calendarVariants({
            className,
            font,
          })
        )}
        classNames={{
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "flex size-7 items-center justify-center border-2 border-foreground bg-transparent p-0 hover:opacity-50 dark:border-ring"
          ),
          day_button: cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 font-normal aria-selected:opacity-100"
          ),
          day: cn(
            "group/day relative h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md"
          ),
          caption_label: "text-xs font-medium",
          ...classNames,
        }}
        components={{
          MonthsDropdown: ({ className, ...props }) => {
            const currentMonth = props.value as number;

            const months = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];

            const currentMonthName = months[currentMonth];

            return (
              <div className={cn("flex flex-col gap-3 text-xs", className)}>
                <Select defaultValue={currentMonthName}>
                  <SelectTrigger className="w-full bg-background" id="dropdown">
                    <SelectValue placeholder="Dropdown" />
                  </SelectTrigger>
                  <SelectContent align="center">
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          },
          YearsDropdown: ({ className }) => {
            const currentYear = new Date().getFullYear();
            const years = Array.from(
              { length: currentYear - 1925 + 1 },
              (_, i) => 1925 + i
            );

            return (
              <div className={cn("flex flex-col gap-3 text-xs", className)}>
                <Select defaultValue={currentYear?.toString()}>
                  <SelectTrigger className="w-full bg-background" id="dropdown">
                    <SelectValue placeholder="Dropdown" />
                  </SelectTrigger>
                  <SelectContent align="center">
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          },
          Chevron: ({ className, ...props }) => {
            if (props.orientation === "left") {
              return (
                <svg
                  aria-label="chevron-left"
                  className={cn("size-4 shrink-0", className)}
                  color=""
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}
                >
                  <title>Previous month</title>
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 128 136)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 144 152)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 160 72)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 160 168)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 112 120)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 128 104)"
                    width="14"
                  />
                  <rect
                    height="14"
                    rx="1"
                    transform="matrix(-1 0 0 1 144 88)"
                    width="14"
                  />
                </svg>
              );
            }

            return (
              <svg
                aria-label="chevron-right"
                className={cn("size-4 shrink-0", className)}
                color=""
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
              >
                <title>Next month</title>
                <rect height="14" rx="1" width="14" x="128" y="136" />
                <rect height="14" rx="1" width="14" x="112" y="152" />
                <rect height="14" rx="1" width="14" x="96" y="72" />
                <rect height="14" rx="1" width="14" x="96" y="168" />
                <rect height="14" rx="1" width="14" x="144" y="120" />
                <rect height="14" rx="1" width="14" x="128" y="104" />
                <rect height="14" rx="1" width="14" x="112" y="88" />
              </svg>
            );
          },
        }}
        {...props}
      />

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </div>
  );
}

export { Calendar };
