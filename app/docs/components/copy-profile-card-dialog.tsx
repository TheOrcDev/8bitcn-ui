import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
        <Button className="w-full md:w-auto">Copy Code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Copy Profile Card</DialogTitle>
          <DialogDescription className="text-xs">
            Copy the profile card code to your clipboard.
          </DialogDescription>
        </DialogHeader>

        <p className="text-xs text-muted-foreground">
          First add all dependencies to your project.
        </p>

        <CodeSnippet>
          pnpm dlx shadcn@latest add @8bitcn/profile-card
        </CodeSnippet>

        <p className="text-xs text-muted-foreground">
          Then use the component in your project.
        </p>

        <CodeSnippet>{code}</CodeSnippet>
      </DialogContent>
    </Dialog>
  );
}
