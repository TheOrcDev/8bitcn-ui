import type { Metadata } from "next";

import NotFoundBrickBreaker from "@/components/ui/8bit/blocks/not-found-brick-breaker";

export const metadata: Metadata = {
  description: "A full-page preview of the playable 404 Brick Breaker block.",
  title: "404 Brick Breaker Preview",
};

export default function NotFoundBrickBreakerPreviewPage() {
  return <NotFoundBrickBreaker className="min-h-svh" />;
}
