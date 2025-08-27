"use client";

import * as React from "react";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/8bit/command";

const suggestionCommands = [
  {
    value: "Calendar",
    symbol: <span>Calendar</span>,
  },
  {
    value: "Search Emoji",
    symbol: <span>Search Emoji</span>,
  },
  {
    value: "Calculator",
    symbol: <span>Calculator</span>,
  },
];

const settingCommands = [
  {
    value: "Profile",
    symbol: <span>Profile</span>,
    shortcut: "⌘P",
  },
  {
    value: "Billing",
    symbol: <span>Billing</span>,
    shortcut: "⌘B",
  },
  {
    value: "Settings",
    symbol: <span>Settings</span>,
    shortcut: "⌘S",
  },
];

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
  );
}
