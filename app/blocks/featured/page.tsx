import { Metadata } from "next";

import BlocksNavigation from "@/app/docs/components/blocks-navigation";

import FeaturedBlocks from "./featured";

export const metadata: Metadata = {
  title: "Featured Blocks - 8bitcn/ui",
  description:
    "Featured 8-bit building blocks. Complete dashboard solutions with sidebar navigation, charts, and data tables. Copy and paste into your apps.",
};

export default function FeaturedBlocksPage() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${"retro"} md:text-2xl font-bold`}>
        Featured 8-bit Blocks
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        Complete 8-bit building blocks and dashboard solutions. Copy and paste
        into your apps. Works with all React frameworks. Open Source. Free
        forever.
      </p>

      <BlocksNavigation active="featured" />

      <FeaturedBlocks />
    </div>
  );
}
