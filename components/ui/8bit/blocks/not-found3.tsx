import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface NotFound3Props {
  badge?: string;
  className?: string;
  cta?: string;
  ctaSecondary?: string;
  description?: string;
  href?: string;
  hrefSecondary?: string;
  imageSrc?: string;
  title?: string;
}

export default function NotFound3({
  title = "This page should have stayed buried",
  description = "Looks like this route crawled out of the crypt and disappeared again.",
  badge = "CURSED ROUTE",
  cta = "Return Home",
  ctaSecondary = "Browse Blocks",
  href = "/",
  hrefSecondary = "/docs/blocks",
  imageSrc = "/images/8bit-undead.png",
  className,
}: NotFound3Props) {
  return (
    <div
      className={cn(
        "retro grid w-full place-content-center gap-5 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      {badge && (
        <div className="flex justify-center">
          <Badge variant="secondary">{badge}</Badge>
        </div>
      )}

      <div className="retro font-bold text-6xl tracking-tight sm:text-8xl">
        404
      </div>

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

      <h1 className="retro font-bold text-xl tracking-tight sm:text-2xl">
        {title}
      </h1>

      <p className="retro text-muted-foreground text-[9px]">{description}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href={href}>
          <Button>{cta}</Button>
        </Link>
        {ctaSecondary && hrefSecondary && (
          <Link href={hrefSecondary}>
            <Button variant="outline">{ctaSecondary}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
