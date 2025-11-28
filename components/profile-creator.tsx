"use client";

// biome-ignore lint/performance/noNamespaceImport: html-to-image library exports are designed to be used as a namespace
import * as htmlToImage from "html-to-image";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useMemo, useState } from "react";
import { useThemeConfig, useUrlTheme } from "@/components/active-theme";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import { Separator } from "@/components/ui/8bit/separator";
import { Switch } from "@/components/ui/8bit/switch";
import { Textarea } from "@/components/ui/8bit/textarea";
import { toast } from "@/components/ui/8bit/toast";

import CopyProfileCardDialog from "./copy-profile-card-dialog";
import ProfileCard from "./profile-card";
import ProfileCropper from "./profile-cropper";

const HTTP_URL_REGEX = /^https?:\/\//i;
const HTTP_OR_PROTOCOL_RELATIVE_REGEX = /^(https?:)?\/\//i;
const AT_SYMBOL_REGEX = /^@/;

const profileSearchParams = {
  name: parseAsString.withDefault(""),
  avatarUrl: parseAsString.withDefault("/avatar.jpg"),
  badgeTitle: parseAsString.withDefault("warrior"),
  isRetroAvatar: parseAsBoolean.withDefault(false),
  description: parseAsString.withDefault(""),
  x: parseAsString.withDefault(""),
  github: parseAsString.withDefault(""),
};

export default function ProfileCreator() {
  const [openCropper, setOpenCropper] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);

  const [profile, setProfile] = useQueryStates(profileSearchParams);

  // Note: when a file is uploaded we convert it to a data URL
  // to avoid CSP issues that can affect blob: URLs in some setups.

  const safeGithubUrl = useMemo(() => {
    if (!profile.github) {
      return "";
    }
    if (HTTP_URL_REGEX.test(profile.github)) {
      return profile.github;
    }
    return `https://github.com/${profile.github.replace(AT_SYMBOL_REGEX, "")}`;
  }, [profile.github]);

  const safeXUrl = useMemo(() => {
    if (!profile.x) {
      return "";
    }
    if (HTTP_URL_REGEX.test(profile.x)) {
      return profile.x;
    }
    return `https://x.com/${profile.x.replace(AT_SYMBOL_REGEX, "")}`;
  }, [profile.x]);

  const valueForAttr = (value: string) => value.replace(/"/g, "&quot;");
  const escapeText = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This function generates HTML code and is clearest as a single function
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
            ${hasGithub && hasX ? `<span className="text-muted-foreground">•</span>` : ""}
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
    const isHttpLike = HTTP_OR_PROTOCOL_RELATIVE_REGEX.test(profile.avatarUrl);
    const isRootRelative = profile.avatarUrl.startsWith("/");
    const avatarSrcForCode =
      isHttpLike || isRootRelative ? profile.avatarUrl : "/avatar.jpg";

    return `"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/8bit/card";

function getInitials(name: string) {
  if (!name) return "?";
  const parts = name.trim().split(/s+/);
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
    if (!node) {
      return;
    }

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
      if (dataUrl) {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "profile-card.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch (e) {
      console.error("html-to-image failed", e);
      toast("Failed to generate profile card, try with manual upload.");
    } finally {
      node.style.fontFamily = previousFont;
    }
  };

  const toggleImageCropper = (state?: boolean) => {
    setOpenCropper((prev) => (state === undefined ? !prev : state));
  };

  const setProfileImage = (imageUrl: string) => {
    setProfile({ avatarUrl: imageUrl });
    setTempImage(null);
  };

  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [, setUrlTheme] = useUrlTheme();

  return (
    <div className="retro space-y-6 p-4 md:p-6">
      <div className="space-y-2">
        <h1 className="retro font-bold text-xl md:text-2xl">Profile Creator</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Fill the form to preview your retro profile card. Use full URLs or
          just usernames for GitHub and X.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Details</CardTitle>

            <Button
              onClick={() => {
                setProfile(null);
              }}
              variant="outline"
            >
              Reset
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                onChange={(e) => setProfile({ name: e.currentTarget.value })}
                placeholder="Pacman"
                value={profile.name}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                onChange={(e) =>
                  setProfile({ description: e.currentTarget.value })
                }
                rows={4}
                value={profile.description}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge">Badge Title</Label>
              <Input
                id="badge"
                onChange={(e) =>
                  setProfile({ badgeTitle: e.currentTarget.value })
                }
                placeholder="Retro Hacker"
                value={profile.badgeTitle}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="avatar-url">Avatar</Label>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={profile.isRetroAvatar}
                    id="avatar-variant"
                    onCheckedChange={() =>
                      setProfile({ isRetroAvatar: !profile.isRetroAvatar })
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
                  onChange={(e) => {
                    const next = e.currentTarget.value;
                    setProfile({ avatarUrl: next });
                  }}
                  placeholder="https://example.com/avatar.png"
                  value={profile.avatarUrl}
                />

                <div className="flex items-center gap-5">
                  <Input
                    accept="image/*"
                    className="pt-1.5"
                    id="avatar-file"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0];
                      if (!file) {
                        return;
                      }
                      if (!file.type.startsWith("image/")) {
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = () => {
                        const dataUrl = String(reader.result || "");
                        if (dataUrl) {
                          setOpenCropper(true);
                          setTempImage(dataUrl);
                        }
                      };
                      reader.readAsDataURL(file);
                    }}
                    type="file"
                  />
                  {profile.avatarUrl.startsWith("data:") ? (
                    <Button
                      onClick={() => {
                        setProfile({ avatarUrl: "/avatar.jpg" });
                      }}
                      type="button"
                      variant="outline"
                    >
                      Clear
                    </Button>
                  ) : null}
                </div>
              </div>

              <p className="text-muted-foreground text-xs">
                Tip: Upload an image file or paste an image URL. The default
                avatar is used if a local upload is chosen when exporting code.
              </p>
            </div>

            <Separator />

            <p className="text-muted-foreground text-xs">
              GitHub and X links will work only in the generated code, not in
              the downloaded image.
            </p>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                onChange={(e) => setProfile({ github: e.currentTarget.value })}
                placeholder="pacman or https://github.com/pacman"
                value={profile.github}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="x">X</Label>
              <Input
                id="x"
                onChange={(e) => setProfile({ x: e.currentTarget.value })}
                placeholder="pacman or https://x.com/pacman"
                value={profile.x}
              />
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto w-full max-w-md space-y-4">
          <h2 className="text-center font-bold text-lg">Preview</h2>
          <p className="text-muted-foreground text-xs">
            Tip: change to dark / light mode to see the card in different
            themes.
          </p>
          <div className="mx-auto max-w-xs">
            <SelectThemeDropdown
              activeTheme={activeTheme}
              setActiveTheme={(theme) => {
                setActiveTheme(theme);
                setUrlTheme(theme);
              }}
            />
          </div>
          <div className="flex justify-center p-5" id="profile-card">
            <ProfileCard
              avatarUrl={profile.avatarUrl}
              badgeTitle={profile.badgeTitle}
              description={profile.description}
              isRetroAvatar={profile.isRetroAvatar}
              name={profile.name}
              safeGithubUrl={safeGithubUrl}
              safeXUrl={safeXUrl}
            />
          </div>

          <ProfileCropper
            open={openCropper}
            setProfileImage={setProfileImage}
            tempImage={tempImage}
            toggleImageCropper={toggleImageCropper}
          />

          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            <CopyProfileCardDialog code={generateProfileCardCode()} />
            <Button className="w-full md:w-auto" onClick={getImage}>
              Download PNG
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
