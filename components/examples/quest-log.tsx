"use client";

import { type Quest, QuestLog } from "@/components/ui/8bit/quest-log";

const exampleQuests: Quest[] = [
  {
    id: "tutorial-1",
    title: "Welcome to the Game",
    description:
      "This is your first quest! Learn the basic controls and mechanics. Talk to the village elder to get started on your adventure. He will teach you about combat, inventory management, and quest tracking.",
    status: "completed",
    shortDescription: "Complete the tutorial and learn the basics.",
  },
  {
    id: "main-1",
    title: "The Dark Crystal",
    description:
      "The ancient Dark Crystal has been stolen from the temple. You must recover it before the evil sorcerer uses its power to destroy the kingdom. The crystal is hidden in the treacherous Crystal Caves, guarded by powerful monsters and deadly traps.",
    status: "active",
    shortDescription: "Recover the stolen Dark Crystal from the Crystal Caves.",
  },
  {
    id: "side-1",
    title: "Lost Cat",
    description:
      "A villager's beloved cat has gone missing. Search the nearby forest and bring it back safely. The cat is known to be very shy and might hide when it sees you, so approach carefully.",
    status: "pending",
    shortDescription: "Find and return the lost cat to its owner.",
  },
  {
    id: "failed-1",
    title: "Goblin Ambush",
    description:
      "You were ambushed by a group of goblins while traveling through the forest. Despite your best efforts, you were overwhelmed and had to retreat. The goblins have taken your supplies and you need to regroup.",
    status: "failed",
    shortDescription: "Defeat the goblin ambush in the forest.",
  },
];

export function QuestLogExample() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <QuestLog quests={exampleQuests} maxHeight="500px" className="w-full" />
    </div>
  );
}
