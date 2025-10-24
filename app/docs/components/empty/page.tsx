import { Metadata } from "next";

import { IconBrandAmongUs } from "@tabler/icons-react";

import { emptyMetaData } from "@/lib/metadata";

import { Button } from "@/components/ui/8bit/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/8bit/empty";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "@/app/docs/components/code-snippet";
import CopyCommandButton from "@/app/docs/components/copy-command-button";
import InstallationCommands from "@/app/docs/components/installation-commands";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Empty",
  description: "Displays an 8-bit empty component.",
  openGraph: {
    images: emptyMetaData,
  },
};

export default function EmptyPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Empty</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/empty"
          command="pnpm dlx shadcn@latest add @8bitcn/empty"
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit empty component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit empty component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-empty" className="w-fit" />
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[400px] relative">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <IconBrandAmongUs />
              </EmptyMedia>
              <EmptyTitle>No Characters Yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t created any Charaters yet. Get started by
                creating your first character.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-6">
                <Button>Create Character</Button>
                <Button variant="outline">Import Character</Button>
              </div>
            </EmptyContent>
          </Empty>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands packageName="empty" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { IconBrandAmongUs } from "@tabler/icons-react"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/8bit/empty"`}</CodeSnippet>
      <CodeSnippet>{`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <IconBrandAmongUs />
    </EmptyMedia>
    <EmptyTitle>No Characters Yet</EmptyTitle>
    <EmptyDescription>
      You haven&apos;t created any Charaters yet. Get started by creating
      your first character.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <div className="flex gap-6">
      <Button>Create Character</Button>
      <Button variant="outline">Import Character</Button>
    </div>
  </EmptyContent>
</Empty>
          `}</CodeSnippet>
    </div>
  );
}
