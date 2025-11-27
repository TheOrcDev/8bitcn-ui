type IconProps = {
  className?: string;
  size?: number;
};

export function HomeIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      aria-label="home"
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      stroke="currentColor"
      strokeWidth="0.25"
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Home</title>
      <rect height="14" rx="1" width="14" x="192" y="192" />
      <rect height="14" rx="1" width="14" x="176" y="192" />
      <rect height="14" rx="1" width="14" x="64" y="192" />
      <rect height="14" rx="1" width="14" x="48" y="176" />
      <rect height="14" rx="1" width="14" x="48" y="192" />
      <rect height="14" rx="1" width="14" x="192" y="160" />
      <rect height="14" rx="1" width="14" x="192" y="176" />
      <rect height="14" rx="1" width="14" x="48" y="160" />
      <rect height="14" rx="1" width="14" x="96" y="176" />
      <rect height="14" rx="1" width="14" x="96" y="160" />
      <rect height="14" rx="1" width="14" x="144" y="176" />
      <rect height="14" rx="1" width="14" x="144" y="160" />
      <rect height="14" rx="1" width="14" x="48" y="144" />
      <rect height="14" rx="1" width="14" x="48" y="128" />
      <rect height="14" rx="1" width="14" x="192" y="144" />
      <rect height="14" rx="1" width="14" x="192" y="128" />
      <rect height="14" rx="1" width="14" x="80" y="192" />
      <rect height="14" rx="1" width="14" x="96" y="192" />
      <rect height="14" rx="1" width="14" x="112" y="192" />
      <rect height="14" rx="1" width="14" x="128" y="192" />
      <rect height="14" rx="1" width="14" x="144" y="192" />
      <rect height="14" rx="1" width="14" x="96" y="144" />
      <rect height="14" rx="1" width="14" x="96" y="128" />
      <rect height="14" rx="1" width="14" x="144" y="128" />
      <rect height="14" rx="1" width="14" x="112" y="128" />
      <rect height="14" rx="1" width="14" x="128" y="128" />
      <rect height="14" rx="1" width="14" x="144" y="144" />
      <rect height="14" rx="1" width="14" x="160" y="192" />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 110 78)"
        width="14"
      />
      <rect height="14" rx="1" transform="matrix(0 -1 -1 0 94 94)" width="14" />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 190 110)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 78 110)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 126 62)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 158 78)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 142 62)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 206 126)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 62 126)"
        width="14"
      />
      <rect
        height="14"
        rx="1"
        transform="matrix(0 -1 -1 0 174 94)"
        width="14"
      />
    </svg>
  );
}

export function InboxIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Inbox</title>
      <rect
        fill="none"
        height="10"
        stroke="currentColor"
        strokeWidth="2"
        width="12"
        x="2"
        y="4"
      />
      <rect fill="currentColor" height="2" width="8" x="4" y="6" />
      <rect fill="currentColor" height="2" width="6" x="4" y="9" />
      <rect fill="currentColor" height="2" width="4" x="4" y="12" />
    </svg>
  );
}

export function CalendarIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Calendar</title>
      <rect
        fill="none"
        height="11"
        stroke="currentColor"
        strokeWidth="2"
        width="12"
        x="2"
        y="3"
      />
      <rect fill="currentColor" height="3" width="12" x="2" y="3" />
      <rect fill="currentColor" height="2" width="2" x="4" y="1" />
      <rect fill="currentColor" height="2" width="2" x="10" y="1" />
      <rect fill="currentColor" height="2" width="2" x="4" y="7" />
      <rect fill="currentColor" height="2" width="2" x="7" y="7" />
      <rect fill="currentColor" height="2" width="2" x="10" y="7" />
      <rect fill="currentColor" height="2" width="2" x="4" y="10" />
      <rect fill="currentColor" height="2" width="2" x="7" y="10" />
      <rect fill="currentColor" height="2" width="2" x="10" y="10" />
    </svg>
  );
}

export function SearchIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Search</title>
      <circle
        cx="6"
        cy="6"
        fill="none"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        fill="currentColor"
        height="2"
        transform="rotate(45 11 10)"
        width="4"
        x="9"
        y="9"
      />
    </svg>
  );
}

export function SettingsIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Settings</title>
      <rect fill="currentColor" height="2" width="4" x="6" y="2" />
      <rect fill="currentColor" height="2" width="6" x="5" y="4" />
      <rect fill="currentColor" height="2" width="8" x="4" y="6" />
      <rect fill="currentColor" height="2" width="6" x="5" y="8" />
      <rect fill="currentColor" height="2" width="4" x="6" y="10" />
      <rect fill="currentColor" height="2" width="2" x="7" y="12" />
    </svg>
  );
}

export function ActivityIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Activity</title>
      <rect fill="currentColor" height="2" width="2" x="2" y="12" />
      <rect fill="currentColor" height="6" width="2" x="5" y="8" />
      <rect fill="currentColor" height="10" width="2" x="8" y="4" />
      <rect fill="currentColor" height="8" width="2" x="11" y="6" />
    </svg>
  );
}

export function MenuIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Menu</title>
      <rect fill="currentColor" height="2" width="12" x="2" y="3" />
      <rect fill="currentColor" height="2" width="12" x="2" y="7" />
      <rect fill="currentColor" height="2" width="12" x="2" y="11" />
    </svg>
  );
}

export function SunIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Sun</title>
      <circle cx="8" cy="8" fill="currentColor" r="3" />
      <rect fill="currentColor" height="2" width="2" x="7" y="1" />
      <rect fill="currentColor" height="2" width="2" x="7" y="13" />
      <rect fill="currentColor" height="2" width="2" x="1" y="7" />
      <rect fill="currentColor" height="2" width="2" x="13" y="7" />
      <rect fill="currentColor" height="2" width="2" x="3" y="3" />
      <rect fill="currentColor" height="2" width="2" x="11" y="11" />
      <rect fill="currentColor" height="2" width="2" x="11" y="3" />
      <rect fill="currentColor" height="2" width="2" x="3" y="11" />
    </svg>
  );
}

export function MoonIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Moon</title>
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
      className={`retro ${className}`}
      fill="currentColor"
      height={size}
      viewBox="0 0 16 16"
      width={size}
    >
      <title>Panel Left</title>
      <rect fill="currentColor" height="12" width="6" x="2" y="2" />
      <rect
        fill="none"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        width="5"
        x="9"
        y="2"
      />
    </svg>
  );
}
