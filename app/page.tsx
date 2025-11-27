import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import Sponsors from "@/components/sponsors";
import { Button } from "@/components/ui/8bit/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-4 pt-10">
      <h1 className={`${"retro"} font-bold md:text-2xl`}>
        Build your retro component library
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        A set of 8-bit styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link className="w-fit" href="/docs">
        <Button className="w-fit" size="sm">
          Get Started
        </Button>
      </Link>

      <ComponentShowcase />

      <Sponsors />
    </div>
  );
}
