import { RefreshCcw, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent } from "@/components/ui/8bit/card";

export default function GameOver({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="p-5">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col gap-5 px-5 py-15">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-xl font-bold">Game Over</h1>
              <p className="text-balance text-xs text-muted-foreground">
                Continue?
              </p>
            </div>

            <Button className="flex items-center">
              <RefreshCcw className="size-4" />
              <span>Retry</span>
            </Button>
            <Button className="flex items-center">
              <X className="size-4" />
              <span>Exit</span>
            </Button>
          </div>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/images/8-bit-skull.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
