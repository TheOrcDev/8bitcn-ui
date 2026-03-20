import type { Metadata } from "next";
import NotFound1 from "@/components/ui/8bit/blocks/not-found1";

export const metadata: Metadata = {
  title: "404 | 8bitcn/ui",
};

export default function NotFound() {
  return <NotFound1 />;
}
