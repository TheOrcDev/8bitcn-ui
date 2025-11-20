import { NextRequest, NextResponse } from "next/server";

import { captureRegistryEvent } from "@wandry/analytics-sdk";

export function proxy(request: NextRequest) {
  captureRegistryEvent(
    request,
    process.env.NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN ?? ""
  );
  return NextResponse.next();
}
