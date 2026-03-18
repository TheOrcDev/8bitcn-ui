import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  links: FooterLink[];
  title: string;
}

interface StickyFooterProps {
  className?: string;
  columns?: FooterColumn[];
  copyright?: string;
  description?: string;
  title?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Components", href: "#" },
      { label: "Blocks", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Contributing", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "License", href: "#" },
    ],
  },
];

export default function StickyFooter({
  title = "8bitcn",
  description = "The retro component library for modern builders.",
  columns = defaultColumns,
  copyright = "2026 8bitcn. All rights reserved.",
  className,
}: StickyFooterProps) {
  return (
    <footer className={cn("w-full border-t px-4 py-12", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <h3 className="retro mb-2 font-bold text-sm">{title}</h3>
            <p className="mb-4 text-muted-foreground text-[10px] leading-relaxed">
              {description}
            </p>
            <Button size="sm" variant="outline">
              GET STARTED
            </Button>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="retro mb-3 font-bold text-[10px] uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="retro text-[10px] transition-colors hover:text-foreground text-muted-foreground"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6">
          <p className="retro text-center text-muted-foreground text-[10px]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
