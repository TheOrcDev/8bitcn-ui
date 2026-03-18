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

const blocks = [
  {
    slug: "hero",
    title: "Hero",
    description: "Retro product launch hero with headline, badges, and CTAs.",
    category: "Marketing",
  },
  {
    slug: "feature-grid",
    title: "Feature Grid",
    description: "8-bit feature cards with icons, titles, and optional badges.",
    category: "Marketing",
  },
];

export default function BlocksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="retro mb-3 font-bold text-3xl">Blocks</h1>
        <p className="text-muted-foreground text-xs">
          Full-width, production-ready sections you can drop into any landing
          page.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <Link href={`/blocks/${block.slug}`} key={block.slug}>
            <Card className="h-full transition-colors hover:border-primary/30">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="outline">{block.category}</Badge>
                </div>
                <CardTitle className="retro text-sm">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs">
                  {block.description}
                </CardDescription>
                <div className="mt-4">
                  <Button size="sm" variant="outline">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
