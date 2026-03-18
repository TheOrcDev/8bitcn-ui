"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/config/nav-items";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <svg
            aria-label="align-left"
            className="size-7"
            fill="currentColor"
            height="50"
            stroke="currentColor"
            strokeWidth="0.25"
            viewBox="0 0 256 256"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <rect height="14" rx="1" width="14" x="64" y="72" />
            <rect height="14" rx="1" width="14" x="80" y="72" />
            <rect height="14" rx="1" width="14" x="96" y="72" />
            <rect height="14" rx="1" width="14" x="128" y="72" />
            <rect height="14" rx="1" width="14" x="144" y="72" />
            <rect height="14" rx="1" width="14" x="160" y="72" />
            <rect height="14" rx="1" width="14" x="176" y="72" />
            <rect height="14" rx="1" width="14" x="192" y="72" />
            <rect height="14" rx="1" width="14" x="48" y="72" />
            <rect height="14" rx="1" width="14" x="112" y="72" />
            <rect height="14" rx="1" width="14" x="64" y="168" />
            <rect height="14" rx="1" width="14" x="80" y="168" />
            <rect height="14" rx="1" width="14" x="96" y="168" />
            <rect height="14" rx="1" width="14" x="128" y="168" />
            <rect height="14" rx="1" width="14" x="144" y="168" />
            <rect height="14" rx="1" width="14" x="160" y="168" />
            <rect height="14" rx="1" width="14" x="176" y="168" />
            <rect height="14" rx="1" width="14" x="48" y="120" />
            <rect height="14" rx="1" width="14" x="64" y="120" />
            <rect height="14" rx="1" width="14" x="48" y="168" />
            <rect height="14" rx="1" width="14" x="112" y="168" />
            <rect height="14" rx="1" width="14" x="80" y="120" />
            <rect height="14" rx="1" width="14" x="96" y="120" />
            <rect height="14" rx="1" width="14" x="128" y="120" />
            <rect height="14" rx="1" width="14" x="144" y="120" />
            <rect height="14" rx="1" width="14" x="112" y="120" />
          </svg>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-3/4">
        <DrawerHeader className="overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.header.map((item) => (
              <Link
                className="font-extralight text-2xl"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {navItems.navMain.map((navItem) => (
            <div className="flex flex-col gap-2 py-10" key={navItem.title}>
              <DrawerTitle className="text-xl">{navItem.title}</DrawerTitle>
              {navItem.items.map((item) => (
                <Link
                  className="flex items-center gap-5 font-extralight text-muted-foreground text-xl"
                  href={item.url}
                  key={item.title}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
