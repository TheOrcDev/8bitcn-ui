import { Metadata } from "next";
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

type Contributor = {
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
};

const data = await fetch(
  "https://api.github.com/repos/TheOrcDev/8bitcn-ui/contributors",
  {
    next: { revalidate: 86400 },
  }
);
const contributors: Contributor[] = await data.json();

export default function ContributorsPage() {
  return (
    <div className={`container mx-auto px-4 py-8 overflow-x-hidden ${"retro"}`}>
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Our Contributors
        </h1>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          Meet the amazing people who make this project possible. Their
          contributions, big and small, help build something incredible
          together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((contributor) => (
          <Card key={contributor.id} className="h-full">
            <CardHeader className="text-center gap-4 flex flex-col items-center">
              <Avatar className="size-30">
                <AvatarImage
                  src={contributor.avatar_url}
                  alt={`${contributor.login}'s avatar`}
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
              <CardDescription className="text-sm text-muted-foreground">
                @{contributor.login}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 h-full">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                {contributor.contributions} contribution
                {contributor.contributions === 1 ? "" : "s"}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-full" asChild>
                <Link
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 fill-current hover:scale-110 transition duration-300"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Want to Contribute?</CardTitle>
            <CardDescription className="text-base">
              We welcome contributions from developers of all skill levels. Join
              our community and help make this project even better!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link
                  href="https://github.com/TheOrcDev/8bitcn-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 fill-current hover:scale-110 transition duration-300"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/TheOrcDev/8bitcn-ui/blob/main/contributing.md"
                  target="_blank"
                  rel="noopener noreferrer"
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
