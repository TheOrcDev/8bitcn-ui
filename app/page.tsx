import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
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

export default function Home() {
  return (
    <div className="mx-auto px-4">
      {/* Hero */}
      <section className="flex flex-col items-center py-16 text-center md:py-24">
        <Link href="/blocks">
          <Badge className="mb-6" variant="outline">
            v2 — 27 new blocks
          </Badge>
        </Link>

        <h1 className="retro mb-4 max-w-3xl font-bold text-lg tracking-tight md:text-2xl lg:text-5xl">
          Rare Loot UI Library
        </h1>

        <p className="retro mx-auto mb-8 max-w-xl text-muted-foreground text-xs leading-relaxed">
          Beautifully crafted 8-bit components and blocks. Open source.
          Copy-paste.
        </p>

        <div className="flex gap-4">
          <Link href="/docs">
            <Button>Open Docs</Button>
          </Link>
          <Link href="/blocks">
            <Button variant="outline">Explore Blocks</Button>
          </Link>
        </div>
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

      {/* Component Showcase */}
      <ComponentShowcase />

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
    </div>
  );
}
