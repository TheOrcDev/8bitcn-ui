import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

import { sharedMetaData } from "@/lib/metadata"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  ...sharedMetaData,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="flex-1 border-l border-r border-dashed max-w-[1400px] mx-auto w-full">
            {children}
          </div>
          <SiteFooter />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
