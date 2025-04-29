import { Metadata } from "next"

import { pressStart } from "@/config/fonts"
import { LoginForm } from "@/components/ui/8bit/blocks/login-form"

import CopyCommandButton from "../docs/components/copy-command-button"
import { OpenInV0Button } from "../docs/components/open-in-v0-button"
import LoginPage from "../login/page"

export const metadata: Metadata = {
  title: "Building Retro Blocks for the Web - 8bitcn/ui",
  description:
    "Clean, retro building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.",
}

export default function BlocksPage() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${pressStart.className} md:text-2xl font-bold`}>
        Building Retro Blocks for the Web
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        Clean, retro building blocks. Copy and paste into your apps. Works with
        all React frameworks. Open Source. Free forever.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple login form
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <CopyCommandButton
              command="npx shadcn@latest add 8bit-login-form"
              copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-login-form.json`}
            />
            <OpenInV0Button name="8bit-login-form" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <LoginForm />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          A two column login page with a cover image.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <CopyCommandButton
            command="npx shadcn@latest add 8bit-login-page"
            copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-login-page.json`}
          />
          <OpenInV0Button name="8bit-login-page" className="w-fit" />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[400px] relative border rounded-md">
        <div className="w-full">
          <LoginPage />
        </div>
      </div>
    </div>
  )
}
