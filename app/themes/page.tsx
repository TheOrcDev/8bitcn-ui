import type { Metadata } from "next";

import ComponentShowcase from "@/components/examples/component-showcase";
import { JsonLd } from "@/components/json-ld";
import { ThemeSelector } from "@/components/theme-selector";
import { webPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

const themesPath = "/themes";
const themesTitle = "Themes";
const themesDescription =
  "8-bit retro themes to give your designs that nostalgic edge. 👾 Paired with 8-bit components, they're the perfect combo.";

export const metadata: Metadata = createPageMetadata({
  path: themesPath,
  title: themesTitle,
  description: themesDescription,
});

const themesStructuredData = webPageJsonLd({
  type: "CollectionPage",
  name: themesTitle,
  description: themesDescription,
  url: absoluteUrl(themesPath),
});

export default function ThemesPage() {
  return (
    <>
      <JsonLd data={themesStructuredData} />
      <div className="flex flex-col gap-5 p-4 py-10">
        <h1 className={"retro font-bold md:text-2xl"}>
          Add retro colors. Make it fun.
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </div>

      <ThemeSelector />

      <div className="p-5">
        <ComponentShowcase />
      </div>
    </>
  );
}
