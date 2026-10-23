import { siteConfig } from "@/lib/site";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";

export async function GET() {
  const pages = [...source.getPages()].toSorted((a, b) =>
    a.url.localeCompare(b.url)
  );

  const sections = await Promise.all(
    pages.map(async (page) => {
      const raw = await page.data.getText("raw");
      return `# ${page.data.title}\n\nURL: ${absoluteUrl(page.url)}\n\n${raw.trim()}`;
    })
  );

  const header = `# 8bitcn/ui documentation

Source: ${siteConfig.url}/docs
Generated from the Fumadocs MDX source.`;

  return new Response([header, ...sections].join("\n\n---\n\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
