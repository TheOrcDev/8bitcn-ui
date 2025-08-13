"use client";

import { useMemo, useState } from "react";

import * as htmlToImage from "html-to-image";
import { useScreenshot } from "use-react-screenshot";

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

  const [, takeScreenshot] = useScreenshot({ type: "image/png", quality: 1 });

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
    return `"use client";\n`;
  };

  const getImage = async () => {
    const node = document.getElementById("profile-card") as HTMLElement | null;
    if (!node) return;

    // Ensure layout is settled
    await new Promise((r) => requestAnimationFrame(() => r(undefined)));

    // Temporarily enforce the font on the target subtree
    const previousFont = node.style.fontFamily;
    node.style.fontFamily =
      '"Press Start 2P", system-ui, -apple-system, sans-serif';

    try {
      // Prefer embedding only WOFF2 and reuse CSS if needed
      const fontCss = await fetch(
        "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      ).then((r) => r.text());

      // Try hook first
      let dataUrl: string | null = null;
      try {
        dataUrl = await takeScreenshot(node);
      } catch {
        dataUrl = null;
      }

      if (!dataUrl) {
        dataUrl = await htmlToImage.toPng(node, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          skipFonts: false,
          preferredFontFormat: "woff2",
          fontEmbedCSS: fontCss,
        });
      }

      const a = document.createElement("a");
      a.href = dataUrl!;
      a.download = "profile-card.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error("html-to-image failed", e);
    } finally {
      node.style.fontFamily = previousFont;
    }
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
          <h2 className="text-center text-lg font-bold">Preview</h2>
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
