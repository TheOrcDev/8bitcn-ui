import Image from "next/image";
import Link from "next/link";

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

const contributors = [
  {
    id: 1,
    username: "TheOrcDev",
    name: "OrcDev",
    description:
      "15 years in the code mines. I build, I break, I conquer - all in orcish style. 🛠️🔥",
    avatar: "/avatars/orcdev.jpeg",
    githubUrl: "https://github.com/TheOrcDev",
    contributions: 241,
  },
  {
    id: 2,
    username: "Riley1101",
    name: "Arkar Myat",
    description:
      "An inspiring dev who love problem solving, coding and design.",
    avatar: "/avatars/arkar.png",
    githubUrl: "https://github.com/Riley1101",
    contributions: 10,
  },
  {
    id: 3,
    username: "wangshu24",
    name: "Elias Tran",
    description: "Mediocre engineer 😓 Improvement in progress ⚗️",
    avatar: "/avatars/wangshu.jpeg",
    githubUrl: "https://github.com/wangshu24",
    contributions: 7,
  },
  {
    id: 4,
    username: "aleksandarLazic1998",
    name: "Aleksandar Lazic",
    description: "Hi, my name is Aleksandar I'm a Software developer",
    avatar: "/avatars/aca.jpeg",
    githubUrl: "https://github.com/aleksandarLazic1998",
    contributions: 4,
  },
  {
    id: 5,
    username: "rampantvoid",
    name: "Priyanshu",
    description: "Robot on a computer.",
    avatar: "/avatars/priyanshu.jpeg",
    githubUrl: "https://github.com/rampantvoid",
    contributions: 4,
  },
  {
    id: 6,
    username: "BIT-zhaoyang",
    name: "YangZhao",
    description: "",
    avatar: "/avatars/yangzhao.jpeg",
    githubUrl: "https://github.com/BIT-zhaoyang",
    contributions: 4,
  },
  {
    id: 7,
    username: "luis-gustavoj",
    name: "Luis Silva",
    description: "",
    avatar: "/avatars/luis.jpeg",
    githubUrl: "https://github.com/luis-gustavoj",
    contributions: 3,
  },
  {
    id: 8,
    username: "iinava",
    name: "Navaneeth",
    description: "",
    avatar: "/avatars/navaneeth.jpeg",
    githubUrl: "https://github.com/iinava",
    contributions: 2,
  },
  {
    id: 9,
    username: "josef5",
    name: "Jose Espejo",
    description: "",
    avatar: "/avatars/jose.jpeg",
    githubUrl: "https://github.com/josef5",
    contributions: 2,
  },
  {
    id: 10,
    username: "ee3lol",
    name: "ee3",
    description: "",
    avatar: "/avatars/ee3.jpeg",
    githubUrl: "https://github.com/ee3lol",
    contributions: 1,
  },
  {
    id: 11,
    username: "devashish2024",
    name: "Ashish Agarwal",
    description: "",
    avatar: "/avatars/ashish.gif",
    githubUrl: "https://github.com/devashish2024",
    contributions: 1,
  },
  {
    id: 12,
    username: "bdhamithkumara",
    name: "Dhamith Kumara",
    description: "",
    avatar: "/avatars/dhamith.jpeg",
    githubUrl: "https://github.com/bdhamithkumara",
    contributions: 1,
  },
  {
    id: 13,
    username: "Somondas",
    name: "Somon Das",
    description: "",
    avatar: "/avatars/somon.jpeg",
    githubUrl: "https://github.com/Somondas",
    contributions: 1,
  },
  {
    id: 14,
    username: "lou1sgudboiz",
    name: "lou1sgudboiz",
    description: "",
    avatar: "/avatars/lou1sgudboiz.png",
    githubUrl: "https://github.com/lou1sgudboiz",
    contributions: 1,
  },
  {
    id: 15,
    username: "sagarmauryaa",
    name: "Sagar Maurya",
    description: "",
    avatar: "/avatars/sagar.jpeg",
    githubUrl: "https://github.com/sagarmauryaa",
    contributions: 1,
  },
  {
    id: 16,
    username: "harryfrzz",
    name: "Harikrishna C",
    description: "",
    avatar: "/avatars/harry.jpeg",
    githubUrl: "https://github.com/harryfrzz",
    contributions: 1,
  },
];

export default function ContributorsPage() {
  return (
    <div className={`container mx-auto px-4 py-8 ${"retro"}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Contributors</h1>
        <p className="text-muted-foreground max-w-4xl mx-auto">
          Meet the amazing people who make this project possible. Their
          contributions, big and small, help build something incredible
          together.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <Badge className="text-sm">{contributors.length} Contributors</Badge>
          <Badge className="text-sm">
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
              <Image
                src={contributor.avatar || "/placeholder.svg"}
                alt={`${contributor.name}'s avatar`}
                width={80}
                height={80}
                className="rounded-full border-4 border-background shadow-lg"
              />
              <Badge className="text-xs">
                {contributor.contributions} contributions
              </Badge>

              <CardTitle className="text-lg">{contributor.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                @{contributor.username}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 h-full">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                {contributor.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-full" asChild>
                <Link
                  href={contributor.githubUrl}
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
