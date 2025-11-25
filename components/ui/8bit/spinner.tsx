import React from "react";

import { cn } from "@/lib/utils";

interface CommonSpinnerProps {
  className?: string;
  variant?: "classic" | "diamond";
}

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
            ref={ref}
            width="50"
            height="50"
            viewBox="0 0 256 256"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0.25"
            className={cn("animate-spin size-5", className)}
            role="status"
            aria-label="Loading"
            {...(props as React.ComponentProps<"svg">)}
          >
            <rect x="200" y="80" width="14" height="14" rx="1"></rect>
            <rect x="200" y="96" width="14" height="14" rx="1"></rect>
            <rect x="184" y="96" width="14" height="14" rx="1"></rect>
            <rect x="184" y="80" width="14" height="14" rx="1"></rect>
            <rect x="200" y="64" width="14" height="14" rx="1"></rect>
            <rect x="168" y="96" width="14" height="14" rx="1"></rect>
            <rect x="168" y="64" width="14" height="14" rx="1"></rect>
            <rect x="152" y="48" width="14" height="14" rx="1"></rect>
            <rect x="136" y="48" width="14" height="14" rx="1"></rect>
            <rect x="120" y="48" width="14" height="14" rx="1"></rect>
            <rect x="56" y="64" width="14" height="14" rx="1"></rect>
            <rect x="72" y="64" width="14" height="14" rx="1"></rect>
            <rect x="88" y="48" width="14" height="14" rx="1"></rect>
            <rect x="104" y="48" width="14" height="14" rx="1"></rect>
            <rect x="56" y="80" width="14" height="14" rx="1"></rect>
            <rect x="40" y="80" width="14" height="14" rx="1"></rect>
            <rect x="40" y="96" width="14" height="14" rx="1"></rect>
            <rect x="40" y="112" width="14" height="14" rx="1"></rect>
            <rect x="72" y="144" width="14" height="14" rx="1"></rect>
            <rect x="40" y="160" width="14" height="14" rx="1"></rect>
            <rect x="104" y="192" width="14" height="14" rx="1"></rect>
            <rect x="88" y="192" width="14" height="14" rx="1"></rect>
            <rect x="40" y="176" width="14" height="14" rx="1"></rect>
            <rect x="56" y="160" width="14" height="14" rx="1"></rect>
            <rect x="56" y="144" width="14" height="14" rx="1"></rect>
            <rect x="40" y="144" width="14" height="14" rx="1"></rect>
            <rect x="120" y="192" width="14" height="14" rx="1"></rect>
            <rect x="136" y="192" width="14" height="14" rx="1"></rect>
            <rect x="152" y="192" width="14" height="14" rx="1"></rect>
            <rect x="168" y="192" width="14" height="14" rx="1"></rect>
            <rect x="72" y="48" width="14" height="14" rx="1"></rect>
            <rect x="72" y="176" width="14" height="14" rx="1"></rect>
            <rect x="168" y="176" width="14" height="14" rx="1"></rect>
            <rect x="184" y="176" width="14" height="14" rx="1"></rect>
            <rect x="184" y="160" width="14" height="14" rx="1"></rect>
            <rect x="200" y="160" width="14" height="14" rx="1"></rect>
            <rect x="200" y="144" width="14" height="14" rx="1"></rect>
            <rect x="200" y="128" width="14" height="14" rx="1"></rect>
          </svg>
        )}

        {variant === "diamond" && (
          <svg
            ref={ref as React.Ref<SVGSVGElement>}
            viewBox="0 0 20 20"
            fill="currentColor"
            className={cn("size-4", className)}
            role="status"
            aria-label="Loading"
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
            <rect className="pixel-1" x="8" y="0" width="4" height="4" />
            {/* Top Right */}
            <rect className="pixel-2" x="12" y="4" width="4" height="4" />
            {/* Right */}
            <rect className="pixel-3" x="16" y="8" width="4" height="4" />
            {/* Bottom Right */}
            <rect className="pixel-4" x="12" y="12" width="4" height="4" />
            {/* Bottom */}
            <rect className="pixel-5" x="8" y="16" width="4" height="4" />
            {/* Bottom Left */}
            <rect className="pixel-6" x="4" y="12" width="4" height="4" />
            {/* Left */}
            <rect className="pixel-7" x="0" y="8" width="4" height="4" />
            {/* Top Left */}
            <rect className="pixel-8" x="4" y="4" width="4" height="4" />
          </svg>
        )}
      </>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
