import Link from "next/link";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

const categories = [
  {
    title: "Hero",
    description: "Landing page headers that make a first impression.",
    blocks: [
      { name: "Centered", slug: "hero/hero1" },
      { name: "Split", slug: "hero/hero2" },
      { name: "Game Title", slug: "hero/hero3" },
    ],
  },
  {
    title: "Features",
    description: "Showcase what your product does.",
    blocks: [
      { name: "Card Grid", slug: "features/feature1" },
      { name: "List", slug: "features/feature2" },
      { name: "Carousel", slug: "features/feature3" },
    ],
  },
  {
    title: "Pricing",
    description: "Plans, tiers, and comparison tables.",
    blocks: [
      { name: "Tier Cards", slug: "pricing/pricing1" },
      { name: "Monthly Toggle", slug: "pricing/pricing2" },
      { name: "Comparison Table", slug: "pricing/pricing3" },
    ],
  },
  {
    title: "FAQ",
    description: "Answer questions before they're asked.",
    blocks: [
      { name: "Accordion", slug: "faq/faq1" },
      { name: "Card Grid", slug: "faq/faq2" },
      { name: "Searchable", slug: "faq/faq3" },
    ],
  },
  {
    title: "Social Proof",
    description: "Stats, testimonials, and reviews.",
    blocks: [
      { name: "Stats Bar", slug: "social-proof/social-proof1" },
      { name: "Testimonials", slug: "social-proof/social-proof2" },
      { name: "Review Carousel", slug: "social-proof/social-proof3" },
    ],
  },
  {
    title: "Timeline",
    description: "Steps, roadmaps, and progress flows.",
    blocks: [
      { name: "Vertical", slug: "timeline/timeline1" },
      { name: "Horizontal", slug: "timeline/timeline2" },
      { name: "Zigzag Roadmap", slug: "timeline/timeline3" },
    ],
  },
  {
    title: "CTA",
    description: "Convert visitors into users.",
    blocks: [
      { name: "Comparison", slug: "cta/cta1" },
      { name: "Use Cases", slug: "cta/cta2" },
    ],
  },
  {
    title: "Team",
    description: "People, changelogs, and case studies.",
    blocks: [
      { name: "Team Grid", slug: "team/team1" },
      { name: "Changelog", slug: "team/team2" },
      { name: "Case Studies", slug: "team/team3" },
    ],
  },
  {
    title: "Advanced",
    description: "Unique blocks with special interactions.",
    blocks: [
      { name: "Demo Shell", slug: "advanced/advanced1" },
      { name: "Metrics Dashboard", slug: "advanced/advanced2" },
      { name: "Newsletter", slug: "advanced/advanced3" },
    ],
  },
  {
    title: "Layout",
    description: "Structural blocks for page scaffolding.",
    blocks: [{ name: "Footer", slug: "layout/sticky-footer" }],
  },
];

const totalBlocks = categories.reduce(
  (sum, cat) => sum + cat.blocks.length,
  0
);

export default function BlocksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <Badge className="mb-4" variant="outline">
          V2
        </Badge>
        <h1 className="retro mb-4 font-bold text-4xl tracking-tight md:text-6xl">
          BLOCKS
        </h1>
        <p className="mx-auto mb-2 max-w-xl text-muted-foreground text-xs leading-relaxed">
          {totalBlocks} production-ready sections you can drop into any landing
          page. Every block uses only 8bitcn components. Copy, paste, ship.
        </p>
        <p className="retro text-muted-foreground text-[10px]">
          {categories.length} categories / {totalBlocks} blocks
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-12">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="mb-4">
              <h2 className="retro font-bold text-lg">{category.title}</h2>
              <p className="text-muted-foreground text-xs">
                {category.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.blocks.map((block) => (
                <Link
                  href={`/docs/blocks/${block.slug}`}
                  key={block.slug}
                >
                  <Card className="h-full transition-all hover:border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="retro text-xs">
                        {block.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[10px]">
                        {category.title} / {block.name}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="retro mb-4 text-muted-foreground text-xs">
          All 4 phases complete. 27 blocks ready to ship.
        </p>
        <Link href="/docs">
          <Button variant="outline">BROWSE ALL COMPONENTS</Button>
        </Link>
      </div>
    </div>
  );
}
