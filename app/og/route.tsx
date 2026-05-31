import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

const IMAGE_SIZE = {
  height: 630,
  width: 1200,
} as const;

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || siteConfig.title;
  const description = searchParams.get("description") || siteConfig.description;

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f8f5e9",
        border: "24px solid #18181b",
        color: "#18181b",
        display: "flex",
        fontFamily: "monospace",
        height: "100%",
        justifyContent: "center",
        padding: 56,
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          border: "8px solid #18181b",
          boxShadow: "16px 16px 0 #f97316",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          height: "100%",
          justifyContent: "space-between",
          padding: 48,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 32, fontWeight: 900 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              background: "#a3e635",
              border: "4px solid #18181b",
              display: "flex",
              fontSize: 22,
              fontWeight: 800,
              padding: "10px 18px",
            }}
          >
            RETRO UI LIBRARY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1,
              maxWidth: 920,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#3f3f46",
              display: "flex",
              fontSize: 32,
              lineHeight: 1.25,
              maxWidth: 900,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 26,
            fontWeight: 800,
            gap: 18,
          }}
        >
          <div
            style={{
              background: "#38bdf8",
              border: "4px solid #18181b",
              display: "flex",
              height: 28,
              width: 28,
            }}
          />
          <div style={{ display: "flex" }}>8-bit shadcn/ui components</div>
        </div>
      </div>
    </div>,
    IMAGE_SIZE
  );
}
