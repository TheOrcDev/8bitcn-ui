import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface NotFound1Props {
  className?: string;
  cta?: string;
  description?: string;
  href?: string;
  imageSrc?: string;
  title?: string;
}

export default function NotFound1({
  title = "Uh-oh!",
  description = "You are lost. This dungeon does not exist.",
  cta = "Return to Home Page",
  href = "/",
  imageSrc = "/images/8bit-ogre.png",
  className,
}: NotFound1Props) {
  return (
    <div
      className={cn(
        "retro grid w-full place-content-center gap-5 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      {imageSrc && (
        <div className="flex justify-center">
          <Image
            alt="404"
            className="pixelated"
            height={200}
            src={imageSrc}
            width={200}
          />
        </div>
      )}

      <h1 className="retro font-bold text-2xl tracking-tight sm:text-4xl">
        {title}
      </h1>

      <p className="retro text-muted-foreground text-xs">{description}</p>

      <div className="flex justify-center">
        <Link href={href}>
          <Button>{cta}</Button>
        </Link>
      </div>
    </div>
  );
}
