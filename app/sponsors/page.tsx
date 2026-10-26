import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import Sponsors from "@/components/sponsors";
import { webPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

const sponsorsPath = "/sponsors";
const sponsorsTitle = "Sponsors supporting the 8-bit library";
const sponsorsDescription =
  "Meet the sponsors who help 8bitcn/ui grow. Mythic, legendary, and community supporters who fund the open-source 8-bit component library.";

export const metadata: Metadata = createPageMetadata({
  path: sponsorsPath,
  title: sponsorsTitle,
  description: sponsorsDescription,
});

const sponsorsStructuredData = webPageJsonLd({
  type: "CollectionPage",
  name: sponsorsTitle,
  description: sponsorsDescription,
  url: absoluteUrl(sponsorsPath),
});

export default function SponsorsPage() {
  return (
    <div>
      <JsonLd data={sponsorsStructuredData} />
      <Sponsors />
    </div>
  );
}
