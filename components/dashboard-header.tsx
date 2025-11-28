"use client";

import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <header className="sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-foreground border-b-4 bg-background/95 dark:border-ring">
      <div className="flex h-full w-full items-center gap-4 pr-4 md:pr-6">
        <Button onClick={toggleSidebar} variant="ghost">
          {open ? (
            <svg
              className="size-8"
              color="currentColor"
              fill="currentColor"
              height="50"
              stroke="currentColor"
              strokeWidth="0.25"
              viewBox="0 0 256 256"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close sidebar</title>
              <rect height="14" rx="1" width="14" x="80" y="120" />
              <rect height="14" rx="1" width="14" x="112" y="120" />
              <rect height="14" rx="1" width="14" x="96" y="120" />
              <rect height="14" rx="1" width="14" x="128" y="120" />
              <rect height="14" rx="1" width="14" x="160" y="120" />
              <rect height="14" rx="1" width="14" x="176" y="120" />
              <rect height="14" rx="1" width="14" x="96" y="104" />
              <rect height="14" rx="1" width="14" x="112" y="88" />
              <rect height="14" rx="1" width="14" x="128" y="72" />
              <rect height="14" rx="1" width="14" x="96" y="136" />
              <rect height="14" rx="1" width="14" x="112" y="152" />
              <rect height="14" rx="1" width="14" x="128" y="168" />
              <rect height="14" rx="1" width="14" x="192" y="120" />
              <rect height="14" rx="1" width="14" x="144" y="120" />
              <rect height="14" rx="1" width="14" x="48" y="64" />
              <rect height="14" rx="1" width="14" x="48" y="80" />
              <rect height="14" rx="1" width="14" x="48" y="96" />
              <rect height="14" rx="1" width="14" x="48" y="112" />
              <rect height="14" rx="1" width="14" x="48" y="128" />
              <rect height="14" rx="1" width="14" x="48" y="144" />
              <rect height="14" rx="1" width="14" x="48" y="160" />
              <rect height="14" rx="1" width="14" x="48" y="176" />
            </svg>
          ) : (
            <svg
              className="size-8"
              color="currentColor"
              fill="currentColor"
              height="50"
              stroke="currentColor"
              strokeWidth="0.25"
              viewBox="0 0 256 256"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open sidebar</title>
              <rect height="14" rx="1" width="14" x="48" y="120" />
              <rect height="14" rx="1" width="14" x="80" y="120" />
              <rect height="14" rx="1" width="14" x="64" y="120" />
              <rect height="14" rx="1" width="14" x="96" y="120" />
              <rect height="14" rx="1" width="14" x="128" y="120" />
              <rect height="14" rx="1" width="14" x="144" y="120" />
              <rect height="14" rx="1" width="14" x="144" y="136" />
              <rect height="14" rx="1" width="14" x="128" y="152" />
              <rect height="14" rx="1" width="14" x="112" y="72" />
              <rect height="14" rx="1" width="14" x="112" y="168" />
              <rect height="14" rx="1" width="14" x="160" y="120" />
              <rect height="14" rx="1" width="14" x="144" y="104" />
              <rect height="14" rx="1" width="14" x="128" y="88" />
              <rect height="14" rx="1" width="14" x="112" y="120" />
              <rect height="14" rx="1" width="14" x="192" y="64" />
              <rect height="14" rx="1" width="14" x="192" y="80" />
              <rect height="14" rx="1" width="14" x="192" y="96" />
              <rect height="14" rx="1" width="14" x="192" y="112" />
              <rect height="14" rx="1" width="14" x="192" y="128" />
              <rect height="14" rx="1" width="14" x="192" y="144" />
              <rect height="14" rx="1" width="14" x="192" y="160" />
              <rect height="14" rx="1" width="14" x="192" y="176" />
            </svg>
          )}
        </Button>

        <div className="ml-auto flex items-center gap-2">
          <Link href="https://github.com/TheOrcDev/8bitcn-ui" target="_blank">
            <Button
              className="retro flex items-center gap-2"
              size="sm"
              variant="ghost"
            >
              <svg
                className="size-8"
                color="currentColor"
                fill="currentColor"
                height="50"
                stroke="currentColor"
                strokeWidth="0.25"
                viewBox="0 0 256 256"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <rect height="14" rx="1" width="14" x="200" y="80" />
                <rect height="14" rx="1" width="14" x="184" y="64" />
                <rect height="14" rx="1" width="14" x="200" y="96" />
                <rect height="14" rx="1" width="14" x="168" y="48" />
                <rect height="14" rx="1" width="14" x="72" y="48" />
                <rect height="14" rx="1" width="14" x="72" y="64" />
                <rect height="14" rx="1" width="14" x="88" y="48" />
                <rect height="14" rx="1" width="14" x="152" y="48" />
                <rect height="14" rx="1" width="14" x="104" y="48" />
                <rect height="14" rx="1" width="14" x="136" y="48" />
                <rect height="14" rx="1" width="14" x="120" y="48" />
                <rect height="14" rx="1" width="14" x="168" y="64" />
                <rect height="14" rx="1" width="14" x="104" y="64" />
                <rect height="14" rx="1" width="14" x="136" y="64" />
                <rect height="14" rx="1" width="14" x="120" y="64" />
                <rect height="14" rx="1" width="14" x="56" y="64" />
                <rect height="14" rx="1" width="14" x="40" y="80" />
                <rect height="14" rx="1" width="14" x="40" y="96" />
                <rect height="14" rx="1" width="14" x="40" y="112" />
                <rect height="14" rx="1" width="14" x="40" y="128" />
                <rect height="14" rx="1" width="14" x="56" y="80" />
                <rect height="14" rx="1" width="14" x="56" y="96" />
                <rect height="14" rx="1" width="14" x="56" y="112" />
                <rect height="14" rx="1" width="14" x="56" y="128" />
                <rect height="14" rx="1" width="14" x="184" y="80" />
                <rect height="14" rx="1" width="14" x="184" y="96" />
                <rect height="14" rx="1" width="14" x="184" y="112" />
                <rect height="14" rx="1" width="14" x="168" y="80" />
                <rect height="14" rx="1" width="14" x="184" y="144" />
                <rect height="14" rx="1" width="14" x="72" y="80" />
                <rect height="14" rx="1" width="14" x="88" y="144" />
                <rect height="14" rx="1" width="14" x="184" y="128" />
                <rect height="14" rx="1" width="14" x="72" y="144" />
                <rect height="14" rx="1" width="14" x="168" y="144" />
                <rect height="14" rx="1" width="14" x="152" y="144" />
                <rect height="14" rx="1" width="14" x="136" y="144" />
                <rect height="14" rx="1" width="14" x="104" y="144" />
                <rect height="14" rx="1" width="14" x="168" y="128" />
                <rect height="14" rx="1" width="14" x="72" y="128" />
                <rect height="14" rx="1" width="14" x="168" y="160" />
                <rect height="14" rx="1" width="14" x="152" y="160" />
                <rect height="14" rx="1" width="14" x="88" y="192" />
                <rect height="14" rx="1" width="14" x="72" y="176" />
                <rect height="14" rx="1" width="14" x="56" y="176" />
                <rect height="14" rx="1" width="14" x="56" y="160" />
                <rect height="14" rx="1" width="14" x="40" y="160" />
                <rect height="14" rx="1" width="14" x="152" y="176" />
                <rect height="14" rx="1" width="14" x="88" y="176" />
                <rect height="14" rx="1" width="14" x="152" y="192" />
                <rect height="14" rx="1" width="14" x="168" y="192" />
                <rect height="14" rx="1" width="14" x="72" y="192" />
                <rect height="14" rx="1" width="14" x="168" y="176" />
                <rect height="14" rx="1" width="14" x="184" y="176" />
                <rect height="14" rx="1" width="14" x="184" y="160" />
                <rect height="14" rx="1" width="14" x="200" y="160" />
                <rect height="14" rx="1" width="14" x="200" y="128" />
                <rect height="14" rx="1" width="14" x="200" y="144" />
                <rect height="14" rx="1" width="14" x="40" y="144" />
                <rect height="14" rx="1" width="14" x="200" y="112" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
