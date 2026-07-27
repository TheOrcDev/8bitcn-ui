import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ComponentProps, StrictMode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { NotFoundBrickBreaker } from "@/components/ui/8bit/blocks/not-found-brick-breaker";

const ERROR_HEADING_PATTERN = /ERROR 404\s*BREAK OUT OF HERE/;

vi.mock("next/link", () => ({
  default: ({ children, ...props }: ComponentProps<"a">) => (
    <a {...props}>{children}</a>
  ),
}));

function createCanvasContext(): CanvasRenderingContext2D {
  return {
    arc: vi.fn(),
    beginPath: vi.fn(),
    clearRect: vi.fn(),
    fill: vi.fn(),
    fillRect: vi.fn(),
    imageSmoothingEnabled: true,
    lineWidth: 1,
    restore: vi.fn(),
    save: vi.fn(),
    setTransform: vi.fn(),
    strokeRect: vi.fn(),
  } as unknown as CanvasRenderingContext2D;
}

let canvasContext: CanvasRenderingContext2D;
let frameCallbacks: Map<number, FrameRequestCallback>;
let nextFrameId: number;

function runNextFrame(timestamp: number): void {
  const nextFrame = frameCallbacks.entries().next().value as
    | [number, FrameRequestCallback]
    | undefined;
  if (!nextFrame) {
    throw new Error("Expected a scheduled animation frame");
  }

  frameCallbacks.delete(nextFrame[0]);
  nextFrame[1](timestamp);
}

