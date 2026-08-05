"use client";

import Link from "next/link";
import {
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useId,
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
  advanceBrickBreaker,
  BRICK_BREAKER_BOARD_HEIGHT,
  BRICK_BREAKER_BOARD_WIDTH,
  BRICK_BREAKER_FIXED_STEP,
  BRICK_BREAKER_MAX_FRAME_DELTA,
  type BrickBreakerEvent,
  type BrickBreakerInput,
  type BrickBreakerPhase,
  type BrickBreakerState,
  createBrickBreakerState,
  launchBrickBreakerBall,
  pauseBrickBreaker,
  restartBrickBreaker,
  resumeBrickBreaker,
  startBrickBreaker,
} from "@/lib/games/brick-breaker";
import { cn } from "@/lib/utils";

import "@/components/ui/8bit/styles/retro.css";

const MAX_PHYSICS_STEPS_PER_FRAME = 6;
const MAX_DEVICE_PIXEL_RATIO = 2;
const NON_REPEAT_KEYS = new Set([" ", "p", "escape", "r"]);
const MOVEMENT_KEYS: Readonly<Partial<Record<string, "left" | "right">>> = {
  a: "left",
  arrowleft: "left",
  arrowright: "right",
  d: "right",
};

const PHASE_LABELS: Record<BrickBreakerPhase, string> = {
  idle: "WAITING",
  lost: "NO SIGNAL",
  paused: "PAUSED",
  playing: "PLAYING",
  ready: "READY",
  won: "ROUTE RESTORED",
};

const ACTION_LABELS: Record<BrickBreakerPhase, string> = {
  idle: "START GAME",
  lost: "PLAY AGAIN",
  paused: "RESUME",
  playing: "PAUSE",
  ready: "LAUNCH",
  won: "PLAY AGAIN",
};

interface BrickBreakerHud {
  lives: number;
  phase: BrickBreakerPhase;
  score: number;
}

interface CanvasColors {
  accent: string;
  background: string;
  border: string;
  foreground: string;
  muted: string;
  primary: string;
  secondary: string;
}

interface FrameAdvanceResult {
  accumulator: number;
  events: BrickBreakerEvent[];
}

export interface NotFoundBrickBreakerProps
  extends React.ComponentPropsWithoutRef<"section"> {
  badge?: string;
  cta?: string;
  description?: string;
  href?: string;
  title?: string;
}

function createInputState(): BrickBreakerInput {
  return {
    left: false,
    pointerX: null,
    right: false,
  };
}

function createHud(state: BrickBreakerState): BrickBreakerHud {
  return {
    lives: state.lives,
    phase: state.phase,
    score: state.score,
  };
}

function getCssColor(
  styles: CSSStyleDeclaration,
  token: string,
  fallback: string
): string {
  return styles.getPropertyValue(token).trim() || fallback;
}

function readCanvasColors(): CanvasColors {
  const styles = getComputedStyle(document.documentElement);
  return {
    accent: getCssColor(styles, "--accent", "Highlight"),
    background: getCssColor(styles, "--background", "Canvas"),
    border: getCssColor(styles, "--border", "GrayText"),
    foreground: getCssColor(styles, "--foreground", "CanvasText"),
    muted: getCssColor(styles, "--muted", "GrayText"),
    primary: getCssColor(styles, "--primary", "CanvasText"),
    secondary: getCssColor(styles, "--secondary", "GrayText"),
  };
}

function configureCanvas(canvas: HTMLCanvasElement): void {
  const pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    MAX_DEVICE_PIXEL_RATIO
  );
  canvas.width = BRICK_BREAKER_BOARD_WIDTH * pixelRatio;
  canvas.height = BRICK_BREAKER_BOARD_HEIGHT * pixelRatio;

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.imageSmoothingEnabled = false;
}

