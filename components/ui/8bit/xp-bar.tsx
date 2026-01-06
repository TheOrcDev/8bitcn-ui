import { type BitProgressProps, Progress } from "@/components/ui/8bit/progress";
import { cn } from "@/lib/utils";

interface XpBarProps extends React.ComponentProps<"div"> {
  className?: string;
  props?: BitProgressProps;
  variant?: "retro" | "default";
  value?: number;
  levelUpMessage?: string;
}

export default function XpBar({
  className,
  variant,
  value,
  levelUpMessage = "LEVEL UP!",
  ...props
}: XpBarProps) {
  const isLevelUp = value === 100;

  return (
    <div className={cn("relative", className)}>
      <Progress
        {...props}
        value={value}
        variant={variant}
        className={cn(isLevelUp && "animate-pulse")}
        progressBg="bg-yellow-500"
      />
      {isLevelUp && (
        <div
          className={cn(
            "retro",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-[0.625rem] text-black",
            "pointer-events-none whitespace-nowrap z-10",
            "drop-shadow-[1px_1px_0_#fff] [text-shadow:1px_1px_0_#fff,-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff]",
            "animate-[blink_0.5s_step-end_infinite]"
          )}
        >
          {levelUpMessage}
        </div>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

