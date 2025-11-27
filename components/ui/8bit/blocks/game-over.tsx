import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent } from "@/components/ui/8bit/card";
import { cn } from "@/lib/utils";

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
              <h1 className="font-bold text-xl">Game Over</h1>
              <p className="text-balance text-muted-foreground text-xs">
                Continue?
              </p>
            </div>

            <Button className="flex items-center">
              <svg
                aria-label="repeat"
                className="size-6"
                color=""
                fill="currentColor"
                height="50"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Retry</title>
                <rect height="14" rx="1" width="14" x="184" y="48" />
                <rect height="14" rx="1" width="14" x="200" y="64" />
                <rect height="14" rx="1" width="14" x="184" y="80" />
                <rect height="14" rx="1" width="14" x="184" y="64" />
                <rect height="14" rx="1" width="14" x="168" y="32" />
                <rect height="14" rx="1" width="14" x="168" y="96" />
                <rect height="14" rx="1" width="14" x="168" y="64" />
                <rect height="14" rx="1" width="14" x="152" y="64" />
                <rect height="14" rx="1" width="14" x="136" y="64" />
                <rect height="14" rx="1" width="14" x="120" y="64" />
                <rect height="14" rx="1" width="14" x="56" y="112" />
                <rect height="14" rx="1" width="14" x="56" y="80" />
                <rect height="14" rx="1" width="14" x="88" y="64" />
                <rect height="14" rx="1" width="14" x="104" y="64" />
                <rect height="14" rx="1" width="14" x="56" y="96" />
                <rect height="14" rx="1" width="14" x="72" y="64" />
                <rect height="14" rx="1" width="14" x="56" y="176" />
                <rect height="14" rx="1" width="14" x="184" y="144" />
                <rect height="14" rx="1" width="14" x="56" y="160" />
                <rect height="14" rx="1" width="14" x="184" y="160" />
                <rect height="14" rx="1" width="14" x="72" y="144" />
                <rect height="14" rx="1" width="14" x="40" y="176" />
                <rect height="14" rx="1" width="14" x="168" y="176" />
                <rect height="14" rx="1" width="14" x="152" y="176" />
                <rect height="14" rx="1" width="14" x="136" y="176" />
                <rect height="14" rx="1" width="14" x="120" y="176" />
                <rect height="14" rx="1" width="14" x="184" y="128" />
                <rect height="14" rx="1" width="14" x="56" y="192" />
                <rect height="14" rx="1" width="14" x="88" y="176" />
                <rect height="14" rx="1" width="14" x="104" y="176" />
                <rect height="14" rx="1" width="14" x="72" y="208" />
                <rect height="14" rx="1" width="14" x="72" y="176" />
              </svg>
              <span>Retry</span>
            </Button>
            <Button className="flex items-center">
              <svg
                aria-label="x"
                className="size-6"
                color=""
                fill="currentColor"
                height="50"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Exit</title>
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 120 152)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 104 168)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 184 184)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 88 184)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 168 104)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 184 88)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 200 72)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 200 200)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 152 120)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 152 152)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 136 136)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 120 120)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 136 136)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 168 168)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 88 88)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 72 72)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 72 200)"
                  width="14"
                />
                <rect
                  height="14"
                  rx="1"
                  transform="matrix(0 -1 -1 0 104 104)"
                  width="14"
                />
              </svg>
              <span>Exit</span>
            </Button>
          </div>
          <div className="relative hidden bg-muted md:block">
            <Image
              alt="Game over"
              className="absolute inset-0 h-full w-full object-cover opacity-70 dark:brightness-[0.2] dark:grayscale"
              fill
              src="/images/8-bit-skull.png"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
