import type { Metadata } from "next";

import Sponsors from "@/components/sponsors";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/sponsors",
  title: "Sponsors supporting the 8-bit library",
  description:
    "Meet the sponsors who help 8bitcn/ui grow. Mythic, legendary, and community supporters who fund the open-source 8-bit component library.",
});

export default function SponsorsPage() {
  return (
    <div>
      <Sponsors />
    </div>
  );
}
