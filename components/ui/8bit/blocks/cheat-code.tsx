"use client";

import * as React from "react";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription } from "@/components/ui/8bit/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

const KONAMI_SEQUENCE: Array<string> = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

function getIconForKey(key: string) {
  switch (key) {
    case "ArrowUp":
      return <ArrowUp className="size-4" />;
    case "ArrowDown":
      return <ArrowDown className="size-4" />;
    case "ArrowLeft":
      return <ArrowLeft className="size-4" />;
    case "ArrowRight":
      return <ArrowRight className="size-4" />;
    case "Enter":
      return <span className="text-[10px]">START</span>;
    case "a":
    case "b":
      return <span className="text-[10px] uppercase">{key}</span>;
    default:
      return <span className="text-[10px]">{key}</span>;
  }
}

export default function CheatCode({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [progress, setProgress] = React.useState<number>(0);
  const [activated, setActivated] = React.useState<boolean>(false);
  const resetTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activated) return;

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const expected = KONAMI_SEQUENCE[progress];

      // Reset inactivity timer
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = window.setTimeout(() => setProgress(0), 2000);

      if (key === expected) {
        const next = progress + 1;
        setProgress(next);

        if (next === KONAMI_SEQUENCE.length) {
          setActivated(true);
          if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
        }
      } else {
        // Allow overlapping prefix (e.g., pressing Up when sequence starts with Up)
        if (key === KONAMI_SEQUENCE[0]) {
          setProgress(1);
        } else {
          setProgress(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, [activated, progress]);

  const reset = () => {
    setActivated(false);
    setProgress(0);
  };

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="items-center text-center gap-2">
        <CardTitle>Cheat Code</CardTitle>
        <CardDescription>Try the classic code on your keyboard</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
          {KONAMI_SEQUENCE.map((k, i) => (
            <div
              key={i}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center bg-secondary text-secondary-foreground",
                "border-2 border-foreground dark:border-ring",
                progress > i && "bg-primary text-primary-foreground"
              )}
              aria-label={`step-${i + 1}`}
            >
              {getIconForKey(k)}
            </div>
          ))}
        </div>

        {activated ? (
          <Alert className="w-full max-w-md text-center px-4 py-3">
            <AlertDescription className="flex items-center justify-center gap-2">
              <Sparkles className="size-4" />
              Cheat activated! Extra retro vibes unlocked.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="w-full max-w-md text-center px-4 py-3">
            <AlertDescription>
              Press the sequence shown above. Progress resets after inactivity.
            </AlertDescription>
          </Alert>
        )}

        {activated && (
          <button
            type="button"
            onClick={reset}
            className={cn(
              "rounded-none relative inline-flex items-center justify-center gap-1.5",
              "px-4 py-2 bg-foreground text-background active:translate-y-1"
            )}
          >
            Reset
            <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
            <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground dark:bg-ring" />
          </button>
        )}
      </CardContent>
    </Card>
  );
}
