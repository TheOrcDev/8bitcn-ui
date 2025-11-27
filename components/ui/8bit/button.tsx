import { cva, type VariantProps } from "class-variance-authority";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const buttonVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, asChild, ...props }: BitButtonProps) {
  const { variant, size, className, font } = props;

  return (
    <ShadcnButton
      {...props}
      asChild={asChild}
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 rounded-none border-none transition-transform active:translate-y-1",
        font !== "normal" && "retro",
        className
      )}
      size={size}
      variant={variant}
    >
      {asChild ? (
        <span className="relative inline-flex items-center justify-center gap-1.5">
          {children}

          {variant !== "ghost" && variant !== "link" && size !== "icon" && (
            <>
              {/* Pixelated border */}
              <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="-left-1.5 absolute top-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
              <div className="-right-1.5 absolute top-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
              {variant !== "outline" && (
                <>
                  {/* Top shadow */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-foreground/20" />
                  <div className="absolute top-1.5 left-0 h-1.5 w-3 bg-foreground/20" />

                  {/* Bottom shadow */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-foreground/20" />
                  <div className="absolute right-0 bottom-1.5 h-1.5 w-3 bg-foreground/20" />
                </>
              )}
            </>
          )}

          {size === "icon" && (
            <>
              <div className="pointer-events-none absolute top-0 left-0 h-[5px] w-full bg-foreground md:h-1.5 dark:bg-ring" />
              <div className="pointer-events-none absolute bottom-0 h-[5px] w-full bg-foreground md:h-1.5 dark:bg-ring" />
              <div className="-left-1 pointer-events-none absolute top-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-left-1 pointer-events-none absolute bottom-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-right-1 pointer-events-none absolute top-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-right-1 pointer-events-none absolute bottom-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
            </>
          )}
        </span>
      ) : (
        <>
          {children}

          {variant !== "ghost" && variant !== "link" && size !== "icon" && (
            <>
              {/* Pixelated border */}
              <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
              <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
              <div className="-left-1.5 absolute top-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
              <div className="-right-1.5 absolute top-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
              {variant !== "outline" && (
                <>
                  {/* Top shadow */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-foreground/20" />
                  <div className="absolute top-1.5 left-0 h-1.5 w-3 bg-foreground/20" />

                  {/* Bottom shadow */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-foreground/20" />
                  <div className="absolute right-0 bottom-1.5 h-1.5 w-3 bg-foreground/20" />
                </>
              )}
            </>
          )}

          {size === "icon" && (
            <>
              <div className="pointer-events-none absolute top-0 left-0 h-[5px] w-full bg-foreground md:h-1.5 dark:bg-ring" />
              <div className="pointer-events-none absolute bottom-0 h-[5px] w-full bg-foreground md:h-1.5 dark:bg-ring" />
              <div className="-left-1 pointer-events-none absolute top-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-left-1 pointer-events-none absolute bottom-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-right-1 pointer-events-none absolute top-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
              <div className="-right-1 pointer-events-none absolute bottom-1 h-1/2 w-[5px] bg-foreground md:w-1.5 dark:bg-ring" />
            </>
          )}
        </>
      )}
    </ShadcnButton>
  );
}

export { Button };
