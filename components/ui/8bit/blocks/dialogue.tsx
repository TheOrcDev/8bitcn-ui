import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { cn } from "@/lib/utils";

export interface DialogueProps extends React.ComponentProps<"div"> {
  avatarSrc?: string;
  avatarFallback?: string;
  title?: string;
  description?: string;
  player?: boolean;
}

export default function Dialogue({
  className,
  avatarSrc,
  avatarFallback,
  title,
  description,
  player = true,
  ...props
}: DialogueProps) {
  return (
    <div className={cn("flex gap-3", className)} {...props}>
      {player && (
        <Avatar className="size-16" variant="retro">
          <AvatarImage alt={avatarFallback} src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      )}
      <Alert className={cn(!player && "text-right")}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>

      {!player && (
        <Avatar className="size-16" variant="retro">
          <AvatarImage alt={avatarFallback} src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
