"use client";

import { useMemo, useState } from "react";

import * as htmlToImage from "html-to-image";

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
import { toast } from "@/components/ui/8bit/toast";

import { useThemeConfig } from "@/components/active-theme";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";

import CopyProfileCardDialog from "./copy-profile-card-dialog";
import ProfileCard from "./profile-card";

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

export default function ProfileCreator() {
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

  // Note: when a file is uploaded we convert it to a data URL
  // to avoid CSP issues that can affect blob: URLs in some setups.

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

    // Do not emit data/blob URLs in generated code. Only keep http(s) or root-relative paths.
    const isHttpLike = /^(https?:)?\/\//i.test(profile.avatarUrl);
    const isRootRelative = profile.avatarUrl.startsWith("/");
    const avatarSrcForCode =
      isHttpLike || isRootRelative ? profile.avatarUrl : "/avatar.jpg";

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
    <Card className="min-w-sm max-w-md">
      <CardHeader className="flex flex-col items-center gap-2">
         <Avatar className="size-20" variant="${profile.isRetroAvatar ? "pixel" : "retro"}">
          <AvatarImage src="${valueForAttr(avatarSrcForCode)}" alt="${valueForAttr(profile.name || "Avatar")}" />
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

  const getImage = async () => {
    const node = document.getElementById("profile-card") as HTMLElement | null;
    if (!node) return;

    await new Promise((r) => requestAnimationFrame(() => r(undefined)));

    const previousFont = node.style.fontFamily;
    node.style.fontFamily = '"Press Start 2P", system-ui, sans-serif';

    try {
      // 1. Fetch Google Fonts CSS
      let fontCss = await fetch(
        "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      ).then((r) => r.text());

      // 2. Find font URLs in the CSS
      const fontUrls = fontCss.match(/https:\/\/[^)]+\.woff2/g) || [];

      // 3. Replace each URL with base64 font data
      for (const url of fontUrls) {
        const fontResp = await fetch(url);
        const fontBuffer = await fontResp.arrayBuffer();
        const fontBase64 = `data:font/woff2;base64,${btoa(
          String.fromCharCode(...new Uint8Array(fontBuffer))
        )}`;
        fontCss = fontCss.replace(url, fontBase64);
      }

      // 4. Generate PNG with embedded font
      const dataUrl = await htmlToImage.toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        skipFonts: false,
        fontEmbedCSS: fontCss,
      });

      // 5. Download PNG
      const a = document.createElement("a");
      a.href = dataUrl!;
      a.download = "profile-card.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error("html-to-image failed", e);
      toast("Failed to generate profile card, try with manual upload.");
    } finally {
      node.style.fontFamily = previousFont;
    }
  };

  const { activeTheme, setActiveTheme } = useThemeConfig();

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
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Details</CardTitle>

            <Button
              variant="outline"
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
                <Label htmlFor="avatar-url">Avatar</Label>
                <div className="flex items-center gap-2">
                  <Switch
                    id="avatar-variant"
                    checked={profile.isRetroAvatar}
                    onCheckedChange={() =>
                      setProfile({
                        ...profile,
                        isRetroAvatar: !profile.isRetroAvatar,
                      })
                    }
                  />
                  <Label htmlFor="avatar-variant">
                    {profile.isRetroAvatar ? "Pixel" : "Retro"}
                  </Label>
                </div>
              </div>

              <div className="grid gap-2">
                <Input
                  id="avatar-url"
                  placeholder="https://example.com/avatar.png"
                  value={profile.avatarUrl}
                  onChange={(e) => {
                    const next = e.currentTarget.value;
                    setProfile({
                      ...profile,
                      avatarUrl: next,
                    });
                  }}
                />

                <div className="flex items-center gap-5">
                  <Input
                    id="avatar-file"
                    type="file"
                    accept="image/*"
                    className="pt-1.5"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0];
                      if (!file) return;
                      if (!file.type.startsWith("image/")) return;
                      const reader = new FileReader();
                      reader.onload = () => {
                        const dataUrl = String(reader.result || "");
                        if (dataUrl) {
                          setProfile({ ...profile, avatarUrl: dataUrl });
                        }
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                  {profile.avatarUrl.startsWith("data:") ? (
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => {
                        setProfile({ ...profile, avatarUrl: "/avatar.jpg" });
                      }}
                    >
                      Clear
                    </Button>
                  ) : null}
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Tip: Upload an image file or paste an image URL. The default
                avatar is used if a local upload is chosen when exporting code.
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
          <h2 className="text-center text-lg font-bold">Preview</h2>
          <div className="max-w-xs mx-auto">
            <SelectThemeDropdown
              activeTheme={activeTheme}
              setActiveTheme={setActiveTheme}
            />
          </div>
          <div id="profile-card" className="flex justify-center p-5">
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
          </div>

          <div className="flex gap-5 items-center justify-center">
            <CopyProfileCardDialog code={generateProfileCardCode()} />
            <Button onClick={getImage}>Download PNG</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
