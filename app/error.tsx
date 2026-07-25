"use client";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

interface AppErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AppError({ reset }: AppErrorProps) {
  return (
    <main className="mx-auto flex min-h-[60svh] w-full max-w-2xl items-center px-4 py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>SYSTEM FAULT</CardTitle>
          <CardDescription className="text-xs">
            This screen could not finish loading. Your progress outside this
            page is safe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-xs">
            Retry the request. If the fault returns, head back to the main menu
            and choose another route.
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-3">
          <Button onClick={reset} type="button">
            Retry
          </Button>
          <Button
            onClick={() => {
              window.location.assign("/");
            }}
            type="button"
            variant="outline"
          >
            Main Menu
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
