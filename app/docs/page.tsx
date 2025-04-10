import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "./components/code-snippet";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Installation</h1>

        <h3 className="text-muted-foreground">
          How to install dependencies and structure your app.
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">TypeScript</h2>

        <Separator />

        <p>
          This project and the components are written in TypeScript. We
          recommend using TypeScript for your project as well.
        </p>
      </div>

      <Alert>
        <AlertTitle>Note:</AlertTitle>
        <AlertDescription>
          The following guide is for Tailwind v4. If you are using Tailwind v3,
          use shadcn@2.3.0.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">1. Create Project</h3>
        <p>
          Run the init command to create a new Next.js project or to setup an
          existing one:
        </p>
        <CodeSnippet>{`pnpm dlx shadcn@canary init`}</CodeSnippet>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">2. Add Components</h3>
        <p>You can now start adding components to your project.</p>
        <CodeSnippet>{`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-button.json`}</CodeSnippet>
        <p>
          The command above will add the Button component to your project. You
          can then import it like this:
        </p>
        <CodeSnippet>{`import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}</CodeSnippet>
      </div>
    </div>
  );
}
