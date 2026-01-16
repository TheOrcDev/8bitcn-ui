import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Dialog as ShadcnDialog,
  DialogClose as ShadcnDialogClose,
  DialogContent as ShadcnDialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger as ShadcnDialogTrigger,
} from "@/components/ui/dialog";

import "@/components/ui/8bit/styles/retro.css";

const Dialog = ShadcnDialog;

const DialogTrigger = ShadcnDialogTrigger;

const DialogHeader = ShadcnDialogHeader;

const DialogDescription = ShadcnDialogDescription;

const DialogClose = ShadcnDialogClose;

const DialogFooter = ShadcnDialogFooter;

export interface BitDialogProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof dialogContentVariants> {}

function DialogTitle({ ...props }: BitDialogProps) {
  const { className, font } = props;
  return (
    <ShadcnDialogTitle
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

export const dialogContentVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

function DialogContent({
  className,
  children,
  font,
  ...props
}: BitDialogProps) {
  return (
    <ShadcnDialogContent
      className={cn(
        "bg-card rounded-none border-none",
        font !== "normal" && "retro",
        className
      )}
      {...props}
    >
      {children}

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnDialogContent>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogClose,
};
