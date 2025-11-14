import Link from "next/link";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/8bit/avatar";

import { Button } from "./ui/8bit/button";
import { Separator } from "./ui/8bit/separator";

const legendarySponsors = [
  {
    name: "Shadcn Blocks",
    url: "https://www.shadcnblocks.com/",
    image: "/sponsors/shadcn-blocks.svg",
    invert: true,
  },
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
    <div className="retro px-5 flex flex-col gap-10 justify-center items-center py-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold">Sponsors</h1>
        <p className="text-xs text-muted-foreground max-w-xl text-center">
          We are grateful to our sponsors who help us grow and support our
          projects.
        </p>
      </div>

      <Separator />

      <h2 className="text-xl font-bold">LEGENDARY Sponsors</h2>

      <div className="flex gap-10 flex-wrap justify-center items-center">
        {legendarySponsors.map((sponsor) => (
          <Link href={sponsor.url} target="_blank" key={sponsor.name}>
            <div className="flex flex-col gap-4 items-center">
              <Avatar className="size-60" variant="default">
                <AvatarImage
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={cn("p-5", sponsor.invert && "dark:invert")}
                />
              </Avatar>
              <p className="text-sm font-bold">{sponsor.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-bold">Sponsors</h2>

      <div className="flex gap-10 flex-wrap justify-center items-center">
        {sponsors.map((sponsor) => (
          <Link href={sponsor.url} target="_blank" key={sponsor.name}>
            <div className="flex flex-col gap-4 items-center">
              <Avatar className="size-30" variant="default">
                <AvatarImage
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={cn("p-5", sponsor.invert && "dark:invert")}
                />
              </Avatar>
              <p className="text-sm font-bold">{sponsor.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-5 items-center">
        <p className="text-sm text-muted-foreground max-w-xl text-center">
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
