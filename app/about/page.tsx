import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About 8bitcn, a retro 8-bit UI library",
  description:
    "A short about page for 8bitcn/ui, the open-source 8-bit shadcn/ui component library. Project story and details are coming soon.",
});

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8">
      <h1 className="font-bold text-2xl">About</h1>
      <p>Coming soon...</p>
    </div>
  );
}
