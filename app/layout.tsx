import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ActiveThemeProvider } from "@/components/active-theme";
import { ScreenSize } from "@/components/screen-size";
import SiteFooter from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { sharedMetaData } from "@/lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...sharedMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <NuqsAdapter>
          <RootProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
              enableSystem
            >
              <ActiveThemeProvider>
                <SiteHeader />
                <div className="mx-auto w-full max-w-[1400px] flex-1 border-r border-l border-dashed">
                  {children}
                </div>
                <SiteFooter />
                <Toaster />
                <Analytics />
                <SpeedInsights />
                {process.env.APP_ENV === "development" && <ScreenSize />}
              </ActiveThemeProvider>
            </ThemeProvider>
          </RootProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
