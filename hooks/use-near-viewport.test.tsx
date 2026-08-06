import { act, cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useNearViewport } from "./use-near-viewport";

let callback: IntersectionObserverCallback | undefined;
const disconnectMock = vi.fn();
const observeMock = vi.fn();

function Probe() {
  const { isNearViewport, ref } = useNearViewport("800px 0px");
  return <div data-near={isNearViewport} ref={ref} />;
}

beforeEach(() => {
  class Observer {
    constructor(nextCallback: IntersectionObserverCallback) {
      callback = nextCallback;
    }
    disconnect = disconnectMock;
    observe = observeMock;
    takeRecords = vi.fn();
    unobserve = vi.fn();
  }
  vi.stubGlobal("IntersectionObserver", Observer);
});

afterEach(() => {
  cleanup();
  disconnectMock.mockReset();
  observeMock.mockReset();
  callback = undefined;
  vi.unstubAllGlobals();
});

describe("useNearViewport", () => {
  it("starts outside the near-viewport state", () => {
    render(<Probe />);
    expect(document.querySelector("[data-near='false']")).toBeTruthy();
    expect(observeMock).toHaveBeenCalledOnce();
  });

  it("activates after an intersecting observer callback", () => {
    render(<Probe />);
    act(() =>
      callback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    );
    expect(document.querySelector("[data-near='true']")).toBeTruthy();
  });

  it("disconnects only once after activation", () => {
    render(<Probe />);
    act(() =>
      callback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    );
    expect(disconnectMock).toHaveBeenCalledOnce();
  });

  it("activates immediately without IntersectionObserver", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(<Probe />);
    expect(document.querySelector("[data-near='true']")).toBeTruthy();
  });

  it("disconnects when unmounted before intersection", () => {
    const view = render(<Probe />);
    view.unmount();
    expect(disconnectMock).toHaveBeenCalledOnce();
  });
});
