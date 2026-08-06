"use client";

import { useEffect, useState } from "react";

function parseStarsResponse(payload: unknown): number | null {
  if (!(typeof payload === "object" && payload !== null)) {
    return null;
  }
  const stars = Reflect.get(payload, "stars");
  if (stars === null) {
    return null;
  }
  return typeof stars === "number" && Number.isSafeInteger(stars) && stars >= 0
    ? stars
    : null;
}

function formatStars(stars: number): string {
  return stars >= 1000
    ? `${(stars / 1000).toFixed(1)}k`
    : stars.toLocaleString();
}

export function GithubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStars() {
      try {
        const response = await fetch("/api/github-stars", {
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }
        const payload: unknown = await response.json();
        if (!controller.signal.aborted) {
          setStars(parseStarsResponse(payload));
        }
      } catch {
        // The decorative count intentionally keeps its reserved fallback.
      }
    }

    loadStars();
    return () => controller.abort();
  }, []);

  return (
    <span
      className="retro mt-0.5 w-12 text-muted-foreground text-xs tabular-nums"
      data-testid="github-stars"
    >
      {stars === null ? "—" : formatStars(stars)}
    </span>
  );
}
