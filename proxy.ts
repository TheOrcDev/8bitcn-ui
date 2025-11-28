import { captureRegistryEvent } from "@wandry/analytics-sdk";
import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  captureRegistryEvent(
    request,
    process.env.NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN ?? ""
  );
  return NextResponse.next();
}
