import { spawn } from "node:child_process";
import { mkdtemp, rename, rm, stat, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { createConnection } from "node:net";
import { hostname, platform, release, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import process from "node:process";

const require = createRequire(import.meta.url);
const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const packageJson = require(join(root, "package.json"));

function parseArgs(argv) {
  const options = { runs: 3, route: "/", port: 3210, output: undefined };
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    const value = argv[index + 1];
    if (option === "--runs") {
      options.runs = Number(value);
    }
    if (option === "--route") {
      options.route = value;
    }
    if (option === "--port") {
      options.port = Number(value);
    }
    if (option === "--output") {
      options.output = value;
    }
  }
  if (!Number.isInteger(options.runs) || options.runs < 1) {
    throw new Error("--runs must be a positive integer");
  }
  if (
    !Number.isInteger(options.port) ||
    options.port < 1 ||
    options.port > 65_535
  ) {
    throw new Error("--port must be a valid TCP port");
  }
  if (!options.route.startsWith("/")) {
    throw new Error("--route must start with /");
  }
  return options;
}

function percentile(values, quantile) {
  const sorted = [...values].sort((left, right) => left - right);
  const position = (sorted.length - 1) * quantile;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
}

async function pathExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function waitForPort(port) {
  const startedAt = Date.now();
  return new Promise((resolvePromise, reject) => {
    const attempt = () => {
      const socket = createConnection({ host: "127.0.0.1", port });
      socket.once("connect", () => {
        socket.end();
        resolvePromise();
      });
      socket.once("error", () => {
        socket.destroy();
        if (Date.now() - startedAt > 45_000) {
          reject(new Error("Next dev did not become ready within 45 seconds"));
        } else {
          setTimeout(attempt, 100);
        }
      });
    };
    attempt();
  });
}

async function request(port, route) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000);
  const startedAt = performance.now();
  try {
    const response = await fetch(`http://127.0.0.1:${port}${route}`, {
      signal: controller.signal,
    });
    const ttfbMs = performance.now() - startedAt;
    await response.arrayBuffer();
    return {
      status: response.status,
      totalMs: performance.now() - startedAt,
      ttfbMs,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function stop(child) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return;
  }
  process.kill(-child.pid, "SIGTERM");
  await new Promise((resolvePromise) => {
    const timer = setTimeout(() => process.kill(-child.pid, "SIGKILL"), 5000);
    child.once("exit", () => {
      clearTimeout(timer);
      resolvePromise();
    });
  });
  if (child.exitCode === null && child.signalCode === null) {
    throw new Error("Next dev child remained running");
  }
}

async function main() {
  if (packageJson.name !== "8bitcn") {
    throw new Error("Refusing to touch .next outside the 8bitcn repository");
  }
  const options = parseArgs(process.argv.slice(2));
  const cachePath = join(root, ".next");
  const temporaryDirectory = await mkdtemp(join(tmpdir(), "8bitcn-cold-home-"));
  const originalCache = join(temporaryDirectory, ".next");
  let originalCacheMoved = false;
  const logs = [];
  try {
    if (await pathExists(cachePath)) {
      await rename(cachePath, originalCache);
      originalCacheMoved = true;
    }
    const runs = [];
    for (let index = 0; index < options.runs; index += 1) {
      if (await pathExists(cachePath)) {
        await rm(cachePath, { recursive: true, force: false });
      }
      const child = spawn(
        "pnpm",
        [
          "exec",
          "next",
          "dev",
          "--hostname",
          "127.0.0.1",
          "--port",
          String(options.port),
        ],
        {
          cwd: root,
          detached: true,
          env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
          stdio: ["ignore", "pipe", "pipe"],
        }
      );
      const capture = (stream) =>
        stream.on("data", (chunk) => logs.push(chunk.toString()));
      capture(child.stdout);
      capture(child.stderr);
      try {
        await waitForPort(options.port);
        const cold = await request(options.port, options.route);
        const warm = [];
        for (let warmIndex = 0; warmIndex < 5; warmIndex += 1) {
          warm.push(await request(options.port, options.route));
        }
        runs.push({ cold, warm });
      } finally {
        await stop(child);
      }
    }
    const responses = runs.flatMap((run) => [run.cold, ...run.warm]);
    if (responses.some((response) => response.status !== 200)) {
      throw new Error("One or more benchmark requests did not return 200");
    }
    const slices = [
      ...logs
        .join("")
        .matchAll(
          /GET\s+\S+\s+200\s+in\s+[^\n]*?\(next\.js:\s*([^,]+),\s*proxy\.ts:\s*([^,]+),\s*application-code:\s*([^)]+)\)/g
        ),
    ].map((match) => ({
      applicationCode: match[3].trim(),
      nextJs: match[1].trim(),
      proxy: match[2].trim(),
    }));
    const coldTotals = runs.map((run) => run.cold.totalMs);
    const warmTotals = runs.flatMap((run) =>
      run.warm.map((sample) => sample.totalMs)
    );
    const output = {
      environment: {
        hostname: hostname(),
        node: process.version,
        platform: platform(),
        release: release(),
      },
      frameworkSlices: slices,
      options,
      runs,
      summary: {
        cold: {
          medianTotalMs: percentile(coldTotals, 0.5),
          medianTtfbMs: percentile(
            runs.map((run) => run.cold.ttfbMs),
            0.5
          ),
          p95TotalMs: percentile(coldTotals, 0.95),
        },
        warm: {
          medianTotalMs: percentile(warmTotals, 0.5),
          p95TotalMs: percentile(warmTotals, 0.95),
        },
      },
    };
    const json = `${JSON.stringify(output, null, 2)}\n`;
    if (options.output) {
      await writeFile(resolve(options.output), json);
    }
    process.stdout.write(json);
  } finally {
    let restoreError;
    try {
      if (await pathExists(cachePath)) {
        await rm(cachePath, { recursive: true, force: false });
      }
      if (originalCacheMoved) {
        await rename(originalCache, cachePath);
      }
    } catch (error) {
      restoreError = error;
    }
    await rm(temporaryDirectory, { recursive: true, force: true });
    if (restoreError) {
      console.error(
        new Error(
          `Unable to restore the original .next cache: ${restoreError.message}`
        )
      );
      process.exitCode = 1;
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
