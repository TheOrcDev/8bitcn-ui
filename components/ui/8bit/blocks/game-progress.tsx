import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import HealthBar from "@/components/ui/8bit/health-bar";
import ManaBar from "@/components/ui/8bit/mana-bar";
import { Progress } from "@/components/ui/8bit/progress";

export default function GameProgress({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Game Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Health</span>
            <span>75%</span>
          </div>
          <HealthBar value={75} />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Mana</span>
            <span>45%</span>
          </div>
          <ManaBar value={45} />
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
  );
}
