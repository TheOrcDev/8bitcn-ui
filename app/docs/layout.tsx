import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      sidebar={{
        style: {
          backgroundColor: "transparent",
          marginTop: "55px",
          marginBottom: "55px",
          marginLeft: "20px",
          borderRight: "1px dashed var(--color-sidebar-border)",
        },
      }}
      themeSwitch={{
        enabled: false,
      }}
      tree={source.pageTree}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
