import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"
import {
  CarouselDemo,
  CarouselSpacing,
  OrientationVertical,
} from "./_demos/carousel"

export const metadata: Metadata = {
  title: "8bit Carousel",
  description:
    "Displays a carousel or a component that looks like a 8-bit carousel.",
}

export default function CarouselPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Carousel</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-carousel.json`}
          command={"pnpm dlx shadcn@canary add 8bit-carousel"}
        />
      </div>

      <p className="text-muted-foreground">
        A carousel with motion and swipe built using Embla.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit button component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-button" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <CarouselDemo />
        </div>
      </div>

      <p className="text-muted-foreground">
        To set the spacing between the items, we use a <code>pl-[VALUE]</code>
        utility on the <code>CarouselItem</code> and a negative
        <code>-ml-[VALUE]</code> on the <code>CarouselContent</code>.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Spacing controlled carousel
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] md:min-h-[450px] relative">
          <CarouselSpacing />
        </div>
      </div>

      <p className="text-muted-foreground">Example</p>

      <CodeSnippet>{`// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
`}</CodeSnippet>

      <p className="text-muted-foreground">Responsive</p>
      <CodeSnippet>
        {`
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>`}
      </CodeSnippet>

      <p className="text-muted-foreground">
        Use the <code>orientation</code> prop to set the orientation of the
        carousel.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Orientation controlled carousel
          </h2>
        </div>
        <div className="flex items-center justify-center min-h-[400px] md:min-h-[450px] relative">
          <OrientationVertical />
        </div>
      </div>

      <p className="text-muted-foreground">Orientation example</p>

      <CodeSnippet>
        {`<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>`}
      </CodeSnippet>

      <p>
        You can pass options to the carousel using the opts prop. See the Embla
        Carousel docs for more information.{" "}
      </p>

      <CodeSnippet>
        {`<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
`}
      </CodeSnippet>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-carousel.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"`}</CodeSnippet>

      <CodeSnippet>{`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
`}</CodeSnippet>
    </div>
  )
}
