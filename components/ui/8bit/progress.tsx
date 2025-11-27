import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const progressVariants = cva("", {
  variants: {
    variant: {
      default: "",
      retro: "retro",
    },
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  className?: string;
  font?: VariantProps<typeof progressVariants>["font"];
  progressBg?: string;
}

function Progress({
  className,
  font,
  variant,
  value,
  progressBg,
  ...props
}: BitProgressProps) {
  // Extract height from className if present
  const heightMatch = className?.match(/h-(\d+|\[.*?\])/);
  const heightClass = heightMatch ? heightMatch[0] : "h-2";

  return (
    <div className={cn("relative w-full", className)}>
      <ProgressPrimitive.Root
        className={cn(
          "relative w-full overflow-hidden bg-primary/20",
          heightClass,
          font !== "normal" && "retro"
        )}
        data-slot="progress"
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full transition-all",
            variant === "retro" ? "flex" : "w-full flex-1",
            progressBg && variant !== "retro" ? progressBg : "bg-primary"
          )}
          data-slot="progress-indicator"
          style={
            variant === "retro"
              ? undefined
              : { transform: `translateX(-${100 - (value || 0)}%)` }
          }
        >
          {variant === "retro" && (
            <div className="flex w-full">
              {Array.from({ length: 20 }).map((_, i) => {
                const filledSquares = Math.round(((value || 0) / 100) * 20);
                return (
                  <div
                    className={cn(
                      "mx-[1px] size-full",
                      i < filledSquares ? progressBg : "bg-transparent"
                    )}
                    key={i}
                  />
                );
              })}
            </div>
          )}
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>

      <div
        aria-hidden="true"
        className="-my-1 pointer-events-none absolute inset-0 border-foreground border-y-4 dark:border-ring"
      />

      <div
        aria-hidden="true"
        className="-mx-1 pointer-events-none absolute inset-0 border-foreground border-x-4 dark:border-ring"
      />
    </div>
  );
}

export { Progress };
