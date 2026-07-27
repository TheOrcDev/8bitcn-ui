export const BRICK_BREAKER_BOARD_WIDTH = 480;
export const BRICK_BREAKER_BOARD_HEIGHT = 320;
export const BRICK_BREAKER_BRICK_WIDTH = 22;
export const BRICK_BREAKER_BRICK_HEIGHT = 12;
export const BRICK_BREAKER_FIXED_STEP = 1 / 120;
export const BRICK_BREAKER_MAX_FRAME_DELTA = 0.05;
export const BRICK_BREAKER_MIN_VERTICAL_SPEED = 90;
export const BRICK_BREAKER_MAX_BALL_SPEED = 280;
export const BRICK_BREAKER_PADDLE_SPEED = 320;

export type BrickBreakerPhase =
  | "idle"
  | "ready"
  | "playing"
  | "paused"
  | "won"
  | "lost";

export interface BallState {
  docked: boolean;
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

export interface BrickState {
  active: boolean;
  height: number;
  id: string;
  width: number;
  x: number;
  y: number;
}

export interface PaddleState {
  height: number;
  velocityX: number;
  width: number;
  x: number;
  y: number;
}

export interface BrickBreakerState {
  ball: BallState;
  bricks: BrickState[];
  destroyedBricks: number;
  lives: number;
  paddle: PaddleState;
  phase: BrickBreakerPhase;
  score: number;
}

export interface BrickBreakerInput {
  left: boolean;
  pointerX: number | null;
  right: boolean;
}

export type BrickBreakerEvent =
  | { brickId: string; type: "brick-destroyed" }
  | { livesRemaining: number; type: "life-lost" }
  | { type: "won" }
  | { type: "lost" };

interface BrickCollision {
  brick: BrickState;
  normalX: number;
  normalY: number;
  time: number;
}

const GLYPH_404 = [
  ["#..#", "#..#", "####", "...#", "...#"],
  [".##.", "#..#", "#..#", "#..#", ".##."],
  ["#..#", "#..#", "####", "...#", "...#"],
] as const;

const BRICK_COLUMN_STEP = 26;
const BRICK_ROW_STEP = 18;
const GLYPH_STEP = 120;
const WALL_LEFT = 70;
const WALL_TOP = 38;
const PADDLE_WIDTH = 72;
const PADDLE_HEIGHT = 8;
const PADDLE_Y = 292;
const BALL_RADIUS = 6;
const INITIAL_BALL_SPEED = 200;
const INITIAL_BALL_VELOCITY_X = 90;

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}

function enforceBallSpeed(ball: BallState, requestedSpeed?: number): void {
  const currentSpeed = Math.hypot(ball.vx, ball.vy) || INITIAL_BALL_SPEED;
  const speed = clamp(
    requestedSpeed ?? currentSpeed,
    BRICK_BREAKER_MIN_VERTICAL_SPEED,
    BRICK_BREAKER_MAX_BALL_SPEED
  );
  const verticalDirection = ball.vy < 0 ? -1 : 1;
  const maximumHorizontalSpeed = Math.sqrt(
    Math.max(0, speed ** 2 - BRICK_BREAKER_MIN_VERTICAL_SPEED ** 2)
  );
  ball.vx = clamp(ball.vx, -maximumHorizontalSpeed, maximumHorizontalSpeed);
  ball.vy =
    verticalDirection * Math.sqrt(Math.max(0, speed ** 2 - ball.vx ** 2));
}

function dockBall(state: BrickBreakerState): void {
  state.ball.docked = true;
  state.ball.x = state.paddle.x + state.paddle.width / 2;
  state.ball.y = state.paddle.y - state.ball.radius - 1;
  state.ball.vx = INITIAL_BALL_VELOCITY_X;
  state.ball.vy = -Math.sqrt(
    INITIAL_BALL_SPEED ** 2 - INITIAL_BALL_VELOCITY_X ** 2
  );
}

