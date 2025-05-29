import { Metadata } from "next";

import { skeletonMetaData } from "@/lib/metadata";

import { Skeleton } from "@/components/ui/8bit/skeleton";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Skeleton",
  description: "Displays an 8-bit skeleton component.",
  openGraph: {
    images: skeletonMetaData,
  },
};

export default function SkeletonPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Skeleton</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-skeleton.json`}
          command={"pnpm dlx shadcn@canary add 8bit-skeleton"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit skeleton component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit skeleton component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-skeleton" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="flex flex-col space-y-5">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-5 w-[250px]" />
              <Skeleton className="h-5 w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-skeleton.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Skeleton } from "@/components/ui/8bit/skeleton"`}</CodeSnippet>

      <CodeSnippet>
        {`<div className="flex flex-col space-y-5">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-4">
        <Skeleton className="h-5 w-[250px]" />
        <Skeleton className="h-5 w-[200px]" />
    </div>
</div>`}
      </CodeSnippet>
    </div>
  );
}
