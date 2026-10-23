import type { Metadata } from "next";
import NotFound3 from "@/components/ui/8bit/blocks/not-found3";

export const metadata: Metadata = {
  title: {
    absolute: "404 | 8bitcn/ui",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFound3 className="h-screen" />;
}
