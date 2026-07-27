// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
  advanceBrickBreaker,
  createBrickBreakerState,
  createBrickPattern404,
  launchBrickBreakerBall,
  pauseBrickBreaker,
  resolveBrickBreakerBrick,
  resolveBrickBreakerPaddle,
  resolveBrickBreakerWalls,
  restartBrickBreaker,
  resumeBrickBreaker,
  startBrickBreaker,
} from "@/lib/games/brick-breaker";

const NO_INPUT = { left: false, pointerX: null, right: false };

describe("createBrickPattern404", () => {
  it("creates a centered 30-brick wall that reads 404", () => {
    const bricks = createBrickPattern404();

    expect(bricks).toHaveLength(30);
    expect(bricks.every((brick) => brick.active)).toBe(true);
    expect(new Set(bricks.map((brick) => brick.id)).size).toBe(30);
    expect(Math.min(...bricks.map((brick) => brick.x))).toBe(70);
    expect(Math.max(...bricks.map((brick) => brick.x + brick.width))).toBe(410);
  });
});

describe("brick collisions", () => {
  it("resolves the earliest active brick and reflects the collision normal", () => {
    const state = createBrickBreakerState();
    const brick = state.bricks[0];
    const { ball } = state;
    const previousX = brick.x + brick.width / 2;
    const previousY = brick.y + brick.height + ball.radius + 2;

    ball.x = previousX;
    ball.y = previousY - 4;
    ball.vx = 0;
    ball.vy = -200;

    const hit = resolveBrickBreakerBrick(
      ball,
      state.bricks,
      previousX,
      previousY
    );

    expect(hit?.id).toBe(brick.id);
    expect(brick.active).toBe(false);
    expect(ball.vy).toBeGreaterThan(0);
  });

  it("scores a destroyed brick exactly once through the game interface", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);
    const brick = state.bricks[0];
    state.ball.x = brick.x + brick.width / 2;
    state.ball.y = brick.y + brick.height + state.ball.radius + 1;
    state.ball.vx = 0;
    state.ball.vy = -200;

    const firstEvents = advanceBrickBreaker(state, NO_INPUT, 1 / 60);
    const secondEvents = advanceBrickBreaker(state, NO_INPUT, 1 / 60);

    expect(firstEvents).toEqual([
      { brickId: brick.id, type: "brick-destroyed" },
    ]);
    expect(secondEvents).toEqual([]);
    expect(state.score).toBe(10);
    expect(state.destroyedBricks).toBe(1);
  });

  it("breaks exact collision ties by brick id", () => {
    const state = createBrickBreakerState();
    const [template] = state.bricks;
    const tiedBricks = [
      { ...template, id: "brick-b" },
      { ...template, id: "brick-a" },
    ];
    const previousX = template.x + template.width / 2;
    const previousY = template.y + template.height + state.ball.radius + 2;
    state.ball.x = previousX;
    state.ball.y = previousY - 4;
    state.ball.vy = -200;

    const hit = resolveBrickBreakerBrick(
      state.ball,
      tiedBricks,
      previousX,
      previousY
    );

    expect(hit?.id).toBe("brick-a");
    expect(tiedBricks.find((brick) => brick.id === "brick-b")?.active).toBe(
      true
    );
  });

  it("adds the route-restored bonus and wins at exactly 404", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);
    for (const brick of state.bricks) {
      brick.active = false;
    }
    const lastBrick = state.bricks[0];
    lastBrick.active = true;
    state.destroyedBricks = 29;
    state.score = 290;
    state.ball.x = lastBrick.x + lastBrick.width / 2;
    state.ball.y = lastBrick.y + lastBrick.height + state.ball.radius + 1;
    state.ball.vx = 0;
    state.ball.vy = -200;

    const events = advanceBrickBreaker(state, NO_INPUT, 1 / 60);

    expect(events).toEqual([
      { brickId: lastBrick.id, type: "brick-destroyed" },
      { type: "won" },
    ]);
    expect(state.score).toBe(404);
    expect(state.phase).toBe("won");
  });
});

describe("paddle collisions", () => {
  it("reflects a descending ball upward based on its contact position", () => {
    const state = createBrickBreakerState();
    const { ball, paddle } = state;

    ball.x = paddle.x + paddle.width * 0.15;
    ball.y = paddle.y - ball.radius + 2;
    ball.vx = 0;
    ball.vy = 200;

    expect(resolveBrickBreakerPaddle(ball, paddle)).toBe(true);
    expect(ball.y).toBe(paddle.y - ball.radius);
    expect(ball.vy).toBeLessThan(0);
    expect(ball.vx).toBeLessThan(0);
  });

  it("ignores a ball moving upward through the paddle", () => {
    const state = createBrickBreakerState();
    const { ball, paddle } = state;
    ball.x = paddle.x + paddle.width / 2;
    ball.y = paddle.y;
    ball.vy = -200;

    expect(resolveBrickBreakerPaddle(ball, paddle)).toBe(false);
    expect(ball.vy).toBe(-200);
  });
});

