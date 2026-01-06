import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/8bit/avatar";
import { cn } from "@/lib/utils";
import MythicSponsor from "./mythic-sponsor";
import { Button } from "./ui/8bit/button";
import { Separator } from "./ui/8bit/separator";

export const mythicSponsors = [
  {
    name: "Shadcn Blocks",
    description: "The ultimate block set for Shadcn",
    url: "https://www.shadcnblocks.com/",
    image: "/sponsors/shadcn-blocks.svg",
    invert: true,
    foil: true,
  },
  {
    name: "Shadcn Studio",
    description: "Shadcn blocks & templates",
    url: "https://shadcnstudio.com/?utm_source=orcdev_8bitcn&utm_medium=banner&utm_campaign=github",
    image: "/sponsors/shadcn-studio.svg",
    invert: true,
    foil: false,
  },
];

const legendarySponsors = [
  {
    name: "Trigger.dev",
    url: "https://www.trigger.dev/",
    image: "/sponsors/trigger-dev.png",
    invert: false,
  },
  {
    name: "Inbox Zero",
    url: "https://www.getinboxzero.com/",
    image: "/sponsors/inbox-zero.jpg",
    invert: true,
  },
  {
    name: "Coolify",
    url: "https://www.coolify.io/",
    image: "/sponsors/coolify-logo.png",
    invert: false,
  },
  {
    name: "Inbound",
    url: "https://inbound.new/",
    image: "/sponsors/inbound.svg",
    invert: false,
  },
];

const sponsors = [
  {
    name: "Bounty",
    url: "https://www.bounty.new/",
    image: "/sponsors/bounty.jpg",
    invert: true,
  },
];

export default function Sponsors() {
  return (
    <div className="retro flex flex-col items-center justify-center gap-10 px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-2xl">Sponsors</h2>
        <p className="max-w-xl text-center text-muted-foreground text-xs">
          We are grateful to our sponsors who help us grow and support our
          projects.
        </p>
      </div>

      <Separator />

      <h2 className="font-bold text-xl">MYTHIC Sponsors</h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {mythicSponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <div className="flex flex-col items-center gap-4">
              {sponsor.foil ? (
                <Avatar className="size-60" variant="default">
                  <MythicSponsor
                    className="p-4"
                    height={250}
                    src={sponsor.image}
                    width={250}
                  />
                </Avatar>
              ) : (
                <Avatar className="size-60" variant="default">
                  <AvatarImage
                    alt={sponsor.name}
                    className={cn("p-5", sponsor.invert && "dark:invert")}
                    src={sponsor.image}
                  />
                </Avatar>
              )}

              <p className="font-bold text-sm">{sponsor.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-bold text-xl">LEGENDARY Sponsors</h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {legendarySponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-60" variant="default">
                <AvatarImage
                  alt={sponsor.name}
                  className={cn("p-5", sponsor.invert && "dark:invert")}
                  src={sponsor.image}
                />
              </Avatar>
              <p className="font-bold text-sm">{sponsor.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-bold text-xl">Sponsors</h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {sponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-30" variant="default">
                <AvatarImage
                  alt={sponsor.name}
                  className={cn("p-5", sponsor.invert && "dark:invert")}
                  src={sponsor.image}
                />
              </Avatar>
              <p className="font-bold text-sm">{sponsor.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="max-w-xl text-center text-muted-foreground text-sm">
          You can help us grow by becoming a sponsor, and join this awesome list
          of supporters!
        </p>
        <Link href="https://github.com/sponsors/theorcdev" target="_blank">
          <Button>Become a Sponsor</Button>
        </Link>
      </div>
    </div>
  );
}
