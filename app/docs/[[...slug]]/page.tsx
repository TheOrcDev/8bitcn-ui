import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import fm from "front-matter";
import { findNeighbour } from "fumadocs-core/page-tree";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import z from "zod";
import { DocsCopyPage } from "@/components/docs-copy-page";
import { DocsTableOfContents } from "@/components/docs-toc";
import { mythicSponsors } from "@/components/sponsors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";
import { mdxComponents } from "@/mdx-components";

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!(doc.title && doc.description)) {
    notFound();
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@shadcn",
    },
  };
}

async function CopyPageButton({
  pageUrl,
  slug,
}: {
  pageUrl: string;
  slug: string[];
}) {
  const page = source.getPage(slug);
  if (!page) {
    return null;
  }
  const raw = await page.data.getText("raw");
  return <DocsCopyPage page={raw} url={absoluteUrl(pageUrl)} />;
}

async function PageLinks({ slug }: { slug: string[] }) {
  const page = source.getPage(slug);
  if (!page) {
    return null;
  }
  const raw = await page.data.getText("raw");
  const { attributes } = fm(raw);
  const { links } = z
    .object({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    })
    .parse(attributes);

  if (!links) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 pt-4">
      {links?.doc && (
        <Badge asChild className="rounded-full" variant="secondary">
          <a href={links.doc} rel="noreferrer" target="_blank">
            Docs <IconArrowUpRight />
          </a>
        </Badge>
      )}
      {links?.api && (
        <Badge asChild className="rounded-full" variant="secondary">
          <a href={links.api} rel="noreferrer" target="_blank">
            API Reference <IconArrowUpRight />
          </a>
        </Badge>
      )}
    </div>
  );
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const doc = page.data;
  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <div className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 font-semibold text-4xl tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-border/50 border-t bg-background/80 px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <Suspense fallback={<Skeleton className="h-8 w-30" />}>
                    <CopyPageButton pageUrl={page.url} slug={params.slug} />
                  </Suspense>
                  {neighbours.previous && (
                    <Button
                      asChild
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      size="icon"
                      variant="secondary"
                    >
                      <Link href={neighbours.previous.url}>
                        <IconArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      asChild
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      size="icon"
                      variant="secondary"
                    >
                      <Link href={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <IconArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {doc.description && (
                <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
            <Suspense fallback={null}>
              <PageLinks slug={params.slug} />
            </Suspense>
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <Suspense fallback={<Skeleton className="size-full" />}>
              <MDX components={mdxComponents} />
            </Suspense>
          </div>
        </div>
        <div className="mx-auto hidden h-16 w-full max-w-2xl items-center gap-2 px-4 sm:flex md:px-0">
          {neighbours.previous && (
            <Button
              asChild
              className="shadow-none"
              size="sm"
              variant="secondary"
            >
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button
              asChild
              className="ml-auto shadow-none"
              size="sm"
              variant="secondary"
            >
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <IconArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        {doc.toc?.length ? (
          <div className="no-scrollbar overflow-y-auto px-8">
            <DocsTableOfContents toc={doc.toc} />

            <div className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-1 text-muted-foreground text-xs hover:underline"
                href="/sponsors"
              >
                <svg
                  aria-label="Sponsors"
                  className="size-5 dark:invert"
                  viewBox="0 0 256 256"
                >
                  <title>Sponsors</title>
                  <rect height="14" rx="1" width="14" x="40" y="104" />
                  <rect height="14" rx="1" width="14" x="40" y="88" />
                  <rect height="14" rx="1" width="14" x="184" y="72" />
                  <rect height="14" rx="1" width="14" x="56" y="72" />
                  <rect height="14" rx="1" width="14" x="120" y="88" />
                  <rect height="14" rx="1" width="14" x="104" y="88" />
                  <rect height="14" rx="1" width="14" x="136" y="88" />
                  <rect height="14" rx="1" width="14" x="104" y="72" />
                  <rect height="14" rx="1" width="14" x="136" y="72" />
                  <rect height="14" rx="1" width="14" x="200" y="88" />
                  <rect height="14" rx="1" width="14" x="200" y="104" />
                  <rect height="14" rx="1" width="14" x="56" y="88" />
                  <rect height="14" rx="1" width="14" x="88" y="88" />
                  <rect height="14" rx="1" width="14" x="72" y="88" />
                  <rect height="14" rx="1" width="14" x="184" y="88" />
                  <rect height="14" rx="1" width="14" x="168" y="88" />
                  <rect height="14" rx="1" width="14" x="152" y="88" />
                  <rect height="14" rx="1" width="14" x="120" y="104" />
                  <rect height="14" rx="1" width="14" x="104" y="104" />
                  <rect height="14" rx="1" width="14" x="136" y="104" />
                  <rect height="14" rx="1" width="14" x="56" y="104" />
                  <rect height="14" rx="1" width="14" x="88" y="104" />
                  <rect height="14" rx="1" width="14" x="72" y="104" />
                  <rect height="14" rx="1" width="14" x="184" y="104" />
                  <rect height="14" rx="1" width="14" x="168" y="104" />
                  <rect height="14" rx="1" width="14" x="152" y="104" />
                  <rect height="14" rx="1" width="14" x="104" y="120" />
                  <rect height="14" rx="1" width="14" x="88" y="120" />
                  <rect height="14" rx="1" width="14" x="120" y="120" />
                  <rect height="14" rx="1" width="14" x="72" y="120" />
                  <rect height="14" rx="1" width="14" x="56" y="120" />
                  <rect height="14" rx="1" width="14" x="152" y="120" />
                  <rect height="14" rx="1" width="14" x="136" y="120" />
                  <rect height="14" rx="1" width="14" x="184" y="120" />
                  <rect height="14" rx="1" width="14" x="168" y="120" />
                  <rect height="14" rx="1" width="14" x="104" y="136" />
                  <rect height="14" rx="1" width="14" x="88" y="136" />
                  <rect height="14" rx="1" width="14" x="120" y="136" />
                  <rect height="14" rx="1" width="14" x="72" y="136" />
                  <rect height="14" rx="1" width="14" x="152" y="136" />
                  <rect height="14" rx="1" width="14" x="136" y="136" />
                  <rect height="14" rx="1" width="14" x="168" y="136" />
                  <rect height="14" rx="1" width="14" x="104" y="152" />
                  <rect height="14" rx="1" width="14" x="88" y="152" />
                  <rect height="14" rx="1" width="14" x="120" y="152" />
                  <rect height="14" rx="1" width="14" x="104" y="168" />
                  <rect height="14" rx="1" width="14" x="152" y="152" />
                  <rect height="14" rx="1" width="14" x="136" y="152" />
                  <rect height="14" rx="1" width="14" x="136" y="168" />
                  <rect height="14" rx="1" width="14" x="120" y="168" />
                  <rect height="14" rx="1" width="14" x="120" y="184" />
                  <rect height="14" rx="1" width="14" x="88" y="56" />
                  <rect height="14" rx="1" width="14" x="72" y="56" />
                  <rect height="14" rx="1" width="14" x="168" y="56" />
                  <rect height="14" rx="1" width="14" x="152" y="56" />
                  <rect height="14" rx="1" width="14" x="168" y="72" />
                  <rect height="14" rx="1" width="14" x="152" y="72" />
                  <rect height="14" rx="1" width="14" x="88" y="72" />
                  <rect height="14" rx="1" width="14" x="72" y="72" />
                </svg>
                Sponsored by
              </Link>

              <div className="flex w-full flex-wrap items-center justify-center gap-3">
                {mythicSponsors.map((sponsor) => (
                  <Link
                    className="rounded-md border border-dashed p-2"
                    href={sponsor.url}
                    key={sponsor.name}
                    target="_blank"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        alt={sponsor.name}
                        className="dark:invert"
                        height={45}
                        src={sponsor.image}
                        width={45}
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-sm">{sponsor.name}</h3>
                        <p className="text-muted-foreground text-xs">
                          {sponsor.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-12" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
