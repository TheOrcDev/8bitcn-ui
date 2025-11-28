"use client";

import { usePathname } from "next/navigation";
import { BlocksSidebar } from "@/components/blocks-sidebar";
import { DocsSidebar } from "@/components/docs-sidebar";
import type { source } from "@/lib/source";

export function ConditionalSidebar({ tree }: { tree: typeof source.pageTree }) {
  const pathname = usePathname();
  const isBlocks = pathname.startsWith("/docs/blocks");

  if (isBlocks) {
    return <BlocksSidebar tree={tree} />;
  }

  return <DocsSidebar tree={tree} />;
}
