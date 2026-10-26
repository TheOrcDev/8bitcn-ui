import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { webPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

const aboutPath = "/about";
const aboutTitle = "About 8bitcn, a retro 8-bit UI library";
const aboutDescription =
  "A short about page for 8bitcn/ui, the open-source 8-bit shadcn/ui component library. Project story and details are coming soon.";

export const metadata: Metadata = createPageMetadata({
  path: aboutPath,
  title: aboutTitle,
  description: aboutDescription,
});

const aboutStructuredData = webPageJsonLd({
  type: "AboutPage",
  name: aboutTitle,
  description: aboutDescription,
  url: absoluteUrl(aboutPath),
});

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8">
      <JsonLd data={aboutStructuredData} />
      <h1 className="font-bold text-2xl">About</h1>
      <p>Coming soon...</p>
    </div>
  );
}
