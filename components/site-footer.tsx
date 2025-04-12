import React from "react"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="flex h-14 shrink-0 items-center gap-2 border-t border-dashed">
      <div className="flex w-full h-full items-center gap-1 px-4 lg:gap-2 lg:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <p className="text-xs md:text-sm text-muted-foreground">
          Built by{" "}
          <Link href="https://orcdev.com" className="underline" target="_blank">
            OrcDev
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/theorcdev/8bitcn-ui"
            className="underline"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
