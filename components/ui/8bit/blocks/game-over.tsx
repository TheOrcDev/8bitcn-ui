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
              <svg
                width="50"
                height="50"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                color=""
                className="size-6"
                aria-label="repeat"
              >
                <rect x="184" y="48" width="14" height="14" rx="1"></rect>
                <rect x="200" y="64" width="14" height="14" rx="1"></rect>
                <rect x="184" y="80" width="14" height="14" rx="1"></rect>
                <rect x="184" y="64" width="14" height="14" rx="1"></rect>
                <rect x="168" y="32" width="14" height="14" rx="1"></rect>
                <rect x="168" y="96" width="14" height="14" rx="1"></rect>
                <rect x="168" y="64" width="14" height="14" rx="1"></rect>
                <rect x="152" y="64" width="14" height="14" rx="1"></rect>
                <rect x="136" y="64" width="14" height="14" rx="1"></rect>
                <rect x="120" y="64" width="14" height="14" rx="1"></rect>
                <rect x="56" y="112" width="14" height="14" rx="1"></rect>
                <rect x="56" y="80" width="14" height="14" rx="1"></rect>
                <rect x="88" y="64" width="14" height="14" rx="1"></rect>
                <rect x="104" y="64" width="14" height="14" rx="1"></rect>
                <rect x="56" y="96" width="14" height="14" rx="1"></rect>
                <rect x="72" y="64" width="14" height="14" rx="1"></rect>
                <rect x="56" y="176" width="14" height="14" rx="1"></rect>
                <rect x="184" y="144" width="14" height="14" rx="1"></rect>
                <rect x="56" y="160" width="14" height="14" rx="1"></rect>
                <rect x="184" y="160" width="14" height="14" rx="1"></rect>
                <rect x="72" y="144" width="14" height="14" rx="1"></rect>
                <rect x="40" y="176" width="14" height="14" rx="1"></rect>
                <rect x="168" y="176" width="14" height="14" rx="1"></rect>
                <rect x="152" y="176" width="14" height="14" rx="1"></rect>
                <rect x="136" y="176" width="14" height="14" rx="1"></rect>
                <rect x="120" y="176" width="14" height="14" rx="1"></rect>
                <rect x="184" y="128" width="14" height="14" rx="1"></rect>
                <rect x="56" y="192" width="14" height="14" rx="1"></rect>
                <rect x="88" y="176" width="14" height="14" rx="1"></rect>
                <rect x="104" y="176" width="14" height="14" rx="1"></rect>
                <rect x="72" y="208" width="14" height="14" rx="1"></rect>
                <rect x="72" y="176" width="14" height="14" rx="1"></rect>
              </svg>
              <span>Retry</span>
            </Button>
            <Button className="flex items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                color=""
                className="size-6"
                aria-label="x"
              >
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 120 152)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 104 168)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 184 184)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 88 184)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 168 104)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 184 88)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 200 72)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 200 200)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 152 120)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 152 152)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 136 136)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 120 120)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 136 136)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 168 168)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 88 88)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 72 72)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 72 200)"
                ></rect>
                <rect
                  width="14"
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 104 104)"
                ></rect>
              </svg>
              <span>Exit</span>
            </Button>
          </div>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/images/8-bit-skull.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale opacity-70"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