function getAxisEntryAndExit(
  origin: number,
  delta: number,
  minimum: number,
  maximum: number
): [number, number] | null {
  if (delta === 0) {
    return origin >= minimum && origin <= maximum
      ? [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
      : null;
  }

  const firstTime = (minimum - origin) / delta;
  const secondTime = (maximum - origin) / delta;
  return [Math.min(firstTime, secondTime), Math.max(firstTime, secondTime)];
}

function findSweptBrickCollision(
  ball: BallState,
  brick: BrickState,
  previousX: number,
  previousY: number
): BrickCollision | null {
  const deltaX = ball.x - previousX;
  const deltaY = ball.y - previousY;
  const horizontalTimes = getAxisEntryAndExit(
    previousX,
    deltaX,
    brick.x - ball.radius,
    brick.x + brick.width + ball.radius
  );
  const verticalTimes = getAxisEntryAndExit(
    previousY,
    deltaY,
    brick.y - ball.radius,
    brick.y + brick.height + ball.radius
  );

  if (!(horizontalTimes && verticalTimes)) {
    return null;
  }

  const entryTime = Math.max(horizontalTimes[0], verticalTimes[0]);
  const exitTime = Math.min(horizontalTimes[1], verticalTimes[1]);
  if (entryTime > exitTime || exitTime < 0 || entryTime < 0 || entryTime > 1) {
    return null;
  }

  const hitHorizontalSide = horizontalTimes[0] > verticalTimes[0];
  const exactCorner = horizontalTimes[0] === verticalTimes[0];
  const useHorizontalNormal =
    hitHorizontalSide || (exactCorner && Math.abs(deltaX) > Math.abs(deltaY));
  let normalX = 0;
  let normalY = 0;

  if (useHorizontalNormal) {
    normalX = deltaX > 0 ? -1 : 1;
  } else {
    normalY = deltaY > 0 ? -1 : 1;
  }

  return {
    brick,
    normalX,
    normalY,
    time: entryTime,
  };
}

function movePaddle(
  state: BrickBreakerState,
  input: BrickBreakerInput,
  deltaTime: number
): void {
  const previousX = state.paddle.x;

  if (input.pointerX === null) {
    const direction = Number(input.right) - Number(input.left);
    state.paddle.x = clamp(
      state.paddle.x + direction * BRICK_BREAKER_PADDLE_SPEED * deltaTime,
      0,
      BRICK_BREAKER_BOARD_WIDTH - state.paddle.width
    );
  } else {
    state.paddle.x = clamp(
      input.pointerX - state.paddle.width / 2,
      0,
      BRICK_BREAKER_BOARD_WIDTH - state.paddle.width
    );
  }

  state.paddle.velocityX =
    deltaTime > 0
      ? clamp(
          (state.paddle.x - previousX) / deltaTime,
          -BRICK_BREAKER_PADDLE_SPEED,
          BRICK_BREAKER_PADDLE_SPEED
        )
      : 0;

  if (state.ball.docked) {
    dockBall(state);
  }
}

function getBallSpeedForDestroyedBricks(destroyedBricks: number): number {
  if (destroyedBricks >= 20) {
    return 250;
  }
  if (destroyedBricks >= 10) {
    return 225;
  }
  return INITIAL_BALL_SPEED;
}

export function createBrickPattern404(): BrickState[] {
  const bricks: BrickState[] = [];

  for (const [glyphIndex, glyph] of GLYPH_404.entries()) {
    for (const [rowIndex, row] of glyph.entries()) {
      for (const [columnIndex, cell] of [...row].entries()) {
        if (cell !== "#") {
          continue;
        }

        bricks.push({
          active: true,
          height: BRICK_BREAKER_BRICK_HEIGHT,
          id: `brick-${glyphIndex}-${rowIndex}-${columnIndex}`,
          width: BRICK_BREAKER_BRICK_WIDTH,
          x:
            WALL_LEFT +
            glyphIndex * GLYPH_STEP +
            columnIndex * BRICK_COLUMN_STEP,
          y: WALL_TOP + rowIndex * BRICK_ROW_STEP,
        });
      }
    }
  }

  return bricks;
}

export function createBrickBreakerState(): BrickBreakerState {
  const paddle: PaddleState = {
    height: PADDLE_HEIGHT,
    velocityX: 0,
    width: PADDLE_WIDTH,
    x: (BRICK_BREAKER_BOARD_WIDTH - PADDLE_WIDTH) / 2,
    y: PADDLE_Y,
  };
  const state: BrickBreakerState = {
    ball: {
      docked: true,
      radius: BALL_RADIUS,
      vx: INITIAL_BALL_VELOCITY_X,
      vy: 0,
      x: BRICK_BREAKER_BOARD_WIDTH / 2,
      y: PADDLE_Y - BALL_RADIUS - 1,
    },
    bricks: createBrickPattern404(),
    destroyedBricks: 0,
    lives: 3,
    paddle,
    phase: "idle",
    score: 0,
  };

  dockBall(state);
  return state;
}

export function startBrickBreaker(state: BrickBreakerState): BrickBreakerState {
  if (state.phase === "idle") {
    state.phase = "ready";
    dockBall(state);
  }

  return state;
}

export function launchBrickBreakerBall(
  state: BrickBreakerState
): BrickBreakerState {
  if (state.phase === "ready") {
    state.ball.docked = false;
    state.phase = "playing";
  }

  return state;
}

export function resolveBrickBreakerWalls(ball: BallState): void {
  if (ball.x - ball.radius < 0) {
    ball.x = ball.radius;
    ball.vx = Math.abs(ball.vx);
  } else if (ball.x + ball.radius > BRICK_BREAKER_BOARD_WIDTH) {
    ball.x = BRICK_BREAKER_BOARD_WIDTH - ball.radius;
    ball.vx = -Math.abs(ball.vx);
  }

  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.vy = Math.abs(ball.vy);
  }
}

