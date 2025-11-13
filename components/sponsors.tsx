import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";

import { Button } from "./ui/8bit/button";
import { Separator } from "./ui/8bit/separator";

export default function Sponsors() {
  return (
    <div className="retro px-5 flex flex-col gap-10 mt-10 justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold">Sponsors</h1>
        <p className="text-xs text-muted-foreground max-w-xl text-center">
          We are grateful to our sponsors who help us grow and support our
          projects.
        </p>
      </div>

      <Separator />

      <h2 className="text-xl font-bold">LEGENDARY Sponsors</h2>

      <Link href="https://www.shadcnblocks.com/" target="_blank">
        <div className="flex flex-col gap-4 items-center">
          <Avatar className="size-60" variant="default">
            <AvatarImage
              src="/sponsors/shadcn-blocks.svg"
              alt="Shadcn Blocks"
              className="dark:invert"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="text-sm font-bold">Shadcn Blocks</h3>
        </div>
      </Link>

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
