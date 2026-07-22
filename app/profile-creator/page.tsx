import type { Metadata } from "next";
import { Suspense } from "react";
import ProfileCreator from "@/components/profile-creator";
import { Skeleton } from "@/components/ui/8bit/skeleton";
import { profileCreatorMetaData } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "8-bit Profile Creator",
  description:
    "Create your own 8-bit profile card, with retro theme and in 8-bit style.",
  openGraph: {
    images: profileCreatorMetaData,
  },
};

export default function ProfileCreatorPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-10">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
          <span className="sr-only">Loading profile creator</span>
        </main>
      }
    >
      <ProfileCreator />
    </Suspense>
  );
}
