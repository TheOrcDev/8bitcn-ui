import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-xs">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    className="inline-block text-xs underline-offset-4 hover:underline"
                    href="/"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full" type="submit">
                Login
              </Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-xs">
              Don&apos;t have an account?{" "}
              <a className="underline underline-offset-4" href="/">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
