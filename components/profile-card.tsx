"use client";

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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

const WHITESPACE_REGEX = /\s+/;

interface ProfileCardProps {
  name: string;
  avatarUrl: string;
  badgeTitle: string;
  isRetroAvatar: boolean;
  safeGithubUrl: string;
  safeXUrl: string;
  description: string;
}

function getInitials(name: string) {
  if (!name) {
    return "?";
  }
  const parts = name.trim().split(WHITESPACE_REGEX);
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return initials || "?";
}

export default function ProfileCard({
  name,
  avatarUrl,
  badgeTitle,
  isRetroAvatar,
  safeGithubUrl,
  safeXUrl,
  description,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="size-20" variant={isRetroAvatar ? "pixel" : "retro"}>
          <AvatarImage alt={name || "Avatar"} src={avatarUrl} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <CardTitle>
          <h3 className="text-center">{name || "Your Name"}</h3>
        </CardTitle>

        {badgeTitle ? <Badge>{badgeTitle}</Badge> : null}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {description && (
          <p className="mx-auto w-3/4 text-center text-muted-foreground text-sm">
            {description}
          </p>
        )}

        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 text-sm">
            {safeGithubUrl && (
              <Button asChild size="icon">
                <a href={safeGithubUrl} target="_blank">
                  <svg
                    className="size-7"
                    fill="currentColor"
                    height="50"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    viewBox="0 0 256 256"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <rect height="14" rx="1" width="14" x="200" y="80" />
                    <rect height="14" rx="1" width="14" x="184" y="64" />
                    <rect height="14" rx="1" width="14" x="200" y="96" />
                    <rect height="14" rx="1" width="14" x="168" y="48" />
                    <rect height="14" rx="1" width="14" x="72" y="48" />
                    <rect height="14" rx="1" width="14" x="72" y="64" />
                    <rect height="14" rx="1" width="14" x="88" y="48" />
                    <rect height="14" rx="1" width="14" x="152" y="48" />
                    <rect height="14" rx="1" width="14" x="104" y="48" />
                    <rect height="14" rx="1" width="14" x="136" y="48" />
                    <rect height="14" rx="1" width="14" x="120" y="48" />
                    <rect height="14" rx="1" width="14" x="168" y="64" />
                    <rect height="14" rx="1" width="14" x="104" y="64" />
                    <rect height="14" rx="1" width="14" x="136" y="64" />
                    <rect height="14" rx="1" width="14" x="120" y="64" />
                    <rect height="14" rx="1" width="14" x="56" y="64" />
                    <rect height="14" rx="1" width="14" x="40" y="80" />
                    <rect height="14" rx="1" width="14" x="40" y="96" />
                    <rect height="14" rx="1" width="14" x="40" y="112" />
                    <rect height="14" rx="1" width="14" x="40" y="128" />
                    <rect height="14" rx="1" width="14" x="56" y="80" />
                    <rect height="14" rx="1" width="14" x="56" y="96" />
                    <rect height="14" rx="1" width="14" x="56" y="112" />
                    <rect height="14" rx="1" width="14" x="56" y="128" />
                    <rect height="14" rx="1" width="14" x="184" y="80" />
                    <rect height="14" rx="1" width="14" x="184" y="96" />
                    <rect height="14" rx="1" width="14" x="184" y="112" />
                    <rect height="14" rx="1" width="14" x="168" y="80" />
                    <rect height="14" rx="1" width="14" x="184" y="144" />
                    <rect height="14" rx="1" width="14" x="72" y="80" />
                    <rect height="14" rx="1" width="14" x="88" y="144" />
                    <rect height="14" rx="1" width="14" x="184" y="128" />
                    <rect height="14" rx="1" width="14" x="72" y="144" />
                    <rect height="14" rx="1" width="14" x="168" y="144" />
                    <rect height="14" rx="1" width="14" x="152" y="144" />
                    <rect height="14" rx="1" width="14" x="136" y="144" />
                    <rect height="14" rx="1" width="14" x="104" y="144" />
                    <rect height="14" rx="1" width="14" x="168" y="128" />
                    <rect height="14" rx="1" width="14" x="72" y="128" />
                    <rect height="14" rx="1" width="14" x="168" y="160" />
                    <rect height="14" rx="1" width="14" x="152" y="160" />
                    <rect height="14" rx="1" width="14" x="88" y="192" />
                    <rect height="14" rx="1" width="14" x="72" y="176" />
                    <rect height="14" rx="1" width="14" x="56" y="176" />
                    <rect height="14" rx="1" width="14" x="56" y="160" />
                    <rect height="14" rx="1" width="14" x="40" y="160" />
                    <rect height="14" rx="1" width="14" x="152" y="176" />
                    <rect height="14" rx="1" width="14" x="88" y="176" />
                    <rect height="14" rx="1" width="14" x="152" y="192" />
                    <rect height="14" rx="1" width="14" x="168" y="192" />
                    <rect height="14" rx="1" width="14" x="72" y="192" />
                    <rect height="14" rx="1" width="14" x="168" y="176" />
                    <rect height="14" rx="1" width="14" x="184" y="176" />
                    <rect height="14" rx="1" width="14" x="184" y="160" />
                    <rect height="14" rx="1" width="14" x="200" y="160" />
                    <rect height="14" rx="1" width="14" x="200" y="128" />
                    <rect height="14" rx="1" width="14" x="200" y="144" />
                    <rect height="14" rx="1" width="14" x="40" y="144" />
                    <rect height="14" rx="1" width="14" x="200" y="112" />
                  </svg>
                </a>
              </Button>
            )}

            {safeGithubUrl && safeXUrl && (
              <span className="text-muted-foreground">•</span>
            )}

            {safeXUrl && (
              <Button asChild size="icon">
                <a href={safeXUrl} target="_blank">
                  <svg
                    className="size-6"
                    fill="currentColor"
                    height="50"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    viewBox="0 0 256 256"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X (Twitter)</title>
                    <rect height="14" rx="1" width="14" x="40" y="40" />
                    <rect height="14" rx="1" width="14" x="56" y="40" />
                    <rect height="14" rx="1" width="14" x="72" y="56" />
                    <rect height="14" rx="1" width="14" x="88" y="72" />
                    <rect height="14" rx="1" width="14" x="104" y="88" />
                    <rect height="14" rx="1" width="14" x="120" y="104" />
                    <rect height="14" rx="1" width="14" x="136" y="120" />
                    <rect height="14" rx="1" width="14" x="152" y="136" />
                    <rect height="14" rx="1" width="14" x="168" y="152" />
                    <rect height="14" rx="1" width="14" x="200" y="184" />
                    <rect height="14" rx="1" width="14" x="200" y="200" />
                    <rect height="14" rx="1" width="14" x="184" y="200" />
                    <rect height="14" rx="1" width="14" x="152" y="168" />
                    <rect height="14" rx="1" width="14" x="168" y="184" />
                    <rect height="14" rx="1" width="14" x="184" y="168" />
                    <rect height="14" rx="1" width="14" x="136" y="152" />
                    <rect height="14" rx="1" width="14" x="120" y="136" />
                    <rect height="14" rx="1" width="14" x="104" y="120" />
                    <rect height="14" rx="1" width="14" x="88" y="104" />
                    <rect height="14" rx="1" width="14" x="72" y="88" />
                    <rect height="14" rx="1" width="14" x="56" y="72" />
                    <rect height="14" rx="1" width="14" x="40" y="56" />
                    <rect height="14" rx="1" width="14" x="136" y="104" />
                    <rect height="14" rx="1" width="14" x="152" y="88" />
                    <rect height="14" rx="1" width="14" x="200" y="40" />
                    <rect height="14" rx="1" width="14" x="40" y="200" />
                    <rect height="14" rx="1" width="14" x="152" y="88" />
                    <rect height="14" rx="1" width="14" x="168" y="72" />
                    <rect height="14" rx="1" width="14" x="184" y="56" />
                    <rect height="14" rx="1" width="14" x="104" y="136" />
                    <rect height="14" rx="1" width="14" x="88" y="152" />
                    <rect height="14" rx="1" width="14" x="72" y="168" />
                    <rect height="14" rx="1" width="14" x="56" y="184" />
                  </svg>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2" />
    </Card>
  );
}
