import { siteConfig } from "@/lib/site";

export { cn } from "cn";

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
