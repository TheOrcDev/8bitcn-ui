"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CommandExample } from "@/components/examples/command";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import { Badge } from "@/components/ui/8bit/badge";
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
import ChapterIntro from "../ui/8bit/blocks/chapter-intro";
import CharacterSheet from "../ui/8bit/blocks/character-sheet";
import Dialogue from "../ui/8bit/blocks/dialogue";
import DifficultySelect from "../ui/8bit/blocks/difficulty-select";
import GameOver from "../ui/8bit/blocks/game-over";
import GameProgress from "../ui/8bit/blocks/game-progress";
import MainMenu from "../ui/8bit/blocks/main-menu";
import NotFound1 from "../ui/8bit/blocks/not-found1";
import { Button } from "../ui/8bit/button";
import HealthBar from "../ui/8bit/health-bar";
import ManaBar from "../ui/8bit/mana-bar";
import XpBar from "../ui/8bit/xp-bar";
import { DrawerExample } from "./drawer";
import ThemeSelectorShowcase from "./theme-selector-showcase";

export default function ComponentShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Block scrollIntoView during showcase mount for 600ms.
    // Multiple libraries (cmdk, Radix, health bars) call scrollIntoView
    // on mount or after delayed effects, jumping the page to middle content.
    const original = Element.prototype.scrollIntoView;
    // biome-ignore lint/suspicious/noEmptyBlockStatements: Temporarily block scrollIntoView during showcase mount.
    Element.prototype.scrollIntoView = () => {};

    setMounted(true);

    // Only force top if something jumped us down during mount (not user scroll)
    requestAnimationFrame(() => {
      if (window.scrollY > 0 && !window.location.hash) {
        window.scrollTo(0, 0);
      }
    });

    // Restore after 600ms — long enough for all delayed mount effects
    const timer = setTimeout(() => {
      Element.prototype.scrollIntoView = original;
    }, 600);

    return () => {
      clearTimeout(timer);
      Element.prototype.scrollIntoView = original;
    };
  }, []);

  if (!mounted) {
    return <div className="mt-10 min-h-[800px]" />;
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Column 1 */}
      <div className="flex flex-col gap-1">
        <ThemeSelectorShowcase />

        <Link href="/sponsors">
          <Card>
            <CardContent className="flex items-center gap-3 p-3">
              <Image
                alt="Treasure"
                className="pixelated"
                height={150}
                src="/images/8bit-treasure.png"
                width={150}
              />
              <div className="space-y-1">
                <p className="font-bold text-sm">Become a Sponsor</p>
                <p className="text-[10px] text-muted-foreground">
                  Help 8bitcn to grow
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <div className="mt-1.5 mb-2 flex flex-col gap-4 md:hidden">
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

        <MainMenu />

        <div className="my-1.5">
          <Alert>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Your game progress has been saved successfully.
            </AlertDescription>
          </Alert>
        </div>

        <div className="my-1.5">
          <Alert variant="destructive">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Low health! Find a health potion quickly.
            </AlertDescription>
          </Alert>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Active Now</CardTitle>
            <svg
              className="size-6"
              fill="currentColor"
              height="50"
              stroke="currentColor"
              strokeWidth="0.25"
              viewBox="0 0 256 256"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Activity</title>
              <rect height="14" rx="1" width="14" x="160" y="192" />
              <rect height="14" rx="1" width="14" x="164" y="176" />
              <rect height="14" rx="1" width="14" x="168" y="160" />
              <rect height="14" rx="1" width="14" x="172" y="144" />
              <rect height="14" rx="1" width="14" x="176" y="128" />
              <rect height="14" rx="1" width="14" x="192" y="128" />
              <rect height="14" rx="1" width="14" x="64" y="128" />
              <rect height="14" rx="1" width="14" x="152" y="208" />
              <rect height="14" rx="1" width="14" x="84" y="112" />
              <rect height="14" rx="1" width="14" x="88" y="96" />
              <rect height="14" rx="1" width="14" x="92" y="80" />
              <rect height="14" rx="1" width="14" x="96" y="64" />
              <rect height="14" rx="1" width="14" x="104" y="48" />
              <rect height="14" rx="1" width="14" x="80" y="128" />
              <rect height="14" rx="1" width="14" x="120" y="96" />
              <rect height="14" rx="1" width="14" x="116" y="80" />
              <rect height="14" rx="1" width="14" x="112" y="64" />
              <rect height="14" rx="1" width="14" x="136" y="160" />
              <rect height="14" rx="1" width="14" x="140" y="176" />
              <rect height="14" rx="1" width="14" x="124" y="112" />
              <rect height="14" rx="1" width="14" x="128" y="128" />
              <rect height="14" rx="1" width="14" x="132" y="144" />
              <rect height="14" rx="1" width="14" x="144" y="192" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+573</div>
            <p className="text-muted-foreground text-xs">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">Subscriptions</CardTitle>
            <svg
              className="size-6"
              fill="currentColor"
              height="50"
              stroke="currentColor"
              strokeWidth="0.25"
              viewBox="0 0 256 256"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>User</title>
              <rect height="14" rx="1" width="14" x="64" y="144" />
              <rect height="14" rx="1" width="14" x="96" y="80" />
              <rect height="14" rx="1" width="14" x="144" y="80" />
              <rect height="14" rx="1" width="14" x="192" y="192" />
              <rect height="14" rx="1" width="14" x="176" y="192" />
              <rect height="14" rx="1" width="14" x="64" y="192" />
              <rect height="14" rx="1" width="14" x="48" y="176" />
              <rect height="14" rx="1" width="14" x="48" y="192" />
              <rect height="14" rx="1" width="14" x="192" y="160" />
              <rect height="14" rx="1" width="14" x="176" y="144" />
              <rect height="14" rx="1" width="14" x="192" y="176" />
              <rect height="14" rx="1" width="14" x="48" y="160" />
              <rect height="14" rx="1" width="14" x="96" y="64" />
              <rect height="14" rx="1" width="14" x="112" y="48" />
              <rect height="14" rx="1" width="14" x="128" y="48" />
              <rect height="14" rx="1" width="14" x="144" y="64" />
              <rect height="14" rx="1" width="14" x="144" y="64" />
              <rect height="14" rx="1" width="14" x="112" y="96" />
              <rect height="14" rx="1" width="14" x="128" y="96" />
              <rect height="14" rx="1" width="14" x="80" y="144" />
              <rect height="14" rx="1" width="14" x="96" y="144" />
              <rect height="14" rx="1" width="14" x="112" y="144" />
              <rect height="14" rx="1" width="14" x="128" y="144" />
              <rect height="14" rx="1" width="14" x="144" y="144" />
              <rect height="14" rx="1" width="14" x="160" y="144" />
              <rect height="14" rx="1" width="14" x="80" y="192" />
              <rect height="14" rx="1" width="14" x="96" y="192" />
              <rect height="14" rx="1" width="14" x="112" y="192" />
              <rect height="14" rx="1" width="14" x="128" y="192" />
              <rect height="14" rx="1" width="14" x="144" y="192" />
              <rect height="14" rx="1" width="14" x="160" y="192" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+2350</div>
            <p className="text-muted-foreground text-xs">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Player Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-5">
            <Badge>Level 42</Badge>
            <Badge>Warrior</Badge>
            <Badge>Critical</Badge>
            <Badge>Online</Badge>
          </CardContent>
        </Card>

        <CharacterSheet
          avatarFallback="MQ"
          characterClass="Archmage"
          characterLevel={99}
          characterName="Orc Mage"
          customSections={[
            {
              title: "Active Skills",
              content: (
                <div className="grid grid-cols-2 gap-2">
                  <div className="border-2 border-border bg-muted/30 p-2 text-center">
                    <span className="text-purple-500 text-sm">Fireball</span>
                  </div>
                  <div className="border-2 border-border bg-muted/30 p-2 text-center">
                    <span className="text-blue-500 text-sm">Ice Storm</span>
                  </div>
                </div>
              ),
            },
          ]}
          health={{ current: 300, max: 300 }}
          mana={{ current: 1500, max: 1500 }}
          secondaryStats={[
            { name: "Magic Power", value: 999 },
            { name: "Spell Speed", value: 85, isPercentage: true },
          ]}
          showAttributes={false}
          showEquipment={false}
        />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-1 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Party (3/5)</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-2">
                <div className="w-full">
                  <div className="retro mb-1 flex justify-between text-[10px]">
                    <span>Wizard MP</span>
                    <span>140/180</span>
                  </div>
                  <ManaBar className="w-full" value={65} variant="retro" />
                </div>
                <Image
                  alt="Wizard"
                  className="pixelated mx-auto mt-2"
                  height={140}
                  src="/images/8bit-wizard.png"
                  width={140}
                />
              </div>

              <div className="p-2">
                <div className="w-full">
                  <div className="retro mb-1 flex justify-between text-[10px]">
                    <span>Troll HP</span>
                    <span>320/450</span>
                  </div>
                  <HealthBar className="w-full" value={71} variant="retro" />
                </div>
                <Image
                  alt="Troll"
                  className="pixelated mx-auto mt-2"
                  height={140}
                  src="/images/8bit-troll.png"
                  width={140}
                />
              </div>

              <div className="p-2">
                <div className="w-full">
                  <div className="retro mb-1 flex justify-between text-[10px]">
                    <span>Orc XP</span>
                    <span>980/1200</span>
                  </div>
                  <XpBar levelUpMessage="DING" value={82} variant="retro" />
                </div>
                <Image
                  alt="Orc Warrior"
                  className="pixelated mx-auto mt-2"
                  height={140}
                  src="/images/8bit-orc-warrior.png"
                  width={140}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <Dialogue
              avatarFallback="Orc"
              avatarSrc="/images/pixelized-8bitcnorc.jpg"
              description="I bring you a gift… it's called AXE TO THE FACE! SLASH!!"
              title="Orc"
            />

            <div className="flex justify-end">
              <Dialogue
                avatarFallback="Goblin"
                avatarSrc="/images/goblin.png"
                description="`Screeches like a dying flute`"
                player={false}
                title="Goblin"
              />
            </div>
          </CardContent>
        </Card>

        <GameOver />

        <ChapterIntro
          align="center"
          backgroundSrc="/images/forest-goblins.png"
          className="mx-auto w-full text-white md:w-full"
          darken={0.5}
          height="md"
          subtitle="Defeat the goblins to pass through the forest."
          title="LEVEL 2: GOBLINS"
        />

        <GameProgress />

        <Card>
          <CardContent>
            <NotFound1 />
          </CardContent>
        </Card>
      </div>

      {/* Column 3 */}
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

        <Input placeholder="Enter your name" />

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
            <CardTitle className="font-medium text-sm">
              Product Details
            </CardTitle>
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
            <p className="text-muted-foreground text-xs">
              +42% since last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex">
            <CardTitle className="font-medium text-sm">Wizards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">+1000</div>
            <p className="text-muted-foreground text-xs">
              +31% since last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
