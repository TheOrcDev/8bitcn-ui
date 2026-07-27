export type CratePusherDifficulty = "intermediate" | "advanced" | "expert";

export interface CratePusherLevelDefinition {
  readonly difficulty: CratePusherDifficulty;
  readonly id: string;
  readonly lines: readonly string[];
  readonly name: string;
}

export interface CratePusherShuffleBag {
  readonly cursor: number;
  readonly lastLevelIndex: number | null;
  readonly levelCount: number;
  readonly order: readonly number[];
  readonly randomState: number;
}

export interface CratePusherShuffleDraw {
  readonly levelIndex: number;
  readonly shuffleBag: CratePusherShuffleBag;
}

const UINT32_RANGE = 4_294_967_296;

function defineLevel(
  definition: CratePusherLevelDefinition
): CratePusherLevelDefinition {
  return Object.freeze({
    ...definition,
    lines: Object.freeze([...definition.lines]),
  });
}

export const CRATE_PUSHER_LEVELS = Object.freeze([
  defineLevel({
    difficulty: "intermediate",
    id: "warm-circuit",
    lines: [
      "#######",
      "#   # #",
      "#    .#",
      "# $$  #",
      "# #@. #",
      "# #   #",
      "#######",
    ],
    name: "Warm Circuit",
  }),
  defineLevel({
    difficulty: "intermediate",
    id: "side-step",
    lines: [
      "#######",
      "#     #",
      "# # $@#",
      "# $ # #",
      "#.  . #",
      "# # # #",
      "#######",
    ],
    name: "Side Step",
  }),
  defineLevel({
    difficulty: "intermediate",
    id: "relay-room",
    lines: [
      "########",
      "#  ..  #",
      "#   #  #",
      "#  $   #",
      "#@$   ##",
      "# #    #",
      "########",
    ],
    name: "Relay Room",
  }),
  defineLevel({
    difficulty: "intermediate",
    id: "corner-signal",
    lines: [
      "########",
      "#    # #",
      "# $ #@ #",
      "#  # $ #",
      "# .#   #",
      "#      #",
      "# .  # #",
      "########",
    ],
    name: "Corner Signal",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "split-shift",
    lines: [
      "########",
      "##    ##",
      "#   #$ #",
      "#  #  .#",
      "##@$ # #",
      "# #  $ #",
      "# ..   #",
      "########",
    ],
    name: "Split Shift",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "long-detour",
    lines: [
      "########",
      "#      #",
      "# .# $ #",
      "#  # $ #",
      "#   # .#",
      "# $  #.#",
      "# @#   #",
      "########",
    ],
    name: "Long Detour",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "cross-current",
    lines: [
      "#########",
      "#  #    #",
      "# @$    #",
      "##      #",
      "# .#  # #",
      "#   .$* #",
      "#       #",
      "#########",
    ],
    name: "Cross Current",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "crate-relay",
    lines: [
      "#########",
      "# ##  + #",
      "#    $$ #",
      "# $     #",
      "##      #",
      "##   .#.#",
      "#   # # #",
      "##      #",
      "#########",
    ],
    name: "Crate Relay",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "switchback",
    lines: [
      "#########",
      "#    .  #",
      "#   #  .#",
      "#     $ #",
      "#    #@.#",
      "#    $  #",
      "#  # $  #",
      "#   #   #",
      "#########",
    ],
    name: "Switchback",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "deep-storage",
    lines: [
      "#########",
      "#   #   #",
      "#     # #",
      "##   #  #",
      "# .#$ * #",
      "# .#@ $ #",
      "#  #  # #",
      "#  #    #",
      "#########",
    ],
    name: "Deep Storage",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "backtrack-bay",
    lines: [
      "########",
      "#      #",
      "#  # $ #",
      "#    $@#",
      "#.     #",
      "#  $   #",
      "# .  . #",
      "########",
    ],
    name: "Backtrack Bay",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "narrow-orbit",
    lines: [
      "########",
      "##     #",
      "#      #",
      "#.   $##",
      "# # $@ #",
      "#.. $  #",
      "# #   ##",
      "########",
    ],
    name: "Narrow Orbit",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "forklift-loop",
    lines: [
      "#########",
      "#   @   #",
      "#  *$ ###",
      "#  # #  #",
      "# $  #  #",
      "#  ##   #",
      "# .  .  #",
      "#########",
    ],
    name: "Forklift Loop",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "wall-circuit",
    lines: [
      "#########",
      "#  .    #",
      "#      .#",
      "#  ##   #",
      "#. @$   #",
      "# $# $  #",
      "#       #",
      "#########",
    ],
    name: "Wall Circuit",
  }),
  defineLevel({
    difficulty: "advanced",
    id: "long-haul",
    lines: [
      "#########",
      "# # #  ##",
      "# $   * #",
      "# #     #",
      "#.  # .##",
      "#   #   #",
      "#     $@#",
      "#  #    #",
      "#########",
    ],
    name: "Long Haul",
  }),
  defineLevel({
    difficulty: "expert",
    id: "fourfold-gate",
    lines: [
      "########",
      "#   .. #",
      "#    $.#",
      "## #   #",
      "##$ $. #",
      "#@$    #",
      "# # #  #",
      "########",
    ],
    name: "Fourfold Gate",
  }),
  defineLevel({
    difficulty: "expert",
    id: "packed-route",
    lines: [
      "########",
      "#      #",
      "# .* ###",
      "#  . $@#",
      "#  $   #",
      "# $ #  #",
      "###  . #",
      "########",
    ],
    name: "Packed Route",
  }),
  defineLevel({
    difficulty: "expert",
    id: "signal-stack",
    lines: [
      "#########",
      "#     # #",
      "#  $    #",
      "#  $ $  #",
      "#.#   . #",
      "#    .$@#",
      "#  # . ##",
      "#########",
    ],
    name: "Signal Stack",
  }),
  defineLevel({
    difficulty: "expert",
    id: "cargo-spiral",
    lines: [
      "#########",
      "#   # @ #",
      "# . $ $ #",
      "## $## ##",
      "#  .    #",
      "# . $   #",
      "# .     #",
      "#########",
    ],
    name: "Cargo Spiral",
  }),
  defineLevel({
    difficulty: "expert",
    id: "final-dispatch",
    lines: [
      "########",
      "#      #",
      "## $@$.#",
      "### *# #",
      "#  # $ #",
      "#   .. #",
      "#   ## #",
      "########",
    ],
    name: "Final Dispatch",
  }),
]);

