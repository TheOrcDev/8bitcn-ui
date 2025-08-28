import { Metadata } from "next";
import Link from "next/link";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CopyCommandButton from "../../docs/components/copy-command-button";

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
          <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to 8bitcn/ui! This guide will help you set up and start
            using our retro-styled components in your project.
          </p>
        </div>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>
              Get up and running with 8bitcn/ui in just a few steps
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold">
                1. Add the 8bitcn registry to your components.json
              </h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  {`{
  "registries": {
    "@8bitcn": "https://8bitcn.com/r/{name}.json"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">2. Start adding components!</h3>
              <div className="bg-muted p-4 rounded-lg">
                <CopyCommandButton
                  command="npx shadcn@latest add @8bitcn/login-form"
                  copyCommand="npx shadcn@latest add @8bitcn/login-form"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              We&apos;re here to help you get started with 8bitcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1">
                <Link
                  href="https://github.com/theorcdev/8bitcn"
                  target="_blank"
                >
                  GitHub Repository
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/contributors">Meet the Team</Link>
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
