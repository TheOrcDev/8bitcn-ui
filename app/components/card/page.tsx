import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { OpenInV0Button } from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import { Input } from "@/components/ui/8bit/input";
import { Button } from "@/components/ui/8bit/button";

export default function TextareaPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-card.json`}
          command={"pnpm dlx shadcn@canary add 8bit-card"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a card or a component that looks like a 8-bit card.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit card component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-card" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] max-w-xl mx-auto relative">
          <Card className="max-w-lg">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription className="text-xs">
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input placeholder="Project name" className="max-w-72" />
              <Input placeholder="Framework" className="max-w-72" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Create</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
