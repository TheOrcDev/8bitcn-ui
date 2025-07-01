import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";

interface BlocksNavigationProps {
  active: string;
}

const blocks = [
  {
    id: "authentication",
    title: "Authentication",
    href: "/blocks/authentication",
  },
  {
    id: "charts",
    title: "Charts",
    href: "/blocks/charts",
  },
  {
    id: "calendar",
    title: "Calendar",
    href: "/blocks/calendar",
  },
];

export default function BlocksNavigation({ active }: BlocksNavigationProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {blocks.map((block) => (
        <Link key={block.id} href={block.href}>
          <Button variant={active === block.id ? "default" : "outline"}>
            {block.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
