import { ConditionalSidebar } from "@/components/conditional-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { source } from "@/lib/source";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-wrapper flex flex-1 flex-col px-2">
      <SidebarProvider className="3xl:fixed:container min-h-min flex-1 items-start 3xl:fixed:px-3 px-0 [--sidebar-width:220px] [--top-spacing:0] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <ConditionalSidebar tree={source.pageTree} />
        <div className="h-full w-full lg:ml-(--sidebar-width)">{children}</div>
      </SidebarProvider>
    </div>
  );
}
