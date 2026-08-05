"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/hooks/use-near-viewport";

const Sponsors = dynamic(() => import("./sponsors"), {
  ssr: false,
});

export function HomeSponsors() {
  const { isNearViewport, ref } = useNearViewport("800px 0px");

  return (
    <div ref={ref}>
      {isNearViewport ? (
        <Sponsors />
      ) : (
        <div className="min-h-[2400px] md:min-h-[1800px]" />
      )}
    </div>
  );
}
