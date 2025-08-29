import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import QuickStart from "./_components/quick-start";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Welcome to 8bitcn/ui! This guide will help you set up and start using our retro-styled components in your project.",
};

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight retro">
            Getting Started
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to 8bitcn/ui! This guide will help you set up and start
            using our retro-styled components in your project.
          </p>
        </div>

        <QuickStart />

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle className="retro">Need Help?</CardTitle>
            <CardDescription>
              We&apos;re here to help you get started with 8bitcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1">
                <Link
                  href="https://github.com/TheOrcDev/8bitcn-ui"
                  target="_blank"
                >
                  GitHub Repository
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/contributors">Contributors</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/docs">Documentation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
