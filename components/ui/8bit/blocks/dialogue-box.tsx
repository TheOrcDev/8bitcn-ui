import { cn } from "@/lib/utils";

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

export default function DialogueBox({
  className,
}: React.ComponentProps<"div">) {
  return (
    <Alert className={cn(className, "flex gap-5 items-center")}>
      <Avatar variant="retro" className="size-20">
        <AvatarImage
          src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg"
          alt="8-bit Orc"
        />
        <AvatarFallback>Orc</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <AlertTitle>8-bit Orc</AlertTitle>
        <AlertDescription>This is not a bug. It’s a feature.</AlertDescription>
      </div>
    </Alert>
  );
}
