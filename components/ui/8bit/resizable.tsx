"use client";

import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <div className={cn("relative h-full w-full", className)}>
    <ResizablePrimitive.PanelGroup
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col"
      )}
      {...props}
    >
      {children}
      <div className="pointer-events-none absolute top-0 left-0 h-1.5 w-full bg-foreground dark:bg-ring" />
      <div className="pointer-events-none absolute bottom-0 h-1.5 w-full bg-foreground dark:bg-ring" />
      <div className="-left-1 pointer-events-none absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1 pointer-events-none absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1 pointer-events-none absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1 pointer-events-none absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </ResizablePrimitive.PanelGroup>
  </div>
);

function ResizablePanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return (
    <ResizablePrimitive.Panel className={cn(className)} {...props}>
      {children}
    </ResizablePrimitive.Panel>
  );
}

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "after:-translate-x-1/2 data-[panel-group-direction=vertical]:after:-translate-y-1/2 relative flex w-[1px] items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-[6px] data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 focus:dark:outline-ring [&[data-panel-group-direction=vertical]>div]:rotate-90",
      "bg-foreground dark:bg-ring",
      className
    )}
    {...props}
  >
    <div className="pointer-events-none absolute h-full w-[6px] border border-foreground bg-foreground dark:border-ring dark:bg-ring" />
    {withHandle && (
      <div className="relative z-10 aspect-video h-[20px] w-[12px] border-3 border-foreground dark:border-ring" />
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
