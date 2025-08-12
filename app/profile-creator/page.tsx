"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

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
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";

function getInitials(name: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
  return initials || "?";
}

export default function ProfileCreatorPage() {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg");
  const [githubUrl, setGithubUrl] = useState("");
  const [xUrl, setXUrl] = useState("");
  const [badgeTitle, setBadgeTitle] = useState("");

  const safeGithubUrl = useMemo(() => {
    if (!githubUrl) return "";
    if (/^https?:\/\//i.test(githubUrl)) return githubUrl;
    return `https://github.com/${githubUrl.replace(/^@/, "")}`;
  }, [githubUrl]);

  const safeXUrl = useMemo(() => {
    if (!xUrl) return "";
    if (/^https?:\/\//i.test(xUrl)) return xUrl;
    return `https://x.com/${xUrl.replace(/^@/, "")}`;
  }, [xUrl]);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="retro font-bold text-xl md:text-2xl">Profile Creator</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Fill the form to preview your retro profile card. Use full URLs or
          just usernames for GitHub and X.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Ada Lovelace"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avatar">Avatar URL</Label>
              <Input
                id="avatar"
                placeholder="https://example.com/avatar.png"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Tip: You can paste any image URL. A placeholder is used by
                default.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                placeholder="octocat or https://github.com/octocat"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="x">X</Label>
              <Input
                id="x"
                placeholder="jack or https://x.com/jack"
                value={xUrl}
                onChange={(e) => setXUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge">Badge Title</Label>
              <Input
                id="badge"
                placeholder="Retro Hacker"
                value={badgeTitle}
                onChange={(e) => setBadgeTitle(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="size-20" variant="pixel">
                <AvatarImage src={avatarUrl} alt={name || "Avatar"} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="retro font-bold truncate max-w-[16rem]">
                    {name || "Your Name"}
                  </h3>
                  {badgeTitle ? (
                    <Badge className="ml-1" variant="secondary">
                      {badgeTitle}
                    </Badge>
                  ) : null}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {safeGithubUrl ? (
                    <Link
                      href={safeGithubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-foreground hover:underline"
                    >
                      <Github className="size-4" />
                      <span className="truncate max-w-[12rem]">
                        {safeGithubUrl}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">GitHub link</span>
                  )}
                  <span className="text-muted-foreground">•</span>
                  {safeXUrl ? (
                    <Link
                      href={safeXUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-foreground hover:underline"
                    >
                      <Twitter className="size-4" />
                      <span className="truncate max-w-[12rem]">{safeXUrl}</span>
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">X link</span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setName("");
                setAvatarUrl("/placeholder.svg");
                setGithubUrl("");
                setXUrl("");
                setBadgeTitle("");
              }}
            >
              Reset
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
