"use client";

import { Command as CommandPrimitive } from "cmdk";
import { Separator } from "@/components/ui/8bit/separator";
import {
  Command as ShadcnCommand,
  CommandDialog as ShadcnCommandDialog,
  CommandEmpty as ShadcnCommandEmpty,
  CommandGroup as ShadcnCommandGroup,
  CommandItem as ShadcnCommandItem,
  CommandList as ShadcnCommandList,
  CommandSeparator as ShadcnCommandSeparator,
  CommandShortcut as ShadcnCommandShortcut,
} from "@/components/ui/command";
import {
  type Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <div className={cn("!p-0 relative", className)}>
      <ShadcnCommand
        className={cn(
          "!w-full flex h-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
          "retro",
          className
        )}
        data-slot="command"
        {...props}
      />

      <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute top-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute bottom-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <ShadcnCommandDialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </ShadcnCommandDialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      className="flex h-10 items-center gap-2 border-b px-3"
      data-slot="command-input-wrapper"
    >
      <svg
        aria-label="search"
        fill="currentColor"
        height="30"
        stroke="currentColor"
        strokeWidth="0.25"
        viewBox="0 0 256 256"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="14" rx="1" width="14" x="88" y="56" />
        <rect height="14" rx="1" width="14" x="72" y="72" />
        <rect height="14" rx="1" width="14" x="56" y="88" />
        <rect height="14" rx="1" width="14" x="56" y="104" />
        <rect height="14" rx="1" width="14" x="56" y="120" />
        <rect height="14" rx="1" width="14" x="72" y="136" />
        <rect height="14" rx="1" width="14" x="88" y="152" />
        <rect height="14" rx="1" width="14" x="104" y="152" />
        <rect height="14" rx="1" width="14" x="120" y="152" />
        <rect height="14" rx="1" width="14" x="136" y="136" />
        <rect height="14" rx="1" width="14" x="152" y="120" />
        <rect height="14" rx="1" width="14" x="152" y="104" />
        <rect height="14" rx="1" width="14" x="152" y="88" />
        <rect height="14" rx="1" width="14" x="136" y="72" />
        <rect height="14" rx="1" width="14" x="120" y="56" />
        <rect height="14" rx="1" width="14" x="104" y="56" />
        <rect height="14" rx="1" width="14" x="152" y="152" />
        <rect height="14" rx="1" width="14" x="168" y="168" />
        <rect height="14" rx="1" width="14" x="184" y="184" />
      </svg>
      <CommandPrimitive.Input
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        data-slot="command-input"
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <ShadcnCommandList
      className={cn(
        "max-h-[320px] scroll-py-1 overflow-y-auto overflow-x-hidden",
        "retro",
        className
      )}
      data-slot="command-list"
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <ShadcnCommandEmpty
      className="py-6 text-center text-sm"
      data-slot="command-empty"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <ShadcnCommandGroup
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
        "retro",
        className
      )}
      data-slot="command-group"
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <ShadcnCommandSeparator
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:bg-[length:16px_8px] data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--foreground)_75%,transparent_75%)] data-[orientation=vertical]:bg-[length:2px_16px] data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--foreground)_75%,transparent_75%)] dark:data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--ring)_75%,transparent_75%)] dark:data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--ring)_75%,transparent_75%)]",
        "retro",
        className
      )}
      data-slot="command-separator"
      {...props}
    >
      <Separator />
    </ShadcnCommandSeparator>
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <ShadcnCommandItem
      className={cn(
        "rounded-none border-ring/0 border-y-3 border-dashed hover:border-foreground dark:hover:border-ring",
        className
      )}
      data-slot="command-item"
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <ShadcnCommandShortcut className={cn("", "retro", className)} {...props} />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
