"use client";

import { Button } from "@/components/ui/8bit/button";
import { toast } from "@/components/ui/8bit/toast";

export function ToastExample() {
  return (
    <Button onClick={() => toast("8bitcn is an awesome project!")}>
      Show Toast
    </Button>
  );
}
