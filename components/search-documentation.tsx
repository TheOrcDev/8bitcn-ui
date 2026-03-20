"use client";

import { useSearchContext } from "fumadocs-ui/contexts/search";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function SearchDocumentation() {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button
      className={cn(
        "retro relative h-8 min-w-0 max-w-40 flex-1 justify-start bg-muted/50 font-normal text-[7.5px] text-muted-foreground shadow-none sm:max-w-none sm:pr-12 md:w-40 md:flex-none lg:w-56 xl:w-64"
      )}
      onClick={() => setOpenSearch(true)}
      variant="outline"
    >
      <span className="hidden lg:inline-flex">Search documentation...</span>
      <span className="inline-flex lg:hidden">Search...</span>
      <kbd className="retro pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 select-none items-center gap-1 border bg-muted px-1.5 font-medium font-mono text-[6px] opacity-100 sm:flex">
        <span className="text-[6px]">cmd+</span>K
      </kbd>
    </Button>
  );
}
