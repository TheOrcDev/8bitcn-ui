"use client";

import { Github, Twitter } from "lucide-react";

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

interface ProfileCardProps {
  name: string;
  avatarUrl: string;
  badgeTitle: string;
  isRetroAvatar: boolean;
  githubUrl: string;
  xUrl: string;
  githubUsername: string;
  xUsername: string;
  safeGithubUrl: string;
  safeXUrl: string;
  description: string;
}

function getInitials(name: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
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
    <Card id="profile-card" className="max-w-md">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="size-20" variant={isRetroAvatar ? "pixel" : "retro"}>
          <AvatarImage src={avatarUrl} alt={name || "Avatar"} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <CardTitle>
          <h3>{name || "Your Name"}</h3>
        </CardTitle>

        {badgeTitle ? <Badge>{badgeTitle}</Badge> : null}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {description && (
          <p className="text-sm text-muted-foreground text-center w-3/4 mx-auto">
            {description}
          </p>
        )}

        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-3 text-sm">
            {safeGithubUrl && (
              <Button size="icon" asChild>
                <a href={safeGithubUrl} target="_blank">
                  <Github className="size-4" />
                </a>
              </Button>
            )}

            {safeGithubUrl && safeXUrl && (
              <span className="text-muted-foreground">•</span>
            )}

            {safeXUrl && (
              <Button size="icon" asChild>
                <a href={safeXUrl} target="_blank">
                  <Twitter className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2"></CardFooter>
    </Card>
  );
}
