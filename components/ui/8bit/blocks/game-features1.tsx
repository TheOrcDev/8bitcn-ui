import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Progress } from "@/components/ui/8bit/progress";

import "@/components/ui/8bit/styles/retro.css";

export interface Skill {
  description: string;
  level: number;
  maxLevel: number;
  title: string;
  unlocked: boolean;
}

interface GameFeatures1Props {
  className?: string;
  description?: string;
  skills?: Skill[];
  title?: string;
}

const defaultSkills: Skill[] = [
  {
    title: "Components",
    description: "Base UI primitives. Buttons, cards, inputs, dialogs.",
    level: 3,
    maxLevel: 3,
    unlocked: true,
  },
  {
    title: "Blocks",
    description: "Full page sections. Hero, pricing, FAQ, timelines.",
    level: 2,
    maxLevel: 3,
    unlocked: true,
  },
  {
    title: "Dark Mode",
    description: "Every component works in light and dark mode.",
    level: 3,
    maxLevel: 3,
    unlocked: true,
  },
  {
    title: "Accessibility",
    description: "Keyboard nav, screen readers, focus management.",
    level: 2,
    maxLevel: 3,
    unlocked: true,
  },
  {
    title: "Templates",
    description: "Full landing page templates. One-click deploy.",
    level: 0,
    maxLevel: 3,
    unlocked: false,
  },
  {
    title: "Icon Pack",
    description: "Native 8-bit pixel icon library.",
    level: 0,
    maxLevel: 3,
    unlocked: false,
  },
];

export default function GameFeatures1({
  title = "Skill Tree",
  description = "Unlock abilities as the project evolves",
  skills = defaultSkills,
  className,
}: GameFeatures1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-4xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="retro text-muted-foreground text-[9px]">{description}</p>
            )}
          </div>
        )}

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card
              className={cn(!skill.unlocked && "opacity-50")}
              key={skill.title}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="retro text-xs">
                    {skill.title}
                  </CardTitle>
                  <Badge variant={skill.unlocked ? "default" : "secondary"}>
                    {skill.unlocked
                      ? `${skill.level}/${skill.maxLevel}`
                      : "LOCKED"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3 text-[10px] leading-relaxed">
                  {skill.description}
                </CardDescription>
                <Progress
                  className="h-2"
                  value={(skill.level / skill.maxLevel) * 100}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
