import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar"

import { buttonVariants } from "./button"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const calendarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export type CalendarProps = React.ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants>

function Calendar({ className, classNames, font, ...props }: CalendarProps) {
  return (
    <div
      className={cn(
        "flex bg-popover justify-center relative border-y-6 border-foreground dark:border-ring !p-0",
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
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "size-9 p-0 font-normal aria-selected:opacity-100"
          ),
          caption_label: "text-xs font-medium",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <svg
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color=""
              className={cn("size-4 shrink-0", className)}
              aria-label="chevron-left"
              {...props}
            >
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 128 136)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 144 152)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 160 72)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 160 168)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 112 120)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 128 104)"
              ></rect>
              <rect
                width="14"
                height="14"
                rx="1"
                transform="matrix(-1 0 0 1 144 88)"
              ></rect>
            </svg>
          ),
          IconRight: ({ className, ...props }) => (
            <svg
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color=""
              className={cn("size-4 shrink-0", className)}
              aria-label="chevron-right"
              {...props}
            >
              <rect x="128" y="136" width="14" height="14" rx="1"></rect>
              <rect x="112" y="152" width="14" height="14" rx="1"></rect>
              <rect x="96" y="72" width="14" height="14" rx="1"></rect>
              <rect x="96" y="168" width="14" height="14" rx="1"></rect>
              <rect x="144" y="120" width="14" height="14" rx="1"></rect>
              <rect x="128" y="104" width="14" height="14" rx="1"></rect>
              <rect x="112" y="88" width="14" height="14" rx="1"></rect>
            </svg>
          ),
        }}
        {...props}
      />

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

export { Calendar }
