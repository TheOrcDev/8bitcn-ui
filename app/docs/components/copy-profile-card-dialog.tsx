import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";

import CodeSnippet from "./code-snippet";

interface ProfileCardProps {
  code: string;
}

export default function CopyProfileCardDialog({ code }: ProfileCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Copy Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Copy Profile Card</DialogTitle>
          <DialogDescription className="text-xs">
            Copy the profile card code to your clipboard.
          </DialogDescription>
        </DialogHeader>

        <CodeSnippet>{code}</CodeSnippet>

        <DialogFooter>
          <Button size="sm">Copy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
