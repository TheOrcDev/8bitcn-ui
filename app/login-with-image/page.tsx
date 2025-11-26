import { LoginForm } from "@/components/ui/8bit/blocks/login-form-with-image";

export default function LoginWithImagePage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
