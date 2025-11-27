"use client";

import { toast as sonnerToast } from "sonner";

import "./styles/retro.css";

export function toast(message: string) {
  return sonnerToast.custom((id) => <Toast id={id} title={message} />);
}

type ToastProps = {
  id: string | number;
  title: string;
};

function Toast(props: ToastProps) {
  const { title } = props;

  return (
    <div className={`relative ${"retro"}`}>
      <div className="flex w-full items-center rounded-lg bg-background p-4 shadow-lg ring-1 ring-black/5 md:max-w-[364px]">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="font-medium text-sm">{title}</p>
          </div>
        </div>
      </div>

      <div className="-top-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-top-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute left-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="-bottom-1.5 absolute right-1.5 h-1.5 w-1/2 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute right-0 bottom-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-left-1.5 absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute top-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="-right-1.5 absolute bottom-1 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  );
}
