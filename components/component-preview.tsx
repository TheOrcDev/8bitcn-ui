import { OpenInV0Button } from "@/components/open-in-v0-button";

interface ComponentPreviewProps {
  title: string;
  name: string;
  children: React.ReactNode;
}

export default function ComponentPreview({
  title,
  name,
  children,
}: ComponentPreviewProps) {
  return (
    <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-muted-foreground text-sm sm:pl-3">{title}</h2>

        <div className="flex items-center gap-2">
          <OpenInV0Button className="w-fit" name={name} />
        </div>
      </div>
      <div className="relative flex min-h-[400px] items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
}
