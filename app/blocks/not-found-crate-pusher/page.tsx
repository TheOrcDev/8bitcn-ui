import type { Metadata } from "next";

import NotFoundCratePusher from "@/components/ui/8bit/blocks/not-found-crate-pusher";

export const metadata: Metadata = {
  description: "A full-page preview of the randomized 404 Crate Pusher block.",
  title: "404 Crate Pusher Preview",
};

export default function NotFoundCratePusherPreviewPage() {
  return <NotFoundCratePusher className="min-h-svh" />;
}