export function resolveBrickBreakerPaddle(
  ball: BallState,
  paddle: PaddleState
): boolean {
  if (ball.vy <= 0) {
    return false;
  }

  const closestX = clamp(ball.x, paddle.x, paddle.x + paddle.width);
  const closestY = clamp(ball.y, paddle.y, paddle.y + paddle.height);
  const distanceX = ball.x - closestX;
  const distanceY = ball.y - closestY;
  const overlaps = distanceX ** 2 + distanceY ** 2 <= ball.radius ** 2;

  if (!overlaps) {
    return false;
  }

  const speed = clamp(
    Math.hypot(ball.vx, ball.vy),
    INITIAL_BALL_SPEED,
    BRICK_BREAKER_MAX_BALL_SPEED
  );
  const paddleCenter = paddle.x + paddle.width / 2;
  const contactOffset = clamp(
    (ball.x - paddleCenter) / (paddle.width / 2),
    -1,
    1
  );

  ball.y = paddle.y - ball.radius;
  ball.vx = contactOffset * speed * 0.82 + paddle.velocityX * 0.12;
  ball.vy = -Math.abs(ball.vy);
  enforceBallSpeed(ball, speed);
  return true;
}

export function resolveBrickBreakerBrick(
  ball: BallState,
  bricks: BrickState[],
  previousX: number,
  previousY: number
): BrickState | null {
  const collision = bricks
    .filter((brick) => brick.active)
    .map((brick) => findSweptBrickCollision(ball, brick, previousX, previousY))
    .filter((candidate): candidate is BrickCollision => candidate !== null)
    .sort(
      (first, second) =>
        first.time - second.time ||
        first.brick.id.localeCompare(second.brick.id)
    )[0];

  if (!collision) {
    return null;
  }

  const deltaX = ball.x - previousX;
  const deltaY = ball.y - previousY;
  ball.x = previousX + deltaX * collision.time + collision.normalX * 0.001;
  ball.y = previousY + deltaY * collision.time + collision.normalY * 0.001;

  if (collision.normalX !== 0) {
    ball.vx *= -1;
  }
  if (collision.normalY !== 0) {
    ball.vy *= -1;
  }

  collision.brick.active = false;
  enforceBallSpeed(ball);
  return collision.brick;
}

function advanceBrickBreakerStep(
  state: BrickBreakerState,
  input: BrickBreakerInput,
  deltaTime: number,
  events: BrickBreakerEvent[]
): void {
  if (state.phase !== "ready" && state.phase !== "playing") {
    return;
  }

  movePaddle(state, input, deltaTime);

  if (state.phase !== "playing" || state.ball.docked) {
    return;
  }

  enforceBallSpeed(state.ball);
  const previousX = state.ball.x;
  const previousY = state.ball.y;
  state.ball.x += state.ball.vx * deltaTime;
  state.ball.y += state.ball.vy * deltaTime;

  resolveBrickBreakerWalls(state.ball);
  resolveBrickBreakerPaddle(state.ball, state.paddle);
  const hitBrick = resolveBrickBreakerBrick(
    state.ball,
    state.bricks,
    previousX,
    previousY
  );

  if (hitBrick) {
    state.destroyedBricks += 1;
    state.score += 10;
    events.push({ brickId: hitBrick.id, type: "brick-destroyed" });
    enforceBallSpeed(
      state.ball,
      getBallSpeedForDestroyedBricks(state.destroyedBricks)
    );

    if (state.destroyedBricks === state.bricks.length) {
      state.score += 104;
      state.phase = "won";
      events.push({ type: "won" });
      return;
    }
  }

  if (state.ball.y - state.ball.radius > BRICK_BREAKER_BOARD_HEIGHT) {
    state.lives -= 1;
    events.push({
      livesRemaining: state.lives,
      type: "life-lost",
    });
    dockBall(state);

    if (state.lives === 0) {
      state.phase = "lost";
      events.push({ type: "lost" });
    } else {
      state.phase = "ready";
    }
  }
}

export function advanceBrickBreaker(
  state: BrickBreakerState,
  input: BrickBreakerInput,
  deltaTime: number
): BrickBreakerEvent[] {
  const events: BrickBreakerEvent[] = [];
  const clampedDelta = clamp(
    Number.isFinite(deltaTime) ? deltaTime : 0,
    0,
    BRICK_BREAKER_MAX_FRAME_DELTA
  );

  if (clampedDelta === 0) {
    return events;
  }

  const stepCount = Math.max(
    1,
    Math.ceil(clampedDelta / BRICK_BREAKER_FIXED_STEP)
  );
  const stepDelta = clampedDelta / stepCount;

  for (let step = 0; step < stepCount; step += 1) {
    advanceBrickBreakerStep(state, input, stepDelta, events);
  }

  return events;
}

export function pauseBrickBreaker(state: BrickBreakerState): BrickBreakerState {
  if (state.phase === "playing") {
    state.phase = "paused";
    state.paddle.velocityX = 0;
  }

  return state;
}

export function resumeBrickBreaker(
  state: BrickBreakerState
): BrickBreakerState {
  if (state.phase === "paused") {
    state.phase = "playing";
  }

  return state;
}

export function restartBrickBreaker(): BrickBreakerState {
  return createBrickBreakerState();
}
