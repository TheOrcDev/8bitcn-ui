import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import registry from "@/registry.json";

const PACKAGE_PREFIX_REGEX = /^@8bitcn\//;
const COMPONENT_PREFIX_REGEX = /^8bit-/;
const TRAILING_SLASH_REGEX = /\/$/;

const registryNameMap = new Map(
  registry.items.map((item) => [normalizeName(item.name), item.name])
);

function normalizeName(input: string) {
  return input.trim().toLowerCase().replace(/_/g, "-");
}

function resolveRegistryName(rawName?: string) {
  if (!rawName) {
    return;
  }

  const baseCandidates = new Set<string>();
  const sanitized = normalizeName(rawName.replace(PACKAGE_PREFIX_REGEX, ""));

  baseCandidates.add(sanitized);
  baseCandidates.add(sanitized.replace(COMPONENT_PREFIX_REGEX, ""));

  for (const candidate of Array.from(baseCandidates)) {
    const segments = candidate.split("-");

    while (segments.length > 1) {
      segments.pop();
      baseCandidates.add(segments.join("-"));
    }
  }

  for (const candidate of baseCandidates) {
    const normalizedCandidate = normalizeName(candidate);

    if (registryNameMap.has(normalizedCandidate)) {
      return registryNameMap.get(normalizedCandidate);
    }
  }

  return;
}

export function OpenInV0Button({
  name,
  className,
  ...buttonProps
}: { name: string } & React.ComponentProps<typeof Button>) {
  const registryName = resolveRegistryName(name);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(
    TRAILING_SLASH_REGEX,
    ""
  );

  if (!(registryName && baseUrl)) {
    return null;
  }

  const registryUrl = `${baseUrl}/r/${registryName}.json`;
  const href = `https://v0.dev/chat/api/open?url=${encodeURIComponent(registryUrl)}`;

  return (
    <Button
      aria-label="Open in v0"
      asChild
      className={cn("gap-1 rounded-lg px-3 text-xs shadow-none", className)}
      {...buttonProps}
    >
      <a href={href} rel="noreferrer" target="_blank">
        Open in{" "}
        <svg
          className="size-5 text-current"
          fill="none"
          viewBox="0 0 40 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>v0</title>
          <path
            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
            fill="currentColor"
          />
          <path
            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </Button>
  );
}
