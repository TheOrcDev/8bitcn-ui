"use client";

import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroupLabel,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type SidebarExampleMenu = {
    imgSrc: string;
    imgAlt: string;
    title: string;
    subMenus: string[];
};

export function SidebarExample() {
    const menus: SidebarExampleMenu[] = [
        {
            imgSrc: "/icons/sword.png",
            imgAlt: "Sword",
            title: "Weapons",
            subMenus: ["Ironfang", "Stormcleaver", "Duskblade"],
        },
        {
            imgSrc: "/icons/shield.png",
            imgAlt: "Shield",
            title: "Shields",
            subMenus: ["Mirrorwall", "Hearthguard", "Oathkeeper"],
        },
        {
            imgSrc: "/images/goblin.png",
            imgAlt: "Goblin",
            title: "Monsters",
            subMenus: ["Goblin", "Giant", "Dragon"],
        },
    ];

    return (
        <div style={{
            border: "1px var(--border) solid",
            width: "100%",
        }}>
            <SidebarProvider style={{
                minHeight: 350,
                maxHeight: 350,
            }}>
                <Sidebar collapsible="icon" style={{
                    position: "relative",
                    maxHeight: 350,
                    overflowY: "auto",
                }}>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Lore</SidebarGroupLabel>
                            <SidebarMenu>
                                {menus.map(menu => <CollapsibleSidebarMenu key={menu.title} menu={menu} />)}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <SidebarTrigger />
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

function CollapsibleSidebarMenu({ menu }: { menu: SidebarExampleMenu }) {
    return (
        <Collapsible asChild>
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <img src={menu.imgSrc} style={{ width: "16px" }} alt={menu.imgAlt} />
                        <span>{menu.title}</span>
                        <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {menu.subMenus.map(subMenu => <CollapsibleSidebarSubMenu key={subMenu} subMenu={subMenu} />)}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
}

function CollapsibleSidebarSubMenu({ subMenu }: { subMenu: string }) {
    return (
        <SidebarMenuSubItem>
            <SidebarMenuSubButton>
                {subMenu}
            </SidebarMenuSubButton>
        </SidebarMenuSubItem>
    );
}