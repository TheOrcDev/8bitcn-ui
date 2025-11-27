import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Label } from "@/components/ui/8bit/label";
import { Slider } from "@/components/ui/8bit/slider";
import { Switch } from "@/components/ui/8bit/switch";
import { cn } from "@/lib/utils";

export default function AudioSettings({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-sm">Audio Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="volume">Master Volume</Label>
            <Slider
              className="w-full"
              defaultValue={[75]}
              id="volume"
              max={100}
              step={1}
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="sfx">SFX Volume</Label>
            <Slider
              className="w-full"
              defaultValue={[60]}
              id="sfx"
              max={100}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="mute">Mute Audio</Label>
            <Switch id="mute" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="vibration">Vibration</Label>
            <Switch defaultChecked id="vibration" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
