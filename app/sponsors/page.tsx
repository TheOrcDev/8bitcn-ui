import type { Metadata } from "next";

import Sponsors from "@/components/sponsors";

export const metadata: Metadata = {
  title: "8bitcn/ui Sponsors",
  description:
    "Sponsors of 8bitcn/ui who help us grow and support our projects.",
};

export default function SponsorsPage() {
  return (
    <div>
      <Sponsors />
    </div>
  );
}
