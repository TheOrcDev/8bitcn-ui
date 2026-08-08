import { act, cleanup, render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./component-showcase/column-one", () => ({
  ColumnOne: ({ onReady }: { onReady?: () => void }) => {
    useEffect(() => onReady?.(), [onReady]);
    return <div>Column one</div>;
  },
}));
vi.mock("./component-showcase/feature-column", () => ({
  FeatureColumn: ({ onReady }: { onReady?: () => void }) => {
    useEffect(() => onReady?.(), [onReady]);
    return <div>Feature column</div>;
  },
}));
vi.mock("./component-showcase/interactive-column", () => ({
  InteractiveColumn: ({ onReady }: { onReady?: () => void }) => {
    useEffect(() => onReady?.(), [onReady]);
    return <div>Interactive column</div>;
  },
}));

import HomeComponentShowcase from "./home-component-showcase";

let callback: IntersectionObserverCallback | undefined;
const disconnectMock = vi.fn();

beforeEach(() => {
  class Observer {
    constructor(nextCallback: IntersectionObserverCallback) {
      callback = nextCallback;
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
  callback = undefined;
  disconnectMock.mockReset();
  vi.unstubAllGlobals();
});

describe("HomeComponentShowcase", () => {
  it("keeps an 8bit skeleton visible until all three columns are activated", async () => {
    const view = render(<HomeComponentShowcase />);
    expect(screen.getByTestId("home-showcase-skeleton")).toBeTruthy();
    expect(
      view.container.querySelectorAll('[data-slot="skeleton"]').length
    ).toBeGreaterThan(0);
    expect(view.container.firstElementChild?.hasAttribute("aria-busy")).toBe(
      false
    );
    expect(screen.queryByText("Column one")).toBeNull();
    await act(async () =>
      callback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    );
    expect(screen.getByText("Column one")).toBeTruthy();
    expect(screen.getByText("Feature column")).toBeTruthy();
    expect(screen.getByText("Interactive column")).toBeTruthy();
    expect(screen.queryByTestId("home-showcase-skeleton")).toBeNull();
    expect(view.container.querySelector(".lg\\:grid-cols-4")).toBeTruthy();
    expect(view.container.firstElementChild?.hasAttribute("aria-busy")).toBe(
      false
    );
    act(() =>
      callback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    );
    expect(screen.getAllByText("Column one")).toHaveLength(1);
    expect(screen.getAllByText("Feature column")).toHaveLength(1);
    expect(screen.getAllByText("Interactive column")).toHaveLength(1);
    expect(disconnectMock).toHaveBeenCalledOnce();
  });
});
