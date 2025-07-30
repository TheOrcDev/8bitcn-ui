import { Progress } from "@/components/ui/8bit/progress";

export default function HealthBar({ className }: React.ComponentProps<"div">) {
  return (
    <Progress
      variant="retro"
      value={70}
      className={className}
      progressBg="bg-red-500"
    />
  );
}
