import { cva, type VariantProps } from "class-variance-authority";
import {
  Alert as ShadcnAlert,
  AlertDescription as ShadcnAlertDescription,
  AlertTitle as ShadcnAlertTitle,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export const alertVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-card text-card-foreground",
      destructive:
        "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BitAlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

function Alert({ children, ...props }: BitAlertProps) {
  const { variant, className, font } = props;

  return (
    <div className={cn("relative m-1.5", className)}>
      <ShadcnAlert
        {...props}
        className={cn(
          "relative rounded-none border-none bg-background",
          font !== "normal" && "retro",
          className
        )}
        variant={variant}
      >
        {children}
      </ShadcnAlert>

      <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  );
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertTitle
      className={cn("line-clamp-1 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertDescription
      className={cn(
        "grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
