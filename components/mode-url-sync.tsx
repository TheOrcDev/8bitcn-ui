"use client";

import { useTheme } from "next-themes";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { useEffect, useRef } from "react";

const MODES = ["light", "dark"] as const;

type Mode = (typeof MODES)[number];

const useUrlMode = () => useQueryState("mode", parseAsStringLiteral(MODES));

/**
 * Mirrors light / dark mode into the `mode` query parameter, so a copied URL
 * carries it alongside the theme.
 *
 * This lives next to the mode switcher rather than inside it: the switcher is
 * published through the registry, and wiring it to the URL would force every
 * install to take on nuqs.
 */
export function ModeUrlSync() {
  const [urlMode, setUrlMode] = useUrlMode();
  const { setTheme, theme } = useTheme();
  const applied = useRef(false);
  const baseline = useRef<string | null>(null);

  // URL -> next-themes, once, so a shared link opens in the right mode.
  useEffect(() => {
    if (applied.current) {
      return;
    }
    applied.current = true;

    if (urlMode && urlMode !== theme) {
      setTheme(urlMode);
    }
  }, [urlMode, theme, setTheme]);

  // next-themes -> URL, but only after the visitor actually switches modes.
  // Writing on mount would append `?mode=` to every visit of anyone who has
  // ever picked a mode, since next-themes restores that choice from storage.
  useEffect(() => {
    if (baseline.current === null) {
      // next-themes reports `undefined` until it has mounted and read storage.
      if (theme === undefined) {
        return;
      }
      baseline.current = theme;
      return;
    }

    if (theme && theme !== baseline.current && theme !== "system") {
      setUrlMode(theme as Mode);
    }
  }, [theme, setUrlMode]);

  return null;
}
