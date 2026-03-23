import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface NotFound2Props {
  className?: string;
  cta?: string;
  description?: string;
  href?: string;
  imageSrc?: string;
  title?: string;
}

export default function NotFound2({
  title = "The Dwarf says NO!",
  description = "This tunnel has collapsed. The path you seek no longer exists.",
  cta = "Retreat to Safety",
  href = "/",
  imageSrc = "/images/8bit-dwarf.png",
  className,
}: NotFound2Props) {
  return (
    <div
      className={cn(
        "retro grid w-full place-content-center gap-5 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      <div className="retro font-bold text-6xl tracking-tight sm:text-8xl">
        404
      </div>

      {imageSrc && (
        <div className="flex justify-center -mt-10">
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

      <p className="retro text-muted-foreground text-[9px]">{description}</p>

      <div className="flex justify-center">
        <Link href={href}>
          <Button>{cta}</Button>
        </Link>
      </div>
    </div>
  );
}
