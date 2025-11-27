import React from "react";

import { cn } from "@/lib/utils";

type CommonSpinnerProps = {
  className?: string;
  variant?: "classic" | "diamond";
};

type SpinnerProps = CommonSpinnerProps &
  (
    | (React.ComponentProps<"svg"> & { variant?: "classic" })
    | (React.ComponentProps<"svg"> & { variant: "diamond" })
  );

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, variant = "classic", ...props }, ref) => {
    return (
      <>
        {variant === "classic" && (
          <svg
            aria-label="Loading"
            className={cn("size-5 animate-spin", className)}
            fill="currentColor"
            height="50"
            ref={ref}
            role="status"
            stroke="currentColor"
            strokeWidth="0.25"
            viewBox="0 0 256 256"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            {...(props as React.ComponentProps<"svg">)}
          >
            <rect height="14" rx="1" width="14" x="200" y="80" />
            <rect height="14" rx="1" width="14" x="200" y="96" />
            <rect height="14" rx="1" width="14" x="184" y="96" />
            <rect height="14" rx="1" width="14" x="184" y="80" />
            <rect height="14" rx="1" width="14" x="200" y="64" />
            <rect height="14" rx="1" width="14" x="168" y="96" />
            <rect height="14" rx="1" width="14" x="168" y="64" />
            <rect height="14" rx="1" width="14" x="152" y="48" />
            <rect height="14" rx="1" width="14" x="136" y="48" />
            <rect height="14" rx="1" width="14" x="120" y="48" />
            <rect height="14" rx="1" width="14" x="56" y="64" />
            <rect height="14" rx="1" width="14" x="72" y="64" />
            <rect height="14" rx="1" width="14" x="88" y="48" />
            <rect height="14" rx="1" width="14" x="104" y="48" />
            <rect height="14" rx="1" width="14" x="56" y="80" />
            <rect height="14" rx="1" width="14" x="40" y="80" />
            <rect height="14" rx="1" width="14" x="40" y="96" />
            <rect height="14" rx="1" width="14" x="40" y="112" />
            <rect height="14" rx="1" width="14" x="72" y="144" />
            <rect height="14" rx="1" width="14" x="40" y="160" />
            <rect height="14" rx="1" width="14" x="104" y="192" />
            <rect height="14" rx="1" width="14" x="88" y="192" />
            <rect height="14" rx="1" width="14" x="40" y="176" />
            <rect height="14" rx="1" width="14" x="56" y="160" />
            <rect height="14" rx="1" width="14" x="56" y="144" />
            <rect height="14" rx="1" width="14" x="40" y="144" />
            <rect height="14" rx="1" width="14" x="120" y="192" />
            <rect height="14" rx="1" width="14" x="136" y="192" />
            <rect height="14" rx="1" width="14" x="152" y="192" />
            <rect height="14" rx="1" width="14" x="168" y="192" />
            <rect height="14" rx="1" width="14" x="72" y="48" />
            <rect height="14" rx="1" width="14" x="72" y="176" />
            <rect height="14" rx="1" width="14" x="168" y="176" />
            <rect height="14" rx="1" width="14" x="184" y="176" />
            <rect height="14" rx="1" width="14" x="184" y="160" />
            <rect height="14" rx="1" width="14" x="200" y="160" />
            <rect height="14" rx="1" width="14" x="200" y="144" />
            <rect height="14" rx="1" width="14" x="200" y="128" />
          </svg>
        )}

        {variant === "diamond" && (
          <svg
            aria-label="Loading"
            className={cn("size-4", className)}
            fill="currentColor"
            ref={ref as React.Ref<SVGSVGElement>}
            role="status"
            viewBox="0 0 20 20"
            {...(props as React.ComponentProps<"svg">)}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-pixel {
                    0% { opacity: 0; }
                    1% { opacity: 1; }
                    100% { opacity: 0; }
                }
                .pixel-1 { animation: spin-pixel 0.8s ease-in-out 0s infinite; }
                .pixel-2 { animation: spin-pixel 0.8s ease-in-out 0.1s infinite; }
                .pixel-3 { animation: spin-pixel 0.8s ease-in-out 0.2s infinite; }
                .pixel-4 { animation: spin-pixel 0.8s ease-in-out 0.3s infinite; }
                .pixel-5 { animation: spin-pixel 0.8s ease-in-out 0.4s infinite; }
                .pixel-6 { animation: spin-pixel 0.8s ease-in-out 0.5s infinite; }
                .pixel-7 { animation: spin-pixel 0.8s ease-in-out 0.6s infinite; }
                .pixel-8 { animation: spin-pixel 0.8s ease-in-out 0.7s infinite; }
              `,
              }}
            />
            {/* Top */}
            <rect className="pixel-1" height="4" width="4" x="8" y="0" />
            {/* Top Right */}
            <rect className="pixel-2" height="4" width="4" x="12" y="4" />
            {/* Right */}
            <rect className="pixel-3" height="4" width="4" x="16" y="8" />
            {/* Bottom Right */}
            <rect className="pixel-4" height="4" width="4" x="12" y="12" />
            {/* Bottom */}
            <rect className="pixel-5" height="4" width="4" x="8" y="16" />
            {/* Bottom Left */}
            <rect className="pixel-6" height="4" width="4" x="4" y="12" />
            {/* Left */}
            <rect className="pixel-7" height="4" width="4" x="0" y="8" />
            {/* Top Left */}
            <rect className="pixel-8" height="4" width="4" x="4" y="4" />
          </svg>
        )}
      </>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
