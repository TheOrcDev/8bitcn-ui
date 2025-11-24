import type { Metadata } from "next";

import { spinnerMetaData } from "@/lib/metadata";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Spinner } from "@/components/ui/8bit/spinner";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Spinner",
  description: "Displays an 8-bit spinner component.",
  openGraph: {
    images: spinnerMetaData,
  },
};

export default function SpinnerPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Spinner</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/spinner"
          command="pnpm dlx shadcn@latest add @8bitcn/spinner"
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit spinner component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="spinner" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Spinner } from "@/components/ui/8bit/spinner"`}</CodeSnippet>

      <CodeSnippet>{`<Spinner />`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Size</h3>

      <p className="text-muted-foreground">
        Use the size-* utility class to change the size of the spinner.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner component with different sizes
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner className="size-10" />
          <Spinner className="size-12" />
          <Spinner className="size-14" />
          <Spinner className="size-16" />
          <Spinner className="size-18" />
          <Spinner className="size-20" />
          <Spinner className="size-22" />
        </div>
      </div>

      <h3 className="text-lg font-bold mt-10">Code</h3>

      <CodeSnippet>{`<Spinner className="size-10" />
<Spinner className="size-12" />
<Spinner className="size-14" />
<Spinner className="size-16" />
<Spinner className="size-18" />
<Spinner className="size-20" />
<Spinner className="size-22" />`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Color</h3>

      <p className="text-muted-foreground">
        Use the text- utility class to change the color of the spinner.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner component with different sizes
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner className="text-blue-500" />
          <Spinner className="text-green-500" />
          <Spinner className="text-purple-500" />
          <Spinner className="text-red-500" />
          <Spinner className="text-yellow-500" />
        </div>
      </div>

      <CodeSnippet>{`<Spinner className="text-blue-500" />
<Spinner className="text-green-500" />
<Spinner className="text-purple-500" />
<Spinner className="text-red-500" />
<Spinner className="text-yellow-500" />`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Button</h3>

      <p className="text-muted-foreground">
        Add a spinner to a button to indicate a loading state. The Button will
        handle the spacing between the spinner and the text.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner component in buttons
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Button disabled size="sm">
            <Spinner />
            Loading...
          </Button>
          <Button variant="outline" disabled size="sm">
            <Spinner />
            Please wait
          </Button>
          <Button variant="secondary" disabled size="sm">
            <Spinner />
            Processing
          </Button>
        </div>
      </div>

      <CodeSnippet>{`<Button disabled size="sm">
  <Spinner />
  Loading...
</Button>
<Button variant="outline" disabled size="sm">
  <Spinner />
  Please wait
</Button>
<Button variant="secondary" disabled size="sm">
  <Spinner />
  Processing
</Button>`}</CodeSnippet>

      <Separator />

      <h3 className="text-lg font-bold mt-10">Badge</h3>

      <p className="text-muted-foreground">
        You can also use a spinner inside a badge.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner component in badges
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-5">
          <Badge>
            <Spinner />
            Syncing
          </Badge>
          <Badge variant="secondary">
            <Spinner />
            Updating
          </Badge>
          <Badge variant="destructive">
            <Spinner />
            Processing
          </Badge>
        </div>
      </div>

      <CodeSnippet>{`<Badge>
  <Spinner />
  Syncing
</Badge>
<Badge variant="secondary">
  <Spinner />
  Updating
</Badge>
<Badge variant="destructive">
  <Spinner />
  Processing
</Badge>`}</CodeSnippet>
    </div>
  );
}