beforeEach(() => {
  canvasContext = createCanvasContext();
  frameCallbacks = new Map();
  nextFrameId = 0;
  Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
    configurable: true,
    value: vi.fn(() => canvasContext),
  });
  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn((callback: FrameRequestCallback) => {
      nextFrameId += 1;
      frameCallbacks.set(nextFrameId, callback);
      return nextFrameId;
    })
  );
  vi.stubGlobal(
    "cancelAnimationFrame",
    vi.fn((frameId: number) => {
      frameCallbacks.delete(frameId);
    })
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("NotFoundBrickBreaker", () => {
  it("renders the complete non-canvas 404 experience before play", () => {
    const view = render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");

    expect(
      screen.getByRole("heading", {
        name: ERROR_HEADING_PATTERN,
      })
    ).toBeTruthy();
    expect(screen.getByText("ERROR 404")).toBeTruthy();
    expect(screen.getByText("LOST ROUTE")).toBeTruthy();
    expect(screen.getByText("SCORE 000")).toBeTruthy();
    expect(screen.getByText("LIVES 3")).toBeTruthy();
    expect(screen.getByText("WAITING")).toBeTruthy();
    expect(screen.getByRole("button", { name: "START GAME" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "RETURN HOME" }).getAttribute("href")
    ).toBe("/");
    expect(playfield.getAttribute("aria-keyshortcuts")).toBe(
      "ArrowLeft ArrowRight A D Space P Escape R"
    );
    expect(view.container.querySelector('[role="application"]')).toBeNull();
  });

  it("focuses the playfield on start and scopes keyboard handling to it", () => {
    const outsideInput = document.createElement("input");
    document.body.append(outsideInput);
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");

    expect(fireEvent.keyDown(outsideInput, { key: "ArrowLeft" })).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));

    expect(document.activeElement).toBe(playfield);
    expect(screen.getByText("READY")).toBeTruthy();
    expect(screen.getByRole("button", { name: "LAUNCH" })).toBeTruthy();
  });

  it("advances one pre-play phase per native playfield activation", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");

    fireEvent.click(playfield);
    expect(screen.getByText("READY")).toBeTruthy();
    expect(frameCallbacks.size).toBe(0);

    fireEvent.click(playfield);
    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);
  });

  it("advances exactly one phase for each Space activation", async () => {
    const user = userEvent.setup();
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    playfield.focus();

    await user.keyboard(" ");
    expect(screen.getByText("READY")).toBeTruthy();
    expect(frameCallbacks.size).toBe(0);

    await user.keyboard(" ");
    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);
  });

  it("does not pause after a ready-state pointer launch clicks", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));

    fireEvent.pointerDown(playfield, {
      button: 0,
      clientX: 240,
      pointerId: 7,
      pointerType: "mouse",
    });
    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);

    fireEvent.click(playfield);
    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);
  });

  it("suppresses repeated phase actions without toggling twice", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));

    expect(fireEvent.keyDown(playfield, { key: "p", repeat: true })).toBe(
      false
    );
    expect(screen.getByText("PLAYING")).toBeTruthy();
  });

  it("leaves modified movement shortcuts to the browser", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    const modifiers = [
      { altKey: true },
      { ctrlKey: true },
      { metaKey: true },
      { shiftKey: true },
    ];

    for (const modifier of modifiers) {
      expect(
        fireEvent.keyDown(playfield, { key: "ArrowLeft", ...modifier })
      ).toBe(true);
      expect(
        fireEvent.keyUp(playfield, { key: "ArrowLeft", ...modifier })
      ).toBe(true);
    }
  });

  it("starts one loop, pauses it, and resumes with a fresh frame", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.keyDown(playfield, { key: " " });

    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);

    fireEvent.keyDown(playfield, { key: "p" });
    expect(screen.getByText("PAUSED")).toBeTruthy();
    expect(frameCallbacks.size).toBe(0);

    fireEvent.keyDown(playfield, { key: "p" });
    expect(screen.getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);
  });

  it("maps pointer positions into logical board coordinates at any width", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 260,
          height: 160,
          left: 100,
          right: 340,
          top: 100,
          width: 240,
          x: 100,
          y: 100,
        }) as DOMRect,
    });

    fireEvent.pointerMove(playfield, {
      clientX: 220,
      pointerId: 1,
      pointerType: "mouse",
    });
    let paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(paddleCalls.at(-1)?.[0]).toBe(204);

    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 640,
          height: 640,
          left: 0,
          right: 960,
          top: 0,
          width: 960,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.pointerMove(playfield, {
      clientX: 960,
      pointerId: 1,
      pointerType: "mouse",
    });
    paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(paddleCalls.at(-1)?.[0]).toBe(408);
  });

  it("clears uncaptured pointer hover when the pointer leaves", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 320,
          height: 320,
          left: 0,
          right: 480,
          top: 0,
          width: 480,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.pointerMove(playfield, {
      clientX: 0,
      pointerId: 1,
      pointerType: "mouse",
    });
    fireEvent.pointerLeave(playfield, {
      pointerId: 1,
      pointerType: "mouse",
    });
    vi.mocked(canvasContext.fillRect).mockClear();

    runNextFrame(0);
    runNextFrame(50);

    const paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(paddleCalls.at(-1)?.[0]).toBe(204);
  });

  it("keeps captured drag control across pointer leave and releases it", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    const capturedPointers = new Set<number>();
    const setPointerCapture = vi.fn((pointerId: number) => {
      capturedPointers.add(pointerId);
    });
    const releasePointerCapture = vi.fn((pointerId: number) => {
      capturedPointers.delete(pointerId);
    });
    Object.defineProperties(playfield, {
      getBoundingClientRect: {
        configurable: true,
        value: () =>
          ({
            bottom: 320,
            height: 320,
            left: 0,
            right: 480,
            top: 0,
            width: 480,
            x: 0,
            y: 0,
          }) as DOMRect,
      },
      hasPointerCapture: {
        configurable: true,
        value: (pointerId: number) => capturedPointers.has(pointerId),
      },
      releasePointerCapture: {
        configurable: true,
        value: releasePointerCapture,
      },
      setPointerCapture: {
        configurable: true,
        value: setPointerCapture,
      },
    });
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));

    fireEvent.pointerDown(playfield, {
      button: 0,
      clientX: 0,
      pointerId: 7,
      pointerType: "touch",
    });
    fireEvent.pointerLeave(playfield, {
      pointerId: 7,
      pointerType: "touch",
    });
    vi.mocked(canvasContext.fillRect).mockClear();
    runNextFrame(0);
    runNextFrame(50);

    const paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(setPointerCapture).toHaveBeenCalledWith(7);
    expect(paddleCalls.at(-1)?.[0]).toBe(0);

    fireEvent.pointerUp(playfield, {
      button: 0,
      pointerId: 7,
      pointerType: "touch",
    });
    expect(releasePointerCapture).toHaveBeenCalledWith(7);
  });

  it("hands control from pointer hover to the keyboard immediately", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 320,
          height: 320,
          left: 0,
          right: 480,
          top: 0,
          width: 480,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.pointerMove(playfield, {
      clientX: 0,
      pointerId: 1,
      pointerType: "mouse",
    });
    vi.mocked(canvasContext.fillRect).mockClear();

    fireEvent.keyDown(playfield, { key: "ArrowRight" });
    runNextFrame(0);
    runNextFrame(50);
    fireEvent.keyUp(playfield, { key: "ArrowRight" });

    const paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(paddleCalls.at(-1)?.[0]).toBeGreaterThan(204);
  });

  it("hands control from pointer hover to an explicit direction button", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 320,
          height: 320,
          left: 0,
          right: 480,
          top: 0,
          width: 480,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.pointerMove(playfield, {
      clientX: 0,
      pointerId: 1,
      pointerType: "mouse",
    });
    vi.mocked(canvasContext.fillRect).mockClear();

    const rightButton = screen.getByRole("button", {
      name: "Move paddle right",
    });
    fireEvent.pointerDown(rightButton, { button: 0, pointerId: 9 });
    runNextFrame(0);
    runNextFrame(50);
    fireEvent.pointerUp(rightButton, { button: 0, pointerId: 9 });

    const paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    expect(paddleCalls.at(-1)?.[0]).toBeGreaterThan(204);
  });

  it("uses the same held movement for keyboard and explicit controls", () => {
    render(<NotFoundBrickBreaker />);
    let playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    vi.mocked(canvasContext.fillRect).mockClear();

    fireEvent.keyDown(playfield, { key: "ArrowLeft" });
    runNextFrame(0);
    runNextFrame(50);
    fireEvent.keyUp(playfield, { key: "ArrowLeft" });
    let paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    const keyboardPaddleX = paddleCalls.at(-1)?.[0];

    cleanup();
    frameCallbacks.clear();
    canvasContext = createCanvasContext();
    render(<NotFoundBrickBreaker />);
    playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    vi.mocked(canvasContext.fillRect).mockClear();

    const leftButton = screen.getByRole("button", {
      name: "Move paddle left",
    });
    expect(fireEvent.pointerDown(leftButton, { button: 0, pointerId: 9 })).toBe(
      false
    );
    runNextFrame(0);
    runNextFrame(50);
    fireEvent.pointerUp(leftButton, { button: 0, pointerId: 9 });
    paddleCalls = vi
      .mocked(canvasContext.fillRect)
      .mock.calls.filter((call) => call[2] === 72 && call[3] === 8);
    const explicitControlPaddleX = paddleCalls.at(-1)?.[0];

    expect(keyboardPaddleX).toBeLessThan(204);
    expect(explicitControlPaddleX).toBe(keyboardPaddleX);
    expect(document.activeElement).toBe(playfield);
  });

  it("pauses and clears the loop when the tab becomes hidden", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.keyDown(playfield, { key: " " });

    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      value: "hidden",
    });
    fireEvent(document, new Event("visibilitychange"));

    expect(screen.getByText("PAUSED")).toBeTruthy();
    expect(frameCallbacks.size).toBe(0);
    expect(
      screen.getByText("Game paused because this tab is hidden.")
    ).toBeTruthy();

    Object.defineProperty(document, "visibilityState", {
      configurable: true,
      value: "visible",
    });
  });

  it("keeps mounted games on independent loops and inputs", () => {
    render(
      <>
        <NotFoundBrickBreaker data-testid="first-game" />
        <NotFoundBrickBreaker data-testid="second-game" />
      </>
    );
    const firstGame = screen.getByTestId("first-game");
    const secondGame = screen.getByTestId("second-game");

    fireEvent.click(
      within(firstGame).getByRole("button", { name: "START GAME" })
    );
    fireEvent.click(
      within(secondGame).getByRole("button", { name: "START GAME" })
    );
    fireEvent.click(within(firstGame).getByRole("button", { name: "LAUNCH" }));
    fireEvent.click(within(secondGame).getByRole("button", { name: "LAUNCH" }));
    expect(frameCallbacks.size).toBe(2);

    fireEvent.keyDown(
      within(firstGame).getByTestId("brick-breaker-playfield"),
      { key: "p" }
    );

    expect(within(firstGame).getByText("PAUSED")).toBeTruthy();
    expect(within(secondGame).getByText("PLAYING")).toBeTruthy();
    expect(frameCallbacks.size).toBe(1);
  });

  it("never retains duplicate loops through Strict Mode cleanup", () => {
    const view = render(
      <StrictMode>
        <NotFoundBrickBreaker />
      </StrictMode>
    );
    const playfield = screen.getByTestId("brick-breaker-playfield");
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.keyDown(playfield, { key: " " });

    expect(frameCallbacks.size).toBe(1);
    view.unmount();
    expect(frameCallbacks.size).toBe(0);
  });

  it("keeps reduced-motion mode free of automatic or decorative motion", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn(
        () =>
          ({
            addEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
            matches: true,
            media: "(prefers-reduced-motion: reduce)",
            onchange: null,
            removeEventListener: vi.fn(),
          }) as unknown as MediaQueryList
      )
    );
    const view = render(<NotFoundBrickBreaker />);

    expect(requestAnimationFrame).not.toHaveBeenCalled();
    expect(
      view.container.querySelector(
        "[class*='animate-'], [data-particle], [data-flash]"
      )
    ).toBeNull();
  });

  it("offers Play Again and Home after all three balls are lost", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 320,
          height: 320,
          left: 0,
          right: 480,
          top: 0,
          width: 480,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    let timestamp = 0;

    for (let life = 3; life > 0; life -= 1) {
      fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
      let frames = 0;

      while (frameCallbacks.size > 0 && frames < 300) {
        timestamp += 50;
        act(() => runNextFrame(timestamp));
        const arcCalls = vi.mocked(canvasContext.arc).mock.calls;
        const ballX = Number(arcCalls.at(-1)?.[0] ?? 240);
        fireEvent.pointerMove(playfield, {
          clientX: ballX < 240 ? 480 : 0,
          pointerId: 12,
          pointerType: "mouse",
        });
        frames += 1;
      }

      expect(frames).toBeLessThan(300);
    }

    expect(screen.getByText("NO SIGNAL")).toBeTruthy();
    expect(screen.getByRole("button", { name: "PLAY AGAIN" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "RETURN HOME" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "PLAY AGAIN" }));
    expect(screen.getByText("READY")).toBeTruthy();
    expect(screen.getByText("LIVES 3")).toBeTruthy();
    expect(screen.getByText("SCORE 000")).toBeTruthy();
  });

  it("reaches ROUTE RESTORED and score 404 through the live loop", () => {
    render(<NotFoundBrickBreaker />);
    const playfield = screen.getByTestId("brick-breaker-playfield");
    Object.defineProperty(playfield, "getBoundingClientRect", {
      configurable: true,
      value: () =>
        ({
          bottom: 320,
          height: 320,
          left: 0,
          right: 480,
          top: 0,
          width: 480,
          x: 0,
          y: 0,
        }) as DOMRect,
    });
    fireEvent.click(screen.getByRole("button", { name: "START GAME" }));
    fireEvent.click(screen.getByRole("button", { name: "LAUNCH" }));
    let frames = 0;
    let timestamp = 0;

    while (!screen.queryByText("ROUTE RESTORED") && frames < 5000) {
      if (frameCallbacks.size === 0) {
        const relaunch = screen.queryByRole("button", { name: "LAUNCH" });
        if (!relaunch) {
          break;
        }
        fireEvent.click(relaunch);
      }

      timestamp += 50;
      act(() => runNextFrame(timestamp));
      const arcCalls = vi.mocked(canvasContext.arc).mock.calls;
      const ballX = Number(arcCalls.at(-1)?.[0] ?? 240);
      fireEvent.pointerMove(playfield, {
        clientX: ballX + Math.sin(frames / 3) * 32,
        pointerId: 14,
        pointerType: "mouse",
      });
      frames += 1;
    }

    expect(frames).toBeLessThan(2400);
    expect(screen.getByText("ROUTE RESTORED")).toBeTruthy();
    expect(screen.getByText("SCORE 404")).toBeTruthy();
    expect(frameCallbacks.size).toBe(0);
    expect(screen.getByRole("button", { name: "PLAY AGAIN" })).toBeTruthy();
  });
});
