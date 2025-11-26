"use client";

import * as React from "react";

import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/8bit/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/8bit/drawer";

const data = [
  {
    xp: 400,
  },
  {
    xp: 300,
  },
  {
    xp: 200,
  },
  {
    xp: 300,
  },
  {
    xp: 200,
  },
  {
    xp: 278,
  },
  {
    xp: 189,
  },
  {
    xp: 239,
  },
  {
    xp: 300,
  },
  {
    xp: 200,
  },
  {
    xp: 278,
  },
  {
    xp: 189,
  },
  {
    xp: 349,
  },
];

export function DrawerExample() {
  const [xp, setXp] = React.useState(350);

  function onClick(adjustment: number) {
    setXp(Math.max(200, Math.min(400, xp + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className="border-none">
        <Button variant="outline">Open Quest Log</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Daily Quest</DrawerTitle>
            <DrawerDescription>Set your daily XP target.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="size-10 shrink-0"
                onClick={() => onClick(-10)}
                disabled={xp <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-3xl sm:text-7xl font-bold tracking-tighter">
                  {xp}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  XP / Day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="size-10 shrink-0"
                onClick={() => onClick(10)}
                disabled={xp >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="xp"
                    style={
                      {
                        fill: "var(--primary)",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter className="flex flex-col gap-5">
            <Button>Accept Quest</Button>
            <DrawerClose asChild>
              <Button variant="outline">Retreat</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
