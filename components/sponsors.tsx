import Image from "next/image";
import Link from "next/link";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/8bit/empty";

import { Button } from "./ui/8bit/button";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-4 mt-10 justify-center items-center">
      <h1 className="retro text-2xl font-bold">Sponsors</h1>

      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Image
              src="/images/404/pixel-black-white-orc.webp"
              alt="TheOrcDev"
              width={200}
              height={200}
            />
          </EmptyMedia>
          <EmptyTitle>No Sponsors Yet</EmptyTitle>
          <EmptyDescription>
            You can be the first sponsor! Add your logo here and help us grow.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-6">
            <Link
              href="https://github.com/sponsors/theorcdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Become a Sponsor</Button>
            </Link>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
