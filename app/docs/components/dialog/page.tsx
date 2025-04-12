import { Button } from "@/components/ui/8bit/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog"
import { Input } from "@/components/ui/8bit/input"
import { Label } from "@/components/ui/8bit/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export default function DialogPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Dialog</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-dialog.json`}
          command={"pnpm dlx shadcn@canary add 8bit-dialog"}
        />
      </div>

      <p className="text-muted-foreground">
        A window overlaid on either the primary window or another dialog window,
        rendering the content underneath inert.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit dialog component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-dialog" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription className="text-xs">
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>

              <Label>Name</Label>
              <Input placeholder="Project name" />

              <Label>Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="svelte">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              <DialogFooter>
                <Button size="sm">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-dialog.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";
`}</CodeSnippet>

      <CodeSnippet>{`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription className="text-xs">
        Make changes to your profile here. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>

    <Label>Name</Label>
    <Input placeholder="Project name" className="max-w-72" />

    <Label>Framework</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="svelte">SvelteKit</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
        <SelectItem value="nuxt">Nuxt.js</SelectItem>
      </SelectContent>
    </Select>
    <DialogFooter>
      <Button size="sm">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</CodeSnippet>
    </div>
  )
}
