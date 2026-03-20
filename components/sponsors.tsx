import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/8bit/avatar";
import { cn } from "@/lib/utils";
import MythicSponsor from "./mythic-sponsor";
import SponsorClaim from "./sponsor-claim";
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
  {
    name: "Shadcn UI Kit",
    description: "Admin dashboards, blocks, components & examples",
    url: "https://shadcnuikit.com/",
    image: "/sponsors/shadcnuikit-logo.svg",
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
  {
    name: "shadcnspace",
    url: "https://shadcnspace.com/",
    image: "/sponsors/shadcnspace.png",
    invert: false,
  },
];

// const sponsors = [
// ];

export default function Sponsors() {
  return (
    <div className="retro flex flex-col items-center justify-center gap-10 px-5 py-10">
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Sponsors</h2>
          <p className="max-w-xl text-muted-foreground text-xs">
            We are grateful to our sponsors who help us grow and support our
            projects.
          </p>
        </div>

        <Image
          alt="Wizard"
          className="pixelated"
          height={200}
          src="/images/8bit-treasure.png"
          width={200}
        />
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
        <div className="flex flex-col items-center gap-4">
          <SponsorClaim
            className="cursor-pointer"
            labelClassName="flex size-60 items-center justify-center border-4 border-dashed border-muted-foreground/20"
            text="Be here"
            textClassName="retro text-muted-foreground/40 text-xs"
            tier="mythic"
          />
          <p className="font-bold text-muted-foreground/40 text-sm">?</p>
        </div>
      </div>

      <h2 className="font-bold text-xl">LEGENDARY Sponsors</h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {legendarySponsors.map((sponsor) => (
          <Link href={sponsor.url} key={sponsor.name} target="_blank">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-50" variant="default">
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
        {[1, 2, 3, 4].map((i) => (
          <div
            className="flex flex-col items-center gap-4"
            key={`legendary-empty-${i}`}
          >
            <SponsorClaim
              className="cursor-pointer"
              labelClassName="flex size-50 items-center justify-center border-4 border-dashed border-muted-foreground/20"
              text="Be here"
              textClassName="retro text-[9px] text-muted-foreground/40"
              tier="legendary"
            />
            <p className="font-bold text-muted-foreground/40 text-sm">?</p>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-xl">Sponsors</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            className="flex flex-col items-center gap-3"
            key={`sponsor-empty-${i}`}
          >
            <SponsorClaim
              className="cursor-pointer"
              labelClassName="flex size-30 items-center justify-center border-4 border-dashed border-muted-foreground/20"
              text="Be here"
              textClassName="retro text-[8px] text-muted-foreground/40"
              tier="regular"
            />
            <p className="font-bold text-muted-foreground/40 text-xs">?</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="max-w-xl text-center text-muted-foreground text-sm">
          You can help us grow by becoming a sponsor, and join this awesome list
          of supporters!
        </p>
      </div>
    </div>
  );
}
