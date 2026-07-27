export type Direction = "up" | "down" | "left" | "right";

export type PositionKey = `${number}:${number}`;

export type CratePusherPhase = "idle" | "playing" | "won";

export interface ParsedCratePusherLevel {
  readonly columns: number;
  readonly initialCrates: ReadonlySet<PositionKey>;
  readonly initialPlayer: PositionKey;
  readonly portals: ReadonlySet<PositionKey>;
  readonly rows: number;
  readonly walls: ReadonlySet<PositionKey>;
}

export interface CratePusherSnapshot {
  readonly crates: ReadonlySet<PositionKey>;
  readonly moves: number;
  readonly player: PositionKey;
  readonly pushes: number;
}

export interface CratePusherState extends CratePusherSnapshot {
  readonly announcement: string;
  readonly history: readonly CratePusherSnapshot[];
  readonly level: ParsedCratePusherLevel;
  readonly phase: CratePusherPhase;
}

const MAX_BOARD_SIZE = 16;
const MAX_HISTORY_LENGTH = 128;
const MIN_BOARD_SIZE = 4;
const POSITION_PATTERN = /^(-?\d+):(-?\d+)$/;
const SUPPORTED_TILES: ReadonlySet<string> = new Set([
  " ",
  "#",
  "$",
  "*",
  "+",
  ".",
  "@",
]);

const DIRECTION_DELTAS: Readonly<
  Record<Direction, readonly [row: number, column: number]>
> = {
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
};

interface Coordinates {
  readonly column: number;
  readonly row: number;
}

function createPositionKey(row: number, column: number): PositionKey {
  return `${row}:${column}`;
}

function parsePositionKey(position: PositionKey): Coordinates {
  const match = POSITION_PATTERN.exec(position);

  if (!match) {
    throw new Error(`Invalid crate pusher position: "${position}".`);
  }

  return {
    column: Number(match[2]),
    row: Number(match[1]),
  };
}

function isPerimeterPosition(
  row: number,
  column: number,
  rows: number,
  columns: number
): boolean {
  return (
    row === 0 || column === 0 || row === rows - 1 || column === columns - 1
  );
}

function validateLevelPerimeter(
  lines: readonly string[],
  columns: number
): void {
  for (const [row, line] of lines.entries()) {
    for (const [column, tile] of [...line].entries()) {
      if (
        isPerimeterPosition(row, column, lines.length, columns) &&
        tile !== "#"
      ) {
        throw new Error(
          `Crate pusher level perimeter must be walls; found "${tile}" at row ${row + 1}, column ${column + 1}.`
        );
      }
    }
  }
}

function validateSupportedTiles(lines: readonly string[]): void {
  for (const [row, line] of lines.entries()) {
    for (const [column, tile] of [...line].entries()) {
      if (!SUPPORTED_TILES.has(tile)) {
        throw new Error(
          `Unsupported crate pusher tile "${tile}" at row ${row + 1}, column ${column + 1}.`
        );
      }
    }
  }
}

function isInsideLevel(
  position: Coordinates,
  level: ParsedCratePusherLevel
): boolean {
  return (
    position.row >= 0 &&
    position.row < level.rows &&
    position.column >= 0 &&
    position.column < level.columns
  );
}

function countFilledPortals(
  crates: ReadonlySet<PositionKey>,
  level: ParsedCratePusherLevel
): number {
  let filledPortals = 0;

  for (const portal of level.portals) {
    if (crates.has(portal)) {
      filledPortals += 1;
    }
  }

  return filledPortals;
}

function createSnapshot(state: CratePusherState): CratePusherSnapshot {
  return Object.freeze({
    crates: state.crates,
    moves: state.moves,
    player: state.player,
    pushes: state.pushes,
  });
}

function appendHistory(
  history: readonly CratePusherSnapshot[],
  snapshot: CratePusherSnapshot
): readonly CratePusherSnapshot[] {
  const nextHistory = [...history, snapshot];

  if (nextHistory.length <= MAX_HISTORY_LENGTH) {
    return Object.freeze(nextHistory);
  }

  return Object.freeze(nextHistory.slice(-MAX_HISTORY_LENGTH));
}

function createMoveAnnouncement(
  direction: Direction,
  player: PositionKey,
  crates: ReadonlySet<PositionKey>,
  level: ParsedCratePusherLevel,
  pushedCrate: boolean
): string {
  const action = pushedCrate ? "Pushed a crate" : "Moved";
  const filledPortals = countFilledPortals(crates, level);

  return `${action} ${direction}. Player ${formatCratePusherPosition(player)}. Portals ${filledPortals} of ${level.portals.size}.`;
}

