import { Pause, Power, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

const menuItems = [
  {
    label: "RESUME",
    icon: Pause,
    action: () => console.log("Resuming game..."),
  },
  {
    label: "RESTART",
    icon: RotateCcw,
    action: () => console.log("Restarting game..."),
  },
  {
    label: "QUIT",
    icon: Power,
    action: () => console.log("Quitting game..."),
  },
];

export default function PauseMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center gap-2">
        <CardTitle>Paused</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          {menuItems.map((item) => (
            <Button key={item.label} className="flex items-center gap-2">
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
