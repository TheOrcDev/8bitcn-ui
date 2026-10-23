import type { Metadata } from "next";

import NotFoundBrickBreaker from "@/components/ui/8bit/blocks/not-found-brick-breaker";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/blocks/not-found-brick-breaker",
  title: "404 Brick Breaker Preview",
  description: "A full-page preview of the playable 404 Brick Breaker block.",
});

export default function NotFoundBrickBreakerPreviewPage() {
  return <NotFoundBrickBreaker className="min-h-svh" />;
}
