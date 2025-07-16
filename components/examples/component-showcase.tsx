import {
  Activity,
  AlertTriangle,
  Info,
  Pause,
  Play,
  Sword,
  Users,
  Volume2,
} from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import { Badge } from "@/components/ui/8bit/badge";
import AudioSettings from "@/components/ui/8bit/blocks/audio-settings";
import { LoginForm } from "@/components/ui/8bit/blocks/login-form";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Checkbox } from "@/components/ui/8bit/checkbox";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import { Progress } from "@/components/ui/8bit/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Slider } from "@/components/ui/8bit/slider";
import { Switch } from "@/components/ui/8bit/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/8bit/tabs";
import { Textarea } from "@/components/ui/8bit/textarea";

import { CommandExample } from "@/components/examples/command";

import GameOver from "../ui/8bit/blocks/game-over";
import MainMenu from "../ui/8bit/blocks/main-menu";
import { Skeleton } from "../ui/8bit/skeleton";

export default function ComponentShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        <MainMenu />

        <Alert>
          <Info className="size-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Your game progress has been saved successfully.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Low health! Find a health potion quickly.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="size-4 text-muted-foreground" />
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
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Warriors</CardTitle>
            <Sword className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+100</div>
            <p className="text-xs text-muted-foreground">
              +100 since last month
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
        <GameOver />

        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total visitors in the last 6 months
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <ChartAreaStep />
          </CardContent>
        </Card> */}

        <LoginForm />

        <Skeleton className="w-full h-full flex flex-col justify-center items-center">
          Skeleton
        </Skeleton>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Game Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Health</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Mana</span>
                <span>45%</span>
              </div>
              <Progress value={45} variant="retro" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Experience</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>
          </CardContent>
        </Card>

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
        <AudioSettings />

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Game Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex gap-5">
              <Button variant="default" size="sm">
                <Play className="size-4" />
                Start
              </Button>
              <Button variant="secondary" size="sm">
                <Pause className="size-4" />
                Pause
              </Button>
            </div>
            <div className="flex gap-5">
              <Button variant="outline" size="sm">
                Settings
              </Button>
              <Button variant="destructive" size="sm">
                Quit
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                Help
              </Button>
              <Button variant="default" size="icon">
                <Volume2 className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger id="status" aria-label="Select status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Active</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

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
            <div className="flex items-center space-x-2">
              <Checkbox id="autosave" defaultChecked />
              <Label htmlFor="autosave">Auto-save enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="notifications" />
              <Label htmlFor="notifications">Show notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fullscreen" defaultChecked />
              <Label htmlFor="fullscreen">Fullscreen mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="hardcore" />
              <Label htmlFor="hardcore">Hardcore mode</Label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
