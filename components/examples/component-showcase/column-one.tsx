"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { DrawerExample } from "@/components/examples/drawer";
import ThemeSelectorShowcase from "@/components/examples/theme-selector-showcase";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import { Badge } from "@/components/ui/8bit/badge";
import CharacterSheet from "@/components/ui/8bit/blocks/character-sheet";
import MainMenu from "@/components/ui/8bit/blocks/main-menu";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";

interface ColumnOneProps {
  onReady?: () => void;
}

export function ColumnOne({ onReady }: ColumnOneProps = {}) {
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <div className="flex flex-col gap-1">
      <ThemeSelectorShowcase />

      <Link href="/sponsors">
        <Card>
          <CardContent className="flex flex-col items-center p-3 md:flex-row">
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
          <p className="text-muted-foreground text-xs">+201 since last hour</p>
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
  );
}
