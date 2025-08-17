import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/8bit/card";

export interface ChapterIntroProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  backgroundSrc?: string;
  align?: "left" | "center" | "right";
  height?: "sm" | "md" | "lg";
  darken?: number;
}

export default function ChapterIntro({
  className,
  title,
  subtitle,
  backgroundSrc = "/placeholder.svg",
  align = "center",
  height = "md",
  darken = 0.5,
  ...props
}: ChapterIntroProps) {
  const heightClass =
    height === "lg"
      ? "min-h-[420px] md:min-h-[640px]"
      : height === "sm"
        ? "min-h-[240px] md:min-h-[360px]"
        : "min-h-[320px] md:min-h-[480px]";

  const alignClass =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
        ? "justify-end text-right"
        : "justify-center text-center";

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className={cn("relative p-0")}>
        <div className={cn("relative w-full", heightClass)}>
          {/* Background image */}
          <img
            src={backgroundSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Darken/gradient overlay for readability */}
          <div
            className="absolute inset-0 bg-background/60 mix-blend-multiply"
            style={{ opacity: darken }}
            aria-hidden="true"
          />

          {/* Cinematic letterbox bars */}
          <div
            className="absolute top-0 left-0 right-0 h-6 md:h-10 bg-secondary/40"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-6 md:h-10 bg-secondary/80"
            aria-hidden="true"
          />

          {/* Content overlay */}
          <div
            className={cn(
              "relative z-10 flex h-full items-center p-8 md:p-12",
              alignClass
            )}
          >
            <div className="mx-auto max-w-3xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-[0_3px_0_rgba(0,0,0,0.8)]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-xs md:text-base text-secondary/90 dark:text-muted-foreground/90 drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
