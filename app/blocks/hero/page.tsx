import Link from "next/link";
import Hero from "@/components/ui/8bit/blocks/hero";
import { Button } from "@/components/ui/8bit/button";

export default function HeroBlockPage() {
  return (
    <div>
      {/* Nav bar */}
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-3">
          <Link href="/blocks">
            <Button size="sm" variant="outline">
              Back to Blocks
            </Button>
          </Link>
          <span className="retro text-muted-foreground text-xs">
            Hero Block
          </span>
        </div>
      </div>

      {/* Centered variant */}
      <div className="border-b py-8">
        <p className="retro mb-4 text-center text-muted-foreground text-[10px]">
          VARIANT: CENTERED
        </p>
        <Hero
          actions={[
            { label: "START QUEST", variant: "default" },
            { label: "VIEW LORE", variant: "outline" },
          ]}
          badges={[
            { label: "Open Source" },
            { label: "Pixel Perfect", variant: "secondary" },
            { label: "No Microtx", variant: "outline" },
          ]}
          description="Ship pixel-perfect landing pages, dashboards, and gaming UIs with components that look straight out of the golden age."
          subtitle="The 8-bit component library for modern builders"
          title="BUILD YOUR RETRO EMPIRE"
        />
      </div>

      {/* Split variant */}
      <div className="py-8">
        <p className="retro mb-4 text-center text-muted-foreground text-[10px]">
          VARIANT: SPLIT
        </p>
        <Hero
          actions={[{ label: "START BUILDING", variant: "default" }]}
          description="Drop-in 8-bit styled components that work with your existing stack. No config, no headaches."
          subtitle="Retro components for the modern web"
          title="SHIP FASTER"
          variant="split"
        />
      </div>
    </div>
  );
}
