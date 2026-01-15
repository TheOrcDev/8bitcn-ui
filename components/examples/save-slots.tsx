"use client";

import {
  type SaveSlot,
  SaveSlots,
} from "@/components/ui/8bit/blocks/save-slots";

const exampleSlots: SaveSlot[] = [
  {
    id: "save-1",
    isEmpty: false,
    name: "Crystal Caves Adventure",
    timestamp: new Date("2025-12-01T14:30:00"),
    preview: "/images/save-preview-1.png",
    description: "Level 15 - Crystal Caves, 3 hearts remaining",
  },
  {
    id: "save-2",
    isEmpty: false,
    name: "Dragon's Lair",
    timestamp: new Date("2025-11-28T10:15:00"),
    preview: "/images/save-preview-1.png",
    description: "Level 42 - Final Boss Area",
  },
  {
    id: "save-3",
    isEmpty: true,
  },
  {
    id: "save-4",
    isEmpty: false,
    name: "Tutorial Complete",
    timestamp: new Date("2025-11-25T16:45:00"),
    preview: "/images/save-preview-1.png",
    description: "Level 1 - Village Square",
  },
  {
    id: "save-5",
    isEmpty: true,
  },
  {
    id: "save-6",
    isEmpty: true,
  },
];

export function SaveSlotsExample() {
  const handleSlotClick = (slot: SaveSlot) => {
    if (slot.isEmpty) {
      console.log("Create new save in slot:", slot.id);
    } else {
      console.log("Load save from slot:", slot.id);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <SaveSlots
        className="w-full"
        layout="vertical"
        onSlotClick={handleSlotClick}
        slots={exampleSlots}
      />
    </div>
  );
}
