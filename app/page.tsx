import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import Sponsors from "@/components/sponsors";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Separator } from "@/components/ui/8bit/separator";

export default function Home() {
  return (
    <div className="mx-auto px-4">
      {/* Hero */}
      <section className="flex flex-col items-center py-8 text-center md:py-10">
        <Link href="/v2">
          <Badge className="mb-6">
            v2 — 35 new blocks
            <svg
              aria-label="arrow-right"
              className="pixel-nudge-right size-7!"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.25"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <rect height="14" rx="1" width="14" x="64" y="120" />
              <rect height="14" rx="1" width="14" x="96" y="120" />
              <rect height="14" rx="1" width="14" x="80" y="120" />
              <rect height="14" rx="1" width="14" x="112" y="120" />
              <rect height="14" rx="1" width="14" x="144" y="120" />
              <rect height="14" rx="1" width="14" x="160" y="120" />
              <rect height="14" rx="1" width="14" x="160" y="136" />
              <rect height="14" rx="1" width="14" x="144" y="152" />
              <rect height="14" rx="1" width="14" x="128" y="72" />
              <rect height="14" rx="1" width="14" x="128" y="168" />
              <rect height="14" rx="1" width="14" x="176" y="120" />
              <rect height="14" rx="1" width="14" x="160" y="104" />
              <rect height="14" rx="1" width="14" x="144" y="88" />
              <rect height="14" rx="1" width="14" x="128" y="120" />
            </svg>
          </Badge>
        </Link>

        <h1 className="retro mb-4 max-w-5xl font-bold text-lg tracking-tight md:text-2xl lg:text-5xl">
          Rare Loot UI Library
        </h1>

        <p className="retro mx-auto mb-8 max-w-xl text-muted-foreground text-xs leading-relaxed">
          8-bit components and blocks that feel like a critical hit. Open
          source. Copy-paste.
        </p>

        <div className="flex w-full max-w-xs flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
          <Button asChild className="w-full text-xs sm:w-auto md:text-sm">
            <Link href="/docs">Open Docs</Link>
          </Button>
          <Button
            asChild
            className="w-full text-xs sm:w-auto md:text-sm"
            variant="outline"
          >
            <Link href="/v2">Explore Blocks</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Sponsors */}
      <Sponsors />

      <Separator />

      {/* Submit Project */}
      <section className="py-12 text-center">
        <h2 className="retro mb-2 font-bold text-lg md:text-xl">
          Built something with 8bitcn?
        </h2>
        <p className="mx-auto mb-6 max-w-md text-muted-foreground text-xs">
          Share your project with the community. Get featured on the site.
        </p>
        <Button asChild className="text-xs" size="sm" variant="outline">
          <Link href="/submit-project">Submit Your Project</Link>
        </Button>
      </section>
    </div>
  );
}
