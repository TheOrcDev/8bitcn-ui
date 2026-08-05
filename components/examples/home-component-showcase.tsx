"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";

import { useNearViewport } from "@/hooks/use-near-viewport";
import { useShowcaseScrollGuard } from "@/hooks/use-showcase-scroll-guard";

const ColumnOne = dynamic(
  () =>
    import("./component-showcase/column-one").then(
      (module) => module.ColumnOne
    ),
  { ssr: false }
);
const FeatureColumn = dynamic(
  () =>
    import("./component-showcase/feature-column").then(
      (module) => module.FeatureColumn
    ),
  { ssr: false }
);
const InteractiveColumn = dynamic(
  () =>
    import("./component-showcase/interactive-column").then(
      (module) => module.InteractiveColumn
    ),
  { ssr: false }
);

export default function HomeComponentShowcase() {
  const { isNearViewport, ref } = useNearViewport("800px 0px");
  const readyColumns = useRef(new Set<string>());
  const [readyColumnCount, setReadyColumnCount] = useState(0);
  useShowcaseScrollGuard(isNearViewport);

  const markColumnReady = useCallback((column: string) => {
    if (readyColumns.current.has(column)) {
      return;
    }
    readyColumns.current.add(column);
    setReadyColumnCount(readyColumns.current.size);
  }, []);
  const markColumnOneReady = useCallback(
    () => markColumnReady("column-one"),
    [markColumnReady]
  );
  const markFeatureColumnReady = useCallback(
    () => markColumnReady("feature-column"),
    [markColumnReady]
  );
  const markInteractiveColumnReady = useCallback(
    () => markColumnReady("interactive-column"),
    [markColumnReady]
  );
  const isLoadingChunks = isNearViewport && readyColumnCount < 3;

  return (
    <div aria-busy={isLoadingChunks || undefined} ref={ref}>
      {isNearViewport ? (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ColumnOne onReady={markColumnOneReady} />
          <FeatureColumn onReady={markFeatureColumnReady} />
          <InteractiveColumn onReady={markInteractiveColumnReady} />
        </div>
      ) : (
        <div className="mt-10 min-h-[800px]" />
      )}
    </div>
  );
}
