"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import { Switch } from "@/components/ui/8bit/switch";
import { Textarea } from "@/components/ui/8bit/textarea";

import CopyProfileCardDialog from "../docs/components/copy-profile-card-dialog";
import ProfileCard from "../docs/components/profile-card";

type Profile = {
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
};

export default function ProfileCreatorPage() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    avatarUrl: "/avatar.jpg",
    badgeTitle: "warrior",
    isRetroAvatar: false,
    githubUrl: "",
    xUrl: "",
    githubUsername: "",
    xUsername: "",
    safeGithubUrl: "",
    safeXUrl: "",
    description: "",
  });

  const safeGithubUrl = useMemo(() => {
    if (!profile.githubUrl) return "";
    if (/^https?:\/\//i.test(profile.githubUrl)) return profile.githubUrl;
    return `https://github.com/${profile.githubUrl.replace(/^@/, "")}`;
  }, [profile.githubUrl]);

  const safeXUrl = useMemo(() => {
    if (!profile.xUrl) return "";
    if (/^https?:\/\//i.test(profile.xUrl)) return profile.xUrl;
    return `https://x.com/${profile.xUrl.replace(/^@/, "")}`;
  }, [profile.xUrl]);

  const valueForAttr = (value: string) => value.replace(/"/g, "&quot;");
  const escapeText = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const generateProfileCardCode = () => {
    const hasGithub = Boolean(safeGithubUrl);
    const hasX = Boolean(safeXUrl);
    const hasAnySocial = hasGithub || hasX;

    const socialsBlock = hasAnySocial
      ? `
        <div className="flex items-center gap-4 justify-center">
          <div className="flex items-center gap-3 text-sm">
            ${
              hasGithub
                ? `
              <Button size="icon" asChild>
                <a href="${valueForAttr(safeGithubUrl)}" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center size-8 px-0">
                {/* Github icon */}
                 <svg
                    width="50"
                    height="50"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    aria-label="github"
                    className="size-7"
                  >
                    <rect x="200" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="96" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="120" y="48" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="120" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="64" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="96" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="112" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="96" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="112" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="96" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="112" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="80" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="192" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="192" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="192" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="192" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="176" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="160" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="128" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="144" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="112" width="14" height="14" rx="1"></rect>
                  </svg>
              </a>
              </Button>`
                : ""
            }
            ${hasGithub && hasX ? `<span className=\"text-muted-foreground\">•</span>` : ""}
            ${
              hasX
                ? `
              <Button size="icon" asChild>
                <a href="${valueForAttr(safeXUrl)}" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center size-8 px-0">
                {/* Twitter icon */}
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    aria-label="twitter"
                    className="size-6"
                  >
                    <rect x="40" y="40" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="40" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="56" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="72" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="88" width="14" height="14" rx="1"></rect>
                    <rect x="120" y="104" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="120" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="136" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="152" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="184" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="200" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="200" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="168" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="184" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="168" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="152" width="14" height="14" rx="1"></rect>
                    <rect x="120" y="136" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="120" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="104" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="88" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="72" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="56" width="14" height="14" rx="1"></rect>
                    <rect x="136" y="104" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="88" width="14" height="14" rx="1"></rect>
                    <rect x="200" y="40" width="14" height="14" rx="1"></rect>
                    <rect x="40" y="200" width="14" height="14" rx="1"></rect>
                    <rect x="152" y="88" width="14" height="14" rx="1"></rect>
                    <rect x="168" y="72" width="14" height="14" rx="1"></rect>
                    <rect x="184" y="56" width="14" height="14" rx="1"></rect>
                    <rect x="104" y="136" width="14" height="14" rx="1"></rect>
                    <rect x="88" y="152" width="14" height="14" rx="1"></rect>
                    <rect x="72" y="168" width="14" height="14" rx="1"></rect>
                    <rect x="56" y="184" width="14" height="14" rx="1"></rect>
                  </svg>
              </a>
              </Button>`
                : ""
            }
          </div>
        </div>`
      : "";

    const descriptionBlock = profile.description
      ? `
        <p className="text-sm text-muted-foreground text-center w-3/4 mx-auto">
          ${escapeText(profile.description)}
        </p>`
      : "";

    return `"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";

function getInitials(name: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
  return initials || "?";
}

export default function ProfileCard() {
  return (
    <Card className="min-w-sm max-w-md">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="size-20" variant="${profile.isRetroAvatar ? "pixel" : "retro"}">
          <AvatarImage src="${valueForAttr(profile.avatarUrl)}" alt="${valueForAttr(profile.name || "Avatar")}" />
          <AvatarFallback>{getInitials("${valueForAttr(profile.name)}")}</AvatarFallback>
        </Avatar>

        <CardTitle>
          <h3>${escapeText(profile.name) || "Your Name"}</h3>
        </CardTitle>

        ${profile.badgeTitle ? `<Badge>${escapeText(profile.badgeTitle)}</Badge>` : ""}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        ${descriptionBlock}
        ${socialsBlock}
      </CardContent>
      <CardFooter className="justify-end gap-2"></CardFooter>
    </Card>
  );
}`;
  };

  return (
    <div className="p-4 md:p-6 space-y-6 retro">
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
                placeholder="Pacman"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.currentTarget.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={profile.description}
                onChange={(e) =>
                  setProfile({ ...profile, description: e.currentTarget.value })
                }
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <div className="flex items-center gap-2">
                  <Switch
                    id="avatar"
                    checked={profile.isRetroAvatar}
                    onCheckedChange={() =>
                      setProfile({
                        ...profile,
                        isRetroAvatar: !profile.isRetroAvatar,
                      })
                    }
                  />
                  <Label htmlFor="avatar">
                    {profile.isRetroAvatar ? "Pixel" : "Retro"}
                  </Label>
                </div>
              </div>
              <Input
                id="avatar"
                placeholder="https://example.com/avatar.png"
                value={profile.avatarUrl}
                onChange={(e) =>
                  setProfile({ ...profile, avatarUrl: e.currentTarget.value })
                }
              />
              <p className="text-xs text-muted-foreground">
                Tip: You can paste any image URL. Shadcn orc is used by default.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                placeholder="pacman or https://github.com/pacman"
                value={profile.githubUrl}
                onChange={(e) =>
                  setProfile({ ...profile, githubUrl: e.currentTarget.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="x">X</Label>
              <Input
                id="x"
                placeholder="pacman or https://x.com/pacman"
                value={profile.xUrl}
                onChange={(e) =>
                  setProfile({ ...profile, xUrl: e.currentTarget.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge">Badge Title</Label>
              <Input
                id="badge"
                placeholder="Retro Hacker"
                value={profile.badgeTitle}
                onChange={(e) =>
                  setProfile({ ...profile, badgeTitle: e.currentTarget.value })
                }
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <ProfileCard
            name={profile.name}
            avatarUrl={profile.avatarUrl}
            badgeTitle={profile.badgeTitle}
            isRetroAvatar={profile.isRetroAvatar}
            githubUrl={profile.githubUrl}
            xUrl={profile.xUrl}
            githubUsername={profile.githubUsername}
            xUsername={profile.xUsername}
            safeGithubUrl={safeGithubUrl}
            safeXUrl={safeXUrl}
            description={profile.description}
          />

          <div className="flex gap-5 items-center">
            <Button
              variant="secondary"
              onClick={() => {
                setProfile({
                  ...profile,
                  name: "",
                  avatarUrl: "/avatar.jpg",
                  githubUrl: "",
                  xUrl: "",
                  badgeTitle: "",
                  isRetroAvatar: false,
                });
              }}
            >
              Reset
            </Button>

            <CopyProfileCardDialog code={generateProfileCardCode()} />
          </div>
        </div>
      </div>
    </div>
  );
}
