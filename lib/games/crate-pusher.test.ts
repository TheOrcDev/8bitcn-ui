// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
  createCratePusherState,
  type Direction,
  formatCratePusherPosition,
  isCratePusherSolved,
  moveCratePusher,
  type PositionKey,
  parseCratePusherLevel,
  resetCratePusher,
  startCratePusher,
  undoCratePusher,
} from "@/lib/games/crate-pusher";

const REGRESSION_LEVEL = [
  "#########",
  "# . . . #",
  "#       #",
  "# $ $ $ #",
  "#   @   #",
  "#########",
] as const;

const SINGLE_CRATE_LEVEL = [
  "#####",
  "# . #",
  "# $ #",
  "# @ #",
  "#####",
] as const;

function position(row: number, column: number): PositionKey {
  return `${row}:${column}`;
}

function createStartedState(lines: readonly string[] = REGRESSION_LEVEL) {
  const level = parseCratePusherLevel(lines);

  return {
    level,
    state: startCratePusher(createCratePusherState(level)),
  };
}

function applyMoves(
  initialState: ReturnType<typeof createCratePusherState>,
  directions: readonly Direction[]
) {
  let state = initialState;

  for (const direction of directions) {
    state = moveCratePusher(state, direction);
  }

  return state;
}

describe("parseCratePusherLevel", () => {
  it("parses every supported level symbol", () => {
    const level = parseCratePusherLevel([
      "######",
      "# +* #",
      "#$$$ #",
      "# .. #",
      "######",
    ]);

    expect(level.rows).toBe(5);
    expect(level.columns).toBe(6);
    expect(level.initialPlayer).toBe(position(1, 2));
    expect(level.initialCrates).toEqual(
      new Set([position(1, 3), position(2, 1), position(2, 2), position(2, 3)])
    );
    expect(level.portals).toEqual(
      new Set([position(1, 2), position(1, 3), position(3, 2), position(3, 3)])
    );
    expect(level.walls.has(position(0, 0))).toBe(true);

    const playerOnFloor = parseCratePusherLevel(SINGLE_CRATE_LEVEL);
    expect(playerOnFloor.initialPlayer).toBe(position(3, 2));
  });

  it.each([
    {
      expected: "between 4 and 16 rows",
      level: ["####", "####", "####"],
      name: "too few rows",
    },
    {
      expected: "between 4 and 16 rows",
      level: Array.from({ length: 17 }, () => "####"),
      name: "too many rows",
    },
    {
      expected: "between 4 and 16 columns",
      level: ["###", "###", "###", "###"],
      name: "too few columns",
    },
    {
      expected: "between 4 and 16 columns",
      level: Array.from({ length: 4 }, () => "#".repeat(17)),
      name: "too many columns",
    },
    {
      expected: "same length",
      level: ["#####", "#@$.#", "####", "#####"],
      name: "unequal rows",
    },
    {
      expected: 'Unsupported crate pusher tile "x"',
      level: ["#####", "#@x.#", "# $ #", "#####"],
      name: "an unsupported character",
    },
    {
      expected: "exactly one player",
      level: ["#####", "# . #", "# $ #", "#####"],
      name: "a missing player",
    },
    {
      expected: "exactly one player",
      level: ["#####", "#@@ #", "#$. #", "#####"],
      name: "multiple players",
    },
    {
      expected: "at least one crate",
      level: ["#####", "# @ #", "# . #", "#####"],
      name: "zero crates",
    },
    {
      expected: "equal crate and portal counts",
      level: ["#####", "# @ #", "# $ #", "#.. #", "#####"],
      name: "unequal crate and portal counts",
    },
    {
      expected: "perimeter must be walls",
      level: ["#####", "# @ #", "#$. #", "## ##"],
      name: "an open perimeter",
    },
  ])("rejects $name", ({ expected, level }) => {
    expect(() => parseCratePusherLevel(level)).toThrow(expected);
  });
});

