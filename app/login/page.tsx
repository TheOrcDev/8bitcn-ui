import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import { LoginForm } from "@/components/ui/8bit/blocks/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          {/** biome-ignore lint/a11y/useValidAnchor: We're linking to the top of the page */}
          <a className="flex items-center gap-2 font-medium" href="#">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          alt="Login background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          height={1200}
          src="/placeholder.svg"
          width={1200}
        />
      </div>
    </div>
  );
}
