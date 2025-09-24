"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/8bit/button";

export function RetroModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0"
      onClick={toggleTheme}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.25"
        className="size-8 hidden [html.dark_&]:block"
        aria-label="sun-dim"
      >
        <rect x="120" y="88" width="14" height="14" rx="1"></rect>
        <rect x="104" y="88" width="14" height="14" rx="1"></rect>
        <rect x="88" y="104" width="14" height="14" rx="1"></rect>
        <rect x="88" y="120" width="14" height="14" rx="1"></rect>
        <rect x="88" y="136" width="14" height="14" rx="1"></rect>
        <rect x="136" y="88" width="14" height="14" rx="1"></rect>
        <rect x="120" y="152" width="14" height="14" rx="1"></rect>
        <rect x="104" y="152" width="14" height="14" rx="1"></rect>
        <rect x="136" y="152" width="14" height="14" rx="1"></rect>
        <rect x="152" y="104" width="14" height="14" rx="1"></rect>
        <rect x="168" y="72" width="14" height="14" rx="1"></rect>
        <rect x="168" y="168" width="14" height="14" rx="1"></rect>
        <rect x="72" y="168" width="14" height="14" rx="1"></rect>
        <rect x="72" y="72" width="14" height="14" rx="1"></rect>
        <rect x="120" y="56" width="14" height="14" rx="1"></rect>
        <rect x="56" y="120" width="14" height="14" rx="1"></rect>
        <rect x="120" y="184" width="14" height="14" rx="1"></rect>
        <rect x="184" y="120" width="14" height="14" rx="1"></rect>
        <rect x="40" y="120" width="14" height="14" rx="1"></rect>
        <rect x="120" y="40" width="14" height="14" rx="1"></rect>
        <rect x="120" y="200" width="14" height="14" rx="1"></rect>
        <rect x="184" y="184" width="14" height="14" rx="1"></rect>
        <rect x="56" y="184" width="14" height="14" rx="1"></rect>
        <rect x="184" y="56" width="14" height="14" rx="1"></rect>
        <rect x="56" y="56" width="14" height="14" rx="1"></rect>
        <rect x="200" y="120" width="14" height="14" rx="1"></rect>
        <rect x="152" y="120" width="14" height="14" rx="1"></rect>
        <rect x="152" y="136" width="14" height="14" rx="1"></rect>
      </svg>
      <svg
        width="50"
        height="50"
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0.25"
        className="hidden [html.light_&]:block size-8"
        aria-label="moon"
      >
        <rect x="104" y="56" width="14" height="14" rx="1"></rect>
        <rect x="88" y="56" width="14" height="14" rx="1"></rect>
        <rect x="72" y="72" width="14" height="14" rx="1"></rect>
        <rect x="88" y="72" width="14" height="14" rx="1"></rect>
        <rect x="88" y="88" width="14" height="14" rx="1"></rect>
        <rect x="72" y="88" width="14" height="14" rx="1"></rect>
        <rect x="56" y="104" width="14" height="14" rx="1"></rect>
        <rect x="88" y="104" width="14" height="14" rx="1"></rect>
        <rect x="72" y="104" width="14" height="14" rx="1"></rect>
        <rect x="56" y="136" width="14" height="14" rx="1"></rect>
        <rect x="88" y="136" width="14" height="14" rx="1"></rect>
        <rect x="72" y="136" width="14" height="14" rx="1"></rect>
        <rect x="56" y="120" width="14" height="14" rx="1"></rect>
        <rect x="88" y="120" width="14" height="14" rx="1"></rect>
        <rect x="104" y="120" width="14" height="14" rx="1"></rect>
        <rect x="72" y="120" width="14" height="14" rx="1"></rect>
        <rect x="88" y="56" width="14" height="14" rx="1"></rect>
        <rect x="104" y="136" width="14" height="14" rx="1"></rect>
        <rect x="72" y="152" width="14" height="14" rx="1"></rect>
        <rect x="104" y="152" width="14" height="14" rx="1"></rect>
        <rect x="120" y="136" width="14" height="14" rx="1"></rect>
        <rect x="88" y="152" width="14" height="14" rx="1"></rect>
        <rect x="168" y="152" width="14" height="14" rx="1"></rect>
        <rect x="184" y="136" width="14" height="14" rx="1"></rect>
        <rect x="120" y="152" width="14" height="14" rx="1"></rect>
        <rect x="152" y="152" width="14" height="14" rx="1"></rect>
        <rect x="136" y="152" width="14" height="14" rx="1"></rect>
        <rect x="72" y="168" width="14" height="14" rx="1"></rect>
        <rect x="104" y="168" width="14" height="14" rx="1"></rect>
        <rect x="88" y="168" width="14" height="14" rx="1"></rect>
        <rect x="168" y="168" width="14" height="14" rx="1"></rect>
        <rect x="120" y="168" width="14" height="14" rx="1"></rect>
        <rect x="152" y="168" width="14" height="14" rx="1"></rect>
        <rect x="136" y="168" width="14" height="14" rx="1"></rect>
        <rect x="104" y="184" width="14" height="14" rx="1"></rect>
        <rect x="120" y="184" width="14" height="14" rx="1"></rect>
        <rect x="136" y="184" width="14" height="14" rx="1"></rect>
        <rect x="184" y="152" width="14" height="14" rx="1"></rect>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
