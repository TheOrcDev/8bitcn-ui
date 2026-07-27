/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: The focus-scoped game fieldset intentionally owns keyboard input. */
/** biome-ignore-all lint/a11y/noNoninteractiveTabindex: The game fieldset must receive focus without a global listener. */
"use client";

import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent as ReactKeyboardEvent,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/8bit/card";
import { Kbd, KbdGroup } from "@/components/ui/8bit/kbd";
import {
  type CratePusherState,
  createCratePusherState,
  type Direction,
  moveCratePusher,
  type ParsedCratePusherLevel,
  type PositionKey,
  parseCratePusherLevel,
  resetCratePusher,
  startCratePusher,
  undoCratePusher,
} from "@/lib/games/crate-pusher";
import {
  CRATE_PUSHER_LEVELS,
  type CratePusherLevelDefinition,
  type CratePusherShuffleBag,
  createCratePusherShuffleBag,
  drawCratePusherShuffleBag,
} from "@/lib/games/crate-pusher-levels";
import { cn } from "@/lib/utils";

import "@/components/ui/8bit/styles/retro.css";

export interface NotFoundCratePusherProps
  extends ComponentPropsWithoutRef<"section"> {
  badge?: string;
  cta?: string;
  description?: string;
  href?: string;
  level?: readonly string[];
  seed?: number;
  title?: string;
}

interface CratePusherGameProps
  extends Omit<NotFoundCratePusherProps, "level" | "seed"> {
  readonly catalogMode: boolean;
  readonly initialLevel: ParsedCratePusherLevel;
  readonly seed?: number;
}

interface BoardTileProps {
  readonly column: number;
  readonly row: number;
  readonly state: CratePusherState;
}

type CratePusherAction =
  | {
      readonly announcement: string;
      readonly level: ParsedCratePusherLevel;
      readonly type: "load";
    }
  | { readonly type: "move"; readonly direction: Direction }
  | { readonly type: "restart" }
  | { readonly type: "start" }
  | { readonly type: "undo" };

const KEY_DIRECTIONS: Readonly<Record<string, Direction | undefined>> = {
  a: "left",
  arrowdown: "down",
  arrowleft: "left",
  arrowright: "right",
  arrowup: "up",
  d: "right",
  s: "down",
  w: "up",
};

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [contenteditable=''], [contenteditable='true']";

const PARSED_CRATE_PUSHER_LEVELS = Object.freeze(
  CRATE_PUSHER_LEVELS.map((level) => parseCratePusherLevel(level.lines))
);

function createPositionKey(row: number, column: number): PositionKey {
  return `${row}:${column}`;
}

function cratePusherReducer(
  state: CratePusherState,
  action: CratePusherAction
): CratePusherState {
  switch (action.type) {
    case "load": {
      const startedState = startCratePusher(resetCratePusher(action.level));

      return {
        ...startedState,
        announcement: `${action.announcement} ${startedState.announcement}`,
      };
    }
    case "move":
      return moveCratePusher(state, action.direction);
    case "restart":
      return startCratePusher(resetCratePusher(state.level));
    case "start":
      return startCratePusher(state);
    case "undo":
      return undoCratePusher(state);
    default:
      return state;
  }
}

function createInitialGameState({
  catalogMode,
  initialLevel,
}: {
  readonly catalogMode: boolean;
  readonly initialLevel: ParsedCratePusherLevel;
}): CratePusherState {
  const state = createCratePusherState(initialLevel);

  if (!catalogMode) {
    return state;
  }

  return {
    ...state,
    announcement: `${CRATE_PUSHER_LEVELS.length} puzzles ready. Select Start Shift to load a random route.`,
  };
}

function createRuntimeSeed(): number {
  const randomValue = new Uint32Array(1);

  if (typeof globalThis.crypto?.getRandomValues === "function") {
    globalThis.crypto.getRandomValues(randomValue);
    return randomValue[0] ?? 0;
  }

  return Math.floor(Math.random() * 4_294_967_296);
}