function drawBrickBreaker(
  canvas: HTMLCanvasElement,
  state: BrickBreakerState,
  colors: CanvasColors
): void {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  context.clearRect(
    0,
    0,
    BRICK_BREAKER_BOARD_WIDTH,
    BRICK_BREAKER_BOARD_HEIGHT
  );
  context.fillStyle = colors.background;
  context.fillRect(0, 0, BRICK_BREAKER_BOARD_WIDTH, BRICK_BREAKER_BOARD_HEIGHT);

  context.lineWidth = 4;
  context.strokeStyle = colors.border;
  context.strokeRect(2, 2, BRICK_BREAKER_BOARD_WIDTH - 4, 316);

  for (const brick of state.bricks) {
    if (!brick.active) {
      continue;
    }

    const row = Math.round((brick.y - 38) / 18);
    context.fillStyle = row % 2 === 0 ? colors.primary : colors.secondary;
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
    context.lineWidth = 2;
    context.strokeStyle = colors.foreground;
    context.strokeRect(
      brick.x + 1,
      brick.y + 1,
      brick.width - 2,
      brick.height - 2
    );
    context.fillStyle = colors.background;
    context.fillRect(brick.x + 5, brick.y + 4, brick.width - 10, 2);
  }

  context.fillStyle = colors.primary;
  context.fillRect(
    Math.round(state.paddle.x),
    state.paddle.y,
    state.paddle.width,
    state.paddle.height
  );
  context.fillStyle = colors.accent;
  context.fillRect(
    Math.round(state.paddle.x) + 6,
    state.paddle.y + 2,
    state.paddle.width - 12,
    2
  );

  context.beginPath();
  context.fillStyle = colors.foreground;
  context.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
  context.fill();

  if (state.phase === "paused") {
    context.fillStyle = colors.muted;
    context.fillRect(218, 142, 16, 36);
    context.fillRect(246, 142, 16, 36);
  }
}

function getAnnouncement(
  events: BrickBreakerEvent[],
  state: BrickBreakerState
): string | undefined {
  if (events.some((event) => event.type === "won")) {
    return "Route restored. Final score 404.";
  }
  if (events.some((event) => event.type === "lost")) {
    return "Game over. No signal.";
  }

  const lifeEvent = events.find(
    (event): event is Extract<BrickBreakerEvent, { type: "life-lost" }> =>
      event.type === "life-lost"
  );
  if (lifeEvent) {
    return `Ball lost. ${lifeEvent.livesRemaining} ${
      lifeEvent.livesRemaining === 1 ? "life" : "lives"
    } remaining.`;
  }

  if (state.phase === "won") {
    return "Route restored. Final score 404.";
  }
  return;
}

function isPrimaryActionKey(key: string, phase: BrickBreakerPhase): boolean {
  switch (key) {
    case " ":
      return phase === "idle" || phase === "ready";
    case "p":
    case "escape":
      return phase === "playing" || phase === "paused";
    case "r":
      return phase === "won" || phase === "lost";
    default:
      return false;
  }
}

function advanceFixedFrame(
  state: BrickBreakerState,
  input: BrickBreakerInput,
  elapsed: number,
  accumulator: number
): FrameAdvanceResult {
  const events: BrickBreakerEvent[] = [];
  let remainingTime = accumulator + elapsed;
  let steps = 0;

  while (
    remainingTime >= BRICK_BREAKER_FIXED_STEP &&
    steps < MAX_PHYSICS_STEPS_PER_FRAME &&
    state.phase === "playing"
  ) {
    events.push(...advanceBrickBreaker(state, input, BRICK_BREAKER_FIXED_STEP));
    remainingTime -= BRICK_BREAKER_FIXED_STEP;
    steps += 1;
  }

  if (
    steps === MAX_PHYSICS_STEPS_PER_FRAME &&
    remainingTime >= BRICK_BREAKER_FIXED_STEP
  ) {
    remainingTime = 0;
  }

  return { accumulator: remainingTime, events };
}

