import { cva, type VariantProps } from "class-variance-authority";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const inputVariants = cva("", {
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

export interface BitTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Textarea({ ...props }: BitTextareaProps) {
  const { className, font } = props;

  return (
    <div className={cn("relative w-full", className)}>
      <ShadcnTextarea
        {...props}
        className={cn(
          "rounded-none border-0 ring-0 transition-transform",
          font !== "normal" && "retro",
          className
        )}
      />

      <div
        aria-hidden="true"
        className="-my-1.5 pointer-events-none absolute inset-0 border-foreground border-y-6 dark:border-ring"
      />

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </div>
  );
}

export { Textarea };
