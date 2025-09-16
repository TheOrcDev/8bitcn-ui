"use client";

import { type Quest, QuestLog } from "@/components/ui/8bit/quest-log";

const sampleQuests: Quest[] = [
  {
    id: "quest-1",
    title: "Defeat the Goblin King",
    description:
      "The Goblin King has been terrorizing the village for weeks. Travel to the Dark Forest and defeat him to restore peace. Be careful - he&apos;s known to have powerful dark magic and a horde of goblin minions. The reward is 500 gold pieces and a legendary sword.",
    status: "active",
    shortDescription:
      "Defeat the Goblin King in the Dark Forest to restore peace to the village.",
  },
  {
    id: "quest-2",
    title: "Collect Dragon Scales",
    description:
      "The local blacksmith needs dragon scales to forge the ultimate armor. Travel to the Dragon's Lair and collect 10 dragon scales. Be warned - dragons are extremely dangerous and this quest is not for the faint of heart. The scales are located in the deepest part of the lair.",
    status: "active",
    shortDescription:
      "Collect 10 dragon scales from the Dragon's Lair for the blacksmith.",
  },
  {
    id: "quest-3",
    title: "Deliver the Potion",
    description:
      "The village healer needs this healing potion delivered to the wounded knight in the castle. Time is of the essence - the knight's life depends on it. Take the safest route through the forest and avoid any bandits along the way.",
    status: "completed",
    shortDescription:
      "Deliver healing potion to the wounded knight in the castle.",
  },
  {
    id: "quest-4",
    title: "Find the Lost Artifact",
    description:
      "An ancient artifact has been stolen from the museum. Investigate the crime scene and follow the clues to find the thief. The artifact is said to have magical properties and could be dangerous in the wrong hands. Check the local tavern for any suspicious characters.",
    status: "failed",
    shortDescription: "Investigate the stolen artifact and find the thief.",
  },
  {
    id: "quest-5",
    title: "Escort the Merchant",
    description:
      "A wealthy merchant needs protection while traveling through the dangerous mountain pass. Bandits are known to frequent this area, so stay alert. The merchant is paying well for safe passage to the next town. Make sure to arrive before nightfall.",
    status: "pending",
    shortDescription:
      "Protect the merchant while traveling through the mountain pass.",
  },
  {
    id: "quest-6",
    title: "Clear the Cave",
    description:
      "A cave near the village has been overrun by giant spiders. The villagers are too afraid to go near it, but it&apos;s blocking access to important resources. Clear out all the spiders and make the cave safe again. Bring plenty of torches and be ready for a tough fight.",
    status: "pending",
    shortDescription: "Clear giant spiders from the cave near the village.",
  },
  {
    id: "quest-7",
    title: "Gather Herbs",
    description:
      "The village healer needs rare herbs to make medicine for the sick. These herbs only grow in the enchanted garden at the top of Mystic Mountain. The garden is protected by ancient magic, so be prepared for puzzles and traps. The herbs are very delicate and must be handled with care.",
    status: "pending",
    shortDescription:
      "Gather rare herbs from the enchanted garden on Mystic Mountain.",
  },
  {
    id: "quest-8",
    title: "Rescue the Princess",
    description:
      "The princess has been kidnapped by an evil wizard and is being held in his tower. The tower is heavily guarded and filled with magical traps. You&apos;ll need to be stealthy and clever to reach the top. The princess is the key to saving the kingdom from the wizard&apos;s dark plans.",
    status: "active",
    shortDescription: "Rescue the kidnapped princess from the wizard's tower.",
  },
];

export default function QuestLogPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold retro">Quest Log Demo</h1>
        <p className="text-muted-foreground retro">
          A retro-styled quest log component for tracking game missions and
          tasks.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold retro">Quest Log</h2>
        <QuestLog quests={sampleQuests} maxHeight="500px" />
      </div>

      {/* Empty State Demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold retro">Empty State</h2>
        <QuestLog
          quests={[]}
          emptyStateMessage="No quests available. Check back later for new adventures!"
        />
      </div>
    </div>
  );
}
