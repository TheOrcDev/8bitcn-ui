import { cva, type VariantProps } from "class-variance-authority";
import { Input as ShadcnInput } from "@/components/ui/input";
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

export interface BitInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Input({ ...props }: BitInputProps) {
  const { className, font } = props;

  return (
    <div
      className={cn(
        "!p-0 relative flex items-center border-foreground border-y-6 dark:border-ring",
        className
      )}
    >
      <ShadcnInput
        {...props}
        className={cn(
          "!w-full rounded-none ring-0",
          font !== "normal" && "retro",
          className
        )}
      />

      <div
        aria-hidden="true"
        className="-mx-1.5 pointer-events-none absolute inset-0 border-foreground border-x-6 dark:border-ring"
      />
    </div>
  );
}

export { Input };
