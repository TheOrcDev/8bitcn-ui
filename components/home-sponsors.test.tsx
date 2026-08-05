import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./sponsors", () => ({
  default: () => <section>Loaded sponsors</section>,
}));

import { HomeSponsors } from "./home-sponsors";

let observerCallback: IntersectionObserverCallback | undefined;
const disconnectMock = vi.fn();

beforeEach(() => {
  class Observer {
    constructor(callback: IntersectionObserverCallback) {
      observerCallback = callback;
    }
    disconnect = disconnectMock;
    observe = vi.fn();
    takeRecords = vi.fn();
    unobserve = vi.fn();
  }
  vi.stubGlobal("IntersectionObserver", Observer);
});

afterEach(() => {
  cleanup();
  disconnectMock.mockReset();
  observerCallback = undefined;
  vi.unstubAllGlobals();
});

describe("HomeSponsors", () => {
  it("reserves space and loads the sponsor section once near the viewport", async () => {
    const view = render(<HomeSponsors />);
    expect(view.container.querySelector(".min-h-\\[2400px\\]")).toBeTruthy();
    expect(screen.queryByText("Loaded sponsors")).toBeNull();

    await act(async () =>
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    );

    expect(screen.getAllByText("Loaded sponsors")).toHaveLength(1);
    expect(disconnectMock).toHaveBeenCalledOnce();
  });
});
