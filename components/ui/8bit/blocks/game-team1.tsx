import { cn } from "@/lib/utils";

import PlayerProfileCard from "@/components/ui/8bit/blocks/player-profile-card";

import "@/components/ui/8bit/styles/retro.css";

export interface PartyMember {
  avatar?: string;
  hp: number;
  initials: string;
  level: number;
  mana?: number;
  name: string;
  xp?: number;
}

interface GameTeam1Props {
  className?: string;
  description?: string;
  members?: PartyMember[];
  title?: string;
}

const defaultMembers: PartyMember[] = [
  { initials: "OR", name: "Orc", level: 42, hp: 95, mana: 80, xp: 72 },
  { initials: "GO", name: "Goblin", level: 38, hp: 72, mana: 60, xp: 45 },
  { initials: "OG", name: "Ogre", level: 35, hp: 88, mana: 95, xp: 30 },
  { initials: "TR", name: "Troll", level: 31, hp: 60, mana: 40, xp: 85 },
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
              <p className="retro text-muted-foreground text-[9px]">{description}</p>
            )}
          </div>
        )}

        <div className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
          {members.map((member) => (
            <PlayerProfileCard
              avatarFallback={member.initials}
              avatarSrc={member.avatar}
              key={member.name}
              level={member.level}
              playerName={member.name}
              stats={{
                health: { current: member.hp, max: 100 },
                mana: member.mana
                  ? { current: member.mana, max: 100 }
                  : undefined,
                experience: member.xp
                  ? { current: member.xp, max: 100 }
                  : undefined,
                level: member.level,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
