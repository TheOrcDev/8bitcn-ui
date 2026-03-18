import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/8bit/separator";

import "@/components/ui/8bit/styles/retro.css";

export interface SocialStat {
  label: string;
  value: string;
}

interface SocialProof1Props {
  className?: string;
  logos?: ReactNode[];
  stats?: SocialStat[];
  subtitle?: string;
  title?: string;
}

const defaultStats: SocialStat[] = [
  { value: "1,700+", label: "GitHub Stars" },
  { value: "50+", label: "Components" },
  { value: "100+", label: "Contributors" },
  { value: "10K+", label: "Downloads" },
];

export default function SocialProof1({
  title = "Trusted by Builders",
  subtitle = "Join thousands of developers shipping retro UIs",
  stats = defaultStats,
  logos,
  className,
}: SocialProof1Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-4xl">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-xs">{subtitle}</p>
            )}
          </div>
        )}

        {/* Stats row */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={stat.label}>
              <div className="flex items-center gap-8 md:gap-12">
                <div className="text-center">
                  <div className="retro font-bold text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="retro mt-1 text-muted-foreground text-[10px]">
                    {stat.label}
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <Separator className="hidden h-8 md:block" orientation="vertical" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Logo cloud */}
        {logos && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, idx) => (
              <div className="flex items-center" key={`logo-${idx}`}>
                {logo}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
