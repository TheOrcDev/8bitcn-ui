import Link from "next/link";
import Feature3 from "@/components/ui/8bit/blocks/feature3";
import Hero2 from "@/components/ui/8bit/blocks/hero2";
import Pricing1 from "@/components/ui/8bit/blocks/pricing1";
import Timeline3 from "@/components/ui/8bit/blocks/timeline3";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

const highlights = [
  "New pixel-art logo and visual identity",
  "Redesigned landing page",
  "35 production-ready page blocks",
  "Improved docs navigation for blocks",
  "Consistent spacing and border fixes",
  "Upgraded to Next.js 16.2",
];


const categories = [
  { title: "Hero", count: 3, slug: "hero" },
  { title: "Features", count: 3, slug: "features" },
  { title: "Pricing", count: 3, slug: "pricing" },
  { title: "FAQ", count: 3, slug: "faq" },
  { title: "Social Proof", count: 3, slug: "social-proof" },
  { title: "Timeline", count: 3, slug: "timeline" },
  { title: "CTA", count: 2, slug: "cta" },
  { title: "Team", count: 3, slug: "team" },
  { title: "Advanced", count: 3, slug: "advanced" },
  { title: "Game", count: 8, slug: "game" },
  { title: "Layout", count: 1, slug: "layout" },
];

const totalBlocks = categories.reduce((sum, cat) => sum + cat.count, 0);

export default function BlocksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Launch Hero */}
      <section className="flex flex-col items-center py-16 text-center md:py-24">
        <Badge className="mb-6" variant="outline">
          v2
        </Badge>

        <h1 className="retro mb-4 max-w-2xl font-bold text-3xl tracking-tight md:text-5xl">
          35 New Blocks Just Dropped
        </h1>

        <p className="mx-auto mb-2 max-w-lg text-muted-foreground text-xs leading-relaxed">
          A complete rebuild. New logo, new landing page, and {totalBlocks}{" "}
          production-ready page sections — all built with 8bitcn components.
        </p>

        <p className="retro mb-8 text-[10px] text-muted-foreground">
          March 2026 / v2.0 / {totalBlocks} blocks / {categories.length}{" "}
          categories
        </p>

        <div className="flex gap-4">
          <Link href="/docs">
            <Button>Open Docs</Button>
          </Link>
          <Link href="#blocks">
            <Button variant="outline">Browse Blocks</Button>
          </Link>
        </div>
      </section>

      <Separator />

      {/* What's New */}
      <section className="py-12">
        <h2 className="retro mb-6 font-bold text-lg">What shipped in v2</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {highlights.map((item) => (
            <div className="flex items-start gap-3 py-2" key={item}>
              <span className="retro shrink-0 text-primary text-xs">+</span>
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Story */}
      <section className="py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="retro mb-3 font-bold text-sm">
              Why we rebuilt 8bitcn
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              The original 8bitcn was components only. Good primitives, but
              users still had to build pages from scratch. v2 adds blocks — full
              page sections you can combine into complete landing pages in
              minutes. We also cleaned up spacing, fixed border consistency, and
              gave everything a fresh coat of pixels.
            </p>
          </div>
          <div>
            <h3 className="retro mb-3 font-bold text-sm">
              How v2 improves shipping speed
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Instead of building a hero section from Card + Badge + Button
              manually, you install one block and customize the props. Every
              block is copy-paste ready, uses only 8bitcn components, and works
              in dark mode out of the box. Hero to deploy in under an hour.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Live Block Showcase */}
      <section className="py-12">
        <h2 className="retro mb-8 text-center font-bold text-lg">
          See it in action
        </h2>

        <div className="flex flex-col gap-12">
          <Hero2
            actions={[
              { label: "GET STARTED", variant: "default", href: "/docs" },
              { label: "VIEW BLOCKS", variant: "outline", href: "/blocks" },
            ]}
            badges={[{ label: "Open Source" }, { label: "v2", variant: "secondary" }]}
            description="Drop-in 8-bit styled components that work with your existing stack. No config, no headaches."
            subtitle="Retro components for the modern web"
            title="SHIP FASTER"
          />

          <Timeline3 />

          <Pricing1 />

          <Feature3 />
        </div>

        <div className="mt-8 text-center">
          <Link href="/docs/blocks">
            <Button variant="outline">See all 35 blocks</Button>
          </Link>
        </div>
      </section>

      <Separator />

      {/* Category Snapshot */}
      <section className="py-12" id="blocks">
        <h2 className="retro mb-6 font-bold text-lg">All categories</h2>

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link href={`/docs/blocks/${cat.slug}`} key={cat.slug}>
              <Card className="h-full transition-all hover:border-primary/30">
                <CardContent className="flex items-center justify-between pt-6">
                  <span className="retro text-xs">{cat.title}</span>
                  <Badge variant="outline">{cat.count}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Built to Ship */}
      <section className="py-12">
        <h2 className="retro mb-6 text-center font-bold text-lg">
          Built to ship
        </h2>
        <div className="grid gap-x-4 gap-y-1 md:grid-cols-3">
          {[
            {
              title: "Copy-paste ready",
              description:
                "No npm install. Components copied into your project. You own the code.",
            },
            {
              title: "8bitcn only",
              description:
                "Every block uses only 8bitcn components. No external UI dependencies.",
            },
            {
              title: "Playful but production",
              description:
                "Retro aesthetic, serious engineering. Accessible, responsive, dark mode.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader className="pb-2">
                <CardTitle className="retro text-xs">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[10px] leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Roadmap */}
      <section className="py-12">
        <h2 className="retro mb-3 font-bold text-lg">What comes next</h2>
        <p className="mb-6 text-muted-foreground text-xs">
          v2 is just the start. Here is what is on the roadmap.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { label: "8-bit icon pack", status: "PLANNED" },
            { label: "Full landing page templates", status: "PLANNED" },
            { label: "More gaming blocks", status: "IN PROGRESS" },
            { label: "Animation and transition pack", status: "EXPLORING" },
          ].map((item) => (
            <div
              className="flex items-center justify-between border-b border-dashed pb-3"
              key={item.label}
            >
              <span className="text-xs">{item.label}</span>
              <Badge variant="outline">{item.status}</Badge>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Final CTA */}
      <section className="flex flex-col items-center py-16 text-center">
        <h2 className="retro mb-4 font-bold text-xl md:text-2xl">
          Ready to build with 8bitcn?
        </h2>
        <div className="flex gap-4">
          <Link href="/docs">
            <Button>Go to Docs</Button>
          </Link>
          <Link href="/docs/blocks">
            <Button variant="outline">Explore Blocks</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
