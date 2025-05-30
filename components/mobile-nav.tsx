"use client";

import React, { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-3/4">
        <DrawerHeader className="overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.header.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-2xl font-extralight"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {navItems.navMain.map((navItem) => (
            <div key={navItem.title} className="flex flex-col gap-2 py-10">
              <DrawerTitle className="text-xl">{navItem.title}</DrawerTitle>
              {navItem.items.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-xl font-extralight text-muted-foreground flex items-center gap-5"
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
