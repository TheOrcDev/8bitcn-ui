import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import NotFoundCratePusher from "@/components/ui/8bit/blocks/not-found-crate-pusher";

const REGRESSION_LEVEL = [
  "#########",
  "# . . . #",
  "#       #",
  "# $ $ $ #",
  "#   @   #",
  "#########",
] as const;

const CHANGED_LEVEL = ["#####", "# . #", "# $ #", "# @ #", "#####"] as const;

const REGRESSION_SOLUTION_KEYS = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowLeft",
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowRight",
  "ArrowRight",
  "ArrowRight",
  "ArrowRight",
  "ArrowUp",
  "ArrowUp",
] as const;

const WARM_CIRCUIT_SOLUTION = "URULULLDDRLURDRLURRD";

const SOLUTION_KEYS: Readonly<Record<string, string | undefined>> = {
  D: "ArrowDown",
  L: "ArrowLeft",
  R: "ArrowRight",
  U: "ArrowUp",
};

const CRATE_PUSHER_BOARD_PATTERN = /Crate Pusher .*board|Crate Pusher .*routes/;
const CRATE_PUSHER_GAME_BOARD_PATTERN = /Crate Pusher .*game board/;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function getBoard(): HTMLElement {
  return screen.getByLabelText(CRATE_PUSHER_BOARD_PATTERN);
}

function renderFixedGame() {
  return render(<NotFoundCratePusher level={REGRESSION_LEVEL} />);
}

function startGame(): HTMLElement {
  fireEvent.click(screen.getByRole("button", { name: "START SHIFT" }));

  return getBoard();
}

function solveWithKeys(board: HTMLElement, keys: readonly string[]): void {
  for (const key of keys) {
    fireEvent.keyDown(board, { key });
  }
}

function solveWarmCircuit(board: HTMLElement): void {
  for (const direction of WARM_CIRCUIT_SOLUTION) {
    const key = SOLUTION_KEYS[direction];

    if (!key) {
      throw new Error(`Unsupported solution direction "${direction}".`);
    }

    fireEvent.keyDown(board, { key });
  }
}

