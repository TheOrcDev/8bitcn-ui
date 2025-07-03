import { Metadata } from "next";

import BlocksNavigation from "@/app/docs/components/blocks-navigation";

import CalendarBlocks from "./calendar";

export const metadata: Metadata = {
  title: "Building Retro Blocks for the Web - 8bitcn/ui",
  description:
    "Clean, retro building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.",
};

export default function CalendarBlocksPage() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${"retro"} md:text-2xl font-bold`}>
        Building Retro Blocks for the Web
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        Clean, retro building blocks. Copy and paste into your apps. Works with
        all React frameworks. Open Source. Free forever.
      </p>

      <BlocksNavigation active="calendar" />

      <CalendarBlocks />
    </div>
  );
}
