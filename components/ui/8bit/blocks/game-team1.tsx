import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/8bit/card";
import { Progress } from "@/components/ui/8bit/progress";

import "@/components/ui/8bit/styles/retro.css";

export interface PartyMember {
  avatar?: string;
  hp: number;
  initials: string;
  level: number;
  name: string;
  role: string;
}

interface GameTeam1Props {
  className?: string;
  description?: string;
  members?: PartyMember[];
  title?: string;
}

const defaultMembers: PartyMember[] = [
  { initials: "OD", name: "OrcDev", role: "Tank", level: 42, hp: 95 },
  { initials: "PK", name: "PixelKnight", role: "DPS", level: 38, hp: 72 },
  { initials: "CM", name: "CodeMage", role: "Healer", level: 35, hp: 88 },
  { initials: "RR", name: "RetroRogue", role: "Scout", level: 31, hp: 60 },
];

export default function GameTeam1({
  title = "Your Party",
  description = "The squad that ships together, wins together",
  members = defaultMembers,
  className,
}: GameTeam1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground text-xs">{description}</p>
            )}
          </div>
        )}

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
          {members.map((member) => (
            <Card key={member.name}>
              <CardContent className="flex items-center gap-4 pt-6">
                <Avatar>
                  {member.avatar && (
                    <AvatarImage alt={member.name} src={member.avatar} />
                  )}
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="retro truncate font-bold text-xs">
                      {member.name}
                    </span>
                    <Badge>Lv {member.level}</Badge>
                  </div>
                  <span className="retro text-muted-foreground text-[10px]">
                    {member.role}
                  </span>
                  <div className="mt-2">
                    <div className="retro mb-1 flex justify-between text-[10px]">
                      <span>HP</span>
                      <span>{member.hp}%</span>
                    </div>
                    <Progress className="h-1.5" value={member.hp} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
