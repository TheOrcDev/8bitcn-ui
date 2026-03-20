"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/8bit/badge";

export function BouncingBadge({ children }: { children: ReactNode }) {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Badge
      className={`mb-6 transition-transform ${bounce ? "animate-bounce" : ""}`}
    >
      {children}
    </Badge>
  );
}
