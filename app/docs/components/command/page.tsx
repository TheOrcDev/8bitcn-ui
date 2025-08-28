import * as React from "react";

import type { Metadata } from "next";

import { commandMetaData } from "@/lib/metadata";

import { Separator } from "@/components/ui/separator";

import { CommandExample } from "@/components/examples/command";

import CodeSnippet from "@/app/docs/components/code-snippet";
import CopyCommandButton from "@/app/docs/components/copy-command-button";
import InstallationCommands from "@/app/docs/components/installation-commands";
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button";

export const metadata: Metadata = {
  title: "8-bit Command",
  description: "Displays an 8-bit command component.",
  openGraph: {
    images: commandMetaData,
  },
};

export default function CommandPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Command</h1>
        <CopyCommandButton
          copyCommand="pnpm dlx shadcn@latest add @8bitcn/command"
          command="pnpm dlx shadcn@latest add @8bitcn/command"
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit command component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit command component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-dropdown-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <CommandExample />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />

      <InstallationCommands packageName="command" />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`"use client"

import * as React from "react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const suggestionCommands = [
  {
    value: "Calendar",
    symbol: (
      <span>Calendar</span>
    ),
  },
  {
    value: "Search Emoji",
    symbol: (
      <span>Search Emoji</span>
    ),
  },
  {
    value: "Calculator",
    symbol: (
      <span>Calculator</span>
    ),
  },
]

const settingCommands = [
  {
    value: "Profile",
    symbol: (
      <span>Profile</span>
    ),
    shortcut: "⌘P",
  },
  {
    value: "Billing",
    symbol: (
      <span>Billing</span>
    ),
    shortcut: "⌘B",
  },
  {
    value: "Settings",
    symbol: (
      <span>Settings</span>
    ),
    shortcut: "⌘S",
  },
]

export function CommandExample() {
  return (
    <Command>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {suggestionCommands.map((command) => (
            <CommandItem key={command.value} value={command.value}>
              {command.symbol}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          {settingCommands.map((command) => (
            <CommandItem key={command.value} value={command.value}>
              {command.symbol}
              <CommandShortcut>{command.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
`}</CodeSnippet>
    </div>
  );
}
