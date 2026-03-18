import Link from "next/link";
import Sponsors from "@/components/sponsors";
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

const quickLinks = [
  { label: "Components", href: "/docs", description: "50+ retro primitives" },
  { label: "Blocks", href: "/blocks", description: "27 page sections" },
  { label: "Examples", href: "/docs/blocks", description: "Live previews" },
  { label: "Changelog", href: "/changelog", description: "What shipped" },
];

const featuredBlocks = [
  {
    name: "Centered Hero",
    category: "Hero",
    slug: "hero/hero1",
    description: "Big headline with badges and CTAs.",
  },
  {
    name: "Split Hero",
    category: "Hero",
    slug: "hero/hero2",
    description: "Text left, visual slot right.",
  },
  {
    name: "Card Grid",
    category: "Features",
    slug: "features/feature1",
    description: "Feature cards with icons and badges.",
  },
  {
    name: "Carousel",
    category: "Features",
    slug: "features/feature3",
    description: "Swipeable feature cards.",
  },
  {
    name: "Tier Cards",
    category: "Pricing",
    slug: "pricing/pricing1",
    description: "Side-by-side pricing tiers.",
  },
  {
    name: "Accordion",
    category: "FAQ",
    slug: "faq/faq1",
    description: "Collapsible Q and A.",
  },
];

const whyReasons = [
  {
    title: "Retro-First Primitives",
    description:
      "Every component is designed pixel-by-pixel for the 8-bit aesthetic. Not a theme on top of generic UI — retro from the ground up.",
  },
  {
    title: "Copy-Paste Workflow",
    description:
      "No runtime dependency. Components are copied into your project. Own the code. Modify anything. No lock-in.",
  },
  {
    title: "Ship Fast with Blocks",
    description:
      "27 production-ready page sections. Hero, pricing, FAQ, social proof — combine them into full landing pages in minutes.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="flex flex-col items-center py-16 text-center md:py-24">
        <Link href="/blocks">
          <Badge className="mb-6" variant="outline">
            v2 — 27 new blocks
          </Badge>
        </Link>

        <h1 className="retro mb-4 max-w-5xl font-bold text-xl tracking-tight md:text-5xl lg:text-6xl">
          The Foundation for Retro Design Systems
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-xs leading-relaxed">
          Beautifully crafted 8-bit components and blocks. Open source.
          Copy-paste. Built for indie hackers who ship.
        </p>

        <div className="flex gap-4">
          <Link href="/docs">
            <Button>Open Docs</Button>
          </Link>
          <Link href="/blocks">
            <Button variant="outline">Explore Blocks</Button>
          </Link>
        </div>

        <p className="retro mt-6 text-[10px] text-muted-foreground">
          Open source / Copy-paste / Built for indie hackers
        </p>
      </section>

      <Separator />

      {/* Quick Links */}
      <section className="py-12">
        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              <Card className="h-full transition-all hover:border-primary/30">
                <CardHeader className="pb-2">
                  <CardTitle className="retro text-xs">{link.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[10px]">
                    {link.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Featured v2 Blocks */}
      <section className="py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="retro font-bold text-lg md:text-xl">
            New in v2: Blocks
          </h2>
          <Link href="/blocks">
            <Button size="sm" variant="outline">
              View all
            </Button>
          </Link>
        </div>

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlocks.map((block) => (
            <Link href={`/docs/blocks/${block.slug}`} key={block.slug}>
              <Card className="h-full transition-all hover:border-primary/30">
                <CardHeader className="pb-2">
                  <div className="mb-1">
                    <Badge variant="outline">{block.category}</Badge>
                  </div>
                  <CardTitle className="retro text-xs">{block.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[10px]">
                    {block.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Why 8bitcn */}
      <section className="py-12">
        <h2 className="retro mb-8 text-center font-bold text-lg md:text-xl">
          Why 8bitcn
        </h2>

        <div className="grid gap-x-4 gap-y-1 md:grid-cols-3">
          {whyReasons.map((reason) => (
            <Card key={reason.title}>
              <CardHeader className="pb-2">
                <CardTitle className="retro text-xs">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[10px] leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

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
          <Link href="/blocks">
            <Button variant="outline">See v2 Blocks</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
