import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Label } from "@/components/ui/8bit/label";
import { Slider } from "@/components/ui/8bit/slider";
import { Switch } from "@/components/ui/8bit/switch";

export default function AudioSettings({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Audio Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="volume">Master Volume</Label>
            <Slider
              id="volume"
              defaultValue={[75]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="sfx">SFX Volume</Label>
            <Slider
              id="sfx"
              defaultValue={[60]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="mute">Mute Audio</Label>
            <Switch id="mute" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="vibration">Vibration</Label>
            <Switch id="vibration" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
