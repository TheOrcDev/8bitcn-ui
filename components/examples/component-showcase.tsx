"use client";

import { useEffect, useState } from "react";

import { useShowcaseScrollGuard } from "@/hooks/use-showcase-scroll-guard";

import { ColumnOne } from "./component-showcase/column-one";
import { FeatureColumn } from "./component-showcase/feature-column";
import { InteractiveColumn } from "./component-showcase/interactive-column";

export default function ComponentShowcase() {
  const [mounted, setMounted] = useState(false);
  useShowcaseScrollGuard();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="mt-10 min-h-[800px]" />;
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ColumnOne />
      <FeatureColumn />
      <InteractiveColumn />
    </div>
  );
}
