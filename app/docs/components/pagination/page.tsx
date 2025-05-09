import { Metadata } from "next"

import { paginationMetaData } from "@/lib/metadata"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/8bit/pagination"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Pagination",
  description: "Displays an 8-bit pagination component.",
  openGraph: {
    images: paginationMetaData,
  },
}

export default function PaginationPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Pagination</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-pagination.json`}
          command={"pnpm dlx shadcn@canary add 8bit-pagination"}
        />
      </div>
      <p className="text-muted-foreground">
        Displays an 8-bit pagination component.
      </p>
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit pagination component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-pagination" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />
      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-pagination.json`}
      />
      <h3 className="text-lg font-bold mt-10">Usage</h3>
      <Separator />
      <CodeSnippet>{`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/8bit/pagination"`}</CodeSnippet>
      <CodeSnippet>{`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`}</CodeSnippet>
      <h3 className="text-lg font-bold mt-10">Next.js</h3>
      <Separator />
      <p className="leading-[1.65rem] [&:not(:first-child)]:mt-6">
        By default the{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {`<PaginationLink />`}
        </code>{" "}
        component will render an{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {`<a />`}
        </code>{" "}
        tag.
      </p>

      <p className="leading-[1.65rem] [&:not(:first-child)]:mt-6">
        To use the Next.js{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {`<Link />`}
        </code>{" "}
        component, make the following updates to pagination.tsx.
      </p>

      <CodeSnippet>{`+ import Link from "next/link"

- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
-   <a>
+   <Link>
      // ...
-   </a>
+   </Link>
  </PaginationItem>
)
`}</CodeSnippet>
    </div>
  )
}
