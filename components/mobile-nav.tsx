"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import { navItems } from "@/config/nav-items";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Badge } from "./ui/8bit/badge";

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
        <DrawerHeader>
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
            <div key={navItem.title} className="flex flex-col gap-2 pt-4">
              <DrawerTitle className="text-xl">{navItem.title}</DrawerTitle>
              {navItem.items.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-xl font-extralight text-muted-foreground flex items-center gap-5"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                  {item.new && <Badge className="text-xs">New</Badge>}
                </Link>
              ))}
            </div>
          ))}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