describe("wall collisions", () => {
  it("reflects only the velocity normal to the left, right, and top walls", () => {
    const state = createBrickBreakerState();
    const { ball } = state;

    ball.x = ball.radius - 2;
    ball.vx = -120;
    ball.vy = -160;
    resolveBrickBreakerWalls(ball);
    expect(ball.x).toBe(ball.radius);
    expect(ball.vx).toBe(120);
    expect(ball.vy).toBe(-160);

    ball.x = 480 - ball.radius + 2;
    ball.vx = 120;
    resolveBrickBreakerWalls(ball);
    expect(ball.x).toBe(480 - ball.radius);
    expect(ball.vx).toBe(-120);

    ball.y = ball.radius - 2;
    ball.vy = -160;
    resolveBrickBreakerWalls(ball);
    expect(ball.y).toBe(ball.radius);
    expect(ball.vy).toBe(160);
  });
});

describe("fixed-step simulation", () => {
  it("clamps frame gaps and keeps ball speed inside safe bounds", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);
    state.ball.x = 240;
    state.ball.y = 220;
    state.ball.vx = 1000;
    state.ball.vy = -1;

    advanceBrickBreaker(state, NO_INPUT, 1);

    expect(state.ball.x).toBeLessThanOrEqual(254);
    expect(Math.hypot(state.ball.vx, state.ball.vy)).toBeLessThanOrEqual(280);
    expect(Math.abs(state.ball.vy)).toBeGreaterThanOrEqual(90);
  });

  it("keeps pointer-controlled paddles fully inside the board", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);

    advanceBrickBreaker(state, { ...NO_INPUT, pointerX: -100 }, 1 / 120);
    expect(state.paddle.x).toBe(0);
    expect(state.ball.x).toBe(state.paddle.width / 2);

    advanceBrickBreaker(state, { ...NO_INPUT, pointerX: 999 }, 1 / 120);
    expect(state.paddle.x + state.paddle.width).toBe(480);
  });
});

describe("Brick Breaker lifecycle", () => {
  it("starts with three lives and explicitly docks then launches the ball", () => {
    const state = createBrickBreakerState();

    expect(state).toMatchObject({
      destroyedBricks: 0,
      lives: 3,
      phase: "idle",
      score: 0,
    });
    expect(state.bricks).toHaveLength(30);
    expect(state.ball.docked).toBe(true);

    startBrickBreaker(state);
    expect(state.phase).toBe("ready");
    expect(state.ball.docked).toBe(true);

    launchBrickBreakerBall(state);
    expect(state.phase).toBe("playing");
    expect(state.ball.docked).toBe(false);
    expect(state.ball.vy).toBeLessThan(0);
  });

  it("loses one life, docks a replacement ball, and waits for launch", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);
    state.ball.x = 20;
    state.ball.y = 327;
    state.ball.vx = 0;
    state.ball.vy = 200;

    const events = advanceBrickBreaker(state, NO_INPUT, 1 / 120);

    expect(events).toEqual([{ livesRemaining: 2, type: "life-lost" }]);
    expect(state.lives).toBe(2);
    expect(state.phase).toBe("ready");
    expect(state.ball.docked).toBe(true);
    expect(state.ball.x).toBe(state.paddle.x + state.paddle.width / 2);
  });

  it("enters the lost phase after the final miss", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);
    state.lives = 1;
    state.ball.x = 20;
    state.ball.y = 327;
    state.ball.vy = 200;

    const events = advanceBrickBreaker(state, NO_INPUT, 1 / 120);

    expect(events).toEqual([
      { livesRemaining: 0, type: "life-lost" },
      { type: "lost" },
    ]);
    expect(state.phase).toBe("lost");
  });

  it("pauses, resumes, and restarts without retaining progress", () => {
    const state = createBrickBreakerState();
    startBrickBreaker(state);
    launchBrickBreakerBall(state);

    pauseBrickBreaker(state);
    expect(state.phase).toBe("paused");
    resumeBrickBreaker(state);
    expect(state.phase).toBe("playing");

    state.score = 120;
    state.lives = 1;
    state.bricks[0].active = false;
    const restarted = restartBrickBreaker();
    expect(restarted).toMatchObject({
      destroyedBricks: 0,
      lives: 3,
      phase: "idle",
      score: 0,
    });
    expect(restarted.bricks.every((brick) => brick.active)).toBe(true);
  });
});
