import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex gap-4 p-4">
      <SidebarProvider className="w-max hidden md:block">
        <AppSidebar className="absolute top-0 left-0 " />
        <SidebarTrigger className="md:hidden" />
      </SidebarProvider>

      <div className="flex-1 px-4 py-4 max-w-full">{children}</div>
    </main>
  );
}
