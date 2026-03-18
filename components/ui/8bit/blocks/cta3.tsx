"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Link from "next/link";

import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface CTA3Props {
  className?: string;
  cta?: string;
  dismissible?: boolean;
  href?: string;
  text?: string;
  threshold?: number;
}

export default function CTA3({
  text = "Ready to build something retro?",
  cta = "GET STARTED",
  href,
  threshold = 300,
  dismissible = true,
  className,
}: CTA3Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  if (dismissed || !visible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-50 flex w-full items-center justify-between border-t bg-background/95 px-6 py-3 backdrop-blur-sm",
        className,
      )}
    >
      <span className="retro text-xs">{text}</span>

      <div className="flex items-center gap-2">
        {href ? (
          <Button asChild size="sm">
            <Link href={href}>{cta}</Link>
          </Button>
        ) : (
          <Button size="sm">{cta}</Button>
        )}
        {dismissible && (
          <Button
            onClick={() => setDismissed(true)}
            size="sm"
            variant="ghost"
          >
            <span className="retro text-[10px]">[X]</span>
          </Button>
        )}
      </div>
    </div>
  );
}
