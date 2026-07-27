import Link from "next/link";

import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/components/ui/button";

interface ComponentPreviewProps {
  children: React.ReactNode;
  fullPageHref?: string;
  name: string;
  title: string;
}

export default function ComponentPreview({
  children,
  fullPageHref,
  name,
  title,
}: ComponentPreviewProps) {
  return (
    <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-muted-foreground text-sm sm:pl-3">{title}</h2>

        <div className="flex flex-wrap items-center gap-2">
          {fullPageHref ? (
            <Button asChild size="sm" variant="outline">
              <Link href={fullPageHref}>View full page</Link>
            </Button>
          ) : null}
          <OpenInV0Button className="w-fit" name={name} />
        </div>
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
}
