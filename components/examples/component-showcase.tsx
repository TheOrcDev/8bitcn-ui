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
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/8bit/tabs";
import { Textarea } from "@/components/ui/8bit/textarea";

import { CommandExample } from "@/components/examples/command";

import ChapterIntro from "../ui/8bit/blocks/chapter-intro";
import Dialogue from "../ui/8bit/blocks/dialogue";
import DifficultySelect from "../ui/8bit/blocks/difficulty-select";
import GameOver from "../ui/8bit/blocks/game-over";
import GameProgress from "../ui/8bit/blocks/game-progress";
import MainMenu from "../ui/8bit/blocks/main-menu";

export default function ComponentShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        <AudioSettings />

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
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              className="size-6"
              aria-label="activity"
            >
              <rect x="160" y="192" width="14" height="14" rx="1"></rect>
              <rect x="164" y="176" width="14" height="14" rx="1"></rect>
              <rect x="168" y="160" width="14" height="14" rx="1"></rect>
              <rect x="172" y="144" width="14" height="14" rx="1"></rect>
              <rect x="176" y="128" width="14" height="14" rx="1"></rect>
              <rect x="192" y="128" width="14" height="14" rx="1"></rect>
              <rect x="64" y="128" width="14" height="14" rx="1"></rect>
              <rect x="152" y="208" width="14" height="14" rx="1"></rect>
              <rect x="84" y="112" width="14" height="14" rx="1"></rect>
              <rect x="88" y="96" width="14" height="14" rx="1"></rect>
              <rect x="92" y="80" width="14" height="14" rx="1"></rect>
              <rect x="96" y="64" width="14" height="14" rx="1"></rect>
              <rect x="104" y="48" width="14" height="14" rx="1"></rect>
              <rect x="80" y="128" width="14" height="14" rx="1"></rect>
              <rect x="120" y="96" width="14" height="14" rx="1"></rect>
              <rect x="116" y="80" width="14" height="14" rx="1"></rect>
              <rect x="112" y="64" width="14" height="14" rx="1"></rect>
              <rect x="136" y="160" width="14" height="14" rx="1"></rect>
              <rect x="140" y="176" width="14" height="14" rx="1"></rect>
              <rect x="124" y="112" width="14" height="14" rx="1"></rect>
              <rect x="128" y="128" width="14" height="14" rx="1"></rect>
              <rect x="132" y="144" width="14" height="14" rx="1"></rect>
              <rect x="144" y="192" width="14" height="14" rx="1"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              className="size-6"
              aria-label="user"
            >
              <rect x="64" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="80" width="14" height="14" rx="1"></rect>
              <rect x="144" y="80" width="14" height="14" rx="1"></rect>
              <rect x="192" y="192" width="14" height="14" rx="1"></rect>
              <rect x="176" y="192" width="14" height="14" rx="1"></rect>
              <rect x="64" y="192" width="14" height="14" rx="1"></rect>
              <rect x="48" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="192" width="14" height="14" rx="1"></rect>
              <rect x="192" y="160" width="14" height="14" rx="1"></rect>
              <rect x="176" y="144" width="14" height="14" rx="1"></rect>
              <rect x="192" y="176" width="14" height="14" rx="1"></rect>
              <rect x="48" y="160" width="14" height="14" rx="1"></rect>
              <rect x="96" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="48" width="14" height="14" rx="1"></rect>
              <rect x="128" y="48" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="144" y="64" width="14" height="14" rx="1"></rect>
              <rect x="112" y="96" width="14" height="14" rx="1"></rect>
              <rect x="128" y="96" width="14" height="14" rx="1"></rect>
              <rect x="80" y="144" width="14" height="14" rx="1"></rect>
              <rect x="96" y="144" width="14" height="14" rx="1"></rect>
              <rect x="112" y="144" width="14" height="14" rx="1"></rect>
              <rect x="128" y="144" width="14" height="14" rx="1"></rect>
              <rect x="144" y="144" width="14" height="14" rx="1"></rect>
              <rect x="160" y="144" width="14" height="14" rx="1"></rect>
              <rect x="80" y="192" width="14" height="14" rx="1"></rect>
              <rect x="96" y="192" width="14" height="14" rx="1"></rect>
              <rect x="112" y="192" width="14" height="14" rx="1"></rect>
              <rect x="128" y="192" width="14" height="14" rx="1"></rect>
              <rect x="144" y="192" width="14" height="14" rx="1"></rect>
              <rect x="160" y="192" width="14" height="14" rx="1"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Player Status</CardTitle>
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
      <div className="flex flex-col gap-4 lg:col-span-2">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <Dialogue
              avatarSrc="/images/pixelized-8bitcnorc.jpg"
              avatarFallback="Orc"
              title="Orc"
              description="I bring you a gift… it's called AXE TO THE FACE! SLASH!!"
            />

            <div className="flex justify-end">
              <Dialogue
                avatarSrc="/images/goblin.png"
                avatarFallback="Goblin"
                title="Goblin"
                description="`Screeches like a dying flute`"
                player={false}
              />
            </div>
          </CardContent>
        </Card>

        <GameOver />

        <ChapterIntro
          className="w-full md:w-full mx-auto text-white"
          title="LEVEL 2: GOBLINS"
          subtitle="Defeat the goblins to pass through the forest."
          backgroundSrc="/images/forest-goblins.png"
          height="md"
          align="center"
          darken={0.5}
        />

        <GameProgress />

        {/* Tabs Example */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Game Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="inventory" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inventory">Items</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="inventory" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Your inventory contains 15 items including potions and
                  weapons.
                </p>
              </TabsContent>
              <TabsContent value="skills" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  You have learned 8 skills. 3 skill points available.
                </p>
              </TabsContent>
              <TabsContent value="stats" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Strength: 25, Agility: 18, Intelligence: 22
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4 w-full">
        <DifficultySelect />

        <CommandExample />

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Product Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue="Gamer Gear"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                  className="min-h-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Game Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <Checkbox id="autosave" defaultChecked />
              <Label htmlFor="autosave">Auto-save enabled</Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="notifications" />
              <Label htmlFor="notifications">Show notifications</Label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="fullscreen" defaultChecked />
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
            <CardTitle className="text-sm font-medium">Warriors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+100</div>
            <p className="text-xs text-muted-foreground">
              +42% since last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex">
            <CardTitle className="text-sm font-medium">Wizards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1000</div>
            <p className="text-xs text-muted-foreground">
              +31% since last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
