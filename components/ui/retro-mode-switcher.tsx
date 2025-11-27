"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/8bit/button";

export function RetroModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      className="group/toggle h-8 w-8 px-0"
      onClick={toggleTheme}
      variant="ghost"
    >
      <svg
        aria-label="sun-dim"
        className="hidden size-8 [html.dark_&]:block"
        fill="currentColor"
        height="50"
        stroke="currentColor"
        strokeWidth="0.25"
        viewBox="0 0 256 256"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Sun</title>
        <rect height="14" rx="1" width="14" x="120" y="88" />
        <rect height="14" rx="1" width="14" x="104" y="88" />
        <rect height="14" rx="1" width="14" x="88" y="104" />
        <rect height="14" rx="1" width="14" x="88" y="120" />
        <rect height="14" rx="1" width="14" x="88" y="136" />
        <rect height="14" rx="1" width="14" x="136" y="88" />
        <rect height="14" rx="1" width="14" x="120" y="152" />
        <rect height="14" rx="1" width="14" x="104" y="152" />
        <rect height="14" rx="1" width="14" x="136" y="152" />
        <rect height="14" rx="1" width="14" x="152" y="104" />
        <rect height="14" rx="1" width="14" x="168" y="72" />
        <rect height="14" rx="1" width="14" x="168" y="168" />
        <rect height="14" rx="1" width="14" x="72" y="168" />
        <rect height="14" rx="1" width="14" x="72" y="72" />
        <rect height="14" rx="1" width="14" x="120" y="56" />
        <rect height="14" rx="1" width="14" x="56" y="120" />
        <rect height="14" rx="1" width="14" x="120" y="184" />
        <rect height="14" rx="1" width="14" x="184" y="120" />
        <rect height="14" rx="1" width="14" x="40" y="120" />
        <rect height="14" rx="1" width="14" x="120" y="40" />
        <rect height="14" rx="1" width="14" x="120" y="200" />
        <rect height="14" rx="1" width="14" x="184" y="184" />
        <rect height="14" rx="1" width="14" x="56" y="184" />
        <rect height="14" rx="1" width="14" x="184" y="56" />
        <rect height="14" rx="1" width="14" x="56" y="56" />
        <rect height="14" rx="1" width="14" x="200" y="120" />
        <rect height="14" rx="1" width="14" x="152" y="120" />
        <rect height="14" rx="1" width="14" x="152" y="136" />
      </svg>
      <svg
        aria-label="moon"
        className="hidden size-8 [html.light_&]:block"
        fill="currentColor"
        height="50"
        stroke="currentColor"
        strokeWidth="0.25"
        viewBox="0 0 256 256"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Moon</title>
        <rect height="14" rx="1" width="14" x="104" y="56" />
        <rect height="14" rx="1" width="14" x="88" y="56" />
        <rect height="14" rx="1" width="14" x="72" y="72" />
        <rect height="14" rx="1" width="14" x="88" y="72" />
        <rect height="14" rx="1" width="14" x="88" y="88" />
        <rect height="14" rx="1" width="14" x="72" y="88" />
        <rect height="14" rx="1" width="14" x="56" y="104" />
        <rect height="14" rx="1" width="14" x="88" y="104" />
        <rect height="14" rx="1" width="14" x="72" y="104" />
        <rect height="14" rx="1" width="14" x="56" y="136" />
        <rect height="14" rx="1" width="14" x="88" y="136" />
        <rect height="14" rx="1" width="14" x="72" y="136" />
        <rect height="14" rx="1" width="14" x="56" y="120" />
        <rect height="14" rx="1" width="14" x="88" y="120" />
        <rect height="14" rx="1" width="14" x="104" y="120" />
        <rect height="14" rx="1" width="14" x="72" y="120" />
        <rect height="14" rx="1" width="14" x="88" y="56" />
        <rect height="14" rx="1" width="14" x="104" y="136" />
        <rect height="14" rx="1" width="14" x="72" y="152" />
        <rect height="14" rx="1" width="14" x="104" y="152" />
        <rect height="14" rx="1" width="14" x="120" y="136" />
        <rect height="14" rx="1" width="14" x="88" y="152" />
        <rect height="14" rx="1" width="14" x="168" y="152" />
        <rect height="14" rx="1" width="14" x="184" y="136" />
        <rect height="14" rx="1" width="14" x="120" y="152" />
        <rect height="14" rx="1" width="14" x="152" y="152" />
        <rect height="14" rx="1" width="14" x="136" y="152" />
        <rect height="14" rx="1" width="14" x="72" y="168" />
        <rect height="14" rx="1" width="14" x="104" y="168" />
        <rect height="14" rx="1" width="14" x="88" y="168" />
        <rect height="14" rx="1" width="14" x="168" y="168" />
        <rect height="14" rx="1" width="14" x="120" y="168" />
        <rect height="14" rx="1" width="14" x="152" y="168" />
        <rect height="14" rx="1" width="14" x="136" y="168" />
        <rect height="14" rx="1" width="14" x="104" y="184" />
        <rect height="14" rx="1" width="14" x="120" y="184" />
        <rect height="14" rx="1" width="14" x="136" y="184" />
        <rect height="14" rx="1" width="14" x="184" y="152" />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