export function NotFoundBrickBreaker({
  badge = "LOST ROUTE",
  className,
  cta = "RETURN HOME",
  description = "The route is gone. Clear the 404 wall or return home.",
  href = "/",
  title = "BREAK OUT OF HERE",
  ...sectionProps
}: NotFoundBrickBreakerProps) {
  const headingId = useId();
  const instructionsId = useId();
  const [initialEngine] = useState(createBrickBreakerState);
  const engineRef = useRef(initialEngine);
  const inputRef = useRef<BrickBreakerInput>(createInputState());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playfieldRef = useRef<HTMLButtonElement>(null);
  const colorsRef = useRef<CanvasColors>({
    accent: "Highlight",
    background: "Canvas",
    border: "GrayText",
    foreground: "CanvasText",
    muted: "GrayText",
    primary: "CanvasText",
    secondary: "GrayText",
  });
  const animationFrameRef = useRef<number | null>(null);
  const previousTimestampRef = useRef<number | null>(null);
  const accumulatorRef = useRef(0);
  const frameCallbackRef = useRef<FrameRequestCallback>(() => undefined);
  const activePointerRef = useRef<number | null>(null);
  const mountedRef = useRef(false);
  const [hud, setHud] = useState<BrickBreakerHud>(() =>
    createHud(initialEngine)
  );
  const [announcement, setAnnouncement] = useState(
    "Brick Breaker is ready to start."
  );

  const clearHeldInput = useCallback(() => {
    inputRef.current.left = false;
    inputRef.current.right = false;
    inputRef.current.pointerX = null;
  }, []);

  const cancelLoop = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    previousTimestampRef.current = null;
    accumulatorRef.current = 0;
  }, []);

  const renderCanvas = useCallback(() => {
    if (canvasRef.current) {
      drawBrickBreaker(canvasRef.current, engineRef.current, colorsRef.current);
    }
  }, []);

  const publishEngine = useCallback((message?: string) => {
    if (!mountedRef.current) {
      return;
    }
    setHud(createHud(engineRef.current));
    if (message) {
      setAnnouncement(message);
    }
  }, []);

  const scheduleFrame = useCallback(() => {
    if (
      animationFrameRef.current === null &&
      engineRef.current.phase === "playing" &&
      mountedRef.current
    ) {
      animationFrameRef.current = requestAnimationFrame((timestamp) => {
        frameCallbackRef.current(timestamp);
      });
    }
  }, []);

  const pauseGame = useCallback(
    (message = "Game paused.") => {
      if (engineRef.current.phase !== "playing") {
        return;
      }

      pauseBrickBreaker(engineRef.current);
      clearHeldInput();
      cancelLoop();
      publishEngine(message);
      renderCanvas();
    },
    [cancelLoop, clearHeldInput, publishEngine, renderCanvas]
  );

  const resumeGame = useCallback(() => {
    if (engineRef.current.phase !== "paused") {
      return;
    }

    resumeBrickBreaker(engineRef.current);
    previousTimestampRef.current = null;
    accumulatorRef.current = 0;
    publishEngine("Game resumed.");
    renderCanvas();
    scheduleFrame();
    playfieldRef.current?.focus();
  }, [publishEngine, renderCanvas, scheduleFrame]);

  const launchGame = useCallback(() => {
    if (engineRef.current.phase !== "ready") {
      return;
    }

    launchBrickBreakerBall(engineRef.current);
    previousTimestampRef.current = null;
    accumulatorRef.current = 0;
    publishEngine("Ball launched.");
    renderCanvas();
    scheduleFrame();
    playfieldRef.current?.focus();
  }, [publishEngine, renderCanvas, scheduleFrame]);

  const startGame = useCallback(() => {
    if (engineRef.current.phase !== "idle") {
      return;
    }

    startBrickBreaker(engineRef.current);
    publishEngine("Game ready. Launch the ball.");
    renderCanvas();
    playfieldRef.current?.focus();
  }, [publishEngine, renderCanvas]);

  const restartGame = useCallback(() => {
    cancelLoop();
    clearHeldInput();
    engineRef.current = restartBrickBreaker();
    startBrickBreaker(engineRef.current);
    publishEngine("New game ready. Launch the ball.");
    renderCanvas();
    playfieldRef.current?.focus();
  }, [cancelLoop, clearHeldInput, publishEngine, renderCanvas]);

  const primaryAction = useCallback(() => {
    switch (engineRef.current.phase) {
      case "idle":
        startGame();
        break;
      case "ready":
        launchGame();
        break;
      case "playing":
        pauseGame();
        break;
      case "paused":
        resumeGame();
        break;
      case "won":
      case "lost":
        restartGame();
        break;
      default:
        break;
    }
  }, [launchGame, pauseGame, restartGame, resumeGame, startGame]);

  const activatePlayfield = useCallback(() => {
    if (engineRef.current.phase === "idle") {
      startGame();
    } else if (engineRef.current.phase === "ready") {
      launchGame();
    }
  }, [launchGame, startGame]);

  useEffect(() => {
    frameCallbackRef.current = (timestamp) => {
      animationFrameRef.current = null;
      const engine = engineRef.current;

      if (!mountedRef.current || engine.phase !== "playing") {
        return;
      }

      if (previousTimestampRef.current === null) {
        previousTimestampRef.current = timestamp;
        renderCanvas();
        scheduleFrame();
        return;
      }

      const elapsed = Math.min(
        Math.max(0, (timestamp - previousTimestampRef.current) / 1000),
        BRICK_BREAKER_MAX_FRAME_DELTA
      );
      previousTimestampRef.current = timestamp;
      const frameResult = advanceFixedFrame(
        engine,
        inputRef.current,
        elapsed,
        accumulatorRef.current
      );
      accumulatorRef.current = frameResult.accumulator;

      renderCanvas();
      if (frameResult.events.length > 0) {
        publishEngine(getAnnouncement(frameResult.events, engine));
      }

      if (engine.phase !== "playing") {
        previousTimestampRef.current = null;
        accumulatorRef.current = 0;
        return;
      }
      scheduleFrame();
    };
  }, [publishEngine, renderCanvas, scheduleFrame]);

  useEffect(() => {
    mountedRef.current = true;

    const refreshCanvas = () => {
      if (!canvasRef.current) {
        return;
      }
      colorsRef.current = readCanvasColors();
      configureCanvas(canvasRef.current);
      renderCanvas();
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        pauseGame("Game paused because this tab is hidden.");
      }
    };

    refreshCanvas();
    window.addEventListener("resize", refreshCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const themeObserver =
      typeof MutationObserver === "undefined"
        ? null
        : new MutationObserver(refreshCanvas);
    themeObserver?.observe(document.documentElement, {
      attributeFilter: ["class", "data-theme", "style"],
      attributes: true,
    });

    return () => {
      mountedRef.current = false;
      cancelLoop();
      clearHeldInput();
      window.removeEventListener("resize", refreshCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      themeObserver?.disconnect();

      const pointerId = activePointerRef.current;
      const playfield = playfieldRef.current;
      if (pointerId !== null && playfield?.hasPointerCapture?.(pointerId)) {
        playfield.releasePointerCapture(pointerId);
      }
      activePointerRef.current = null;
    };
  }, [cancelLoop, clearHeldInput, pauseGame, renderCanvas]);

  const updatePointerPosition = (
    event: ReactPointerEvent<HTMLButtonElement>
  ): void => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const renderedX =
      bounds.width > 0
        ? ((event.clientX - bounds.left) / bounds.width) *
          BRICK_BREAKER_BOARD_WIDTH
        : BRICK_BREAKER_BOARD_WIDTH / 2;
    inputRef.current.pointerX = Math.min(
      Math.max(renderedX, 0),
      BRICK_BREAKER_BOARD_WIDTH
    );

    if (engineRef.current.phase === "ready") {
      advanceBrickBreaker(
        engineRef.current,
        inputRef.current,
        BRICK_BREAKER_FIXED_STEP
      );
      renderCanvas();
    }
  };

  const handlePlayfieldPointerDown = (
    event: ReactPointerEvent<HTMLButtonElement>
  ): void => {
    if (event.button !== 0) {
      return;
    }

    event.currentTarget.focus();
    activePointerRef.current = event.pointerId;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updatePointerPosition(event);

    if (engineRef.current.phase === "idle" && event.pointerType !== "mouse") {
      startGame();
      updatePointerPosition(event);
    }
    if (engineRef.current.phase === "ready") {
      launchGame();
    }
  };

  const handlePlayfieldPointerMove = (
    event: ReactPointerEvent<HTMLButtonElement>
  ): void => {
    const isActivePointer = activePointerRef.current === event.pointerId;
    if (event.pointerType === "mouse" || isActivePointer) {
      updatePointerPosition(event);
    }
  };

  const handlePlayfieldPointerLeave = (): void => {
    if (activePointerRef.current === null) {
      inputRef.current.pointerX = null;
    }
  };

  const clearPointer = (pointerId: number): void => {
    if (activePointerRef.current !== pointerId) {
      return;
    }
    activePointerRef.current = null;
    inputRef.current.pointerX = null;
  };

  const handlePlayfieldPointerUp = (
    event: ReactPointerEvent<HTMLButtonElement>
  ): void => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    clearPointer(event.pointerId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    const key = event.key.toLowerCase();
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    if (event.repeat && NON_REPEAT_KEYS.has(key)) {
      if (isPrimaryActionKey(key, engineRef.current.phase)) {
        event.preventDefault();
      }
      return;
    }

    const canMove =
      engineRef.current.phase === "ready" ||
      engineRef.current.phase === "playing";
    const movementDirection = MOVEMENT_KEYS[key];
    let handled = false;

    if (movementDirection && canMove) {
      inputRef.current.pointerX = null;
      inputRef.current[movementDirection] = true;
      handled = true;
    } else if (isPrimaryActionKey(key, engineRef.current.phase)) {
      primaryAction();
      handled = true;
    }

    if (handled) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>): void => {
    const movementDirection = MOVEMENT_KEYS[event.key.toLowerCase()];
    const wasHeld = movementDirection
      ? inputRef.current[movementDirection]
      : false;
    if (movementDirection) {
      inputRef.current[movementDirection] = false;
    }
    if (wasHeld) {
      event.preventDefault();
    }
  };

  const actionLabel = ACTION_LABELS[hud.phase];

  return (
    <section
      {...sectionProps}
      aria-labelledby={headingId}
      className={cn(
        "retro flex w-full items-center justify-center bg-background px-4 py-10 text-foreground",
        className
      )}
    >
      <div className="mx-auto grid w-full max-w-3xl gap-5">
        <header className="grid justify-items-center gap-3 text-center">
          <Badge variant="secondary">{badge}</Badge>
          <h1 className="grid gap-3 font-bold" id={headingId}>
            <span className="text-sm tracking-[0.2em]">ERROR 404</span>
            <span className="text-2xl tracking-tight sm:text-4xl">{title}</span>
          </h1>
          <p className="max-w-xl text-muted-foreground text-xs">
            {description}
          </p>
        </header>

        <Card className="w-full">
          <CardHeader className="gap-3 p-4">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between">
              <Badge variant="outline">
                SCORE {hud.score.toString().padStart(3, "0")}
              </Badge>
              <Badge variant="outline">LIVES {hud.lives}</Badge>
              <Badge variant="outline">{PHASE_LABELS[hud.phase]}</Badge>
            </div>
          </CardHeader>

          <CardContent className="grid gap-4 px-4 pb-4">
            <button
              aria-describedby={instructionsId}
              aria-keyshortcuts="ArrowLeft ArrowRight A D Space P Escape R"
              aria-label="Brick Breaker playfield"
              className="pixelated block aspect-[3/2] w-full min-w-0 touch-none appearance-none overflow-hidden border-4 border-foreground bg-background p-0 text-left outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              data-testid="brick-breaker-playfield"
              onBlur={clearHeldInput}
              onClick={activatePlayfield}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              onLostPointerCapture={(event) => clearPointer(event.pointerId)}
              onPointerCancel={(event) => clearPointer(event.pointerId)}
              onPointerDown={handlePlayfieldPointerDown}
              onPointerLeave={handlePlayfieldPointerLeave}
              onPointerMove={handlePlayfieldPointerMove}
              onPointerUp={handlePlayfieldPointerUp}
              ref={playfieldRef}
              type="button"
            >
              <span aria-hidden="true" className="contents">
                <canvas
                  className="pixelated h-full w-full"
                  height={BRICK_BREAKER_BOARD_HEIGHT}
                  ref={canvasRef}
                  width={BRICK_BREAKER_BOARD_WIDTH}
                >
                  Brick Breaker game. Clear the 404 wall or use the Return Home
                  link.
                </canvas>
              </span>
            </button>

            <div
              className="grid justify-items-center gap-2 text-center"
              id={instructionsId}
            >
              <p className="text-muted-foreground text-xs">
                Touch and drag on the playfield to move the paddle. Your first
                touch starts and launches the ball.
              </p>
              <KbdGroup className="hidden flex-wrap justify-center sm:inline-flex">
                <Kbd>LEFT</Kbd>
                <Kbd>A</Kbd>
                <span className="text-xs">MOVE</span>
                <Kbd>RIGHT</Kbd>
                <Kbd>D</Kbd>
                <span className="text-xs">MOVE</span>
                <Kbd>SPACE</Kbd>
                <span className="text-xs">LAUNCH</span>
                <Kbd>P</Kbd>
                <span className="text-xs">PAUSE</span>
              </KbdGroup>
            </div>
          </CardContent>

          <CardFooter className="grid grid-cols-2 gap-3 px-4 pb-5 sm:flex sm:justify-center sm:gap-4">
            <Button
              className="min-h-11 w-full motion-reduce:transition-none sm:w-auto sm:min-w-32"
              onClick={primaryAction}
              type="button"
            >
              {actionLabel}
            </Button>
            <Button
              asChild
              className="min-h-11 w-full motion-reduce:transition-none sm:w-auto"
              variant="secondary"
            >
              <Link href={href}>{cta}</Link>
            </Button>
          </CardFooter>
        </Card>

        <p aria-atomic="true" aria-live="polite" className="sr-only">
          {announcement}
        </p>
      </div>
    </section>
  );
}

export default NotFoundBrickBreaker;
