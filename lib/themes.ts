export enum Theme {
  Default = "default",
  Sega = "sega",
  Gameboy = "gameboy",
  Atari = "atari",
  Nintendo = "nintendo",
  Arcade = "arcade",
  NeoGeo = "neo-geo",
  SoftPop = "soft-pop",
}

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
    color: `:root {
  --radius: 0rem;
  --primary: oklch(0.5 0.2 260);
  --primary-foreground: oklch(0.9 0.02 260);
  --background: oklch(0.85 0.1 220);
  --foreground: oklch(0.1 0.1 280);
  --card: oklch(0.85 0.1 220);
  --card-foreground: oklch(0.1 0.1 280);
  --popover: oklch(0.85 0.1 220);
  --popover-foreground: oklch(0.9 0.02 260);
  --secondary: oklch(0.5 0.2 260);
  --secondary-foreground: oklch(0.9 0.02 260);
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
  --sidebar: oklch(0.2 0 0);
  --sidebar-foreground: oklch(0.1 0.1 280);
  --sidebar-primary: oklch(0.4 0.15 250);
  --sidebar-primary-foreground: oklch(0.1 0.1 280);
  --sidebar-accent: oklch(0.5 0.2 280);
  --sidebar-accent-foreground: oklch(1 0 0);
  --sidebar-border: oklch(0.3 0 0);
  --sidebar-ring: oklch(0.4 0.15 250);
}

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
    --sidebar: oklch(0.15 0 0);
    --sidebar-foreground: oklch(0.9 0.02 260);
    --sidebar-primary: oklch(0.4 0.15 250);
    --sidebar-primary-foreground: oklch(0.9 0.02 260);
    --sidebar-accent: oklch(0.5 0.2 280);
    --sidebar-accent-foreground: oklch(1 0 0);
    --sidebar-border: oklch(0.5 0.2 260);
    --sidebar-ring: oklch(0.4 0.15 250);
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
    color: `:root {
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
}

.dark {
  --primary: oklch(0.5 0.2 280);
  --primary-foreground: oklch(0.9 0.05 280);
  --background: oklch(0 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(0.5 0.2 280);
  --popover: oklch(0.5 0.2 280);
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
  --sidebar: oklch(0.4 0 0);
  --sidebar-foreground: oklch(0.9 0.05 280);
  --sidebar-primary: oklch(0.5 0.2 280);
  --sidebar-primary-foreground: oklch(0.9 0.05 280);
  --sidebar-accent: oklch(0.7 0.1 260);
  --sidebar-accent-foreground: oklch(1 0 0);
  --sidebar-border: oklch(0.4 0 0);
  --sidebar-ring: oklch(0.5 0.2 280);
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
  --accent-foreground: oklch(0.05 0.02 60);
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
    --accent-foreground: oklch(0 0 0);
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
];

export const getThemeCode = (theme: Theme) => {
  return themes.find((t) => t.name === theme)?.color;
};
