import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

const menuItems = [
  {
    label: "START GAME",
    action: () => console.log("Starting game..."),
  },
  {
    label: "OPTIONS",
    action: () => console.log("Showing options..."),
  },
  {
    label: "HIGH SCORES",
    action: () => console.log("Showing high scores..."),
  },
  {
    label: "MULTIPLAYER",
    action: () => console.log("Multiplayer mode..."),
  },
  { label: "QUIT", action: () => console.log("Quitting game...") },
];

export default function MainMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center gap-2">
        <CardTitle>Main Menu</CardTitle>
        <CardDescription>Retro 8-bit Quest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <Button key={item.label} className="flex items-center gap-2">
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