describe("crate pusher movement", () => {
  it("starts a shift and walks onto floor", () => {
    const { state } = createStartedState();
    const walked = moveCratePusher(state, "left");

    expect(state.phase).toBe("playing");
    expect(state.announcement).toBe("Shift started. Player row 5 column 5.");
    expect(walked.player).toBe(position(4, 3));
    expect(walked.moves).toBe(1);
    expect(walked.pushes).toBe(0);
    expect(walked.history).toHaveLength(1);
    expect(walked.crates).toBe(state.crates);
    expect(walked.announcement).toBe(
      "Moved left. Player row 5 column 4. Portals 0 of 3."
    );
  });

  it("rejects wall and out-of-bounds movement", () => {
    const { state } = createStartedState();
    const wallBlocked = moveCratePusher(state, "down");
    const edgeState = {
      ...state,
      player: position(0, 1),
    };
    const edgeBlocked = moveCratePusher(edgeState, "up");

    expect(wallBlocked.player).toBe(state.player);
    expect(wallBlocked.moves).toBe(0);
    expect(wallBlocked.history).toBe(state.history);
    expect(wallBlocked.announcement).toBe("Blocked by a wall.");
    expect(edgeBlocked.moves).toBe(0);
    expect(edgeBlocked.announcement).toBe("Blocked by the edge of the board.");
  });

  it("pushes a crate without mutating prior sets", () => {
    const { level, state } = createStartedState();
    const initialCrates = new Set(state.crates);
    const pushed = moveCratePusher(state, "up");

    expect(pushed.player).toBe(position(3, 4));
    expect(pushed.crates.has(position(2, 4))).toBe(true);
    expect(pushed.crates.has(position(3, 4))).toBe(false);
    expect(pushed.moves).toBe(1);
    expect(pushed.pushes).toBe(1);
    expect(pushed.crates).not.toBe(state.crates);
    expect(state.crates).toEqual(initialCrates);
    expect(level.initialCrates).toEqual(initialCrates);
  });

  it("rejects pushing a crate into a wall or another crate", () => {
    const intoWall = createStartedState([
      "#####",
      "#$@ #",
      "# . #",
      "#####",
    ]).state;
    const intoCrate = createStartedState([
      "######",
      "# .. #",
      "# $$@#",
      "#    #",
      "######",
    ]).state;

    const wallBlocked = moveCratePusher(intoWall, "left");
    const crateBlocked = moveCratePusher(intoCrate, "left");

    expect(wallBlocked.moves).toBe(0);
    expect(wallBlocked.pushes).toBe(0);
    expect(wallBlocked.announcement).toBe("That crate cannot be pushed.");
    expect(crateBlocked.moves).toBe(0);
    expect(crateBlocked.pushes).toBe(0);
    expect(crateBlocked.announcement).toBe("That crate cannot be pushed.");
  });

  it("moves crates onto and off portals", () => {
    const ontoPortal = createStartedState(SINGLE_CRATE_LEVEL).state;
    const won = moveCratePusher(ontoPortal, "up");
    const offPortal = createStartedState([
      "#######",
      "#     #",
      "# * . #",
      "# @ $ #",
      "#######",
    ]).state;
    const movedOff = moveCratePusher(offPortal, "up");

    expect(won.crates.has(position(1, 2))).toBe(true);
    expect(won.phase).toBe("won");
    expect(movedOff.crates.has(position(2, 2))).toBe(false);
    expect(movedOff.crates.has(position(1, 2))).toBe(true);
    expect(movedOff.phase).toBe("playing");
  });

  it("does not change counters, history, or positions for invalid input", () => {
    const { state } = createStartedState();
    const blocked = moveCratePusher(state, "down");

    expect(blocked.player).toBe(state.player);
    expect(blocked.crates).toBe(state.crates);
    expect(blocked.moves).toBe(state.moves);
    expect(blocked.pushes).toBe(state.pushes);
    expect(blocked.history).toBe(state.history);
  });

  it("freezes movement after victory", () => {
    const { state } = createStartedState(SINGLE_CRATE_LEVEL);
    const won = moveCratePusher(state, "up");

    expect(moveCratePusher(won, "left")).toBe(won);
  });
});

describe("crate pusher history and completion", () => {
  it("undoes a walk, a push, and a winning move", () => {
    const defaultStarted = createStartedState().state;
    const walked = moveCratePusher(defaultStarted, "left");
    const walkUndone = undoCratePusher(walked);
    const pushed = moveCratePusher(defaultStarted, "up");
    const pushUndone = undoCratePusher(pushed);
    const winningStarted = createStartedState(SINGLE_CRATE_LEVEL).state;
    const won = moveCratePusher(winningStarted, "up");
    const winUndone = undoCratePusher(won);

    expect(walkUndone.player).toBe(defaultStarted.player);
    expect(walkUndone.moves).toBe(0);
    expect(pushUndone.crates).toEqual(defaultStarted.crates);
    expect(pushUndone.pushes).toBe(0);
    expect(winUndone.phase).toBe("playing");
    expect(winUndone.crates).toEqual(winningStarted.crates);
    expect(winUndone.announcement).toBe("Move undone.");
  });

  it("reports an empty undo without changing game data", () => {
    const { state } = createStartedState();
    const undone = undoCratePusher(state);

    expect(undone.player).toBe(state.player);
    expect(undone.crates).toBe(state.crates);
    expect(undone.history).toBe(state.history);
    expect(undone.announcement).toBe("Nothing to undo.");
  });

  it("resets the exact level and clears counters and history", () => {
    const { level, state } = createStartedState();
    const moved = moveCratePusher(state, "up");
    const reset = resetCratePusher(level);

    expect(moved.moves).toBe(1);
    expect(reset.player).toBe(level.initialPlayer);
    expect(reset.crates).toEqual(level.initialCrates);
    expect(reset.moves).toBe(0);
    expect(reset.pushes).toBe(0);
    expect(reset.history).toHaveLength(0);
    expect(reset.phase).toBe("idle");
  });

  it("caps history at 128 successful moves", () => {
    const { state } = createStartedState();
    let moved = state;

    for (let move = 0; move < 130; move += 1) {
      moved = moveCratePusher(moved, move % 2 === 0 ? "left" : "right");
    }

    expect(moved.moves).toBe(130);
    expect(moved.history).toHaveLength(128);
    expect(moved.history[0]?.moves).toBe(2);
  });

  it("solves the regression board with the exact 16-move sequence", () => {
    const { level, state } = createStartedState();
    const solution: readonly Direction[] = [
      "up",
      "up",
      "down",
      "down",
      "left",
      "left",
      "up",
      "up",
      "down",
      "down",
      "right",
      "right",
      "right",
      "right",
      "up",
      "up",
    ];
    const solved = applyMoves(state, solution);

    expect(isCratePusherSolved(solved, level)).toBe(true);
    expect(solved.phase).toBe("won");
    expect(solved.moves).toBe(16);
    expect(solved.pushes).toBe(6);
    expect(solved.announcement).toBe(
      "Route restored in 16 moves and 6 pushes."
    );
  });
});

describe("formatCratePusherPosition", () => {
  it("formats zero-based position keys as one-based row and column text", () => {
    expect(formatCratePusherPosition(position(4, 4))).toBe("row 5 column 5");
  });

  it("rejects malformed position keys", () => {
    const malformed = "not-a-position" as PositionKey;

    expect(() => formatCratePusherPosition(malformed)).toThrow(
      "Invalid crate pusher position"
    );
  });
});
