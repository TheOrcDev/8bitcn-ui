import type { Metadata } from "next";
import { Suspense } from "react";
import ProfileCreator from "@/components/profile-creator";
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
    <Suspense>
      <ProfileCreator />
    </Suspense>
  );
}
