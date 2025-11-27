import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export interface BitSkeletonProp extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function Skeleton({ children, ...props }: BitSkeletonProp) {
  const { className } = props;

  return (
    <div className={cn("relative animate-pulse", className)}>
      <ShadcnSkeleton
        {...props}
        className={cn("rounded-none border-none bg-accent", "retro", className)}
      >
        {children}
      </ShadcnSkeleton>

      <div className="opacity-60">
        <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
        <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      </div>
      <div className="opacity-60">
        <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
        <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      </div>
      <div className="absolute top-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="opacity-60">
        <div className="-left-1.5 absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        <div className="-left-1.5 absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      </div>
      <div className="opacity-60">
        <div className="-right-1.5 absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        <div className="-right-1.5 absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      </div>
    </div>
  );
}

export { Skeleton };