function getCatalogLevel(levelIndex: number): {
  readonly definition: CratePusherLevelDefinition;
  readonly parsedLevel: ParsedCratePusherLevel;
} {
  const definition = CRATE_PUSHER_LEVELS[levelIndex];
  const parsedLevel = PARSED_CRATE_PUSHER_LEVELS[levelIndex];

  if (!(definition && parsedLevel)) {
    throw new Error(`Crate Pusher puzzle ${levelIndex + 1} was not found.`);
  }

  return { definition, parsedLevel };
}

function createPuzzleAnnouncement(
  definition: CratePusherLevelDefinition,
  levelIndex: number
): string {
  return `${definition.name}. Puzzle ${levelIndex + 1} of ${CRATE_PUSHER_LEVELS.length}. ${definition.difficulty} route loaded.`;
}

function getPuzzleDisplayMetadata(
  catalogMode: boolean,
  activeLevelIndex: number | null
): {
  readonly boardLabel: string;
  readonly difficultyLabel: string;
  readonly puzzleLabel: string;
} {
  if (!catalogMode) {
    return {
      boardLabel: "Crate Pusher custom game board",
      difficultyLabel: "CUSTOM",
      puzzleLabel: "PUZZLE CUSTOM",
    };
  }

  if (activeLevelIndex === null) {
    return {
      boardLabel: `Crate Pusher random puzzle preview, ${CRATE_PUSHER_LEVELS.length} routes available`,
      difficultyLabel: "RANDOM",
      puzzleLabel: `PUZZLES ${CRATE_PUSHER_LEVELS.length}`,
    };
  }

  const { definition } = getCatalogLevel(activeLevelIndex);
  const puzzleNumber = activeLevelIndex + 1;

  return {
    boardLabel: `Crate Pusher puzzle ${puzzleNumber} of ${CRATE_PUSHER_LEVELS.length}, ${definition.difficulty} game board`,
    difficultyLabel: definition.difficulty.toUpperCase(),
    puzzleLabel: `PUZZLE ${puzzleNumber}/${CRATE_PUSHER_LEVELS.length}`,
  };
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  return (
    target instanceof Element && target.closest(INTERACTIVE_SELECTOR) !== null
  );
}

function getPhaseLabel(state: CratePusherState): string {
  switch (state.phase) {
    case "idle":
      return "IDLE";
    case "playing":
      return "PLAYING";
    case "won":
      return "WON";
    default:
      return "IDLE";
  }
}

function getTerminalStatus(state: CratePusherState): string {
  switch (state.phase) {
    case "idle":
      return "AWAITING SHIFT";
    case "playing":
      return "SHIFT ACTIVE";
    case "won":
      return "ROUTE RESTORED";
    default:
      return "AWAITING SHIFT";
  }
}

function countFilledPortals(state: CratePusherState): number {
  let filledPortals = 0;

  for (const portal of state.level.portals) {
    if (state.crates.has(portal)) {
      filledPortals += 1;
    }
  }

  return filledPortals;
}

function getBoardTileKind(
  isWall: boolean,
  isCrate: boolean,
  isPortal: boolean
): string {
  if (isWall) {
    return "wall";
  }

  if (isCrate && isPortal) {
    return "crate-on-portal";
  }

  if (isCrate) {
    return "crate";
  }

  if (isPortal) {
    return "portal";
  }

  return "floor";
}

