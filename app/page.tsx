import Link from "next/link"

import { pressStart } from "@/config/fonts"
import { Button } from "@/components/ui/8bit/button"
import ComponentShowcase from "@/components/examples/component-showcase"

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${pressStart.className} md:text-2xl font-bold`}>
        Build your retro component library
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        A set of 8-bit styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link href="/docs/components/accordion" className="w-fit">
        <Button size="sm" className="w-fit">
          Get Started
        </Button>
      </Link>

      <ComponentShowcase />
    </div>
  )
}
