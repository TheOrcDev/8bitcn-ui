"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "./ui/8bit/badge";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

type SidebarItemProps = {
  item: {
    title: string;
    url: string;
    new?: boolean;
  };
};

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.url;

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={item.url} className="flex items-center justify-between">
          {item.title}
          {item.new && <Badge>New</Badge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
