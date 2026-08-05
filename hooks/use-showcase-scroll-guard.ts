"use client";

import { useEffect } from "react";

export function useShowcaseScrollGuard(enabled = true) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const original = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = () => {
      // Intentionally suppress mount-time focus scrolling from showcase widgets.
    };
    const animationFrame = requestAnimationFrame(() => {
      if (window.scrollY > 0 && !window.location.hash) {
        window.scrollTo(0, 0);
      }
    });
    const timer = setTimeout(() => {
      Element.prototype.scrollIntoView = original;
    }, 600);
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
      Element.prototype.scrollIntoView = original;
    };
  }, [enabled]);
}
