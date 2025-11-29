import { Suspense } from "react";
import { SubmitProjectForm } from "@/components/forms/submit-project-form";
import { Skeleton } from "@/components/ui/8bit/skeleton";

export default function Home() {
  return (
    <main className="retro mx-auto flex max-w-2xl flex-col gap-4 py-6">
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
