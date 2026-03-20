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
        <Link href="/blocks">
          <Badge className="mb-6">
            v2 — 34 new blocks
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

        <div className="flex gap-4">
          <Link href="/docs">
            <Button className="text-xs md:text-sm">Open Docs</Button>
          </Link>
          <Link href="/blocks">
            <Button className="text-xs md:text-sm" variant="outline">
              Explore Blocks
            </Button>
          </Link>
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
        <Link href="/submit-project">
          <Button size="sm" variant="outline">
            Submit Your Project
          </Button>
        </Link>
      </section>
    </div>
  );
}
