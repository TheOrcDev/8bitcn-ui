import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";
import "@/components/ui/8bit/styles/retro.css";

export const metadata: Metadata = {
  title: "404 | 8bitcn/ui",
};

export default function NotFound() {
  return (
    <div className="retro grid h-screen w-full place-content-center gap-5 bg-background px-4 text-center">
      <Image
        alt="Pixel Orc 404"
        height={300}
        src={"/images/404/pixel-orc.webp"}
        width={300}
      />

      <h1 className="font-bold text-2xl tracking-tight sm:text-4xl">Uh-oh!</h1>

      <p className="text-gray-500">You are lost.</p>
      <Link href={"/"}>
        <Button>Return to Home Page</Button>
      </Link>
    </div>
  );
}
