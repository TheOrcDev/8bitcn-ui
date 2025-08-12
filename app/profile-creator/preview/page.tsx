import ProfileCard from "@/app/docs/components/profile-card";

type SearchParams = {
  data?: string;
};

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

export default function ProfilePreviewPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const dataParam = searchParams?.data ?? "";

  let profile: Profile = {
    name: "",
    avatarUrl: "/avatar.jpg",
    badgeTitle: "",
    isRetroAvatar: false,
    githubUrl: "",
    xUrl: "",
    githubUsername: "",
    xUsername: "",
    safeGithubUrl: "",
    safeXUrl: "",
    description: "",
  };

  try {
    if (dataParam) {
      const jsonString = Buffer.from(dataParam, "base64").toString("utf-8");
      const parsed = JSON.parse(jsonString);
      profile = { ...profile, ...parsed };
    }
  } catch {
    // ignore parse errors; defaults will be used
  }

  return (
    <div className="p-8 min-h-screen bg-background flex items-center justify-center retro">
      <ProfileCard
        name={profile.name}
        avatarUrl={profile.avatarUrl}
        badgeTitle={profile.badgeTitle}
        isRetroAvatar={profile.isRetroAvatar}
        githubUrl={profile.githubUrl}
        xUrl={profile.xUrl}
        githubUsername={profile.githubUsername}
        xUsername={profile.xUsername}
        safeGithubUrl={profile.safeGithubUrl}
        safeXUrl={profile.safeXUrl}
        description={profile.description}
      />
    </div>
  );
}
