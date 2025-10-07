import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
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
      {...props}
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
  );
}

export { Spinner };
