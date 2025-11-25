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
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>

        <div className="flex items-center gap-2">
          <OpenInV0Button name={name} className="w-fit" />
        </div>
      </div>
      <div className="flex items-center p-10 justify-center min-h-[400px] relative">
        {children}
      </div>
    </div>
  );
}
