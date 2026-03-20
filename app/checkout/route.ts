import { Checkout } from "@creem_io/nextjs";

export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY ?? "",
  testMode: process.env.CREEM_TEST_MODE === "true",
  defaultSuccessUrl: "/sponsors?checkout=success",
});
