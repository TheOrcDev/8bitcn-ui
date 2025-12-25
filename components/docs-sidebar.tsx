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

const EXCLUDED_SECTIONS = ["root:index.mdx", "root:blocks"];
const EXCLUDED_PAGES = ["/docs", "/docs/changelog"];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="fixed top-[calc(var(--header-height)+1px)] left-auto z-30 hidden h-[calc(100svh-var(--header-height)-1px)] overscroll-none bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2">
        <ScrollArea className="h-[calc(90svh-50px)]">
          <div className="sticky -top-1 z-10 h-8 shrink-0 bg-gradient-to-b from-background via-background/80 to-background/50 blur-xs" />
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
          {tree.children.map((item) => {
            if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
              return null;
            }

            return (
              <SidebarGroup key={item.$id}>
                <SidebarGroupLabel className="font-medium text-muted-foreground">
                  {item.name}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  {item.type === "folder" && (
                    <SidebarMenu className="gap-0.5">
                      {item.children.map((childItem) => {
                        if (
                          childItem.type === "page" &&
                          childItem.url?.includes("/mcp")
                        ) {
                          return null;
                        }

                        return (
                          childItem.type === "page" &&
                          !EXCLUDED_PAGES.includes(childItem.url) && (
                            <SidebarMenuItem key={childItem.url}>
                              <SidebarMenuButton
                                asChild
                                className="relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                                isActive={childItem.url === pathname}
                              >
                                <Link href={childItem.url}>
                                  <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                  {childItem.name}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        );
                      })}
                    </SidebarMenu>
                  )}
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
