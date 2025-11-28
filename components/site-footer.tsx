import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="flex h-14 shrink-0 items-center gap-2 border-t border-dashed">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center gap-1 border-r border-l border-dashed px-4 lg:gap-2 lg:px-6">
        <p className="text-muted-foreground text-xs md:text-sm">
          Built by{" "}
          <Link className="underline" href="https://orcdev.com" target="_blank">
            OrcDev
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/contributors" target="_blank">
            Contributors
          </Link>
          . The source code is available on{" "}
          <Link
            className="underline"
            href="https://github.com/theorcdev/8bitcn-ui"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
