"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { Kbd } from "./ui/8bit/kbd";

const searchDialogItems = [
  {
    label: "Components",
    href: "/docs/components",
  },
  {
    label: "Blocks",
    href: "/docs/blocks",
  },
  {
    label: "Gaming Blocks",
    href: "/docs/blocks/gaming",
  },
  {
    label: "Themes",
    href: "/themes",
  },
];

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const { search, setSearch, query } = useDocsSearch({
    type: "fetch",
    locale,
  });

  return (
    <SearchDialog
      isLoading={query.isLoading}
      onSearchChange={setSearch}
      search={search}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent className="retro mt-20 rounded-none md:mt-0">
        <SearchDialogHeader>
          <svg
            aria-label="search text-muted-foreground"
            className="size-10"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.25"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search</title>
            <rect height="14" rx="1" width="14" x="88" y="56" />
            <rect height="14" rx="1" width="14" x="72" y="72" />
            <rect height="14" rx="1" width="14" x="56" y="88" />
            <rect height="14" rx="1" width="14" x="56" y="104" />
            <rect height="14" rx="1" width="14" x="56" y="120" />
            <rect height="14" rx="1" width="14" x="72" y="136" />
            <rect height="14" rx="1" width="14" x="88" y="152" />
            <rect height="14" rx="1" width="14" x="104" y="152" />
            <rect height="14" rx="1" width="14" x="120" y="152" />
            <rect height="14" rx="1" width="14" x="136" y="136" />
            <rect height="14" rx="1" width="14" x="152" y="120" />
            <rect height="14" rx="1" width="14" x="152" y="104" />
            <rect height="14" rx="1" width="14" x="152" y="88" />
            <rect height="14" rx="1" width="14" x="136" y="72" />
            <rect height="14" rx="1" width="14" x="120" y="56" />
            <rect height="14" rx="1" width="14" x="104" y="56" />
            <rect height="14" rx="1" width="14" x="152" y="152" />
            <rect height="14" rx="1" width="14" x="168" y="168" />
            <rect height="14" rx="1" width="14" x="184" y="184" />
          </svg>
          <SearchDialogInput />
          <SearchDialogClose>
            <Kbd>ESC</Kbd>
          </SearchDialogClose>
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />

        {search ? null : (
          <div className="flex flex-col">
            {searchDialogItems.map((item) => (
              <a
                className="px-6 py-3 text-muted-foreground text-sm hover:bg-muted-foreground/30"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </SearchDialogContent>
    </SearchDialog>
  );
}
