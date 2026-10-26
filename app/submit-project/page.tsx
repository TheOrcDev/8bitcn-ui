import type { Metadata } from "next";
import { Suspense } from "react";
import { SubmitProjectForm } from "@/components/forms/submit-project-form";
import { JsonLd } from "@/components/json-ld";
import { Skeleton } from "@/components/ui/8bit/skeleton";
import { webPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

const submitProjectPath = "/submit-project";
const submitProjectTitle = "Submit your 8bitcn project for a feature";
const submitProjectDescription =
  "Built something with 8bitcn/ui? Submit your project to be considered for a feature on the site. Share retro React apps, games, and 8-bit interfaces.";

export const metadata: Metadata = createPageMetadata({
  path: submitProjectPath,
  title: submitProjectTitle,
  description: submitProjectDescription,
});

const submitProjectStructuredData = webPageJsonLd({
  name: submitProjectTitle,
  description: submitProjectDescription,
  url: absoluteUrl(submitProjectPath),
});

export default function Home() {
  return (
    <main className="retro mx-auto flex max-w-2xl flex-col gap-4 px-5 py-6">
      <JsonLd data={submitProjectStructuredData} />
      <h1 className="text-center font-bold text-2xl">8bitcn Projects</h1>
      <p className="text-center text-muted-foreground text-xs">
        If you have a project created with 8bitcn, you can submit it here to get
        potentially featured on the website.
      </p>

      <Suspense fallback={<Skeleton className="h-40 w-full" />}>
        <SubmitProjectForm />
      </Suspense>
    </main>
  );
}
