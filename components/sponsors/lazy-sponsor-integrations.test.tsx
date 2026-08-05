import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mythicRenderMock = vi.fn();
const claimRenderMock = vi.fn();

vi.mock("../mythic-sponsor", () => ({
  default: (props: Record<string, unknown>) => {
    mythicRenderMock(props);
    return <div data-testid="loaded-mythic" />;
  },
}));

vi.mock("../sponsor-claim", () => ({
  default: (props: Record<string, unknown>) => {
    claimRenderMock(props);
    return <div data-testid={`loaded-claim-${String(props.tier)}`} />;
  },
}));

import { LazyMythicSponsor } from "./lazy-mythic-sponsor";
import { LazySponsorClaim } from "./lazy-sponsor-claim";

const observerCallbacks: IntersectionObserverCallback[] = [];
const disconnectMock = vi.fn();

function activateAllObservers() {
  for (const callback of observerCallbacks) {
    callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver
    );
  }
}

beforeEach(() => {
  class Observer {
    constructor(callback: IntersectionObserverCallback) {
      observerCallbacks.push(callback);
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
  claimRenderMock.mockReset();
  disconnectMock.mockReset();
  mythicRenderMock.mockReset();
  observerCallbacks.length = 0;
  vi.unstubAllGlobals();
});

describe("lazy sponsor integrations", () => {
  it("keeps heavy children unloaded and preserves the mythic fallback", () => {
    render(
      <LazyMythicSponsor
        alt="Shadcn Blocks"
        className="p-4"
        height={250}
        src="/sponsors/shadcn-blocks.svg"
        width={250}
      />
    );

    const fallback = screen.getByRole("img", { name: "Shadcn Blocks" });
    expect(fallback.getAttribute("height")).toBe("250");
    expect(fallback.getAttribute("width")).toBe("250");
    expect(fallback.className).toContain("p-4");
    expect(screen.queryByTestId("loaded-mythic")).toBeNull();
    expect(mythicRenderMock).not.toHaveBeenCalled();
  });

  it("loads the foil component once after intersection", async () => {
    render(
      <LazyMythicSponsor
        alt="Shadcn Blocks"
        className="p-4"
        height={250}
        src="/sponsors/shadcn-blocks.svg"
        width={250}
      />
    );
    await act(async () => activateAllObservers());

    await waitFor(() =>
      expect(screen.getByTestId("loaded-mythic")).toBeTruthy()
    );
    expect(mythicRenderMock).toHaveBeenCalledOnce();
    expect(mythicRenderMock).toHaveBeenCalledWith(
      expect.objectContaining({
        className: "p-4",
        height: 250,
        src: "/sponsors/shadcn-blocks.svg",
        width: 250,
      })
    );
  });

  it("preserves every checkout tier and prop after loading", async () => {
    const tiers = ["mythic", "legendary", "regular"] as const;
    render(
      tiers.map((tier) => (
        <LazySponsorClaim
          className="cursor-pointer"
          key={tier}
          labelClassName={`size-${tier}`}
          text="Be here"
          textClassName="retro text-xs"
          tier={tier}
        />
      ))
    );

    expect(screen.getAllByText("Be here")).toHaveLength(3);
    expect(claimRenderMock).not.toHaveBeenCalled();
    await act(async () => activateAllObservers());

    await waitFor(() => expect(claimRenderMock).toHaveBeenCalledTimes(3));
    for (const tier of tiers) {
      expect(claimRenderMock).toHaveBeenCalledWith({
        className: "cursor-pointer",
        labelClassName: `size-${tier}`,
        text: "Be here",
        textClassName: "retro text-xs",
        tier,
      });
    }
  });

  it("loads integrations immediately without IntersectionObserver", async () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(
      <>
        <LazyMythicSponsor
          alt="Shadcn Blocks"
          src="/sponsors/shadcn-blocks.svg"
        />
        <LazySponsorClaim text="Be here" tier="regular" />
      </>
    );

    await waitFor(() => expect(mythicRenderMock).toHaveBeenCalledOnce());
    await waitFor(() => expect(claimRenderMock).toHaveBeenCalledOnce());
  });
});
