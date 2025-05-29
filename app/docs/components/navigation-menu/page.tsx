import { Metadata } from "next";

import { navigationMenuMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import NavigationMenuDemo from "@/components/examples/navigation-menu";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Navigation Menu",
  description: "Displays an 8-bit navigation menu component.",
  openGraph: {
    images: navigationMenuMetaData,
  },
};

export default function NavigationMenuPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Navigation Menu</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-navigation-menu.json`}
          command={"pnpm dlx shadcn@canary add 8bit-navigation-menu"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit navigation menu component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit navigation menu component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-navigation-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative space-x-2">
          <NavigationMenuDemo />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-navigation-menu.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/8bit/navigation-menu"
`}</CodeSnippet>

      <CodeSnippet>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
`}</CodeSnippet>
    </div>
  );
}
