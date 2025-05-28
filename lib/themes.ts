export enum Theme {
  Default = "default",
  Sega = "sega",
  Gameboy = "gameboy",
  Atari = "atari",
  Nintendo = "nintendo",
}

const themes = [
  {
    name: Theme.Default,
    color: `:root {
  --radius: 0rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.795 0.184 86.047);
  --primary-foreground: oklch(0.421 0.095 57.708);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.795 0.184 86.047);
  --chart-1: oklch(0.795 0.184 86.047);
  --chart-2: oklch(0.421 0.095 57.708);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.795 0.184 86.047);
  --sidebar-primary-foreground: oklch(0.421 0.095 57.708);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.795 0.184 86.047);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.21 0.006 285.885);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.21 0.006 285.885);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.795 0.184 86.047);
  --primary-foreground: oklch(0.421 0.095 57.708);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.554 0.135 66.442);
  --chart-1: oklch(0.795 0.184 86.047);
  --chart-2: oklch(0.421 0.095 57.708);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.795 0.184 86.047);
  --sidebar-primary-foreground: oklch(0.421 0.095 57.708);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.554 0.135 66.442);
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
]

export const getThemeCode = (theme: Theme) => {
  return themes.find((t) => t.name === theme)?.color
}
