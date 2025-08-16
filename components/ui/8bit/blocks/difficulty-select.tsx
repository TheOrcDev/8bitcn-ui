"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

export type Difficulty = "easy" | "normal" | "hard";

export interface DifficultySelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Difficulty;
  defaultValue?: Difficulty;
  onChange?: (value: Difficulty) => void;
  title?: string;
  description?: string;
  vertical?: boolean;
}

export default function DifficultySelect({
  className,
  value,
  defaultValue = "normal",
  onChange,
  title = "Select Difficulty",
  description,
  vertical = true,
  ...props
}: DifficultySelectProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] =
    React.useState<Difficulty>(defaultValue);

  const selected = isControlled ? (value as Difficulty) : internalValue;

  const setSelected = React.useCallback(
    (next: Difficulty) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center gap-2">
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <div
          className={cn("gap-4", vertical ? "flex flex-col" : "flex flex-row")}
        >
          <Button
            className="flex items-center justify-center"
            variant={selected === "easy" ? "default" : "secondary"}
            onClick={() => setSelected("easy")}
          >
            EASY
          </Button>
          <Button
            className="flex items-center justify-center"
            variant={selected === "normal" ? "default" : "secondary"}
            onClick={() => setSelected("normal")}
          >
            NORMAL
          </Button>
          <Button
            className="flex items-center justify-center"
            variant={selected === "hard" ? "default" : "secondary"}
            onClick={() => setSelected("hard")}
          >
            HARD
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
