import { Card, CardContent } from "@/components/ui/8bit/card";
import { cn } from "@/lib/utils";

const HEIGHT_CLASSES = {
  lg: "min-h-[420px] md:min-h-[640px]",
  sm: "min-h-[240px] md:min-h-[360px]",
  md: "min-h-[320px] md:min-h-[480px]",
};

const ALIGN_CLASSES = {
  left: "justify-start text-left",
  right: "justify-end text-right",
  center: "justify-center text-center",
};

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
  const heightClass = HEIGHT_CLASSES[height || "md"];
  const alignClass = ALIGN_CLASSES[align || "center"];

  return (
    <Card className={cn(className)} {...props}>
      <CardContent className={cn("relative p-0")}>
        <div className={cn("relative w-full", heightClass)}>
          {/* Background image */}
          <Image
            alt=""
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]"
            fill
            src={backgroundSrc}
            style={{ imageRendering: "pixelated" }}
          />

          {/* Darken/gradient overlay for readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/60 mix-blend-multiply"
            style={{ opacity: darken }}
          />

          {/* Cinematic letterbox bars */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-0 h-6 bg-secondary/40 md:h-10"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 left-0 h-6 bg-secondary/80 md:h-10"
          />

          {/* Content overlay */}
          <div
            className={cn(
              "relative z-10 flex h-full items-center p-8 md:p-12",
              alignClass
            )}
          >
            <div className="mx-auto max-w-3xl">
              <h1 className="font-bold text-2xl leading-tight drop-shadow-[0_3px_0_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-secondary/90 text-xs drop-shadow-[0_2px_0_rgba(0,0,0,0.8)] md:text-base dark:text-muted-foreground/90">
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
