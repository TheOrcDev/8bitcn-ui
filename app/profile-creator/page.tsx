import type { Metadata } from "next";
import { Suspense } from "react";
import ProfileCreator from "@/components/profile-creator";
import { Skeleton } from "@/components/ui/8bit/skeleton";
import { createPageMetadata, profileCreatorMetaData } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/profile-creator",
  title: "Create and export 8-bit profile cards",
  description:
    "Design a retro 8-bit profile card with pixel avatars, badges, and social links. Preview live, then copy the React code or download a PNG.",
  openGraph: {
    images: profileCreatorMetaData,
  },
  twitter: {
    images: [profileCreatorMetaData],
  },
});

export default function ProfileCreatorPage() {
  return (
    <div className="retro space-y-6 p-4 md:p-6">
      <div className="space-y-2">
        <h1 className="retro font-bold text-xl md:text-2xl">Profile Creator</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Fill the form to preview your retro profile card. Use full URLs or
          just usernames for GitHub and X.
        </p>
      </div>
      <Suspense
        fallback={
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </div>
            <span className="sr-only">Loading profile creator</span>
          </>
        }
      >
        <ProfileCreator />
      </Suspense>
    </div>
  );
}
