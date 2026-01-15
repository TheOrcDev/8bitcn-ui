import { CharacterSheet } from "@/components/ui/8bit/blocks/character-sheet";

export default function CharacterSheetPage() {
  return (
    <div className="min-h-svh bg-background p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="retro mb-2 font-bold text-3xl">
            Character Sheet Demo
          </h1>
          <p className="text-muted-foreground">
            A full-page view of the 8-bit RPG character sheet component
          </p>
        </div>

        <CharacterSheet
          avatarFallback="OD"
          avatarSrc="/images/404/pixel-orc.webp"
          characterClass="Warrior"
          characterLevel={42}
          characterName="Orc"
          characterTitle="The Pixel Master"
          customSections={[
            {
              title: "Active Skills",
              content: (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="border-2 bg-muted/30 p-2 text-center">
                    <span className="text-red-500 text-sm">Power Strike</span>
                  </div>
                  <div className="border-2 bg-muted/30 p-2 text-center">
                    <span className="text-amber-500 text-sm">Shield Bash</span>
                  </div>
                  <div className="border-2 bg-muted/30 p-2 text-center">
                    <span className="text-green-500 text-sm">Battle Cry</span>
                  </div>
                  <div className="border-2 bg-muted/30 p-2 text-center">
                    <span className="text-blue-500 text-sm">Iron Will</span>
                  </div>
                </div>
              ),
            },
          ]}
          equipment={[
            { slot: "Weapon", name: "Pixel Blade +5", rarity: "epic" },
            { slot: "Armor", name: "Retro Mail", rarity: "rare" },
            { slot: "Helmet", name: "8-Bit Crown", rarity: "legendary" },
            { slot: "Accessory", name: "Code Ring", rarity: "uncommon" },
          ]}
          experience={{ current: 7500, max: 10_000 }}
          health={{ current: 850, max: 1000 }}
          mana={{ current: 320, max: 400 }}
          primaryAttributes={[
            {
              name: "Strength",
              shortName: "STR",
              value: 18,
              color: "text-red-500",
            },
            {
              name: "Dexterity",
              shortName: "DEX",
              value: 14,
              color: "text-green-500",
            },
            {
              name: "Intelligence",
              shortName: "INT",
              value: 22,
              color: "text-blue-500",
            },
            {
              name: "Vitality",
              shortName: "VIT",
              value: 16,
              color: "text-amber-500",
            },
            {
              name: "Wisdom",
              shortName: "WIS",
              value: 20,
              color: "text-purple-500",
            },
            {
              name: "Charisma",
              shortName: "CHA",
              value: 12,
              color: "text-pink-500",
            },
          ]}
          secondaryStats={[
            { name: "Attack", value: 156 },
            { name: "Defense", value: 98 },
            { name: "Speed", value: 72 },
            { name: "Crit Rate", value: 15, isPercentage: true },
            { name: "Crit Damage", value: 150, isPercentage: true },
            { name: "Luck", value: 8 },
          ]}
        />
      </div>
    </div>
  );
}
