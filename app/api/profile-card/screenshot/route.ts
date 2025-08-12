import { NextRequest, NextResponse } from "next/server";

import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as {
      profile: Record<string, unknown>;
    };

    const url = new URL(req.url);
    const origin = `${url.protocol}//${url.host}`;

    const base64 = Buffer.from(JSON.stringify(payload.profile)).toString(
      "base64"
    );

    const previewUrl = `${origin}/profile-creator/preview?data=${encodeURIComponent(
      base64
    )}`;

    const isProd =
      process.env.VERCEL === "1" || process.env.NODE_ENV === "production";

    const browser = isProd
      ? await (
          await import("puppeteer-core")
        ).default.launch({
          args: chromium.args,
          defaultViewport: {
            width: 1200,
            height: 1000,
            deviceScaleFactor: 2,
          },
          executablePath: await chromium.executablePath(),
          headless: true,
        })
      : await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

    try {
      const page = await browser.newPage();
      await page.setViewport({
        width: 1200,
        height: 1000,
        deviceScaleFactor: 2,
      });

      await page.goto(previewUrl, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      const element = (await page.waitForSelector("#profile-card", {
        timeout: 15000,
      })) as import("puppeteer").ElementHandle<Element> | null;
      if (!element) {
        throw new Error("profile card element not found");
      }

      await element.evaluate((el) =>
        el.scrollIntoView({
          behavior: "instant",
          block: "center",
          inline: "center",
        })
      );

      const rect = await element.evaluate((el) => {
        const r = (el as HTMLElement).getBoundingClientRect();
        return {
          x: Math.round(r.left + window.scrollX),
          y: Math.round(r.top + window.scrollY),
          width: Math.round(r.width),
          height: Math.round(r.height),
        };
      });

      const padding = 16; // breathing room
      const clip = {
        x: Math.max(0, rect.x - padding),
        y: Math.max(0, rect.y - padding),
        width: rect.width + padding * 2,
        height: rect.height + padding * 2,
      } as const;

      const pngBuffer = await page.screenshot({
        type: "png",
        omitBackground: false,
        captureBeyondViewport: true,
        clip,
      });

      // Ensure body matches BodyInit (Buffer isn't part of BodyInit)
      const body =
        typeof pngBuffer === "string" ? pngBuffer : new Uint8Array(pngBuffer);

      return new NextResponse(body, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": "attachment; filename=profile-card.png",
          "Cache-Control": "no-store",
        },
      });
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error("/api/profile-card/screenshot error", error);
    return NextResponse.json(
      { error: "Failed to generate screenshot" },
      { status: 500 }
    );
  }
}
