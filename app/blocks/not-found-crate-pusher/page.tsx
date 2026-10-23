import type { Metadata } from "next";

import NotFoundCratePusher from "@/components/ui/8bit/blocks/not-found-crate-pusher";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/blocks/not-found-crate-pusher",
  title: "404 Crate Pusher Preview",
  description: "A full-page preview of the randomized 404 Crate Pusher block.",
});

export default function NotFoundCratePusherPreviewPage() {
  return <NotFoundCratePusher className="min-h-svh" />;
}
