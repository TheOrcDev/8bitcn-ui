"use client";

import { useEffect, useRef, useState } from "react";

export function useNearViewport<T extends Element = HTMLDivElement>(
  rootMargin: string
) {
  const ref = useRef<T>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isNearViewport) {
      return;
    }
    if (typeof window.IntersectionObserver === "undefined") {
      setIsNearViewport(true);
      return;
    }
    let isDisconnected = false;
    const disconnect = () => {
      if (!isDisconnected) {
        observer.disconnect();
        isDisconnected = true;
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsNearViewport(true);
          disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(element);
    return disconnect;
  }, [isNearViewport, rootMargin]);

  return { isNearViewport, ref };
}
