import { Fragment } from "react";

import { Metadata } from "next";

import { itemMetaData } from "@/lib/metadata";

import { Button } from "@/components/ui/8bit/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/8bit/item";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "@/app/docs/components/code-snippet";
import CopyCommandButton from "@/app/docs/components/copy-command-button";
import InstallationCommands from "@/app/docs/components/installation-commands";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Item",
  description: "Displays an 8-bit item component.",
  openGraph: {
    images: itemMetaData,
  },
};

const items = [
  {
    title: "Sword",
    price: 300,
    description: "The demonic sword",
  },
  {
    title: "Shield",
    price: 250,
    description: "The divine shield",
  },
  {
    title: "Bow",
    price: 280,
    description: "The bow of precision",
  },
];

export default function ItemPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Item</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/item"
          command="pnpm dlx shadcn@latest add @8bitcn/item"
        />
      </div>
      <p className="text-muted-foreground">Displays an 8-bit item component.</p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit item component
          </h2>

          <div className="flex items-center gap-2">
<<<<<<< HEAD
            <OpenInV0Button name="item" className="w-fit" />
=======
            <OpenInV0Button name="8bit-empty" className="w-fit" />
>>>>>>> f7d626c (feat: Item Component)
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <ItemGroup>
            {items.map((item, index) => (
              <Fragment key={index}>
                <Item variant="outline">
                  <ItemContent>
                    <ItemTitle>
                      {item.title} &bull; {item.price}$
                    </ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="outline" size="sm">
                      Buy
                    </Button>
                  </ItemActions>
                </Item>
                {index !== items.length - 1 && <ItemSeparator />}
              </Fragment>
            ))}
          </ItemGroup>
        </div>
      </div>
      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="item" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Button } from "@/components/ui/8bit/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/8bit/item";
<<<<<<< HEAD
=======
import { Separator } from "@/components/ui/separator";
>>>>>>> f7d626c (feat: Item Component)

const items = [
  {
    title: "Sword",
    price: 300,
    description: "The demonic sword"
  },
  {
    title: "Shield",
    price: 250,
    description: "The divine shield"
  },
  {
    title: "Bow",
    price: 280,
    description: "The bow of precision"
  }
];
          `}</CodeSnippet>
      <CodeSnippet>{`<ItemGroup>
  {items.map((item, index) => (
    <Fragment key={index}>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>
            {item.title} &bull; {item.price}$
          </ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Buy
          </Button>
        </ItemActions>
      </Item>
      {index !== items.length - 1 && <ItemSeparator />}
    </Fragment>
  ))}
</ItemGroup>`}</CodeSnippet>
    </div>
  );
}
