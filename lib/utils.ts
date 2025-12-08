import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export const truncate = (
  str: string | null | undefined,
  length: number
): string | null => {
  if (!str || str.length <= length) return str ?? null;
  return `${str.slice(0, length - 3)}...`;
};