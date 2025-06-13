import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";

import ChartsBlocks from "./charts";

export const metadata: Metadata = {
  title: "Building Retro Blocks for the Web - 8bitcn/ui",
  description:
    "Clean, retro building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.",
};

export default function BlocksPage() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${"retro"} md:text-2xl font-bold`}>
        Building Retro Blocks for the Web
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        Clean, retro building blocks. Copy and paste into your apps. Works with
        all React frameworks. Open Source. Free forever.
      </p>

      <div className="flex flex-col md:flex-row gap-5">
        <Button asChild>
          <Link href="/blocks/authentication">Authentication</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/blocks/charts">Charts</Link>
        </Button>
        <Button asChild>
          <Link href="/blocks/calendar">Calendar</Link>
        </Button>
      </div>

      <ChartsBlocks />
    </div>
  );
}
