import type { NextRequest } from "next/server";

import {
  UrlResolverByItem,
  generateRegistryRssFeed,
} from "@wandry/analytics-sdk";

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    componentsUrl: "docs/components",
    /**
     * I added the categories field to the blocks in the registry and select it here,
     * https://ui.shadcn.com/docs/registry/registry-item-json#categories
     *
     * because you have a category in the link to the block, for example, docs/blocks/gaming/chapter-intro,
     * but in the registry the element is called chapter-intro.
     * */
    blocksUrl: ((item) => {
      const category = item?.categories?.at(0) ?? "";
      return `docs/blocks/${category}/${item.name}`;
    }) as UrlResolverByItem,
    rss: {
      title: "8bitncn",
      description:
        "A set of 8-bit styled components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      link: "https://www.8bitcn.com/",
      endpoint: "/rss.xml",
      pubDateStrategy: "githubLastEdit",
    },
    registry: {
      path: "r/registry.json",
    },
    github: {
      owner: "TheOrcDev",
      repo: "8bitcn-ui",
      /**
       *
       * You need to enter your GitHub token here.
       * I don't store it anywhere.
       * It is needed to send a request to the GitHub API and get the date of the last commit for the registry item.
       * This is necessary to generate a valid date of change for the item.
       *
       */
      token: process.env.GITHUB_TOKEN,
    },
  });

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
