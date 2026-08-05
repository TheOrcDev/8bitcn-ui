import { afterEach, describe, expect, it, vi } from "vitest";

import { getGithubStars } from "@/lib/github-stars";

import { GET } from "./route";

vi.mock("@/lib/github-stars", () => ({
  getGithubStars: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("GET /api/github-stars", () => {
  it("returns a cached successful count", async () => {
    vi.mocked(getGithubStars).mockResolvedValue(1234);

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ stars: 1234 });
    expect(response.headers.get("Cache-Control")).toBe(
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
  });

  it("returns a cacheable null fallback after upstream failure", async () => {
    vi.mocked(getGithubStars).mockRejectedValue(new Error("Unavailable"));

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ stars: null });
    expect(response.headers.get("Cache-Control")).toBe(
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
  });
});
