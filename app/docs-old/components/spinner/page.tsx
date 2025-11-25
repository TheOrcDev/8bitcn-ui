import type { Metadata } from "next";

import { spinnerMetaData } from "@/lib/metadata";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import { Spinner } from "@/components/ui/8bit/spinner";
import { Separator } from "@/components/ui/separator";

import CopyCommandButton from "../../../../components/copy-command-button";
import InstallationCommands from "../../../../components/installation-commands";
import { OpenInV0Button } from "../../../../components/open-in-v0-button";
import CodeSnippet from "../code-snippet";

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
        <div className="flex gap-8 items-center justify-center min-h-[400px] relative">
          <div className="flex flex-col items-center">
            <Spinner />
            <p className="text-sm text-muted-foreground">Classic</p>
          </div>
          <div className="flex flex-col items-center mt-1">
            <Spinner variant="diamond" />
            <p className="text-sm text-muted-foreground">Diamond</p>
          </div>
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
      <h3 className="text-lg font-bold mt-10">Variants</h3>
      <p className="text-muted-foreground">
        Use the variant prop to change the style of the spinner. Defaults to
        classic.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner classic variant
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner variant="classic" />
        </div>
      </div>
      <CodeSnippet>{`<Spinner variant="classic" />`}</CodeSnippet>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit spinner diamond variant
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner variant="diamond" />
        </div>
      </div>
      <CodeSnippet>{`<Spinner variant="diamond" />`}</CodeSnippet>
      <Separator />
      <h3 className="text-lg font-bold mt-10">Size</h3>
      <p className="text-muted-foreground">
        Use the size-* utility class to change the size of the spinner.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit classic spinner with different sizes
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner className="size-12" />
          <Spinner className="size-16" />
          <Spinner className="size-20" />
        </div>
      </div>
      <CodeSnippet>
        {`<Spinner className="size-12" />
<Spinner className="size-16" />
<Spinner className="size-20" />
`}
      </CodeSnippet>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit diamond spinner with different sizes
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative gap-1">
          <Spinner variant="diamond" className="size-12" />
          <Spinner variant="diamond" className="size-16" />
          <Spinner variant="diamond" className="size-20" />
        </div>
      </div>
      <CodeSnippet>
        {`<Spinner variant="diamond" className="size-12" />
<Spinner variant="diamond" className="size-16" />
<Spinner variant="diamond" className="size-20" />
`}
      </CodeSnippet>
      <Separator />
      <h3 className="text-lg font-bold mt-10">Color</h3>
      <p className="text-muted-foreground">
        Use the text- utility class to change the color of the spinner.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit classic spinner with different colors
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
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit diamond spinner with different colors
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Spinner variant="diamond" className="text-blue-500" />
          <Spinner variant="diamond" className="text-green-500" />
          <Spinner variant="diamond" className="text-purple-500" />
          <Spinner variant="diamond" className="text-red-500" />
          <Spinner variant="diamond" className="text-yellow-500" />
        </div>
      </div>
      <CodeSnippet>{`
<Spinner variant="diamond" className="text-blue-500" />
<Spinner variant="diamond" className="text-green-500" />
<Spinner variant="diamond" className="text-purple-500" />
<Spinner variant="diamond" className="text-red-500" />
<Spinner variant="diamond" className="text-yellow-500" />`}</CodeSnippet>
      <Separator />
      <h3 className="text-lg font-bold mt-10">Button</h3>
      <p className="text-muted-foreground">
        Add a spinner to a button to indicate a loading state. The Button will
        handle the spacing between the spinner and the text.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit classic spinner in buttons
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
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit diamond spinner in buttons
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Button disabled size="sm">
            <Spinner variant="diamond" />
            Loading...
          </Button>
          <Button variant="outline" disabled size="sm">
            <Spinner variant="diamond" />
            Please wait
          </Button>
          <Button variant="secondary" disabled size="sm">
            <Spinner variant="diamond" />
            Processing
          </Button>
        </div>
      </div>
      <CodeSnippet>{`

<Button disabled size="sm">
  <Spinner variant="diamond" />
  Loading...
</Button>
<Button variant="outline" disabled size="sm">
  <Spinner variant="diamond" />
  Please wait
</Button>
<Button variant="secondary" disabled size="sm">
  <Spinner variant="diamond" />
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
            8-bit classic spinner in badges
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
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit diamond spinner in badges
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="spinner" className="w-fit" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-5">
          <Badge>
            <Spinner variant="diamond" />
            Syncing
          </Badge>
          <Badge variant="secondary">
            <Spinner variant="diamond" />
            Updating
          </Badge>
          <Badge variant="destructive">
            <Spinner variant="diamond" />
            Processing
          </Badge>
        </div>
      </div>
      <CodeSnippet>{`
<Badge>
  <Spinner variant="diamond" />
  Syncing
</Badge>
<Badge variant="secondary">
  <Spinner variant="diamond" />
  Updating
</Badge>
<Badge variant="destructive">
  <Spinner variant="diamond" />
  Processing
</Badge>`}</CodeSnippet>
    </div>
  );
}
