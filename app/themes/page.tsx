import { pressStart } from "@/config/fonts"
import ComponentShowcase from "@/components/examples/component-showcase"
import { ThemeSelector } from "@/components/theme-selector"

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-4 gap-5 py-10">
        <h1 className={`${pressStart.className} md:text-2xl font-bold`}>
          Add colors. Make it yours.
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </div>

      <ThemeSelector />

      <div className="p-5">
        <ComponentShowcase />
      </div>
    </>
  )
}