function BoardTile({ column, row, state }: BoardTileProps) {
  const position = createPositionKey(row, column);
  const isWall = state.level.walls.has(position);
  const isPortal = state.level.portals.has(position);
  const isCrate = state.crates.has(position);
  const isPlayer = state.player === position;
  const tileKind = getBoardTileKind(isWall, isCrate, isPortal);

  return (
    <div
      className={cn(
        "relative aspect-square min-w-0 flex-1 overflow-hidden border border-background/30 bg-muted/60",
        isWall && "bg-foreground"
      )}
      data-player={isPlayer ? "true" : undefined}
      data-position={`${row + 1}:${column + 1}`}
      data-tile={tileKind}
    >
      {isWall && (
        <span className="absolute inset-1 border border-background/40 bg-background/15" />
      )}

      {isPortal && !isWall && (
        <>
          <span className="absolute inset-[18%] border-2 border-primary" />
          <span className="absolute inset-[36%] bg-primary" />
        </>
      )}

      {isCrate && !isWall && (
        <span
          className={cn(
            "absolute inset-[14%] border-2 border-foreground bg-secondary",
            isPortal && "outline-2 outline-primary outline-offset-1"
          )}
        >
          <span className="absolute inset-x-[18%] top-[18%] h-[12%] bg-foreground" />
          <span className="absolute inset-x-[18%] bottom-[18%] h-[12%] bg-foreground" />
          <span className="absolute inset-y-[18%] left-[18%] w-[12%] bg-foreground" />
          <span className="absolute inset-y-[18%] right-[18%] w-[12%] bg-foreground" />
        </span>
      )}

      {isPlayer && !isWall && !isCrate && (
        <span className="absolute inset-0">
          <span className="absolute top-[14%] left-[34%] size-[32%] border border-foreground bg-primary" />
          <span className="absolute top-[42%] left-[24%] h-[32%] w-[52%] border border-foreground bg-primary" />
          <span className="absolute bottom-[10%] left-[24%] h-[18%] w-[18%] bg-foreground" />
          <span className="absolute right-[24%] bottom-[10%] h-[18%] w-[18%] bg-foreground" />
          <span className="absolute top-[48%] left-[8%] h-[14%] w-[18%] bg-foreground" />
          <span className="absolute top-[48%] right-[8%] h-[14%] w-[18%] bg-foreground" />
        </span>
      )}
    </div>
  );
}

