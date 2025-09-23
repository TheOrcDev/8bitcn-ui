import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function HomeIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.25"
      className={`retro ${className}`}
      aria-label="home"
    >
      <rect x="192" y="192" width="14" height="14" rx="1"></rect>
      <rect x="176" y="192" width="14" height="14" rx="1"></rect>
      <rect x="64" y="192" width="14" height="14" rx="1"></rect>
      <rect x="48" y="176" width="14" height="14" rx="1"></rect>
      <rect x="48" y="192" width="14" height="14" rx="1"></rect>
      <rect x="192" y="160" width="14" height="14" rx="1"></rect>
      <rect x="192" y="176" width="14" height="14" rx="1"></rect>
      <rect x="48" y="160" width="14" height="14" rx="1"></rect>
      <rect x="96" y="176" width="14" height="14" rx="1"></rect>
      <rect x="96" y="160" width="14" height="14" rx="1"></rect>
      <rect x="144" y="176" width="14" height="14" rx="1"></rect>
      <rect x="144" y="160" width="14" height="14" rx="1"></rect>
      <rect x="48" y="144" width="14" height="14" rx="1"></rect>
      <rect x="48" y="128" width="14" height="14" rx="1"></rect>
      <rect x="192" y="144" width="14" height="14" rx="1"></rect>
      <rect x="192" y="128" width="14" height="14" rx="1"></rect>
      <rect x="80" y="192" width="14" height="14" rx="1"></rect>
      <rect x="96" y="192" width="14" height="14" rx="1"></rect>
      <rect x="112" y="192" width="14" height="14" rx="1"></rect>
      <rect x="128" y="192" width="14" height="14" rx="1"></rect>
      <rect x="144" y="192" width="14" height="14" rx="1"></rect>
      <rect x="96" y="144" width="14" height="14" rx="1"></rect>
      <rect x="96" y="128" width="14" height="14" rx="1"></rect>
      <rect x="144" y="128" width="14" height="14" rx="1"></rect>
      <rect x="112" y="128" width="14" height="14" rx="1"></rect>
      <rect x="128" y="128" width="14" height="14" rx="1"></rect>
      <rect x="144" y="144" width="14" height="14" rx="1"></rect>
      <rect x="160" y="192" width="14" height="14" rx="1"></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 110 78)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 94 94)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 190 110)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 78 110)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 126 62)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 158 78)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 142 62)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 206 126)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 62 126)"
      ></rect>
      <rect
        width="14"
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 174 94)"
      ></rect>
    </svg>
  );
}

export function InboxIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect
        x="2"
        y="4"
        width="12"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="4" y="6" width="8" height="2" fill="currentColor" />
      <rect x="4" y="9" width="6" height="2" fill="currentColor" />
      <rect x="4" y="12" width="4" height="2" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect
        x="2"
        y="3"
        width="12"
        height="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="2" y="3" width="12" height="3" fill="currentColor" />
      <rect x="4" y="1" width="2" height="2" fill="currentColor" />
      <rect x="10" y="1" width="2" height="2" fill="currentColor" />
      <rect x="4" y="7" width="2" height="2" fill="currentColor" />
      <rect x="7" y="7" width="2" height="2" fill="currentColor" />
      <rect x="10" y="7" width="2" height="2" fill="currentColor" />
      <rect x="4" y="10" width="2" height="2" fill="currentColor" />
      <rect x="7" y="10" width="2" height="2" fill="currentColor" />
      <rect x="10" y="10" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <circle
        cx="6"
        cy="6"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="9"
        y="9"
        width="4"
        height="2"
        transform="rotate(45 11 10)"
        fill="currentColor"
      />
    </svg>
  );
}

export function SettingsIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect x="6" y="2" width="4" height="2" fill="currentColor" />
      <rect x="5" y="4" width="6" height="2" fill="currentColor" />
      <rect x="4" y="6" width="8" height="2" fill="currentColor" />
      <rect x="5" y="8" width="6" height="2" fill="currentColor" />
      <rect x="6" y="10" width="4" height="2" fill="currentColor" />
      <rect x="7" y="12" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function ActivityIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect x="2" y="12" width="2" height="2" fill="currentColor" />
      <rect x="5" y="8" width="2" height="6" fill="currentColor" />
      <rect x="8" y="4" width="2" height="10" fill="currentColor" />
      <rect x="11" y="6" width="2" height="8" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect x="2" y="3" width="12" height="2" fill="currentColor" />
      <rect x="2" y="7" width="12" height="2" fill="currentColor" />
      <rect x="2" y="11" width="12" height="2" fill="currentColor" />
    </svg>
  );
}

export function SunIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <rect x="7" y="1" width="2" height="2" fill="currentColor" />
      <rect x="7" y="13" width="2" height="2" fill="currentColor" />
      <rect x="1" y="7" width="2" height="2" fill="currentColor" />
      <rect x="13" y="7" width="2" height="2" fill="currentColor" />
      <rect x="3" y="3" width="2" height="2" fill="currentColor" />
      <rect x="11" y="11" width="2" height="2" fill="currentColor" />
      <rect x="11" y="3" width="2" height="2" fill="currentColor" />
      <rect x="3" y="11" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function MoonIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <path
        d="M8 2C8 2 6 4 6 8C6 12 8 14 8 14C4 12 2 8 2 4C2 0 4 0 8 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PanelLeftIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={`retro ${className}`}
      fill="currentColor"
    >
      <rect x="2" y="2" width="6" height="12" fill="currentColor" />
      <rect
        x="9"
        y="2"
        width="5"
        height="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
