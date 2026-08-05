import { cacheLife } from "next/cache";

const GithubRepositoryUrl = "https://api.github.com/repos/TheOrcDev/8bitcn-ui";
const GithubRequestTimeoutMs = 1500;

function parseGithubStars(payload: unknown): number {
  if (!(typeof payload === "object" && payload !== null)) {
    throw new Error("GitHub stars response was not an object");
  }

  const stars = Reflect.get(payload, "stargazers_count");
  if (typeof stars !== "number" || !Number.isSafeInteger(stars) || stars < 0) {
    throw new Error("GitHub stars response contained an invalid count");
  }

  return stars;
}

export async function getGithubStars(): Promise<number> {
  "use cache";
  cacheLife("hours");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GithubRequestTimeoutMs);

  try {
    const response = await fetch(GithubRepositoryUrl, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(
        `GitHub stars request failed with status ${response.status}`
      );
    }

    const payload: unknown = await response.json();
    return parseGithubStars(payload);
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error("GitHub stars request timed out", { cause: error });
    }
    if (error instanceof Error && error.message.startsWith("GitHub stars")) {
      throw error;
    }
    throw new Error("GitHub stars request failed", { cause: error });
  } finally {
    clearTimeout(timeout);
  }
}
