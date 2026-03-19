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

import "@/components/ui/8bit/styles/retro.css";

export interface TeamMember {
  avatar?: string;
  badge?: string;
  initials: string;
  name: string;
  role: string;
}

interface Team1Props {
  className?: string;
  description?: string;
  members?: TeamMember[];
  title?: string;
}

const defaultMembers: TeamMember[] = [
  { initials: "OD", name: "OrcDev", role: "Founder / Lead Dev", badge: "ADMIN" },
  { initials: "PK", name: "PixelKnight", role: "Core Contributor" },
  { initials: "CM", name: "CodeMage", role: "Component Engineer" },
  { initials: "RR", name: "RetroRogue", role: "Design Lead" },
  { initials: "DM", name: "DungeonMaster", role: "Documentation" },
  { initials: "SS", name: "SwordSmith", role: "Community Manager", badge: "MOD" },
];

export default function Team1({
  title = "The Guild",
  description = "The people behind the pixels",
  members = defaultMembers,
  className,
}: Team1Props) {
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
          {members.map((member) => (
            <Card className="relative" key={member.name}>
              {member.badge && (
                <div className="absolute top-2 right-4 z-10">
                  <Badge className="text-[7px]">{member.badge}</Badge>
                </div>
              )}
              <CardContent className="flex items-center gap-4">
                <Avatar>
                  {member.avatar && (
                    <AvatarImage alt={member.name} src={member.avatar} />
                  )}
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="retro font-bold text-xs">{member.name}</p>
                  <p className="retro text-muted-foreground text-[10px]">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
