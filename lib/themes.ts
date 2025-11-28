export const Theme = {
  Default: "default",
  Sega: "sega",
  Gameboy: "gameboy",
  Atari: "atari",
  Nintendo: "nintendo",
  Arcade: "arcade",
  NeoGeo: "neo-geo",
  SoftPop: "soft-pop",
  Pacman: "pacman",
  VHS: "vhs",
  Cassette: "cassette",
  RustyByte: "rusty-byte",
  Zelda: "zelda",
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

const themes = [
  {
    name: Theme.Default,
    color: `:root {
    --radius: 0.65rem;
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0 0);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.145 0 0);
    --primary: oklch(0.205 0 0);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.97 0 0);
    --secondary-foreground: oklch(0.205 0 0);
    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.556 0 0);
    --accent: oklch(0.97 0 0);
    --accent-foreground: oklch(0.205 0 0);
    --destructive: oklch(0.577 0.245 27.325);
    --border: oklch(0.922 0 0);
    --input: oklch(0.922 0 0);
    --ring: oklch(0.708 0 0);
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
    --radius: 0rem;
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
    --card: oklch(0.205 0 0);
    --card-foreground: oklch(0.985 0 0);
    --popover: oklch(0.205 0 0);
    --popover-foreground: oklch(0.985 0 0);
    --primary: oklch(0.922 0 0);
    --primary-foreground: oklch(0.205 0 0);
    --secondary: oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);
    --muted: oklch(0.269 0 0);
    --muted-foreground: oklch(0.708 0 0);
    --accent: oklch(0.269 0 0);
    --accent-foreground: oklch(0.985 0 0);
    --destructive: oklch(0.704 0.191 22.216);
    --border: oklch(1 0 0 / 10%);
    --input: oklch(1 0 0 / 15%);
    --ring: oklch(0.556 0 0);
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.556 0 0);
  }`,
  },
  {
    name: Theme.Sega,
    color: `
    :root {
    --radius: 0rem;
    --primary: oklch(0.5 0.2 260);
    --primary-foreground: oklch(0.9 0.02 260);
    --background: oklch(0.85 0.1 220);
    --foreground: oklch(0.1 0.1 280);
    --card: oklch(0.85 0.1 220);
    --card-foreground: oklch(0.1 0.1 280);
    --popover: oklch(0.85 0.1 220);
    --popover-foreground: oklch(0.1 0.1 280);
    --secondary: oklch(0.5 0.2 260);
    --secondary-foreground: oklch(0.1 0.1 280);
    --muted: oklch(0.1 0.1 280);
    --muted-foreground: oklch(0.5 0.2 280);
    --accent: oklch(0.5 0.2 260);
    --accent-foreground: oklch(1 0 0);
    --destructive: oklch(0.6 0.2 20);
    --border: oklch(0.5 0.2 260);
    --input: oklch(0.5 0.2 260);
    --ring: oklch(0.5 0.2 260);
    --chart-1: oklch(0.5 0.2 260);
    --chart-2: oklch(0.3 0.2 260);
    --chart-3: oklch(0.7 0.1 250);
    --chart-4: oklch(0.6 0.15 250);
    --chart-5: oklch(0.4 0.15 250);
    --sidebar: oklch(0.85 0.1 220);
    --sidebar-foreground: oklch(0.1 0.1 280);
    --sidebar-primary: oklch(0.5 0.2 260);
    --sidebar-primary-foreground: oklch(0.9 0.02 260);
    --sidebar-accent: oklch(0.5 0.2 260);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.5 0.2 260);
    --sidebar-ring: oklch(0.5 0.2 260);

  .dark {
    --primary: oklch(0.5 0.2 260);
    --primary-foreground: oklch(0.9 0.02 260);
    --background: oklch(0.1 0.1 280);
    --foreground: oklch(0.9 0.02 260);
    --card: oklch(0.1 0.1 280);
    --card-foreground: oklch(0.9 0.02 260);
    --popover: oklch(0.1 0.1 280);
    --popover-foreground: oklch(0.9 0.02 260);
    --secondary: oklch(0.5 0.2 260);
    --secondary-foreground: oklch(0.9 0.02 260);
    --muted: oklch(0.5 0.2 260);
    --muted-foreground: oklch(0.85 0.1 220);
    --accent: oklch(0.5 0.2 260);
    --accent-foreground: oklch(1 0 0);
    --destructive: oklch(0.5 0.2 20);
    --border: oklch(0.5 0.2 260);
    --input: oklch(0.5 0.2 260);
    --ring: oklch(0.5 0.2 260);
    --chart-1: oklch(0.5 0.2 260);
    --chart-2: oklch(0.3 0.2 260);
    --chart-3: oklch(0.5 0.2 280);
    --chart-4: oklch(0.4 0.2 250);
    --chart-5: oklch(0.4 0.15 250);
    --sidebar: oklch(0.1 0.1 280);
    --sidebar-foreground: oklch(0.9 0.05 280);
    --sidebar-primary: oklch(0.5 0.2 280);
    --sidebar-primary-foreground: oklch(0.9 0.05 280);
    --sidebar-accent: oklch(0.5 0.2 280);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.5 0.2 280);
    --sidebar-ring: oklch(0.5 0.2 280);
  }
}`,
  },
  {
    name: Theme.Gameboy,
    color: `:root {
  --radius: 0rem;
  --primary: oklch(0.7 0.2 120);
  --primary-foreground: oklch(0.2 0.1 140);
  --background: oklch(0.8 0.2 140);
  --foreground: oklch(0.2 0.1 140);
  --card: oklch(0.8 0.2 140);
  --card-foreground: oklch(0.2 0.1 140);
  --popover: oklch(0.8 0.2 140);
  --popover-foreground: oklch(0.2 0.1 140);
  --secondary: oklch(0.7 0.2 120);
  --secondary-foreground: oklch(0.2 0.1 140);
  --muted: oklch(0.7 0.2 120);
  --muted-foreground: oklch(0.2 0.1 140);
  --accent: oklch(0.3 0.2 140);
  --accent-foreground: oklch(0.8 0.2 120);
  --destructive: oklch(0.5 0.3 30);
  --border: oklch(0.4 0.2 140);
  --input: oklch(0.4 0.2 140);
  --ring: oklch(0.8 0.2 120);
  --chart-1: oklch(0.4 0.2 140);
  --chart-2: oklch(0.3 0.2 140);
  --chart-3: oklch(0.4 0.2 140);
  --chart-4: oklch(0.4 0.2 140);
  --chart-5: oklch(0.4 0.2 140);
  --sidebar: oklch(0.8 0.2 140);
  --sidebar-foreground: oklch(0.2 0.1 140);
  --sidebar-primary: oklch(0.8 0.2 120);
  --sidebar-primary-foreground: oklch(0.2 0.1 140);
  --sidebar-accent: oklch(0.7 0.2 120);
  --sidebar-accent-foreground: oklch(0.2 0.1 140);
  --sidebar-border: oklch(0.4 0.2 140);
  --sidebar-ring: oklch(0.8 0.2 120);
}

.dark {
  --primary: oklch(0.7 0.2 120);
    --primary-foreground: oklch(0.2 0.1 140);
    --background: oklch(0.2 0.1 140);
    --foreground: oklch(0.8 0.2 120);
    --card: oklch(0.2 0.1 140);
    --card-foreground: oklch(0.8 0.2 120);
    --popover: oklch(0.2 0.1 140);
    --popover-foreground: oklch(0.8 0.2 120);
    --secondary: oklch(0.3 0.1 140);
    --secondary-foreground: oklch(0.8 0.2 120);
    --muted: oklch(0.3 0.1 140);
    --muted-foreground: oklch(0.7 0.2 120);
    --accent: oklch(0.4 0.2 140);
    --accent-foreground: oklch(0.8 0.2 120);
    --destructive: oklch(0.5 0.3 30);
    --border: oklch(0.4 0.2 140);
    --input: oklch(0.4 0.2 140);
    --ring: oklch(0.8 0.2 120);
    --chart-1: oklch(0.4 0.2 140);
    --chart-2: oklch(0.3 0.2 140);
    --chart-3: oklch(0.4 0.2 140);
    --chart-4: oklch(0.4 0.2 140);
    --chart-5: oklch(0.4 0.2 140);
    --sidebar: oklch(0.2 0.1 140);
    --sidebar-foreground: oklch(0.8 0.2 120);
    --sidebar-primary: oklch(0.4 0.2 140);
    --sidebar-primary-foreground: oklch(0.8 0.2 120);
    --sidebar-accent: oklch(0.3 0.1 140);
    --sidebar-accent-foreground: oklch(0.8 0.2 120);
    --sidebar-border: oklch(0.4 0.2 140);
    --sidebar-ring: oklch(0.8 0.2 120);
}`,
  },
  {
    name: Theme.Atari,
    color: `:root {
  --radius: 0rem;
  --primary: oklch(0.5 0.2 60);
  --primary-foreground: oklch(0 0 0);
  --background: oklch(0.7 0 0);
  --foreground: oklch(0 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0 0 0);
  --secondary: oklch(0.7 0 0);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.7 0 0);
  --muted-foreground: oklch(0 0 0);
  --accent: oklch(0.5 0.2 60);
  --accent-foreground: oklch(1 0 0);
  --destructive: oklch(0.5 0.3 20);
  --border: oklch(0.5 0.2 60);
  --input: oklch(0.7 0 0);
  --ring: oklch(0.7 0 0);
  --chart-1: oklch(0.7 0 0);
  --chart-2: oklch(0.5 0.2 60);
  --chart-3: oklch(0.9 0 0);
  --chart-4: oklch(0.7 0 0);
  --chart-5: oklch(0.5 0.3 280);
  --sidebar: oklch(0.9 0 0);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0.5 0.3 280);
  --sidebar-primary-foreground: oklch(0 0 0);
  --sidebar-accent: oklch(0.6 0.3 30);
  --sidebar-accent-foreground: oklch(1 0 0);
  --sidebar-border: oklch(0.7 0 0);
  --sidebar-ring: oklch(0.5 0.3 280);
}

.dark {
    --primary: oklch(0.4 0.2 60);
    --primary-foreground: oklch(0.9 0 0);
    --background: oklch(0.2 0 0);
    --foreground: oklch(0.9 0 0);
    --card: oklch(0.4 0 0);
    --card-foreground: oklch(0.9 0 0);
    --popover: oklch(0.4 0 0);
    --popover-foreground: oklch(0.9 0 0);
    --secondary: oklch(0.4 0 0);
    --secondary-foreground: oklch(0.9 0 0);
    --muted: oklch(0.4 0 0);
    --muted-foreground: oklch(0.7 0 0);
    --accent: oklch(0.4 0.2 60);
    --accent-foreground: oklch(1 0 0);
    --destructive: oklch(0.4 0.3 20);
    --border: oklch(0.4 0 0);
    --input: oklch(0.4 0 0);
    --ring: oklch(0 0 0);
    --chart-1: oklch(0 0 0);
    --chart-2: oklch(0.4 0.2 60);
    --chart-3: oklch(0.7 0 0);
    --chart-4: oklch(0.4 0 0);
    --chart-5: oklch(0.5 0.3 280);
    --sidebar: oklch(0.4 0 0);
    --sidebar-foreground: oklch(0.9 0 0);
    --sidebar-primary: oklch(0.5 0.3 280);
    --sidebar-primary-foreground: oklch(0.9 0 0);
    --sidebar-accent: oklch(0.5 0.3 20);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.4 0 0);
    --sidebar-ring: oklch(0.5 0.3 280);
}`,
  },
  {
    name: Theme.Nintendo,
    color: `
    :root {
    --radius: 0rem;
    --primary: oklch(0.5 0.2 280);
    --primary-foreground: oklch(0 0 0);
    --background: oklch(1 0 0);
    --foreground: oklch(0 0 0);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0 0 0);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0 0 0);
    --secondary: oklch(0.7 0 0);
    --secondary-foreground: oklch(0 0 0);
    --muted: oklch(0.7 0 0);
    --muted-foreground: oklch(0.4 0 0);
    --accent: oklch(0.7 0.1 260);
    --accent-foreground: oklch(1 0 0);
    --destructive: oklch(0.5 0.2 10);
    --border: oklch(0.5 0.2 280);
    --input: oklch(0.5 0.2 280);
    --ring: oklch(0.5 0.2 280);
    --chart-1: oklch(0.7 0 0);
    --chart-2: oklch(0.5 0.2 280);
    --chart-3: oklch(0.7 0 0);
    --chart-4: oklch(0.4 0 0);
    --chart-5: oklch(0.5 0.2 280);
    --sidebar: oklch(0.9 0 0);
    --sidebar-foreground: oklch(0 0 0);
    --sidebar-primary: oklch(0.5 0.2 280);
    --sidebar-primary-foreground: oklch(0 0 0);
    --sidebar-accent: oklch(0.7 0.1 260);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.7 0 0);
    --sidebar-ring: oklch(0.5 0.2 280);

  .dark {
    --primary: oklch(0.5 0.2 280);
    --primary-foreground: oklch(0.9 0.05 280);
    --background: oklch(0.16 0.05 260);
    --foreground: oklch(1 0 0);
    --card: oklch(0.2 0.06 260);
    --card-foreground: oklch(1 0 0);
    --popover: oklch(0.2 0.06 260);
    --popover-foreground: oklch(1 0 0);
    --secondary: oklch(0.4 0 0);
    --secondary-foreground: oklch(1 0 0);
    --muted: oklch(0.4 0 0);
    --muted-foreground: oklch(0.7 0 0);
    --accent: oklch(0.4 0.2 280);
    --accent-foreground: oklch(1 0 0);
    --destructive: oklch(0.4 0.2 10);
    --border: oklch(1 0 0);
    --input: oklch(0.5 0.2 280);
    --ring: oklch(0.7 0.15 250);
    --chart-1: oklch(0 0 0);
    --chart-2: oklch(0.2 0 0);
    --chart-3: oklch(0.4 0 0);
    --chart-4: oklch(0.4 0.2 10);
    --chart-5: oklch(0.5 0.2 280);
    --sidebar: oklch(0.2 0.06 260);
    --sidebar-foreground: oklch(0.9 0.05 280);
    --sidebar-primary: oklch(0.5 0.2 280);
    --sidebar-primary-foreground: oklch(0.9 0.05 280);
    --sidebar-accent: oklch(0.7 0.1 260);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.28 0.05 260);
    --sidebar-ring: oklch(0.5 0.2 280);
  }
}`,
  },
  {
    name: Theme.Arcade,
    color: `:root {
  --radius: 0rem;
  --primary: oklch(0.7 0.25 320);
  --primary-foreground: oklch(0.1 0.05 320);
  --background: oklch(0.98 0.01 280);
  --foreground: oklch(0.1 0.05 280);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.1 0.05 280);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1 0.05 280);
  --secondary: oklch(0.6 0.2 220);
  --secondary-foreground: oklch(0.1 0.05 220);
  --muted: oklch(0.95 0.02 280);
  --muted-foreground: oklch(0.4 0.1 280);
  --accent: oklch(0.8 0.25 60);
  --accent-foreground: oklch(0.1 0.05 60);
  --destructive: oklch(0.7 0.3 20);
  --border: oklch(0.7 0.25 320);
  --input: oklch(0.95 0.02 280);
  --ring: oklch(0.7 0.25 320);
  --chart-1: oklch(0.7 0.25 320);
  --chart-2: oklch(0.6 0.2 220);
  --chart-3: oklch(0.8 0.25 60);
  --chart-4: oklch(0.7 0.3 20);
  --chart-5: oklch(0.6 0.25 140);
  --sidebar: oklch(0.96 0.01 280);
  --sidebar-foreground: oklch(0.1 0.05 280);
  --sidebar-primary: oklch(0.7 0.25 320);
  --sidebar-primary-foreground: oklch(0.1 0.05 320);
  --sidebar-accent: oklch(0.6 0.2 220);
  --sidebar-accent-foreground: oklch(0.1 0.05 220);
  --sidebar-border: oklch(0.7 0.25 320);
  --sidebar-ring: oklch(0.7 0.25 320);
}

.dark {
  --primary: oklch(0.8 0.3 320);
  --primary-foreground: oklch(0.05 0.02 320);
  --background: oklch(0.02 0.01 280);
  --foreground: oklch(0.98 0.01 280);
  --card: oklch(0.05 0.02 280);
  --card-foreground: oklch(0.98 0.01 280);
  --popover: oklch(0.05 0.02 280);
  --popover-foreground: oklch(0.98 0.01 280);
  --secondary: oklch(0.7 0.25 220);
  --secondary-foreground: oklch(0.05 0.02 220);
  --muted: oklch(0.1 0.03 280);
  --muted-foreground: oklch(0.8 0.1 280);
  --accent: oklch(0.9 0.3 60);
  --accent-foreground: oklch(0.7 0.25 220);
  --destructive: oklch(0.8 0.35 20);
  --border: oklch(0.8 0.3 320);
  --input: oklch(0.1 0.03 280);
  --ring: oklch(0.6 0.25 320);
  --chart-1: oklch(0.8 0.3 320);
  --chart-2: oklch(0.7 0.25 220);
  --chart-3: oklch(0.9 0.3 60);
  --chart-4: oklch(0.8 0.35 20);
  --chart-5: oklch(0.7 0.3 140);
  --sidebar: oklch(0.03 0.01 280);
  --sidebar-foreground: oklch(0.98 0.01 280);
  --sidebar-primary: oklch(0.8 0.3 320);
  --sidebar-primary-foreground: oklch(0.05 0.02 320);
  --sidebar-accent: oklch(0.7 0.25 220);
  --sidebar-accent-foreground: oklch(0.05 0.02 220);
  --sidebar-border: oklch(0.8 0.3 320);
  --sidebar-ring: oklch(0.8 0.3 320);
}`,
  },
  {
    name: Theme.NeoGeo,
    color: `:root {
  --radius: 0rem;
  --primary: oklch(0.65 0.25 25);
  --primary-foreground: oklch(0.98 0.01 25);
  --background: oklch(0.98 0.03 25);
  --foreground: oklch(0.15 0.05 25);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.05 25);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.05 25);
  --secondary: oklch(0.9 0.02 25);
  --secondary-foreground: oklch(0.15 0.05 25);
  --muted: oklch(0.95 0.01 25);
  --muted-foreground: oklch(0.45 0.1 25);
  --accent: oklch(0.75 0.2 25);
  --accent-foreground: oklch(0.98 0.01 25);
  --destructive: oklch(0.7 0.3 20);
  --border: oklch(0.8 0.1 25);
  --input: oklch(0.95 0.01 25);
  --ring: oklch(0.65 0.25 25);
  --chart-1: oklch(0.65 0.25 25);
  --chart-2: oklch(0.45 0.2 25);
  --chart-3: oklch(0.8 0.15 25);
  --chart-4: oklch(0.6 0.25 25);
  --chart-5: oklch(0.7 0.2 25);
  --sidebar: oklch(0.96 0.01 25);
  --sidebar-foreground: oklch(0.15 0.05 25);
  --sidebar-primary: oklch(0.65 0.25 25);
  --sidebar-primary-foreground: oklch(0.98 0.01 25);
  --sidebar-accent: oklch(0.9 0.02 25);
  --sidebar-accent-foreground: oklch(0.15 0.05 25);
  --sidebar-border: oklch(0.8 0.1 25);
  --sidebar-ring: oklch(0.65 0.25 25);
}

.dark {
  --primary: oklch(0.75 0.3 25);
  --primary-foreground: oklch(0.05 0.02 25);
  --background: oklch(0.05 0.02 25);
  --foreground: oklch(0.95 0.01 25);
  --card: oklch(0.1 0.03 25);
  --card-foreground: oklch(0.95 0.01 25);
  --popover: oklch(0.1 0.03 25);
  --popover-foreground: oklch(0.95 0.01 25);
  --secondary: oklch(0.15 0.05 25);
  --secondary-foreground: oklch(0.95 0.01 25);
  --muted: oklch(0.15 0.05 25);
  --muted-foreground: oklch(0.7 0.1 25);
  --accent: oklch(0.2 0.08 25);
  --accent-foreground: oklch(0.95 0.01 25);
  --destructive: oklch(0.8 0.35 20);
  --border: oklch(0.2 0.08 25);
  --input: oklch(0.15 0.05 25);
  --ring: oklch(0.55 0.25 25);
  --chart-1: oklch(0.75 0.3 25);
  --chart-2: oklch(0.55 0.25 25);
  --chart-3: oklch(0.85 0.2 25);
  --chart-4: oklch(0.65 0.3 25);
  --chart-5: oklch(0.75 0.25 25);
  --sidebar: oklch(0.08 0.03 25);
  --sidebar-foreground: oklch(0.95 0.01 25);
  --sidebar-primary: oklch(0.75 0.3 25);
  --sidebar-primary-foreground: oklch(0.05 0.02 25);
  --sidebar-accent: oklch(0.15 0.05 25);
  --sidebar-accent-foreground: oklch(0.95 0.01 25);
  --sidebar-border: oklch(0.2 0.08 25);
  --sidebar-ring: oklch(0.75 0.3 25);
}`,
  },
  {
    name: Theme.SoftPop,
    color: `
  :root {
  --background: oklch(0.9789 0.0082 121.6272);
  --foreground: oklch(0 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0.5106 0.2301 276.9656);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.7038 0.123 182.5025);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.9551 0 0);
  --muted-foreground: oklch(0.3211 0 0);
  --accent: oklch(0.7686 0.1647 70.0804);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0 0 0);
  --input: oklch(0.5555 0 0);
  --ring: oklch(0.7853 0.1041 274.7134);
  --chart-1: oklch(0.5106 0.2301 276.9656);
  --chart-2: oklch(0.7038 0.123 182.5025);
  --chart-3: oklch(0.7686 0.1647 70.0804);
  --chart-4: oklch(0.6559 0.2118 354.3084);
  --chart-5: oklch(0.7227 0.192 149.5793);
  --sidebar: oklch(0.9789 0.0082 121.6272);
  --sidebar-foreground: oklch(0 0 0);
  --sidebar-primary: oklch(0.5106 0.2301 276.9656);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.7686 0.1647 70.0804);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(0 0 0);
  --sidebar-ring: oklch(0.7853 0.1041 274.7134);
  --font-sans: DM Sans, sans-serif;
  --font-serif: DM Sans, sans-serif;
  --font-mono: Space Mono, monospace;
  --radius: 0rem;
  --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-sm:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-md:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-lg:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-xl:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
  --tracking-normal: normal;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(0.2455 0.0217 257.2823);
  --card-foreground: oklch(1 0 0);
  --popover: oklch(0.2455 0.0217 257.2823);
  --popover-foreground: oklch(1 0 0);
  --primary: oklch(0.6801 0.1583 276.9349);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.7845 0.1325 181.912);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.3211 0 0);
  --muted-foreground: oklch(0.8452 0 0);
  --accent: oklch(0.879 0.1534 91.6054);
  --accent-foreground: oklch(0.7845 0.1325 181.912);
  --destructive: oklch(0.7106 0.1661 22.2162);
  --destructive-foreground: oklch(0 0 0);
  --border: oklch(0.4459 0 0);
  --input: oklch(1 0 0);
  --ring: oklch(0.6801 0.1583 276.9349);
  --chart-1: oklch(0.6801 0.1583 276.9349);
  --chart-2: oklch(0.7845 0.1325 181.912);
  --chart-3: oklch(0.879 0.1534 91.6054);
  --chart-4: oklch(0.7253 0.1752 349.7607);
  --chart-5: oklch(0.8003 0.1821 151.711);
  --sidebar: oklch(0 0 0);
  --sidebar-foreground: oklch(1 0 0);
  --sidebar-primary: oklch(0.6801 0.1583 276.9349);
  --sidebar-primary-foreground: oklch(0 0 0);
  --sidebar-accent: oklch(0.879 0.1534 91.6054);
  --sidebar-accent-foreground: oklch(0 0 0);
  --sidebar-border: oklch(1 0 0);
  --sidebar-ring: oklch(0.6801 0.1583 276.9349);
  --font-sans: DM Sans, sans-serif;
  --font-serif: DM Sans, sans-serif;
  --font-mono: Space Mono, monospace;
  --radius: 0rem;
  --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
  --shadow-sm:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-md:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-lg:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-xl:
    0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05),
    0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
  --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
}`,
  },
  {
    name: Theme.VHS,
    color: `
    :root {
  --background: oklch(0.9768 0.0142 308.299);
  --foreground: oklch(0.2905 0.1432 302.7167);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.2905 0.1432 302.7167);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2905 0.1432 302.7167);
  --primary: oklch(0.5915 0.2569 322.8961);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.5575 0.2525 302.3212);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.9464 0.0327 307.1745);
  --muted-foreground: oklch(0.4383 0.1983 303.7241);
  --accent: oklch(0.903 0.0732 319.6198);
  --accent-foreground: oklch(0.3807 0.1661 304.9874);
  --destructive: oklch(0.5246 0.199 3.9582);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.9024 0.0604 306.703);
  --input: oklch(0.9024 0.0604 306.703);
  --ring: oklch(0.5876 0.1389 241.9661);
  --chart-1: oklch(0.5915 0.2569 322.8961);
  --chart-2: oklch(0.5575 0.2525 302.3212);
  --chart-3: oklch(0.5876 0.1389 241.9661);
  --chart-4: oklch(0.6002 0.1038 184.704);
  --chart-5: oklch(0.5916 0.218 0.5844);
  --sidebar: oklch(0.9768 0.0142 308.299);
  --sidebar-foreground: oklch(0.2905 0.1432 302.7167);
  --sidebar-primary: oklch(0.5915 0.2569 322.8961);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.903 0.0732 319.6198);
  --sidebar-accent-foreground: oklch(0.3807 0.1661 304.9874);
  --sidebar-border: oklch(0.9024 0.0604 306.703);
  --sidebar-ring: oklch(0.5876 0.1389 241.9661);
  --font-sans: VT323;
  --font-serif: VT323;
  --font-mono: VT323;
  --radius: 0.3rem;
  --shadow-2xs: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.05);
  --shadow-xs: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.05);
  --shadow-sm:
    0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1),
    0px 1px 2px 0px hsl(198.6301 88.664% 48.4314% / 0.1);
  --shadow:
    0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1),
    0px 1px 2px 0px hsl(198.6301 88.664% 48.4314% / 0.1);
  --shadow-md:
    0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1),
    0px 2px 4px 0px hsl(198.6301 88.664% 48.4314% / 0.1);
  --shadow-lg:
    0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1),
    0px 4px 6px 0px hsl(198.6301 88.664% 48.4314% / 0.1);
  --shadow-xl:
    0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1),
    0px 8px 10px 0px hsl(198.6301 88.664% 48.4314% / 0.1);
  --shadow-2xl: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.25);
  --tracking-normal: 0.05rem;
  --spacing: 0.25rem;

  .dark {
    --background: oklch(0.166 0.0254 298.9423);
    --foreground: oklch(0.9024 0.0604 306.703);
    --card: oklch(0.1962 0.0365 301.0125);
    --card-foreground: oklch(0.9024 0.0604 306.703);
    --popover: oklch(0.1962 0.0365 301.0125);
    --popover-foreground: oklch(0.9024 0.0604 306.703);
    --primary: oklch(0.6668 0.2591 322.1499);
    --primary-foreground: oklch(0.2795 0.0368 260.031);
    --secondary: oklch(0.6268 0.2325 303.9004);
    --secondary-foreground: oklch(0.9464 0.0327 307.1745);
    --muted: oklch(0.2591 0.0611 305.6368);
    --muted-foreground: oklch(0.7161 0.0091 56.259);
    --accent: oklch(0.2932 0.1309 325.661);
    --accent-foreground: oklch(0.833 0.1322 321.4337);
    --destructive: oklch(0.5246 0.199 3.9582);
    --destructive-foreground: oklch(0.9482 0.0276 342.2585);
    --border: oklch(0.2905 0.1432 302.7167);
    --input: oklch(0.2905 0.1432 302.7167);
    --ring: oklch(0.6847 0.1479 237.3225);
    --chart-1: oklch(0.6668 0.2591 322.1499);
    --chart-2: oklch(0.6268 0.2325 303.9004);
    --chart-3: oklch(0.6847 0.1479 237.3225);
    --chart-4: oklch(0.7038 0.123 182.5025);
    --chart-5: oklch(0.6559 0.2118 354.3084);
    --sidebar: oklch(0.166 0.0254 298.9423);
    --sidebar-foreground: oklch(0.9024 0.0604 306.703);
    --sidebar-primary: oklch(0.6668 0.2591 322.1499);
    --sidebar-primary-foreground: oklch(0.2795 0.0368 260.031);
    --sidebar-accent: oklch(0.2932 0.1309 325.661);
    --sidebar-accent-foreground: oklch(0.833 0.1322 321.4337);
    --sidebar-border: oklch(0.2905 0.1432 302.7167);
    --sidebar-ring: oklch(0.6847 0.1479 237.3225);
    --font-sans: VT323;
    --font-serif: VT323;
    --font-mono: VT323;
    --radius: 0.3rem;
    --shadow-2xs: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1);
    --shadow-xs: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.1);
    --shadow-sm:
      0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.2),
      0px 1px 2px 0px hsl(198.6301 88.664% 48.4314% / 0.2);
    --shadow:
      0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.2),
      0px 1px 2px 0px hsl(198.6301 88.664% 48.4314% / 0.2);
    --shadow-md:
      0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.2),
      0px 2px 4px 0px hsl(198.6301 88.664% 48.4314% / 0.2);
    --shadow-lg:
      0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.2),
      0px 4px 6px 0px hsl(198.6301 88.664% 48.4314% / 0.2);
    --shadow-xl:
      0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.2),
      0px 8px 10px 0px hsl(198.6301 88.664% 48.4314% / 0.2);
    --shadow-2xl: 0px 0px 8px 1px hsl(198.6301 88.664% 48.4314% / 0.5);
  }
    `,
  },
  {
    name: Theme.Pacman,
    color: `
    :root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.2101 0.0318 264.6645);
  --card: oklch(0.9846 0.0017 247.8389);
  --card-foreground: oklch(0.2101 0.0318 264.6645);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2101 0.0318 264.6645);
  --primary: oklch(0.8369 0.1644 84.4286);
  --primary-foreground: oklch(0.2857 0.0639 53.8133);
  --secondary: oklch(0.6231 0.188 259.8145);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.967 0.0029 264.5419);
  --muted-foreground: oklch(0.551 0.0234 264.3637);
  --accent: oklch(0.9319 0.0316 255.5855);
  --accent-foreground: oklch(0.4244 0.1809 265.6377);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.8823 0.0571 254.1284);
  --input: oklch(0.8823 0.0571 254.1284);
  --ring: oklch(0.6231 0.188 259.8145);
  --chart-1: oklch(0.8369 0.1644 84.4286);
  --chart-2: oklch(0.6231 0.188 259.8145);
  --chart-3: oklch(0.6368 0.2078 25.3313);
  --chart-4: oklch(0.7227 0.192 149.5793);
  --chart-5: oklch(0.6268 0.2325 303.9004);
  --sidebar: oklch(0.9846 0.0017 247.8389);
  --sidebar-foreground: oklch(0.2101 0.0318 264.6645);
  --sidebar-primary: oklch(0.8369 0.1644 84.4286);
  --sidebar-primary-foreground: oklch(0.2857 0.0639 53.8133);
  --sidebar-accent: oklch(0.9319 0.0316 255.5855);
  --sidebar-accent-foreground: oklch(0.4244 0.1809 265.6377);
  --sidebar-border: oklch(0.8823 0.0571 254.1284);
  --sidebar-ring: oklch(0.6231 0.188 259.8145);
  --font-sans: Press Start 2P;
  --font-serif: Press Start 2P;
  --font-mono: Press Start 2P;
  --radius: 0rem;
  --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 0% / 0);
  --shadow-xs: 0px 0px 0px 0px hsl(0 0% 0% / 0);
  --shadow-sm:
    0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow: 0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
  --shadow-md:
    0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 2px 4px -1px hsl(0 0% 0% / 0);
  --shadow-lg:
    0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 4px 6px -1px hsl(0 0% 0% / 0);
  --shadow-xl:
    0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 8px 10px -1px hsl(0 0% 0% / 0);
  --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 0% / 0);
  --tracking-normal: 0.05rem;
  --spacing: 0.25rem;

  .dark {
    --background: oklch(0 0 0);
    --foreground: oklch(1 0 0);
    --card: oklch(0 0 0);
    --card-foreground: oklch(1 0 0);
    --popover: oklch(0 0 0);
    --popover-foreground: oklch(1 0 0);
    --primary: oklch(0.9451 0.1243 101.5399);
    --primary-foreground: oklch(0.2857 0.0639 53.8133);
    --secondary: oklch(0.6231 0.188 259.8145);
    --secondary-foreground: oklch(1 0 0);
    --muted: oklch(0.2046 0 0);
    --muted-foreground: oklch(0.7155 0 0);
    --accent: oklch(0.3791 0.1378 265.5222);
    --accent-foreground: oklch(0.9319 0.0316 255.5855);
    --destructive: oklch(0.5143 0.1978 16.935);
    --destructive-foreground: oklch(0.9356 0.0309 17.7172);
    --border: oklch(0.4882 0.2172 264.3763);
    --input: oklch(0.4882 0.2172 264.3763);
    --ring: oklch(0.7137 0.1434 254.624);
    --chart-1: oklch(0.9451 0.1243 101.5399);
    --chart-2: oklch(0.7137 0.1434 254.624);
    --chart-3: oklch(0.7106 0.1661 22.2162);
    --chart-4: oklch(0.8003 0.1821 151.711);
    --chart-5: oklch(0.7217 0.1767 305.5038);
    --sidebar: oklch(0 0 0);
    --sidebar-foreground: oklch(1 0 0);
    --sidebar-primary: oklch(0.9451 0.1243 101.5399);
    --sidebar-primary-foreground: oklch(0.2857 0.0639 53.8133);
    --sidebar-accent: oklch(0.3791 0.1378 265.5222);
    --sidebar-accent-foreground: oklch(0.9319 0.0316 255.5855);
    --sidebar-border: oklch(0.4882 0.2172 264.3763);
    --sidebar-ring: oklch(0.7137 0.1434 254.624);
    --font-sans: Press Start 2P;
    --font-serif: Press Start 2P;
    --font-mono: Press Start 2P;
    --radius: 0rem;
    --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 0% / 0);
    --shadow-xs: 0px 0px 0px 0px hsl(0 0% 0% / 0);
    --shadow-sm:
      0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
    --shadow:
      0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 1px 2px -1px hsl(0 0% 0% / 0);
    --shadow-md:
      0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 2px 4px -1px hsl(0 0% 0% / 0);
    --shadow-lg:
      0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 4px 6px -1px hsl(0 0% 0% / 0);
    --shadow-xl:
      0px 0px 0px 0px hsl(0 0% 0% / 0), 0px 8px 10px -1px hsl(0 0% 0% / 0);
    --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 0% / 0);
  }
    `,
  },
  {
    name: Theme.Cassette,
    color: `
      :root {
  --background: oklch(0.9613 0.0245 61.6527);
  --foreground: oklch(0.2273 0.0038 286.0916);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.2273 0.0038 286.0916);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2273 0.0038 286.0916);
  --primary: oklch(0.6831 0.1874 46.6481);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.9551 0 0);
  --secondary-foreground: oklch(0.2273 0.0038 286.0916);
  --muted: oklch(0.9551 0 0);
  --muted-foreground: oklch(0.5278 0 0);
  --accent: oklch(0.9597 0.023 65.4641);
  --accent-foreground: oklch(0.2273 0.0038 286.0916);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.9219 0 0);
  --input: oklch(0.9219 0 0);
  --ring: oklch(0.6831 0.1874 46.6481);
  --chart-1: oklch(0.6831 0.1874 46.6481);
  --chart-2: oklch(0.2273 0.0038 286.0916);
  --chart-3: oklch(0.792 0.1603 72.4384);
  --chart-4: oklch(0.5278 0 0);
  --chart-5: oklch(0.9597 0.023 65.4641);
  --sidebar: oklch(0.2273 0.0038 286.0916);
  --sidebar-foreground: oklch(0.9551 0 0);
  --sidebar-primary: oklch(0.6831 0.1874 46.6481);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.3492 0.0034 286.2208);
  --sidebar-accent-foreground: oklch(1 0 0);
  --sidebar-border: oklch(0.3492 0.0034 286.2208);
  --sidebar-ring: oklch(0.6831 0.1874 46.6481);
  --font-sans: Roboto Mono;
  --font-serif: serif;
  --font-mono: Roboto Mono;
  --radius: 0.3rem;
  --shadow-2xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
  --shadow-sm:
    0px 4px 8px -2px hsl(0 0% 0% / 0.1), 0px 1px 2px -3px hsl(0 0% 0% / 0.1);
  --shadow:
    0px 4px 8px -2px hsl(0 0% 0% / 0.1), 0px 1px 2px -3px hsl(0 0% 0% / 0.1);
  --shadow-md:
    0px 4px 8px -2px hsl(0 0% 0% / 0.1), 0px 2px 4px -3px hsl(0 0% 0% / 0.1);
  --shadow-lg:
    0px 4px 8px -2px hsl(0 0% 0% / 0.1), 0px 4px 6px -3px hsl(0 0% 0% / 0.1);
  --shadow-xl:
    0px 4px 8px -2px hsl(0 0% 0% / 0.1), 0px 8px 10px -3px hsl(0 0% 0% / 0.1);
  --shadow-2xl: 0px 4px 8px -2px hsl(0 0% 0% / 0.25);
  --tracking-normal: normal;
  --spacing: 0.25rem;

  .dark {
    --background: oklch(0.312 0.0224 55.4243);
    --foreground: oklch(0.9551 0 0);
    --card: oklch(0.2273 0.0038 286.0916);
    --card-foreground: oklch(0.9551 0 0);
    --popover: oklch(0.2273 0.0038 286.0916);
    --popover-foreground: oklch(0.9551 0 0);
    --primary: oklch(0.6831 0.1874 46.6481);
    --primary-foreground: oklch(1 0 0);
    --secondary: oklch(0.3492 0.0034 286.2208);
    --secondary-foreground: oklch(0.9551 0 0);
    --muted: oklch(0.3492 0.0034 286.2208);
    --muted-foreground: oklch(0.7058 0 0);
    --accent: oklch(0.3492 0.0034 286.2208);
    --accent-foreground: oklch(0.9551 0 0);
    --destructive: oklch(0.3958 0.1331 25.723);
    --destructive-foreground: oklch(0.9551 0 0);
    --border: oklch(0.3492 0.0034 286.2208);
    --input: oklch(0.3492 0.0034 286.2208);
    --ring: oklch(0.6831 0.1874 46.6481);
    --chart-1: oklch(0.6831 0.1874 46.6481);
    --chart-2: oklch(0.9551 0 0);
    --chart-3: oklch(0.792 0.1603 72.4384);
    --chart-4: oklch(0.7058 0 0);
    --chart-5: oklch(0.3492 0.0034 286.2208);
    --sidebar: oklch(0.1822 0 0);
    --sidebar-foreground: oklch(0.9551 0 0);
    --sidebar-primary: oklch(0.6831 0.1874 46.6481);
    --sidebar-primary-foreground: oklch(1 0 0);
    --sidebar-accent: oklch(0.2768 0 0);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.2768 0 0);
    --sidebar-ring: oklch(0.6831 0.1874 46.6481);
    --font-sans: Roboto Mono;
    --font-serif: serif;
    --font-mono: Roboto Mono;
    --radius: 0.3rem;
    --shadow-2xs: 0px 5px 10px -3px hsl(0 0% 0% / 0.13);
    --shadow-xs: 0px 5px 10px -3px hsl(0 0% 0% / 0.13);
    --shadow-sm:
      0px 5px 10px -3px hsl(0 0% 0% / 0.25),
      0px 1px 2px -4px hsl(0 0% 0% / 0.25);
    --shadow:
      0px 5px 10px -3px hsl(0 0% 0% / 0.25),
      0px 1px 2px -4px hsl(0 0% 0% / 0.25);
    --shadow-md:
      0px 5px 10px -3px hsl(0 0% 0% / 0.25),
      0px 2px 4px -4px hsl(0 0% 0% / 0.25);
    --shadow-lg:
      0px 5px 10px -3px hsl(0 0% 0% / 0.25),
      0px 4px 6px -4px hsl(0 0% 0% / 0.25);
    --shadow-xl:
      0px 5px 10px -3px hsl(0 0% 0% / 0.25),
      0px 8px 10px -4px hsl(0 0% 0% / 0.25);
    --shadow-2xl: 0px 5px 10px -3px hsl(0 0% 0% / 0.63);
  }
      `,
  },
  {
    name: Theme.RustyByte,
    color: `
    :root {
  --radius: 0.25rem;
  --primary: oklch(0.65 0.18 40);
  --primary-foreground: oklch(0.98 0.02 95);
  --background: oklch(0.96 0.02 95);
  --foreground: oklch(0.2 0.05 40);
  --card: oklch(0.96 0.02 95);
  --card-foreground: oklch(0.2 0.05 40);
  --popover: oklch(0.96 0.02 95);
  --popover-foreground: oklch(0.2 0.05 40);
  --secondary: oklch(0.85 0.1 50);
  --secondary-foreground: oklch(0.25 0.06 40);
  --muted: oklch(0.9 0.05 80);
  --muted-foreground: oklch(0.45 0.05 40);
  --accent: oklch(0.7 0.15 30);
  --accent-foreground: oklch(0.98 0.02 95);
  --destructive: oklch(0.55 0.25 20);
  --border: oklch(0.82 0.05 60);
  --input: oklch(0.82 0.05 60);
  --ring: oklch(0.65 0.18 40);
  --chart-1: oklch(0.65 0.18 40);
  --chart-2: oklch(0.55 0.15 20);
  --chart-3: oklch(0.75 0.12 50);
  --chart-4: oklch(0.5 0.1 60);
  --chart-5: oklch(0.7 0.2 30);
  --sidebar: oklch(0.9 0.05 80);
  --sidebar-foreground: oklch(0.2 0.05 40);
  --sidebar-primary: oklch(0.65 0.18 40);
  --sidebar-primary-foreground: oklch(0.98 0.02 95);
  --sidebar-accent: oklch(0.75 0.12 50);
  --sidebar-accent-foreground: oklch(0.2 0.05 40);
  --sidebar-border: oklch(0.82 0.05 60);
  --sidebar-ring: oklch(0.65 0.18 40);

  .dark {
    --primary: oklch(0.7 0.2 40);
    --primary-foreground: oklch(0.1 0.02 40);
    --background: oklch(0.15 0.05 40);
    --foreground: oklch(0.95 0.02 95);
    --card: oklch(0.18 0.05 40);
    --card-foreground: oklch(0.95 0.02 95);
    --popover: oklch(0.18 0.05 40);
    --popover-foreground: oklch(0.95 0.02 95);
    --secondary: oklch(0.35 0.08 40);
    --secondary-foreground: oklch(0.95 0.02 95);
    --muted: oklch(0.25 0.05 40);
    --muted-foreground: oklch(0.8 0.05 80);
    --accent: oklch(0.6 0.15 30);
    --accent-foreground: oklch(0.98 0.02 95);
    --destructive: oklch(0.55 0.25 20);
    --border: oklch(0.25 0.05 40);
    --input: oklch(0.25 0.05 40);
    --ring: oklch(0.5 0.2 40);
    --chart-1: oklch(0.65 0.18 40);
    --chart-2: oklch(0.55 0.15 20);
    --chart-3: oklch(0.75 0.12 50);
    --chart-4: oklch(0.5 0.1 60);
    --chart-5: oklch(0.7 0.2 30);
    --sidebar: oklch(0.18 0.05 40);
    --sidebar-foreground: oklch(0.95 0.02 95);
    --sidebar-primary: oklch(0.7 0.2 40);
    --sidebar-primary-foreground: oklch(0.95 0.02 95);
    --sidebar-accent: oklch(0.55 0.15 20);
    --sidebar-accent-foreground: oklch(0.95 0.02 95);
    --sidebar-border: oklch(0.25 0.05 40);
    --sidebar-ring: oklch(0.7 0.2 40);
  }
    `,
  },

  {
    name: Theme.Zelda,
    color: `
   :root {
  --radius: 0.25rem;

  --primary: oklch(0.75 0.2 90);
  --primary-foreground: oklch(0.1 0.02 10);
  --background: oklch(0.95 0.02 95); /* light parchment */
  --foreground: oklch(0.5 0.15 120); /* deep forest green */
  --card: oklch(0.96 0.02 95);
  --card-foreground: oklch(0.15 0.05 120);
  --popover: oklch(0.96 0.02 95);
  --popover-foreground: oklch(0.15 0.05 120);
  --secondary: oklch(0.5 0.15 120);
  --secondary-foreground: oklch(0.95 0.02 95);
  --muted: oklch(0.9 0.02 120);
  --muted-foreground: oklch(0.4 0.05 120);
  --accent: oklch(0.85 0.2 90);
  --accent-foreground: oklch(0.1 0.02 10);
  --destructive: oklch(0.55 0.25 30);
  --border: oklch(0.6 0.05 90);
  --input: oklch(0.6 0.05 90);
  --ring: oklch(0.75 0.2 90);
  --chart-1: oklch(0.75 0.2 90); /* golden */
  --chart-2: oklch(0.5 0.15 120); /* forest green */
  --chart-3: oklch(0.85 0.2 90); /* light gold */
  --chart-4: oklch(0.15 0.05 120); /* dark green */
  --chart-5: oklch(0.95 0.02 95); /* parchment */
  --sidebar: oklch(0.9 0.02 95);
  --sidebar-foreground: oklch(0.15 0.05 120);
  --sidebar-primary: oklch(0.75 0.2 90);
  --sidebar-primary-foreground: oklch(0.1 0.02 10);
  --sidebar-accent: oklch(0.5 0.15 120);
  --sidebar-accent-foreground: oklch(0.95 0.02 95);
  --sidebar-border: oklch(0.6 0.05 90);
  --sidebar-ring: oklch(0.75 0.2 90);

  .dark {
    --primary: oklch(0.85 0.2 90);
    --primary-foreground: oklch(0.05 0.02 10);
    --background: oklch(0.15 0.05 120);
    --foreground: oklch(0.95 0.02 95);
    --card: oklch(0.12 0.02 20);
    --card-foreground: oklch(0.95 0.02 95);
    --popover: oklch(0.12 0.02 20);
    --popover-foreground: oklch(0.95 0.02 95);
    --secondary: oklch(0.35 0.1 120);
    --secondary-foreground: oklch(0.95 0.02 95);
    --muted: oklch(0.25 0.02 120);
    --muted-foreground: oklch(0.8 0.02 95);
    --accent: oklch(0.9 0.2 90);
    --accent-foreground: oklch(0.05 0.02 10);
    --destructive: oklch(0.55 0.25 30);
    --border: oklch(0.25 0.02 90);
    --input: oklch(0.25 0.02 90);
    --ring: oklch(0.35 0.1 120);
    --chart-1: oklch(0.75 0.2 90);
    --chart-2: oklch(0.5 0.15 120);
    --chart-3: oklch(0.85 0.2 90);
    --chart-4: oklch(0.15 0.05 120);
    --chart-5: oklch(0.1 0.02 20);
    --sidebar: oklch(0.12 0.02 20);
    --sidebar-foreground: oklch(0.95 0.02 95);
    --sidebar-primary: oklch(0.85 0.2 90);
    --sidebar-primary-foreground: oklch(0.05 0.02 10);
    --sidebar-accent: oklch(0.5 0.15 120);
    --sidebar-accent-foreground: oklch(0.95 0.02 95);
    --sidebar-border: oklch(0.25 0.02 90);
    --sidebar-ring: oklch(0.85 0.2 90);
  }
    `,
  },
];

export const getThemeCode = (theme: Theme) =>
  themes.find((t) => t.name === theme)?.color;
