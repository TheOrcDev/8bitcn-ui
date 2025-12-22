import { CommandExample } from "@/components/examples/command";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import { Badge } from "@/components/ui/8bit/badge";
import AudioSettings from "@/components/ui/8bit/blocks/audio-settings";
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
  DropdownMenuShortcut,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/8bit/tabs";
import { Textarea } from "@/components/ui/8bit/textarea";

import ChapterIntro from "../ui/8bit/blocks/chapter-intro";
import Dialogue from "../ui/8bit/blocks/dialogue";
import DifficultySelect from "../ui/8bit/blocks/difficulty-select";
import GameOver from "../ui/8bit/blocks/game-over";
import GameProgress from "../ui/8bit/blocks/game-progress";
import MainMenu from "../ui/8bit/blocks/main-menu";
import { Button } from "../ui/8bit/button";
import EnemyHealthDisplay from "../ui/8bit/enemy-health-display";
import ManaBar from "../ui/8bit/mana-bar";
import { Spinner } from "../ui/8bit/spinner";
import { DatePicker } from "./date-picker";
import { DrawerExample } from "./drawer";

export default function ComponentShowcase() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Column 1 */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
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
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <AudioSettings className="mt-1" />

        <MainMenu />

        <Alert>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Your game progress has been saved successfully.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Low health! Find a health potion quickly.
          </AlertDescription>
        </Alert>

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
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-1 lg:col-span-2">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              <Spinner className="size-10" variant="diamond" />
              <Spinner className="size-10" variant="classic" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center justify-center">
                <DatePicker className="w-[300px]" />
              </div>

              <EnemyHealthDisplay
                currentHealth={850}
                enemyName="Fire Dragon"
                level={25}
                maxHealth={1000}
              />
              <ManaBar className="mt-5" value={75} variant="retro" />
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

        {/* Tabs Example */}
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-sm">Game Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="inventory">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inventory">Items</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="inventory">
                <p className="text-muted-foreground text-sm">
                  Your inventory contains 15 items including potions and
                  weapons.
                </p>
              </TabsContent>
              <TabsContent className="mt-4" value="skills">
                <p className="text-muted-foreground text-sm">
                  You have learned 8 skills. 3 skill points available.
                </p>
              </TabsContent>
              <TabsContent className="mt-4" value="stats">
                <p className="text-muted-foreground text-sm">
                  Strength: 25, Agility: 18, Intelligence: 22
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Column 3 */}
      <div className="flex w-full flex-col gap-1">
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
