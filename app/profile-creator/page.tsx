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
                ? `<a href="${valueForAttr(safeGithubUrl)}" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center size-8 border px-0">
                {/* Github icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A6.5 6.5 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85"></path><path d="M9 18c-4 2-5-2-7-2"></path></svg>
              </a>`
                : ""
            }
            ${hasGithub && hasX ? `<span className=\"text-muted-foreground\">•</span>` : ""}
            ${
              hasX
                ? `<a href="${valueForAttr(safeXUrl)}" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center size-8 border px-0">
                {/* Twitter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>`
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

function getInitials(name: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
  return initials || "?";
}

export default function ProfileCard() {
  return (
    <Card className="max-w-md">
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
