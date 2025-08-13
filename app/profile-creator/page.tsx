import { Metadata } from "next";

import { profileCreatorMetaData } from "@/lib/metadata";

import ProfileCreator from "@/app/docs/components/profile-creator";

export const metadata: Metadata = {
  title: "8-bit Profile Creator",
  description:
    "Create your own 8-bit profile card, with retro theme and in 8-bit style.",
  openGraph: {
    images: profileCreatorMetaData,
  },
};

export default function ProfileCreatorPage() {
  return <ProfileCreator />;
}
