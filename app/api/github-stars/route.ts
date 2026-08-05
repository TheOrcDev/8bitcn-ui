import { getGithubStars } from "@/lib/github-stars";

const GithubStarsCacheControl =
  "public, s-maxage=3600, stale-while-revalidate=86400";

function githubStarsResponse(stars: number | null): Response {
  return Response.json(
    { stars },
    {
      headers: {
        "Cache-Control": GithubStarsCacheControl,
      },
      status: 200,
    }
  );
}

export async function GET(): Promise<Response> {
  try {
    return githubStarsResponse(await getGithubStars());
  } catch {
    return githubStarsResponse(null);
  }
}