describe("NotFoundCratePusher", () => {
  it("renders a useful 404 and the 20-puzzle queue before play", () => {
    render(<NotFoundCratePusher seed={11} />);

    expect(screen.getAllByText("404").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { name: "404: CRATE RESCUE" })
    ).toBeTruthy();
    expect(
      screen.getByText(
        "Push every lost crate onto a portal across 20 randomized routes, or return home now."
      )
    ).toBeTruthy();
    expect(screen.getByRole("button", { name: "START SHIFT" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "RETURN HOME" }).getAttribute("href")
    ).toBe("/");
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PUSHES 0")).toBeTruthy();
    expect(screen.getByText("PUZZLES 20")).toBeTruthy();
    expect(screen.getByText("LEVEL RANDOM")).toBeTruthy();
    expect(screen.getByText("PHASE IDLE")).toBeTruthy();
    expect(screen.queryByRole("application")).toBeNull();
    expect(getBoard().getAttribute("aria-keyshortcuts")).toBe(
      "ArrowUp ArrowRight ArrowDown ArrowLeft W A S D U R"
    );
    expect(screen.getByRole("status").textContent).toContain(
      "20 puzzles ready"
    );
  });

  it("loads a seeded random puzzle only after Start and focuses it", () => {
    render(<NotFoundCratePusher seed={11} />);

    const board = startGame();

    expect(document.activeElement).toBe(board);
    expect(screen.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(screen.getByText("LEVEL INTERMEDIATE")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();
    expect(board.getAttribute("aria-label")).toContain(
      "puzzle 1 of 20, intermediate"
    );
    expect(screen.getByRole("status").textContent).toContain(
      "Warm Circuit. Puzzle 1 of 20. intermediate route loaded."
    );
  });

  it("does not consume fallback randomness during server rendering", () => {
    const randomSpy = vi.spyOn(Math, "random");

    const firstMarkup = renderToString(<NotFoundCratePusher />);
    const secondMarkup = renderToString(<NotFoundCratePusher />);

    expect(randomSpy).not.toHaveBeenCalled();
    expect(firstMarkup).toBe(secondMarkup);
    expect(firstMarkup).toContain("PUZZLES");
    expect(firstMarkup).toContain("20");
  });

  it("focuses a custom game region when Start is selected", () => {
    renderFixedGame();

    const board = startGame();

    expect(document.activeElement).toBe(board);
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();
    expect(screen.getByRole("status").textContent).toBe(
      "Shift started. Player row 5 column 5."
    );
    expect(screen.getByText("PUZZLE CUSTOM")).toBeTruthy();
    expect(screen.getByText("LEVEL CUSTOM")).toBeTruthy();
  });

  it("ignores movement until the custom board is focused and active", () => {
    renderFixedGame();

    const board = getBoard();
    fireEvent.keyDown(document.body, { key: "ArrowUp" });
    board.focus();
    const idleEventWasNotCancelled = fireEvent.keyDown(board, {
      key: "ArrowUp",
    });

    expect(idleEventWasNotCancelled).toBe(true);
    expect(screen.getByText("MOVES 0")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "START SHIFT" }));
    const activeEventWasNotCancelled = fireEvent.keyDown(board, {
      key: "ArrowUp",
    });

    expect(activeEventWasNotCancelled).toBe(false);
    expect(screen.getByText("MOVES 1")).toBeTruthy();
    expect(screen.getByText("PUSHES 1")).toBeTruthy();
  });

  it("gives Arrow/WASD and D-pad input equivalent results", () => {
    const keyboardRender = renderFixedGame();
    const keyboardBoard = startGame();
    fireEvent.keyDown(keyboardBoard, { key: "w" });
    const keyboardAnnouncement = screen.getByRole("status").textContent;
    keyboardRender.unmount();

    renderFixedGame();
    startGame();
    fireEvent.click(screen.getByRole("button", { name: "Move up" }));

    expect(screen.getByRole("status").textContent).toBe(keyboardAnnouncement);
    expect(screen.getByText("MOVES 1")).toBeTruthy();
    expect(screen.getByText("PUSHES 1")).toBeTruthy();
  });

  it("leaves modified, repeated, and unrelated keys untouched", () => {
    renderFixedGame();

    const board = startGame();
    const modifiedWasNotCancelled = fireEvent.keyDown(board, {
      ctrlKey: true,
      key: "ArrowLeft",
    });
    const repeatedWasNotCancelled = fireEvent.keyDown(board, {
      key: "ArrowLeft",
      repeat: true,
    });
    const unrelatedWasNotCancelled = fireEvent.keyDown(board, { key: "x" });

    expect(modifiedWasNotCancelled).toBe(true);
    expect(repeatedWasNotCancelled).toBe(true);
    expect(unrelatedWasNotCancelled).toBe(true);
    expect(screen.getByText("MOVES 0")).toBeTruthy();

    const moveWasNotCancelled = fireEvent.keyDown(board, {
      key: "ArrowLeft",
    });
    expect(moveWasNotCancelled).toBe(false);
    expect(screen.getByText("MOVES 1")).toBeTruthy();
  });

  it("updates the HUD and announcement for Undo and Restart", () => {
    renderFixedGame();

    const board = startGame();
    fireEvent.keyDown(board, { key: "ArrowUp" });

    expect(screen.getByText("MOVES 1")).toBeTruthy();
    expect(screen.getByText("PUSHES 1")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "UNDO" }));

    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PUSHES 0")).toBeTruthy();
    expect(screen.getByRole("status").textContent).toBe("Move undone.");

    fireEvent.keyDown(board, { key: "ArrowUp" });
    fireEvent.click(screen.getByRole("button", { name: "RESTART" }));

    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PUSHES 0")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();
    expect(screen.getByRole("status").textContent).toBe(
      "Shift started. Player row 5 column 5."
    );
  });

  it("keeps Home available before, during, and after custom-level victory", () => {
    renderFixedGame();

    expect(screen.getAllByRole("link", { name: "RETURN HOME" })).toHaveLength(
      1
    );

    const board = startGame();
    expect(screen.getAllByRole("link", { name: "RETURN HOME" })).toHaveLength(
      1
    );

    solveWithKeys(board, REGRESSION_SOLUTION_KEYS);

    expect(screen.getByText("ROUTE RESTORED")).toBeTruthy();
    expect(screen.getByText("MOVES 16")).toBeTruthy();
    expect(screen.getByText("PUSHES 6")).toBeTruthy();
    expect(screen.getByText("PORTALS 3/3")).toBeTruthy();
    expect(screen.getByText("PHASE WON")).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "RETURN HOME" })).toHaveLength(
      2
    );
    expect(screen.getByRole("button", { name: "PLAY AGAIN" })).toBeTruthy();
    expect(
      screen.queryByRole("button", { name: "NEXT RANDOM PUZZLE" })
    ).toBeNull();
  });

  it("restarts the same random puzzle and skips to a different clean one", () => {
    render(<NotFoundCratePusher seed={11} />);

    const firstBoard = startGame();
    fireEvent.keyDown(firstBoard, { key: "ArrowUp" });
    expect(screen.getByText("MOVES 1")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "RESTART" }));
    expect(screen.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "SKIP PUZZLE" }));

    const secondBoard = getBoard();
    expect(document.activeElement).toBe(secondBoard);
    expect(screen.getByText("PUZZLE 18/20")).toBeTruthy();
    expect(screen.getByText("LEVEL EXPERT")).toBeTruthy();
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PUSHES 0")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();
    expect(screen.getByRole("status").textContent).toContain(
      "Signal Stack. Puzzle 18 of 20."
    );
  });

  it("replays the same solved puzzle or advances to the next random one", () => {
    render(<NotFoundCratePusher seed={11} />);

    let board = startGame();
    solveWarmCircuit(board);

    expect(screen.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(screen.getByText("MOVES 20")).toBeTruthy();
    expect(screen.getByText("PUSHES 8")).toBeTruthy();
    expect(screen.getByText("PHASE WON")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "PLAY AGAIN" }));
    expect(screen.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();

    board = getBoard();
    solveWarmCircuit(board);
    fireEvent.click(screen.getByRole("button", { name: "NEXT RANDOM PUZZLE" }));

    expect(document.activeElement).toBe(getBoard());
    expect(screen.getByText("PUZZLE 18/20")).toBeTruthy();
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();
  });

  it("preserves equivalent custom levels and resets changed custom levels", () => {
    const { rerender } = render(
      <NotFoundCratePusher level={[...REGRESSION_LEVEL]} />
    );
    const board = startGame();
    fireEvent.keyDown(board, { key: "ArrowLeft" });

    expect(screen.getByText("MOVES 1")).toBeTruthy();

    rerender(
      <NotFoundCratePusher level={REGRESSION_LEVEL.map((row) => `${row}`)} />
    );

    expect(screen.getByText("MOVES 1")).toBeTruthy();
    expect(screen.getByText("PHASE PLAYING")).toBeTruthy();

    rerender(<NotFoundCratePusher level={CHANGED_LEVEL} />);

    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PUSHES 0")).toBeTruthy();
    expect(screen.getByText("PORTALS 0/1")).toBeTruthy();
    expect(screen.getByText("PHASE IDLE")).toBeTruthy();
    expect(screen.getByRole("button", { name: "START SHIFT" })).toBeTruthy();
  });

  it("preserves a seeded session until the seed changes", () => {
    const { rerender } = render(<NotFoundCratePusher seed={11} />);
    const board = startGame();
    fireEvent.keyDown(board, { key: "ArrowUp" });

    rerender(<NotFoundCratePusher seed={11} />);
    expect(screen.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(screen.getByText("MOVES 1")).toBeTruthy();

    rerender(<NotFoundCratePusher seed={12} />);
    expect(screen.getByText("PUZZLES 20")).toBeTruthy();
    expect(screen.getByText("MOVES 0")).toBeTruthy();
    expect(screen.getByText("PHASE IDLE")).toBeTruthy();
  });

  it("keeps two mounted random games isolated", () => {
    render(
      <>
        <div data-testid="first-game">
          <NotFoundCratePusher seed={11} />
        </div>
        <div data-testid="second-game">
          <NotFoundCratePusher seed={11} />
        </div>
      </>
    );

    const firstGame = within(screen.getByTestId("first-game"));
    const secondGame = within(screen.getByTestId("second-game"));
    fireEvent.click(firstGame.getByRole("button", { name: "START SHIFT" }));
    fireEvent.keyDown(
      firstGame.getByLabelText(CRATE_PUSHER_GAME_BOARD_PATTERN),
      { key: "ArrowUp" }
    );

    expect(firstGame.getByText("MOVES 1")).toBeTruthy();
    expect(firstGame.getByText("PUZZLE 1/20")).toBeTruthy();
    expect(firstGame.getByText("PHASE PLAYING")).toBeTruthy();
    expect(secondGame.getByText("MOVES 0")).toBeTruthy();
    expect(secondGame.getByText("PUZZLES 20")).toBeTruthy();
    expect(secondGame.getByText("PHASE IDLE")).toBeTruthy();
  });
});
