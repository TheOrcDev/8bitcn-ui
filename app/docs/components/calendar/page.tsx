import type { Metadata } from "next"

import { calendarMetaData } from "@/lib/metadata"
import { Separator } from "@/components/ui/separator"
import { CalendarExample } from "@/components/examples/calendar"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Calendar",
  description:
    " Displays a calendar or a component that looks like a 8-bit calendar.",
  openGraph: {
    images: calendarMetaData,
  },
}

const HoverCardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar.json`}
          command={"pnpm dlx shadcn@canary add 8bit-calendar"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a calendar or a component that looks like a 8-bit calendar.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit calendar component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-calendar" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-md mx-auto relative">
          <CalendarExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-calendar.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Calendar } from "@/components/ui/8bit/calendar"`}</CodeSnippet>

      <CodeSnippet>{`const [date, setDate] = React.useState<Date | undefined>(new Date())
      
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}</CodeSnippet>
    </div>
  )
}

export default HoverCardPage
