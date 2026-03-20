import Link from "next/link";
import { Badge } from "@/components/ui/8bit/badge";
import Feature3 from "@/components/ui/8bit/blocks/feature3";
import GameRoadmap1 from "@/components/ui/8bit/blocks/game-roadmap1";
import Hero2 from "@/components/ui/8bit/blocks/hero2";
import Pricing1 from "@/components/ui/8bit/blocks/pricing1";
import Timeline3 from "@/components/ui/8bit/blocks/timeline3";
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
  "34 production-ready page blocks",
  "Improved docs navigation for blocks",
  "9 new themes with light and dark mode",
  "Upgraded to Next.js 16.2",
];

const categories = [
  { title: "Hero", count: 3, slug: "hero" },
  { title: "Features", count: 3, slug: "features" },
  { title: "Pricing", count: 2, slug: "pricing" },
  { title: "FAQ", count: 3, slug: "faq" },
  { title: "Social Proof", count: 3, slug: "social-proof" },
  { title: "Timeline", count: 3, slug: "timeline" },
  { title: "CTA", count: 2, slug: "cta" },
  { title: "Team", count: 3, slug: "team" },
  { title: "Advanced", count: 3, slug: "advanced" },
  { title: "Game", count: 7, slug: "game" },
  { title: "Layout", count: 2, slug: "layout" },
];

const totalBlocks = categories.reduce((sum, cat) => sum + cat.count, 0);

export default function BlocksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Launch Hero */}
      <section className="flex flex-col items-center py-16 text-center md:py-24">
        <p className="retro mb-4 text-[10px] text-muted-foreground">
          20th March 2026
        </p>

        <Badge className="mb-6">v2</Badge>

        <h1 className="retro mb-4 max-w-2xl font-bold text-3xl tracking-tight md:text-5xl">
          34 New Blocks Just Dropped
        </h1>

        <p className="retro mx-auto mb-6 max-w-lg text-[9px] text-muted-foreground leading-relaxed">
          A complete rebuild. New logo, new landing page, and {totalBlocks}{" "}
          production-ready page sections all built with 8bitcn components.
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

      <div className="mx-auto max-w-3xl">
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
          <div className="grid gap-8">
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

          {/* New Themes */}
          <div className="mt-8">
            <h3 className="retro mb-4 font-bold text-sm">9 New Themes</h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
              {[
                { name: "Dungeon Torch", slug: "dungeon-torch", color: "#c87533" },
                { name: "Space Station", slug: "space-station", color: "#2196f3" },
                { name: "Pixel Forest", slug: "pixel-forest", color: "#4caf50" },
                { name: "Ice Cavern", slug: "ice-cavern", color: "#81d4fa" },
                { name: "Lava Core", slug: "lava-core", color: "#e64a19" },
                { name: "Glitch Mode", slug: "glitch-mode", color: "#00ffcc" },
                { name: "Dwarven Vault", slug: "dwarven-vault", color: "#c8a600" },
                { name: "Dragon Hoard", slug: "dragon-hoard", color: "#c62828" },
                { name: "Ancient Runes", slug: "ancient-runes", color: "#009688" },
              ].map((theme) => (
                <Link
                  className="flex items-center gap-2 border border-border/50 px-3 py-2 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  href={`/blocks?theme=${theme.slug}`}
                  key={theme.name}
                >
                  <span
                    className="inline-block size-3 shrink-0 border border-foreground/20"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="retro text-[9px]">{theme.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Separator />
      </div>

      {/* Live Block Showcase */}
      <section className="py-12">
        <h2 className="retro mb-8 text-center font-bold text-lg">
          See it in action
        </h2>

        <div className="flex flex-col gap-12">
          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30 pb-4">
            <h3 className="retro border-border/50 border-b bg-muted/30 py-3 text-center text-muted-foreground text-xs">
              Split Hero
            </h3>
            <Hero2
              actions={[
                { label: "GET STARTED", variant: "default", href: "/docs" },
                { label: "VIEW BLOCKS", variant: "outline", href: "/blocks" },
              ]}
              badges={[
                { label: "Open Source" },
                { label: "v2", variant: "secondary" },
              ]}
              description="Drop-in 8-bit styled components that work with your existing stack. No config, no headaches."
              subtitle="Retro components for the modern web"
              title="SHIP FASTER"
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30 pb-4">
            <h3 className="retro border-border/50 border-b bg-muted/30 py-3 text-center text-muted-foreground text-xs">
              Zigzag Roadmap
            </h3>
            <Timeline3
              description="The saga of 8bitcn through the ages"
              events={[
                {
                  icon: "I",
                  title: "The Orcish Forge",
                  description:
                    "The orcs hammered 50+ base components out of raw iron. Buttons, cards, inputs — crude but unbreakable.",
                  badge: "CLEARED",
                },
                {
                  icon: "II",
                  title: "Goblin War Machines",
                  description:
                    "The goblins built health bars, leaderboards, and game over screens. Chaotic but effective.",
                  badge: "CLEARED",
                },
                {
                  icon: "III",
                  title: "Elven Architecture",
                  description:
                    "The elves designed 36 elegant page blocks. Hero sections, pricing halls, FAQ scrolls, and timeline tapestries.",
                  badge: "ACTIVE",
                },
                {
                  icon: "IV",
                  title: "Dwarven Vaults",
                  description:
                    "The dwarves are crafting game-themed blocks deep underground. Quest logs, skill trees, and inventory grids.",
                  badge: "ACTIVE",
                },
                {
                  icon: "V",
                  title: "The Dragon Hoard",
                  description:
                    "Full landing page templates guarded by a dragon. One brave click to deploy them all.",
                },
                {
                  icon: "VI",
                  title: "Ancient Runes",
                  description:
                    "A lost icon library carved in pixel runes. The wizards are still deciphering the glyphs.",
                },
              ]}
              title="The Quest Log"
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30 pb-4">
            <h3 className="retro border-border/50 border-b bg-muted/30 py-3 text-center text-muted-foreground text-xs">
              Tier Cards
            </h3>
            <Pricing1 />
          </div>

          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30 px-12 pb-4">
            <h3 className="retro -mx-12 border-border/50 border-b bg-muted/30 py-3 text-center text-muted-foreground text-xs">
              Feature Carousel
            </h3>
            <Feature3 />
          </div>

          <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30 pb-4">
            <h3 className="retro border-border/50 border-b bg-muted/30 py-3 text-center text-muted-foreground text-xs">
              Quest Roadmap
            </h3>
            <GameRoadmap1 />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/docs/blocks">
            <Button variant="outline">See all 34 blocks</Button>
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
              <Card className="h-full transition-all hover:bg-primary/10">
                <CardContent className="flex items-center justify-between">
                  <span className="retro text-xs">{cat.title}</span>
                  <Badge>{cat.count}</Badge>
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
        <div className="grid gap-x-4 md:grid-cols-3">
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
              <CardHeader>
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
