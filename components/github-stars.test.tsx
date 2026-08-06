import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { GithubStars } from "./github-stars";

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json" },
    status,
  });
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("GithubStars", () => {
  it("reserves width while loading", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise<Response>(() => undefined))
    );
    render(<GithubStars />);

    const count = screen.getByTestId("github-stars");
    expect(count.className).toContain("w-12");
    expect(count.textContent).toBe("—");
  });

  it.each([
    [999, "999"],
    [1250, "1.3k"],
  ])("formats %i stars as %s", async (stars, expected) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ stars })));
    render(<GithubStars />);

    await waitFor(() =>
      expect(screen.getByTestId("github-stars").textContent).toBe(expected)
    );
  });

  it.each([
    { label: "null", response: jsonResponse({ stars: null }) },
    { label: "malformed", response: jsonResponse({ stars: "100" }) },
    { label: "negative", response: jsonResponse({ stars: -1 }) },
    { label: "error", response: jsonResponse({}, 500) },
  ])("keeps the fallback for a $label endpoint response", async ({
    response,
  }) => {
    const fetchMock = vi.fn().mockResolvedValue(response);
    vi.stubGlobal("fetch", fetchMock);
    render(<GithubStars />);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    await waitFor(() => {
      expect(screen.getByTestId("github-stars").textContent).toBe("—");
      if (response.ok) {
        expect(response.bodyUsed).toBe(true);
      }
    });
  });

  it("keeps the fallback after a network error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Offline")));
    render(<GithubStars />);

    await waitFor(() =>
      expect(screen.getByTestId("github-stars").textContent).toBe("—")
    );
  });

  it("aborts its request on unmount", () => {
    let requestSignal: AbortSignal | undefined;
    vi.stubGlobal(
      "fetch",
      vi.fn((_: RequestInfo | URL, init?: RequestInit) => {
        requestSignal = init?.signal ?? undefined;
        return new Promise<Response>(() => undefined);
      })
    );
    const view = render(<GithubStars />);

    view.unmount();

    expect(requestSignal?.aborted).toBe(true);
  });
});