export function parseCratePusherLevel(
  lines: readonly string[]
): ParsedCratePusherLevel {
  if (lines.length < MIN_BOARD_SIZE || lines.length > MAX_BOARD_SIZE) {
    throw new Error(
      `Crate pusher levels must have between ${MIN_BOARD_SIZE} and ${MAX_BOARD_SIZE} rows.`
    );
  }

  const columns = lines[0]?.length ?? 0;

  if (columns < MIN_BOARD_SIZE || columns > MAX_BOARD_SIZE) {
    throw new Error(
      `Crate pusher levels must have between ${MIN_BOARD_SIZE} and ${MAX_BOARD_SIZE} columns.`
    );
  }

  if (lines.some((line) => line.length !== columns)) {
    throw new Error("Every crate pusher level row must have the same length.");
  }

  validateSupportedTiles(lines);
  validateLevelPerimeter(lines, columns);

  const walls = new Set<PositionKey>();
  const portals = new Set<PositionKey>();
  const crates = new Set<PositionKey>();
  let player: PositionKey | undefined;
  let playerCount = 0;

  for (const [row, line] of lines.entries()) {
    for (const [column, tile] of [...line].entries()) {
      const position = createPositionKey(row, column);

      switch (tile) {
        case " ":
          break;
        case "#":
          walls.add(position);
          break;
        case ".":
          portals.add(position);
          break;
        case "$":
          crates.add(position);
          break;
        case "*":
          crates.add(position);
          portals.add(position);
          break;
        case "+":
          player = position;
          playerCount += 1;
          portals.add(position);
          break;
        case "@":
          player = position;
          playerCount += 1;
          break;
        default:
          throw new Error(
            `Unsupported crate pusher tile "${tile}" at row ${row + 1}, column ${column + 1}.`
          );
      }
    }
  }

  if (playerCount === 0 || !player) {
    throw new Error("Crate pusher levels must contain exactly one player.");
  }

  if (playerCount > 1) {
    throw new Error("Crate pusher levels must contain exactly one player.");
  }

  if (crates.size === 0) {
    throw new Error("Crate pusher levels must contain at least one crate.");
  }

  if (crates.size !== portals.size) {
    throw new Error(
      `Crate pusher levels must contain equal crate and portal counts; found ${crates.size} crates and ${portals.size} portals.`
    );
  }

  return Object.freeze({
    columns,
    initialCrates: crates,
    initialPlayer: player,
    portals,
    rows: lines.length,
    walls,
  });
}

export function createCratePusherState(
  level: ParsedCratePusherLevel
): CratePusherState {
  return {
    announcement: "Ready. Select Start Shift to move.",
    crates: new Set(level.initialCrates),
    history: Object.freeze([]),
    level,
    moves: 0,
    phase: "idle",
    player: level.initialPlayer,
    pushes: 0,
  };
}

export function startCratePusher(state: CratePusherState): CratePusherState {
  if (state.phase !== "idle") {
    return state;
  }

  if (isCratePusherSolved(state, state.level)) {
    return {
      ...state,
      announcement: "Route restored in 0 moves and 0 pushes.",
      phase: "won",
    };
  }

  return {
    ...state,
    announcement: `Shift started. Player ${formatCratePusherPosition(state.player)}.`,
    phase: "playing",
  };
}

export function moveCratePusher(
  state: CratePusherState,
  direction: Direction
): CratePusherState {
  if (state.phase !== "playing") {
    return state;
  }

  const current = parsePositionKey(state.player);
  const [rowDelta, columnDelta] = DIRECTION_DELTAS[direction];
  const targetCoordinates = {
    column: current.column + columnDelta,
    row: current.row + rowDelta,
  };

  if (!isInsideLevel(targetCoordinates, state.level)) {
    return {
      ...state,
      announcement: "Blocked by the edge of the board.",
    };
  }

  const target = createPositionKey(
    targetCoordinates.row,
    targetCoordinates.column
  );

  if (state.level.walls.has(target)) {
    return {
      ...state,
      announcement: "Blocked by a wall.",
    };
  }

  let nextCrates = state.crates;
  let pushedCrate = false;

  if (state.crates.has(target)) {
    const crateDestinationCoordinates = {
      column: targetCoordinates.column + columnDelta,
      row: targetCoordinates.row + rowDelta,
    };

    if (!isInsideLevel(crateDestinationCoordinates, state.level)) {
      return {
        ...state,
        announcement: "That crate cannot be pushed.",
      };
    }

    const crateDestination = createPositionKey(
      crateDestinationCoordinates.row,
      crateDestinationCoordinates.column
    );
    const crateIsBlocked =
      state.level.walls.has(crateDestination) ||
      state.crates.has(crateDestination);

    if (crateIsBlocked) {
      return {
        ...state,
        announcement: "That crate cannot be pushed.",
      };
    }

    const movedCrates = new Set(state.crates);
    movedCrates.delete(target);
    movedCrates.add(crateDestination);
    nextCrates = movedCrates;
    pushedCrate = true;
  }

  const nextState: CratePusherState = {
    ...state,
    announcement: "",
    crates: nextCrates,
    history: appendHistory(state.history, createSnapshot(state)),
    moves: state.moves + 1,
    phase: "playing",
    player: target,
    pushes: state.pushes + (pushedCrate ? 1 : 0),
  };

  if (isCratePusherSolved(nextState, state.level)) {
    return {
      ...nextState,
      announcement: `Route restored in ${nextState.moves} moves and ${nextState.pushes} pushes.`,
      phase: "won",
    };
  }

  return {
    ...nextState,
    announcement: createMoveAnnouncement(
      direction,
      nextState.player,
      nextState.crates,
      state.level,
      pushedCrate
    ),
  };
}

export function undoCratePusher(state: CratePusherState): CratePusherState {
  const previous = state.history.at(-1);

  if (!previous) {
    return {
      ...state,
      announcement: "Nothing to undo.",
    };
  }

  return {
    ...state,
    announcement: "Move undone.",
    crates: new Set(previous.crates),
    history: Object.freeze(state.history.slice(0, -1)),
    moves: previous.moves,
    phase: "playing",
    player: previous.player,
    pushes: previous.pushes,
  };
}

export function resetCratePusher(
  level: ParsedCratePusherLevel
): CratePusherState {
  return createCratePusherState(level);
}

export function isCratePusherSolved(
  state: Pick<CratePusherSnapshot, "crates">,
  level: ParsedCratePusherLevel
): boolean {
  for (const portal of level.portals) {
    if (!state.crates.has(portal)) {
      return false;
    }
  }

  return true;
}

export function formatCratePusherPosition(position: PositionKey): string {
  const { column, row } = parsePositionKey(position);

  return `row ${row + 1} column ${column + 1}`;
}
