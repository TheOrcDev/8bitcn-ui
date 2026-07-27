// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
  createCratePusherState,
  type Direction,
  isCratePusherSolved,
  moveCratePusher,
  parseCratePusherLevel,
  startCratePusher,
} from "@/lib/games/crate-pusher";
import {
  CRATE_PUSHER_LEVELS,
  createCratePusherShuffleBag,
  drawCratePusherShuffleBag,
} from "@/lib/games/crate-pusher-levels";

interface VerifiedSolution {
  readonly expectedMoves: number;
  readonly expectedPushes: number;
  readonly id: string;
  readonly moves: string;
}

const SOLUTION_DIRECTIONS: Readonly<Record<string, Direction | undefined>> = {
  D: "down",
  L: "left",
  R: "right",
  U: "up",
};

const VERIFIED_SOLUTIONS: readonly VerifiedSolution[] = [
  {
    expectedMoves: 20,
    expectedPushes: 8,
    id: "warm-circuit",
    moves: "URULULLDDRLURDRLURRD",
  },
  {
    expectedMoves: 28,
    expectedPushes: 6,
    id: "side-step",
    moves: "ULLDDLDRRRUULULLLDDUURRDDLDR",
  },
  {
    expectedMoves: 38,
    expectedPushes: 7,
    id: "relay-room",
    moves: "UUURRRRDDDLLULLDRURUDRDDLULUUURDLDDRUU",
  },
  {
    expectedMoves: 48,
    expectedPushes: 8,
    id: "corner-signal",
    moves: "RDDDLLLLUULUURDLDDDRRRURRUULDDRDLLLDLLUURDULUURD",
  },
  {
    expectedMoves: 46,
    expectedPushes: 10,
    id: "split-shift",
    moves: "UUURRRDRDDDLLUURUULLDLDDRDRDLUULUUURRRDDLDDRDL",
  },
  {
    expectedMoves: 89,
    expectedPushes: 9,
    id: "long-detour",
    moves:
      "LUUUUURRRDRULLLDDDLDDRULUUUURRRRRDULLLLDDLDDRULUUURRRDRRDUULLLLDLDDRULUURRRDRRDDUULLDRURD",
  },
  {
    expectedMoves: 47,
    expectedPushes: 10,
    id: "cross-current",
    moves: "DDDDRRRULUULLURDRDDRUDDRRUUUUULLLDDURRDLLDULULD",
  },
  {
    expectedMoves: 62,
    expectedPushes: 11,
    id: "crate-relay",
    moves: "LLDDRULLLLDRURRDRRRUULDLLURDLLDURRRDLLLDRRRLLLLDRUURRRRDLLLLDR",
  },
  {
    expectedMoves: 68,
    expectedPushes: 12,
    id: "switchback",
    moves:
      "RUULLDLDDDRLURDDRRUUULULLDDDRRURUULUDRDDLDDRULUURUUULDRDDLDDRULUULUR",
  },
  {
    expectedMoves: 122,
    expectedPushes: 16,
    id: "deep-storage",
    moves:
      "DDRRRUULRDDLLULUUDDDRRRUULLULUDRDDLURRRUUUULLDLRURRDDDDLLLUDRRRUUUULLDLLRRURRDDDDLLULULUULDDRRDDRRRUUUULLDLDLLDUUURDRDLULD",
  },
  {
    expectedMoves: 49,
    expectedPushes: 11,
    id: "backtrack-bay",
    moves: "ULRDDLLLDURRRUULDUULDRDRDDDLLLURRRUULDUULDRDDULLL",
  },
  {
    expectedMoves: 50,
    expectedPushes: 12,
    id: "narrow-orbit",
    moves: "LRDLURUDDLLRUUUURRDLDDDLLLRRUULDUUURDLDDRDLURRULLL",
  },
  {
    expectedMoves: 82,
    expectedPushes: 13,
    id: "forklift-loop",
    moves:
      "LLDDDUUURRDLULLDDDRDURRUDLLULUURDLDDDDRUULUUURRRRDLULLDDLDDDRRLULUURDLDDRRRLLLUURD",
  },
  {
    expectedMoves: 73,
    expectedPushes: 13,
    id: "wall-circuit",
    moves:
      "LLDDRUDRRRUDLLLUUDDRRURULDDLLUUUDDDRRUURUDLLRDDLLULUURURRRDDLLLUULURDRRRR",
  },
  {
    expectedMoves: 95,
    expectedPushes: 13,
    id: "long-haul",
    moves:
      "ULUULUURDLDLLDLLUURLDDDDRRRDRRRULUULUURDLLLDLLUURRDRRDDRDLUUULLURDRDDDLRUUULURDDDDLLULLDDRUURUL",
  },
  {
    expectedMoves: 66,
    expectedPushes: 14,
    id: "fourfold-gate",
    moves: "RURRURUDLDLLDRULUDRRURRDDLULLDRULLUUDDRRRUDRDDLULUUULLLURDRRRLLLUR",
  },
  {
    expectedMoves: 49,
    expectedPushes: 11,
    id: "packed-route",
    moves: "DLLULLDLDRUURRULDRDRRULLUULLLDDDRRURRDDDLLUURURDD",
  },
  {
    expectedMoves: 66,
    expectedPushes: 12,
    id: "signal-stack",
    moves: "ULLLULRURDUULLDRDDDDRRULLUURDUULLDRDRDUULLDUULLDDDRRUULRDDRUUULLLD",
  },
  {
    expectedMoves: 63,
    expectedPushes: 13,
    id: "cargo-spiral",
    moves: "LDLRURDLLLDLDDDRRRUULDLLUURURRRDULLLDDRDRDLURRRULDLLLRDLURRRULL",
  },
  {
    expectedMoves: 61,
    expectedPushes: 12,
    id: "final-dispatch",
    moves: "DUULLDRDRDULUURRRDDDDLLLDLLURRRUULUURRRDDDLRUUULLLDDRDULUURDR",
  },
];

