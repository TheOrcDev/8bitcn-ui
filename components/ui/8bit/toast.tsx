"use client";

import React from "react";

import { toast as sonnerToast } from "sonner";

import "./styles/retro.css";

export function toast(toast: string) {
  return sonnerToast.custom((id) => <Toast id={id} title={toast} />);
}

interface ToastProps {
  id: string | number;
  title: string;
}

function Toast(props: ToastProps) {
  const { title } = props;

  return (
    <div className={`relative ${"retro"}`}>
      <div className="flex rounded-lg bg-background shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="text-sm font-medium">{title}</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  );
}