function CratePusherBoard({ state }: { readonly state: CratePusherState }) {
  return (
    <div
      aria-hidden="true"
      className="w-full border-2 border-foreground bg-muted"
    >
      {Array.from({ length: state.level.rows }, (_, row) => (
        <div className="flex w-full" key={createPositionKey(row, 0)}>
          {Array.from({ length: state.level.columns }, (__, column) => (
            <BoardTile
              column={column}
              key={createPositionKey(row, column)}
              row={row}
              state={state}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function CratePusherGame({
  badge = "ROUTE LOST",
  catalogMode,
  className,
  cta = "RETURN HOME",
  description,
  href = "/",
  initialLevel,
  seed,
  title = "404: CRATE RESCUE",
  ...sectionProps
}: CratePusherGameProps) {
  const [state, dispatch] = useReducer(
    cratePusherReducer,
    { catalogMode, initialLevel },
    createInitialGameState
  );
  const [activeLevelIndex, setActiveLevelIndex] = useState<number | null>(null);
  const boardReference = useRef<HTMLFieldSetElement>(null);
  const shuffleBagReference = useRef<CratePusherShuffleBag | null>(null);
  const componentId = useId();
  const headingId = `${componentId}-heading`;
  const instructionsId = `${componentId}-instructions`;
  const resolvedDescription =
    description ??
    (catalogMode
      ? "Push every lost crate onto a portal across 20 randomized routes, or return home now."
      : "Push every lost crate onto a portal, or return home now.");
  const filledPortals = countFilledPortals(state);
  const movementIsActive = state.phase === "playing";
  const { boardLabel, difficultyLabel, puzzleLabel } = getPuzzleDisplayMetadata(
    catalogMode,
    activeLevelIndex
  );

  const focusBoard = () => {
    boardReference.current?.focus();
  };

  const loadNextRandomPuzzle = () => {
    const shuffleBag =
      shuffleBagReference.current ??
      createCratePusherShuffleBag(seed ?? createRuntimeSeed());
    const draw = drawCratePusherShuffleBag(shuffleBag);
    const nextLevel = getCatalogLevel(draw.levelIndex);

    shuffleBagReference.current = draw.shuffleBag;
    setActiveLevelIndex(draw.levelIndex);
    dispatch({
      announcement: createPuzzleAnnouncement(
        nextLevel.definition,
        draw.levelIndex
      ),
      level: nextLevel.parsedLevel,
      type: "load",
    });
    focusBoard();
  };

  const handleStart = () => {
    if (catalogMode && activeLevelIndex === null) {
      loadNextRandomPuzzle();
      return;
    }

    dispatch({ type: "start" });
    focusBoard();
  };

  const handleRestart = () => {
    dispatch({ type: "restart" });
    focusBoard();
  };

  const handleMove = (direction: Direction) => {
    dispatch({ direction, type: "move" });
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLFieldSetElement>) => {
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.repeat ||
      event.currentTarget !== event.target ||
      isInteractiveTarget(event.target)
    ) {
      return;
    }

    const key = event.key.toLowerCase();
    const direction = KEY_DIRECTIONS[key];

    if (direction) {
      if (!movementIsActive) {
        return;
      }

      event.preventDefault();
      handleMove(direction);
      return;
    }

    if (key === "u" && state.phase !== "idle") {
      event.preventDefault();
      dispatch({ type: "undo" });
      return;
    }

    if (key === "r" && state.phase !== "idle") {
      event.preventDefault();
      handleRestart();
    }
  };

  return (
    <section
      {...sectionProps}
      aria-labelledby={headingId}
      className={cn(
        "retro w-full bg-background px-4 py-12 text-foreground sm:px-6 sm:py-16",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Badge>{badge}</Badge>
            <Button asChild variant="outline">
              <Link href={href}>{cta}</Link>
            </Button>
          </div>

          <div className="space-y-3">
            <p aria-hidden="true" className="font-bold text-6xl sm:text-8xl">
              404
            </p>
            <h1 className="font-bold text-2xl sm:text-4xl" id={headingId}>
              {title}
            </h1>
            <p className="max-w-2xl text-muted-foreground text-xs">
              {resolvedDescription}
            </p>
          </div>
        </header>

        <Card className="w-full">
          <CardHeader className="gap-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">MOVES {state.moves}</Badge>
              <Badge variant="secondary">PUSHES {state.pushes}</Badge>
              <Badge variant="secondary">
                PORTALS {filledPortals}/{state.level.portals.size}
              </Badge>
              <Badge variant="secondary">{puzzleLabel}</Badge>
              <Badge variant="outline">LEVEL {difficultyLabel}</Badge>
              <Badge variant="outline">PHASE {getPhaseLabel(state)}</Badge>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <fieldset
              aria-describedby={instructionsId}
              aria-keyshortcuts="ArrowUp ArrowRight ArrowDown ArrowLeft W A S D U R"
              aria-label={boardLabel}
              className="mx-auto w-full min-w-0 max-w-2xl border-0 p-0 outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              data-phase={state.phase}
              onKeyDown={handleKeyDown}
              ref={boardReference}
              tabIndex={0}
            >
              <CratePusherBoard state={state} />
            </fieldset>

            <p className="text-muted-foreground text-xs" id={instructionsId}>
              Start the shift, then use Arrow keys or WASD to move. Push every
              crate onto a portal. Press U to undo or R to restart. Random
              routes can be skipped without losing the rest of the queue.
            </p>

            <div className="hidden flex-wrap items-center gap-4 md:flex">
              <KbdGroup>
                <Kbd>ARROWS</Kbd>
                <span className="text-muted-foreground text-xs">OR</span>
                <Kbd>WASD</Kbd>
                <span className="text-muted-foreground text-xs">MOVE</span>
              </KbdGroup>
              <KbdGroup>
                <Kbd>U</Kbd>
                <span className="text-muted-foreground text-xs">UNDO</span>
              </KbdGroup>
              <KbdGroup>
                <Kbd>R</Kbd>
                <span className="text-muted-foreground text-xs">RESTART</span>
              </KbdGroup>
            </div>

            <fieldset
              aria-label="Movement controls"
              className="mx-auto grid w-full max-w-64 grid-cols-3 gap-3 border-0 p-0"
            >
              <Button
                aria-label="Move up"
                className="col-start-2 min-h-11"
                disabled={!movementIsActive}
                onClick={() => handleMove("up")}
                type="button"
              >
                UP
              </Button>
              <Button
                aria-label="Move left"
                className="col-start-1 min-h-11"
                disabled={!movementIsActive}
                onClick={() => handleMove("left")}
                type="button"
              >
                LEFT
              </Button>
              <Button
                aria-label="Move down"
                className="min-h-11"
                disabled={!movementIsActive}
                onClick={() => handleMove("down")}
                type="button"
              >
                DOWN
              </Button>
              <Button
                aria-label="Move right"
                className="min-h-11"
                disabled={!movementIsActive}
                onClick={() => handleMove("right")}
                type="button"
              >
                RIGHT
              </Button>
            </fieldset>

            <div className="border-2 border-foreground bg-muted p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-xs">ROUTE TERMINAL</span>
                <span className="text-primary text-xs">
                  {getTerminalStatus(state)}
                </span>
              </div>
              <p
                aria-atomic="true"
                aria-live="polite"
                className="mt-2 text-muted-foreground text-xs"
                role="status"
              >
                {state.announcement}
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-4">
            {state.phase === "idle" && (
              <Button onClick={handleStart} type="button">
                START SHIFT
              </Button>
            )}

            {state.phase === "playing" && (
              <>
                <Button
                  disabled={state.history.length === 0}
                  onClick={() => dispatch({ type: "undo" })}
                  type="button"
                  variant="secondary"
                >
                  UNDO
                </Button>
                <Button onClick={handleRestart} type="button" variant="outline">
                  RESTART
                </Button>
                {catalogMode && (
                  <Button
                    onClick={loadNextRandomPuzzle}
                    type="button"
                    variant="outline"
                  >
                    SKIP PUZZLE
                  </Button>
                )}
              </>
            )}

            {state.phase === "won" && (
              <>
                <Button
                  disabled={state.history.length === 0}
                  onClick={() => dispatch({ type: "undo" })}
                  type="button"
                  variant="secondary"
                >
                  UNDO
                </Button>
                {catalogMode && (
                  <Button onClick={loadNextRandomPuzzle} type="button">
                    NEXT RANDOM PUZZLE
                  </Button>
                )}
                <Button
                  onClick={handleRestart}
                  type="button"
                  variant={catalogMode ? "outline" : "default"}
                >
                  PLAY AGAIN
                </Button>
                <Button asChild variant="outline">
                  <Link href={href}>{cta}</Link>
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export function NotFoundCratePusher({
  level,
  seed,
  ...props
}: NotFoundCratePusherProps) {
  const levelSignature = level?.join("\n") ?? null;
  const parsedLevel = useMemo(
    () =>
      levelSignature === null
        ? getCatalogLevel(0).parsedLevel
        : parseLevelSignature(levelSignature),
    [levelSignature]
  );
  const componentKey =
    levelSignature === null
      ? `catalog:${seed ?? "random"}`
      : `custom:${levelSignature}`;

  return (
    <CratePusherGame
      catalogMode={levelSignature === null}
      initialLevel={parsedLevel}
      key={componentKey}
      seed={seed}
      {...props}
    />
  );
}

function parseLevelSignature(levelSignature: string): ParsedCratePusherLevel {
  return parseCratePusherLevel(levelSignature.split("\n"));
}

export default NotFoundCratePusher;
