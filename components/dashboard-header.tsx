"use client";

import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <header className="flex sticky top-0 z-50 h-14 shrink-0 items-center gap-2 border-b-4 border-foreground dark:border-ring bg-background/95">
      <div className="flex w-full items-center h-full gap-4 pr-4 md:pr-6">
        <Button variant="ghost" onClick={toggleSidebar}>
          {open ? (
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color="currentColor"
              className="size-8"
              aria-label="arrow-left-to-line"
            >
              <rect x="80" y="120" width="14" height="14" rx="1"></rect>
              <rect x="112" y="120" width="14" height="14" rx="1"></rect>
              <rect x="96" y="120" width="14" height="14" rx="1"></rect>
              <rect x="128" y="120" width="14" height="14" rx="1"></rect>
              <rect x="160" y="120" width="14" height="14" rx="1"></rect>
              <rect x="176" y="120" width="14" height="14" rx="1"></rect>
              <rect x="96" y="104" width="14" height="14" rx="1"></rect>
              <rect x="112" y="88" width="14" height="14" rx="1"></rect>
              <rect x="128" y="72" width="14" height="14" rx="1"></rect>
              <rect x="96" y="136" width="14" height="14" rx="1"></rect>
              <rect x="112" y="152" width="14" height="14" rx="1"></rect>
              <rect x="128" y="168" width="14" height="14" rx="1"></rect>
              <rect x="192" y="120" width="14" height="14" rx="1"></rect>
              <rect x="144" y="120" width="14" height="14" rx="1"></rect>
              <rect x="48" y="64" width="14" height="14" rx="1"></rect>
              <rect x="48" y="80" width="14" height="14" rx="1"></rect>
              <rect x="48" y="96" width="14" height="14" rx="1"></rect>
              <rect x="48" y="112" width="14" height="14" rx="1"></rect>
              <rect x="48" y="128" width="14" height="14" rx="1"></rect>
              <rect x="48" y="144" width="14" height="14" rx="1"></rect>
              <rect x="48" y="160" width="14" height="14" rx="1"></rect>
              <rect x="48" y="176" width="14" height="14" rx="1"></rect>
            </svg>
          ) : (
            <svg
              width="50"
              height="50"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.25"
              color="currentColor"
              className="size-8"
              aria-label="arrow-right-to-line"
            >
              <rect x="48" y="120" width="14" height="14" rx="1"></rect>
              <rect x="80" y="120" width="14" height="14" rx="1"></rect>
              <rect x="64" y="120" width="14" height="14" rx="1"></rect>
              <rect x="96" y="120" width="14" height="14" rx="1"></rect>
              <rect x="128" y="120" width="14" height="14" rx="1"></rect>
              <rect x="144" y="120" width="14" height="14" rx="1"></rect>
              <rect x="144" y="136" width="14" height="14" rx="1"></rect>
              <rect x="128" y="152" width="14" height="14" rx="1"></rect>
              <rect x="112" y="72" width="14" height="14" rx="1"></rect>
              <rect x="112" y="168" width="14" height="14" rx="1"></rect>
              <rect x="160" y="120" width="14" height="14" rx="1"></rect>
              <rect x="144" y="104" width="14" height="14" rx="1"></rect>
              <rect x="128" y="88" width="14" height="14" rx="1"></rect>
              <rect x="112" y="120" width="14" height="14" rx="1"></rect>
              <rect x="192" y="64" width="14" height="14" rx="1"></rect>
              <rect x="192" y="80" width="14" height="14" rx="1"></rect>
              <rect x="192" y="96" width="14" height="14" rx="1"></rect>
              <rect x="192" y="112" width="14" height="14" rx="1"></rect>
              <rect x="192" y="128" width="14" height="14" rx="1"></rect>
              <rect x="192" y="144" width="14" height="14" rx="1"></rect>
              <rect x="192" y="160" width="14" height="14" rx="1"></rect>
              <rect x="192" y="176" width="14" height="14" rx="1"></rect>
            </svg>
          )}
        </Button>

        <div className="ml-auto flex items-center gap-2">
          <Link href="https://github.com/TheOrcDev/8bitcn-ui" target="_blank">
            <Button
              size="sm"
              variant="ghost"
              className="flex items-center gap-2 retro"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0.25"
                color="currentColor"
                className="size-8"
                aria-label="github"
              >
                <rect x="200" y="80" width="14" height="14" rx="1"></rect>
                <rect x="184" y="64" width="14" height="14" rx="1"></rect>
                <rect x="200" y="96" width="14" height="14" rx="1"></rect>
                <rect x="168" y="48" width="14" height="14" rx="1"></rect>
                <rect x="72" y="48" width="14" height="14" rx="1"></rect>
                <rect x="72" y="64" width="14" height="14" rx="1"></rect>
                <rect x="88" y="48" width="14" height="14" rx="1"></rect>
                <rect x="152" y="48" width="14" height="14" rx="1"></rect>
                <rect x="104" y="48" width="14" height="14" rx="1"></rect>
                <rect x="136" y="48" width="14" height="14" rx="1"></rect>
                <rect x="120" y="48" width="14" height="14" rx="1"></rect>
                <rect x="168" y="64" width="14" height="14" rx="1"></rect>
                <rect x="104" y="64" width="14" height="14" rx="1"></rect>
                <rect x="136" y="64" width="14" height="14" rx="1"></rect>
                <rect x="120" y="64" width="14" height="14" rx="1"></rect>
                <rect x="56" y="64" width="14" height="14" rx="1"></rect>
                <rect x="40" y="80" width="14" height="14" rx="1"></rect>
                <rect x="40" y="96" width="14" height="14" rx="1"></rect>
                <rect x="40" y="112" width="14" height="14" rx="1"></rect>
                <rect x="40" y="128" width="14" height="14" rx="1"></rect>
                <rect x="56" y="80" width="14" height="14" rx="1"></rect>
                <rect x="56" y="96" width="14" height="14" rx="1"></rect>
                <rect x="56" y="112" width="14" height="14" rx="1"></rect>
                <rect x="56" y="128" width="14" height="14" rx="1"></rect>
                <rect x="184" y="80" width="14" height="14" rx="1"></rect>
                <rect x="184" y="96" width="14" height="14" rx="1"></rect>
                <rect x="184" y="112" width="14" height="14" rx="1"></rect>
                <rect x="168" y="80" width="14" height="14" rx="1"></rect>
                <rect x="184" y="144" width="14" height="14" rx="1"></rect>
                <rect x="72" y="80" width="14" height="14" rx="1"></rect>
                <rect x="88" y="144" width="14" height="14" rx="1"></rect>
                <rect x="184" y="128" width="14" height="14" rx="1"></rect>
                <rect x="72" y="144" width="14" height="14" rx="1"></rect>
                <rect x="168" y="144" width="14" height="14" rx="1"></rect>
                <rect x="152" y="144" width="14" height="14" rx="1"></rect>
                <rect x="136" y="144" width="14" height="14" rx="1"></rect>
                <rect x="104" y="144" width="14" height="14" rx="1"></rect>
                <rect x="168" y="128" width="14" height="14" rx="1"></rect>
                <rect x="72" y="128" width="14" height="14" rx="1"></rect>
                <rect x="168" y="160" width="14" height="14" rx="1"></rect>
                <rect x="152" y="160" width="14" height="14" rx="1"></rect>
                <rect x="88" y="192" width="14" height="14" rx="1"></rect>
                <rect x="72" y="176" width="14" height="14" rx="1"></rect>
                <rect x="56" y="176" width="14" height="14" rx="1"></rect>
                <rect x="56" y="160" width="14" height="14" rx="1"></rect>
                <rect x="40" y="160" width="14" height="14" rx="1"></rect>
                <rect x="152" y="176" width="14" height="14" rx="1"></rect>
                <rect x="88" y="176" width="14" height="14" rx="1"></rect>
                <rect x="152" y="192" width="14" height="14" rx="1"></rect>
                <rect x="168" y="192" width="14" height="14" rx="1"></rect>
                <rect x="72" y="192" width="14" height="14" rx="1"></rect>
                <rect x="168" y="176" width="14" height="14" rx="1"></rect>
                <rect x="184" y="176" width="14" height="14" rx="1"></rect>
                <rect x="184" y="160" width="14" height="14" rx="1"></rect>
                <rect x="200" y="160" width="14" height="14" rx="1"></rect>
                <rect x="200" y="128" width="14" height="14" rx="1"></rect>
                <rect x="200" y="144" width="14" height="14" rx="1"></rect>
                <rect x="40" y="144" width="14" height="14" rx="1"></rect>
                <rect x="200" y="112" width="14" height="14" rx="1"></rect>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
