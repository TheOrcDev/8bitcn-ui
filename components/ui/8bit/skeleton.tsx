import { cn } from "@/lib/utils";

import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

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
        <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      </div>
      <div className="opacity-60">
        <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      </div>
      <div className="absolute top-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground/60 dark:bg-ring/60" />
      <div className="opacity-60">
        <div className="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      </div>
      <div className="opacity-60">
        <div className="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
        <div className="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      </div>
    </div>
  );
}

export { Skeleton };
