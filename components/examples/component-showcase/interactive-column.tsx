"use client";

import { useEffect } from "react";

import { CommandExample } from "@/components/examples/command";
import { DrawerExample } from "@/components/examples/drawer";
import DifficultySelect from "@/components/ui/8bit/blocks/difficulty-select";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Checkbox } from "@/components/ui/8bit/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/8bit/menubar";
import { Textarea } from "@/components/ui/8bit/textarea";

interface InteractiveColumnProps {
  onReady?: () => void;
}

export function InteractiveColumn({ onReady }: InteractiveColumnProps = {}) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="mt-1.5 mb-2 hidden flex-col gap-4 md:flex">
        <Button>Button</Button>

        <DrawerExample />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Dropdown Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Input
        aria-label="Name"
        autoComplete="name"
        placeholder="Enter your name"
      />

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <DifficultySelect />

      {/* TODO: Command has some problem with spacing, check it out */}
      <div className="my-1">
        <CommandExample />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium text-sm">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                className="w-full"
                defaultValue="Gamer Gear"
                id="name"
                type="text"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="min-h-32"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                id="description"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm">Game Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-4">
            <Checkbox defaultChecked id="autosave" />
            <Label htmlFor="autosave">Auto-save enabled</Label>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox id="notifications" />
            <Label htmlFor="notifications">Show notifications</Label>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox defaultChecked id="fullscreen" />
            <Label htmlFor="fullscreen">Fullscreen mode</Label>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox id="hardcore" />
            <Label htmlFor="hardcore">Hardcore mode</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex">
          <CardTitle className="font-medium text-sm">Warriors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-2xl">+100</div>
          <p className="text-muted-foreground text-xs">+42% since last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex">
          <CardTitle className="font-medium text-sm">Wizards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-bold text-2xl">+1000</div>
          <p className="text-muted-foreground text-xs">+31% since last month</p>
        </CardContent>
      </Card>
    </div>
  );
}
