import { Metadata } from "next";

import { buttonMetaData } from "@/lib/metadata";

import EnemyHealthDisplay from "@/components/ui/8bit/enemy-health-display";
import { Separator } from "@/components/ui/separator";

import CopyCommandButton from "../../components/copy-command-button";
import InstallationCommands from "../../components/installation-commands";
import { OpenInV0Button } from "../../components/open-in-v0-button";

export const metadata: Metadata = {
  title: "Enemy Health Display",
  description:
    "A retro-styled enemy health display component with health bar, name, and level",
  openGraph: {
    images: buttonMetaData,
  },
};

export default function EnemyHealthDisplayPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Enemy Health Display</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/enemy-health-display"
          command="pnpm dlx shadcn@latest add @8bitcn/enemy-health-display"
        />
      </div>

      <p className="text-muted-foreground">
        A retro-styled enemy health display component that shows enemy name,
        level, and health bar. Perfect for RPG and action games.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[500px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit Enemy Health Display component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button
              name="8bit-enemy-health-display"
              className="w-fit"
            />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-[600px] mx-auto">
          <div className="w-full space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Boss Enemy (High Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Fire Dragon"
                level={25}
                currentHealth={850}
                maxHealth={1000}
                healthBarVariant="retro"
                healthBarColor="bg-red-500"
                enemyNameColor="text-red-500"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Regular Enemy (Medium Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Goblin Warrior"
                level={5}
                currentHealth={45}
                maxHealth={100}
                healthBarVariant="retro"
                healthBarColor="bg-orange-500"
                enemyNameColor="text-green-500"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Elite Enemy (Critical Health)
              </p>
              <EnemyHealthDisplay
                enemyName="Dark Knight"
                level={15}
                currentHealth={12}
                maxHealth={200}
                healthBarVariant="retro"
                healthBarColor="bg-purple-500"
                enemyNameColor="text-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="enemy-health-display" />

      <h3 className="text-lg font-bold">Usage</h3>

      <Separator />

      <div className="space-y-4">
        <div>
          <h4 className="text-md font-semibold mb-2">Basic Usage</h4>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`import EnemyHealthDisplay from "@/components/ui/8bit/enemy-health-display";

export default function GameUI() {
  return (
    <EnemyHealthDisplay
      enemyName="Fire Dragon"
      level={25}
      currentHealth={850}
      maxHealth={1000}
    />
  );
}`}
            </pre>
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Customization</h4>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`<EnemyHealthDisplay
  enemyName="Dark Knight"
  level={15}
  currentHealth={12}
  maxHealth={200}
  healthBarVariant="retro"
  healthBarColor="bg-purple-500"
  showLevel={true}
  showHealthText={true}
  size="lg"
  color="purple"
/>`}
            </pre>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Props</h3>

      <Separator />

      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold">Required Props</h4>
            <ul className="space-y-1 mt-2">
              <li>
                <code>enemyName</code> - Enemy name to display
              </li>
              <li>
                <code>currentHealth</code> - Current health value
              </li>
              <li>
                <code>maxHealth</code> - Maximum health value
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Optional Props</h4>
            <ul className="space-y-1 mt-2">
              <li>
                <code>level</code> - Enemy level
              </li>
              <li>
                <code>showLevel</code> - Show level (default: true)
              </li>
              <li>
                <code>showHealthText</code> - Show health text (default: true)
              </li>
              <li>
                <code>healthBarVariant</code> - &quot;retro&quot; |
                &quot;default&quot;
              </li>
              <li>
                <code>healthBarColor</code> - Health bar color class
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Styling Props</h4>
            <ul className="space-y-1 mt-2">
              <li>
                <code>variant</code> - &quot;retro&quot; | &quot;default&quot;
              </li>
              <li>
                <code>size</code> - &quot;sm&quot; | &quot;md&quot; |
                &quot;lg&quot;
              </li>
              <li>
                <code>color</code> - Text color variant
              </li>
              <li>
                <code>className</code> - Additional CSS classes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
