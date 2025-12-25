"use cache";

import type { Metadata } from "next";
import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Meet the amazing people who make this project possible.",
};

interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  user_view_type: "public";
  site_admin: boolean;
  contributions: number;
}

export default async function ContributorsPage() {
  let contributors: Contributor[] = [];

  try {
    const data = await fetch(
      "https://api.github.com/repos/TheOrcDev/8bitcn-ui/contributors"
    );

    if (data.ok) {
      const json = await data.json();
      contributors = Array.isArray(json) ? json : [];
    }
  } catch {
    // Fallback to empty array if fetch fails
    contributors = [];
  }

  return (
    <div className={`container mx-auto overflow-x-hidden px-4 py-8 ${"retro"}`}>
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
          Our Contributors
        </h1>
        <p className="mx-auto max-w-4xl text-muted-foreground">
          Meet the incredible team that makes this project possible. Their
          contributions, both big and small, shape what we&apos;re building
          together.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <Badge className="text-xs sm:text-sm">
            {contributors.length} Contributors
          </Badge>
          <Badge className="text-xs sm:text-sm">
            {contributors.reduce(
              (sum, contributor) => sum + contributor.contributions,
              0
            )}{" "}
            Total Contributions
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor) => (
          <Card className="h-full" key={contributor.id}>
            <CardHeader className="flex flex-col items-center gap-4 text-center">
              <Avatar className="size-30">
                <AvatarImage
                  alt={`${contributor.login}'s avatar`}
                  src={contributor.avatar_url}
                />
                <AvatarFallback>
                  {contributor.login.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Badge className="text-xs">
                {contributor.contributions} contribution
                {contributor.contributions === 1 ? "" : "s"}
              </Badge>

              <CardTitle className="text-lg">{contributor.login}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button asChild className="w-full">
                <Link
                  className="flex w-full items-center justify-center gap-2"
                  href={contributor.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="size-4 fill-current transition duration-300 hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Want to Contribute?</CardTitle>
            <CardDescription className="text-base">
              We welcome contributions from developers of all skill levels. Join
              our community and help make this project even better!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link
                  className="flex items-center gap-2"
                  href="https://github.com/TheOrcDev/8bitcn-ui"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="size-4 fill-current transition duration-300 hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/TheOrcDev/8bitcn-ui/blob/main/contributing.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Contributing Guide
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
