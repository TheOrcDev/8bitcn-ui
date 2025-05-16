import { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import Link from "next/link"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import { sidebarMetaData } from "@/lib/metadata"
import { Skeleton } from "@/components/ui/8bit/skeleton"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Sidebar",
  description: "Displays a simple 8-bit sidebar component.",
  openGraph: {
    images: sidebarMetaData,
  },
}

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function SidebarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Sidebar</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-sidebar.json`}
          command={"pnpm dlx shadcn@canary add 8bit-sidebar"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a simple 8-bit sidebar component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit sidebar component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-sidebar" className="w-fit" />
          </div>
        </div>
        <div className="relative flex min-h-[400px] h-[450px] w-full">
          <SidebarProvider>
            <div className="flex border w-full h-[450px]">
              <Sidebar
                collapsible="none"
                className={`${pressStart.className} border-r-4 border-foreground dark:border-ring`}
              >
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>

              <div className="bg-accent w-full px-5 py-3 gap-5 hidden md:flex flex-col">
                <Skeleton className="h-[225px] w-full rounded-xl" />
                <div className="flex gap-5">
                  <Skeleton className="h-[125px] w-full rounded-xl" />
                  <Skeleton className="h-[125px] w-full rounded-xl" />
                  <Skeleton className="h-[125px] w-full rounded-xl" />
                </div>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-sidebar.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <p>
        8-bit sidebar is using Shadcn sidebar component. All you need to do is
        replace your app sidebar with 8bit sidebar.
      </p>

      <p>For more information, check out the:</p>
      <Link
        href="https://ui.shadcn.com/docs/components/sidebar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-primary/80"
      >
        Shadcn Sidebar documentation
      </Link>

      <h3 className="text-lg font-bold mt-10">In your layout file:</h3>
      <CodeSnippet>{`import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/8bit/blocks/sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}`}</CodeSnippet>
    </div>
  )
}
