import { cacheLife } from "next/cache";
import { afterEach, describe, expect, it, vi } from "vitest";

import { getGithubStars } from "./github-stars";

vi.mock("next/cache", () => ({
  cacheLife: vi.fn(),
}));

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json" },
    status,
  });
}

afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("getGithubStars", () => {
  it("returns a valid count with the documented cache profile and headers", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse({
        stargazers_count: 1234,
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(getGithubStars()).resolves.toBe(1234);
    expect(cacheLife).toHaveBeenCalledWith("hours");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.github.com/repos/TheOrcDev/8bitcn-ui",
      expect.objectContaining({
        headers: { Accept: "application/vnd.github+json" },
        signal: expect.any(AbortSignal),
      })
    );
  });

  it("rejects non-success responses without exposing the upstream body", async () => {
    const secretPayload = "upstream-private-payload";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(secretPayload, { status: 403 }))
    );

    const error = await getGithubStars().catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toContain("status 403");
    expect((error as Error).message).not.toContain(secretPayload);
  });

  it("rejects malformed JSON with a descriptive message", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response("not-json", {
          headers: { "Content-Type": "application/json" },
        })
      )
    );

    await expect(getGithubStars()).rejects.toThrow(
      "GitHub stars request failed"
    );
  });

  it.each([
    { stargazers_count: -1 },
    { stargazers_count: 1.5 },
    { stargazers_count: Number.MAX_SAFE_INTEGER + 1 },
    { stargazers_count: "100" },
    {},
  ])("rejects an invalid count in $stargazers_count", async (payload) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(payload)));

    await expect(getGithubStars()).rejects.toThrow("invalid count");
  });

  it("aborts an upstream request after 1500 milliseconds", async () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        (_: RequestInfo | URL, init?: RequestInit) =>
          new Promise<Response>((_resolve, reject) => {
            init?.signal?.addEventListener("abort", () => {
              reject(new DOMException("Aborted", "AbortError"));
            });
          })
      )
    );

    const rejection = expect(getGithubStars()).rejects.toThrow("timed out");
    await vi.advanceTimersByTimeAsync(1500);
    await rejection;
  });
});
