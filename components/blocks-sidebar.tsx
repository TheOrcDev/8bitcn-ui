"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TOP_LEVEL_SECTIONS } from "@/config/nav-items";
import type { source } from "@/lib/source";

import { ScrollArea } from "./ui/scroll-area";

const EXCLUDED_PAGES = ["/docs/blocks"];

// Category display names with emojis
const CATEGORY_LABELS: Record<string, string> = {
  gaming: "🎮 Gaming",
  authentication: "🔐 Authentication",
  dashboard: "📊 Dashboard",
  calendar: "📅 Calendar",
  charts: "📈 Charts",
};

// Define the order of categories (gaming first)
const CATEGORY_ORDER = [
  "gaming",
  "authentication",
  "dashboard",
  "calendar",
  "charts",
];

export function BlocksSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

  // Find the blocks folder in the tree
  const blocksFolder = tree.children.find(
    (item) =>
      item.type === "folder" &&
      typeof item.name === "string" &&
      item.name.toLowerCase() === "blocks"
  );

  return (
    <Sidebar
      className="fixed top-[calc(var(--header-height)+1px)] left-auto z-30 hidden h-[calc(100svh-var(--header-height)-1px)] overscroll-none bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2">
        <ScrollArea className="h-[calc(90svh-50px)]">
          <div className="sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
          <SidebarGroup>
            <SidebarGroupLabel className="font-medium text-muted-foreground">
              Sections
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {TOP_LEVEL_SECTIONS.map(({ name, href }) => (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      className="relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                      isActive={
                        href === "/docs"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        {name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Render blocks organized by category */}
          {blocksFolder?.type === "folder" &&
            [...blocksFolder.children]
              .sort((a, b) => {
                const aName =
                  typeof a.name === "string" ? a.name.toLowerCase() : "";
                const bName =
                  typeof b.name === "string" ? b.name.toLowerCase() : "";
                const aIndex = CATEGORY_ORDER.indexOf(aName);
                const bIndex = CATEGORY_ORDER.indexOf(bName);
                // Items not in CATEGORY_ORDER go to the end
                const aOrder = aIndex === -1 ? CATEGORY_ORDER.length : aIndex;
                const bOrder = bIndex === -1 ? CATEGORY_ORDER.length : bIndex;
                return aOrder - bOrder;
              })
              .map((categoryItem) => {
                // Only render category folders (gaming, authentication, etc.)
                if (categoryItem.type !== "folder") {
                  return null;
                }

                const categoryName =
                  typeof categoryItem.name === "string"
                    ? categoryItem.name
                    : "";
                const categoryKey = categoryName.toLowerCase();
                const categoryLabel =
                  CATEGORY_LABELS[categoryKey] || categoryName;

                return (
                  <SidebarGroup key={categoryItem.$id}>
                    <SidebarGroupLabel className="font-medium text-muted-foreground">
                      {categoryLabel}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu className="gap-0.5">
                        {categoryItem.children.map((blockItem) => {
                          if (blockItem.type !== "page") {
                            return null;
                          }

                          // Skip index pages
                          if (
                            EXCLUDED_PAGES.includes(blockItem.url) ||
                            blockItem.url.endsWith(`/${categoryKey}`)
                          ) {
                            return null;
                          }

                          return (
                            <SidebarMenuItem key={blockItem.url}>
                              <SidebarMenuButton
                                asChild
                                className="relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                                isActive={blockItem.url === pathname}
                              >
                                <Link href={blockItem.url}>
                                  <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                  {blockItem.name}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                );
              })}
          <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-background via-background/80 to-background/50 blur-xs" />
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
