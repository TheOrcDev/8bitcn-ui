import { NextRequest, NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

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

    const isVercel = !!process.env.VERCEL_ENV;
    let puppeteer: any;
    let launchOptions: any = { headless: true };

    if (isVercel) {
      const chromium = (await import("@sparticuz/chromium")).default;
      puppeteer = await import("puppeteer-core");
      launchOptions = {
        ...launchOptions,
        args: chromium.args,
        executablePath: await chromium.executablePath(),
      };
    } else {
      puppeteer = await import("puppeteer");
      launchOptions = {
        ...launchOptions,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      };
    }

    const browser = await puppeteer.launch(launchOptions);

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
