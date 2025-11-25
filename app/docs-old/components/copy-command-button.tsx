"use client";

import { Terminal } from "lucide-react";

import { toast } from "@/components/ui/8bit/toast";
import { Button } from "@/components/ui/button";

interface CopyCommandButtonProps {
  command: string;
  copyCommand: string;
}

export default function CopyCommandButton({
  command,
  copyCommand,
}: CopyCommandButtonProps) {
  const copy = () => {
    navigator.clipboard.writeText(copyCommand);
    toast("Command copied to clipboard");
  };

  const shortCommand = command.split(" ").slice(-1)[0];

  return (
    <Button
      variant="outline"
      onClick={copy}
      className="text-xs md:text-sm font-mono"
    >
      <Terminal className="size-3 md:size-4" />
      <span className="hidden sm:block">{command}</span>
      <span className="block sm:hidden">
        <span className="font-mono">{shortCommand}</span>
      </span>
    </Button>
  );
}