export const DEFAULT_CRATE_PUSHER_LEVEL = CRATE_PUSHER_LEVELS[0].lines;

function normalizeSeed(seed: number): number {
  if (!Number.isSafeInteger(seed)) {
    throw new Error("Crate Pusher shuffle seeds must be safe integers.");
  }

  return wrapUint32(seed);
}

function validateLevelCount(levelCount: number): void {
  if (!Number.isInteger(levelCount) || levelCount < 1) {
    throw new Error("Crate Pusher shuffle bags require at least one level.");
  }
}

function nextRandom(randomState: number): {
  readonly randomState: number;
  readonly value: number;
} {
  const nextState = wrapUint32(
    Math.imul(randomState, 1_664_525) + 1_013_904_223
  );

  return {
    randomState: nextState,
    value: nextState / UINT32_RANGE,
  };
}

function wrapUint32(value: number): number {
  return ((value % UINT32_RANGE) + UINT32_RANGE) % UINT32_RANGE;
}

function shuffledOrder(
  levelCount: number,
  randomState: number,
  excludedFirstIndex: number | null
): {
  readonly order: readonly number[];
  readonly randomState: number;
} {
  const order = Array.from({ length: levelCount }, (_, index) => index);
  let nextRandomState = randomState;

  for (let index = order.length - 1; index > 0; index -= 1) {
    const random = nextRandom(nextRandomState);
    const swapIndex = Math.floor(random.value * (index + 1));
    nextRandomState = random.randomState;
    const currentValue = order[index];

    order[index] = order[swapIndex] as number;
    order[swapIndex] = currentValue as number;
  }

  if (
    excludedFirstIndex !== null &&
    order.length > 1 &&
    order[0] === excludedFirstIndex
  ) {
    [order[0], order[1]] = [order[1] as number, order[0] as number];
  }

  return {
    order: Object.freeze(order),
    randomState: nextRandomState,
  };
}

function createFrozenShuffleBag(
  shuffleBag: CratePusherShuffleBag
): CratePusherShuffleBag {
  return Object.freeze(shuffleBag);
}

export function createCratePusherShuffleBag(
  seed: number,
  levelCount: number = CRATE_PUSHER_LEVELS.length
): CratePusherShuffleBag {
  validateLevelCount(levelCount);

  const shuffled = shuffledOrder(levelCount, normalizeSeed(seed), null);

  return createFrozenShuffleBag({
    cursor: 0,
    lastLevelIndex: null,
    levelCount,
    order: shuffled.order,
    randomState: shuffled.randomState,
  });
}

export function drawCratePusherShuffleBag(
  shuffleBag: CratePusherShuffleBag
): CratePusherShuffleDraw {
  let activeBag = shuffleBag;

  if (shuffleBag.cursor >= shuffleBag.order.length) {
    const shuffled = shuffledOrder(
      shuffleBag.levelCount,
      shuffleBag.randomState,
      shuffleBag.lastLevelIndex
    );

    activeBag = createFrozenShuffleBag({
      cursor: 0,
      lastLevelIndex: shuffleBag.lastLevelIndex,
      levelCount: shuffleBag.levelCount,
      order: shuffled.order,
      randomState: shuffled.randomState,
    });
  }

  const levelIndex = activeBag.order[activeBag.cursor];

  if (levelIndex === undefined) {
    throw new Error("Crate Pusher shuffle bag could not draw a level.");
  }

  return Object.freeze({
    levelIndex,
    shuffleBag: createFrozenShuffleBag({
      ...activeBag,
      cursor: activeBag.cursor + 1,
      lastLevelIndex: levelIndex,
    }),
  });
}
