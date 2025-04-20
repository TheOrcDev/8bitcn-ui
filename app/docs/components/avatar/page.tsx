import { Metadata } from "next"

import { avatarMetaData } from "@/lib/metadata"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8bit Avatar",
  description:
    "Displays an avatar or a component that looks like a 8-bit avatar.",
  openGraph: {
    images: avatarMetaData,
  },
}

export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Avatar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-avatar.json`}
          command={"pnpm dlx shadcn@canary add 8bit-avatar"}
        />
      </div>

      <p className="text-muted-foreground">
        An 8-bit style avatar component that displays user profile images with
        optional pixelation and fallback.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A pixelated 8-bit avatar component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-avatar" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Avatar variant="pixel">
                <AvatarImage
                  src="/images/pixelized-8bitcnorc.jpg"
                  alt="@8bitcn"
                />
                <AvatarFallback>8B</AvatarFallback>
              </Avatar>

              <Avatar variant="default">
                <AvatarImage
                  src="/images/pixelized-8bitcnorc.jpg"
                  alt="@8bitcn"
                />
                <AvatarFallback>8B</AvatarFallback>
              </Avatar>

              <Avatar>
                <AvatarFallback>8B</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-avatar.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/8bit/avatar"`}</CodeSnippet>

      <CodeSnippet>{`<Avatar>
  <AvatarImage src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg" alt="@8bitcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</CodeSnippet>

      <h3 className="text-lg font-bold mt-10">Examples</h3>

      <Separator />

      <h4 className="font-medium mt-4">Variants</h4>
      <CodeSnippet>{`<Avatar variant="pixel">
  <AvatarImage src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg" alt="@8bitcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar variant="default">
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`}</CodeSnippet>

      <h4 className="font-medium mt-4">Custom Sizes</h4>
      <CodeSnippet>{`<Avatar className="size-20">
  <AvatarImage src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg" alt="@8bitcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar className="size-6">
  <AvatarFallback>8B</AvatarFallback>
</Avatar>`}</CodeSnippet>
    </div>
  )
}
