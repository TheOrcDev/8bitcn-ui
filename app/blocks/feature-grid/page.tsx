import Link from "next/link";
import FeatureGrid from "@/components/ui/8bit/blocks/feature-grid";
import { Button } from "@/components/ui/8bit/button";

export default function FeatureGridBlockPage() {
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
            Feature Grid Block
          </span>
        </div>
      </div>

      {/* Default 3 columns */}
      <div className="border-b py-8">
        <p className="retro mb-4 text-center text-muted-foreground text-[10px]">
          3 COLUMNS (DEFAULT)
        </p>
        <FeatureGrid />
      </div>

      {/* Custom items */}
      <div className="py-8">
        <p className="retro mb-4 text-center text-muted-foreground text-[10px]">
          CUSTOM ITEMS
        </p>
        <FeatureGrid
          description="Choose your path wisely"
          items={[
            {
              icon: "W",
              title: "Warrior",
              description:
                "High HP, heavy armor, melee specialist. Best for frontline tanking.",
            },
            {
              icon: "M",
              title: "Mage",
              description:
                "Devastating spells, low defense. Glass cannon with area damage.",
              badge: "POPULAR",
            },
            {
              icon: "R",
              title: "Rogue",
              description:
                "Stealth and crits. High burst damage but fragile in prolonged fights.",
            },
          ]}
          title="Select Your Class"
        />
      </div>
    </div>
  );
}
