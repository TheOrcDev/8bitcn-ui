import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { navItems } from "@/config/nav-items";

import SidebarItem from "./sidebar-item";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="bg-background px-4">
        {navItems.navMain.map((nav) => (
          <SidebarGroup key={nav.title}>
            <SidebarGroupLabel>{nav.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.items.map((item) => (
                  <SidebarItem item={item} key={item.title} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
