import Image from "next/image";
import Link from "next/link";

import { pressStart } from "@/config/fonts";
import { navItems } from "@/config/nav-items";

import { Button } from "@/components/ui/button";

import { ModeSwitcher } from "@/components/mode-switcher";

import MobileNav from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="flex sticky top-0 z-50 h-14 shrink-0 items-center gap-2 border-b border-dashed bg-background/95">
      <div className="flex w-full items-center h-full gap-1 px-4 md:gap-5 md:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <Link href="/" className="hidden md:flex items-center gap-2">
          <Image src="/8bitcn.png" alt="logo" width={32} height={32} />{" "}
          <h2
            className={`${pressStart.className} hidden font-bold md:inline-block text-xs`}
          >
            8bitcn/ui
          </h2>
        </Link>

        <div className="block md:hidden">
          <MobileNav />
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.header.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="https://github.com/TheOrcDev/8bitcn-ui" target="_blank">
            <Button size="icon" variant="ghost">
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-current hover:scale-110 transition duration-300"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Button>
          </Link>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