function decodeSolution(solution: string): readonly Direction[] {
  return [...solution].map((symbol) => {
    const direction = SOLUTION_DIRECTIONS[symbol];

    if (!direction) {
      throw new Error(`Unsupported solution direction "${symbol}".`);
    }

    return direction;
  });
}

function drawLevelIndexes(seed: number, drawCount: number): readonly number[] {
  let shuffleBag = createCratePusherShuffleBag(seed);
  const indexes: number[] = [];

  for (let drawIndex = 0; drawIndex < drawCount; drawIndex += 1) {
    const draw = drawCratePusherShuffleBag(shuffleBag);

    indexes.push(draw.levelIndex);
    shuffleBag = draw.shuffleBag;
  }

  return indexes;
}

describe("Crate Pusher level catalog", () => {
  it("ships 20 unique, immutable, nontrivial levels", () => {
    const ids = new Set(CRATE_PUSHER_LEVELS.map((level) => level.id));
    const signatures = new Set(
      CRATE_PUSHER_LEVELS.map((level) => level.lines.join("\n"))
    );

    expect(CRATE_PUSHER_LEVELS).toHaveLength(20);
    expect(ids.size).toBe(20);
    expect(signatures.size).toBe(20);
    expect(Object.isFrozen(CRATE_PUSHER_LEVELS)).toBe(true);

    for (const levelDefinition of CRATE_PUSHER_LEVELS) {
      const level = parseCratePusherLevel(levelDefinition.lines);

      expect(Object.isFrozen(levelDefinition)).toBe(true);
      expect(Object.isFrozen(levelDefinition.lines)).toBe(true);
      expect(level.rows).toBeGreaterThanOrEqual(7);
      expect(level.rows).toBeLessThanOrEqual(9);
      expect(level.columns).toBeGreaterThanOrEqual(7);
      expect(level.columns).toBeLessThanOrEqual(9);
      expect(level.initialCrates.size).toBeGreaterThanOrEqual(2);
      expect(level.initialCrates.size).toBeLessThanOrEqual(4);
      expect(isCratePusherSolved({ crates: level.initialCrates }, level)).toBe(
        false
      );
    }
  });

  it("contains intermediate, advanced, and expert routes", () => {
    const distribution = CRATE_PUSHER_LEVELS.reduce(
      (counts, level) => {
        counts[level.difficulty] += 1;
        return counts;
      },
      { advanced: 0, expert: 0, intermediate: 0 }
    );

    expect(distribution).toEqual({
      advanced: 11,
      expert: 5,
      intermediate: 4,
    });
  });

  it.each(VERIFIED_SOLUTIONS)("replays the verified solution for $id", ({
    expectedMoves,
    expectedPushes,
    id,
    moves,
  }) => {
    const definition = CRATE_PUSHER_LEVELS.find((level) => level.id === id);

    expect(definition).toBeDefined();

    if (!definition) {
      return;
    }

    const level = parseCratePusherLevel(definition.lines);
    let state = startCratePusher(createCratePusherState(level));

    for (const direction of decodeSolution(moves)) {
      state = moveCratePusher(state, direction);
    }

    expect(moves).toHaveLength(expectedMoves);
    expect(state.phase).toBe("won");
    expect(state.moves).toBe(expectedMoves);
    expect(state.pushes).toBe(expectedPushes);
    expect(state.crates).toEqual(level.portals);
  });
});

describe("Crate Pusher shuffle bag", () => {
  it("is deterministic for a seed and changes sequence for another seed", () => {
    const firstSequence = drawLevelIndexes(404, 40);

    expect(drawLevelIndexes(404, 40)).toEqual(firstSequence);
    expect(drawLevelIndexes(405, 40)).not.toEqual(firstSequence);
  });

  it("draws every level once before repeating", () => {
    const indexes = drawLevelIndexes(404, 40);
    const firstCycle = indexes.slice(0, CRATE_PUSHER_LEVELS.length);
    const secondCycle = indexes.slice(CRATE_PUSHER_LEVELS.length);

    expect(new Set(firstCycle).size).toBe(CRATE_PUSHER_LEVELS.length);
    expect(new Set(secondCycle).size).toBe(CRATE_PUSHER_LEVELS.length);
    expect(firstCycle.at(-1)).not.toBe(secondCycle[0]);
  });

  it("does not mutate earlier bag snapshots while drawing", () => {
    const initialBag = createCratePusherShuffleBag(404);
    const initialOrder = [...initialBag.order];
    const firstDraw = drawCratePusherShuffleBag(initialBag);

    expect(Object.isFrozen(initialBag)).toBe(true);
    expect(Object.isFrozen(initialBag.order)).toBe(true);
    expect(initialBag.cursor).toBe(0);
    expect(initialBag.lastLevelIndex).toBeNull();
    expect(initialBag.order).toEqual(initialOrder);
    expect(firstDraw.shuffleBag.cursor).toBe(1);
    expect(firstDraw.shuffleBag.lastLevelIndex).toBe(firstDraw.levelIndex);
  });

  it("validates seeds and level counts", () => {
    expect(() => createCratePusherShuffleBag(Number.NaN)).toThrow(
      "safe integers"
    );
    expect(() => createCratePusherShuffleBag(1.5)).toThrow("safe integers");
    expect(() => createCratePusherShuffleBag(1, 0)).toThrow(
      "at least one level"
    );
  });
});
