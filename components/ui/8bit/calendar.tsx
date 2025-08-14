import { type VariantProps, cva } from "class-variance-authority";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

import { ChevronLeftIcon } from "@/components/ui/8bit/assets/chevronLeftIcon";
import { ChevronRightIcon } from "@/components/ui/8bit/assets/chevronRightIcon";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";

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
        "bg-popover relative border-y-6 border-foreground dark:border-ring w-max",
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
            "size-7 bg-transparent p-0 flex items-center justify-center hover:opacity-50 border-2 border-foreground dark:border-ring"
          ),
          day_button: cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 font-normal aria-selected:opacity-100"
          ),
          day: cn(
            "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day select-none"
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
                  <SelectTrigger id="dropdown" className="bg-background w-full">
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
                  <SelectTrigger id="dropdown" className="bg-background w-full">
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
              return <ChevronLeftIcon />;
            }

            return <ChevronRightIcon />;
          },
        }}
        {...props}
      />

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

export { Calendar };
