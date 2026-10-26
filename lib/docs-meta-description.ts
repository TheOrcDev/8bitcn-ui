export const MIN_DOCS_META_DESCRIPTION_LENGTH = 110;
export const MAX_DOCS_META_DESCRIPTION_LENGTH = 160;

const SENTENCE_END_REGEX = /[.!?]$/;

type DocsPageKind = "component" | "block" | "guide";

function docsPageKind(slug: string[] | undefined): DocsPageKind {
  const [section, leaf] = slug ?? [];

  if (section === "components" && leaf) {
    return "component";
  }

  if (section === "blocks" && leaf) {
    return "block";
  }

  return "guide";
}

function ensureSentence(text: string): string {
  return SENTENCE_END_REGEX.test(text) ? text : `${text}.`;
}

function longSuffix(title: string, kind: DocsPageKind): string {
  if (kind === "guide") {
    return " Pixel-art shadcn/ui documentation from 8bitcn/ui for retro React and Next.js apps.";
  }

  return ` Pixel-art shadcn/ui ${title} ${kind} from 8bitcn/ui for retro React and Next.js interfaces.`;
}

function shortSuffix(kind: DocsPageKind): string {
  if (kind === "guide") {
    return " Pixel-art shadcn/ui docs from 8bitcn/ui for retro React apps.";
  }

  return ` Pixel-art shadcn/ui ${kind} from 8bitcn/ui for retro React apps.`;
}

function compactSuffix(kind: DocsPageKind): string {
  if (kind === "guide") {
    return " Pixel-art shadcn/ui docs for retro React apps.";
  }

  return ` Pixel-art shadcn/ui ${kind} for retro React apps.`;
}

export function docsMetaDescription({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug?: string[];
}): string {
  const base = description.trim();

  if (base.length >= MIN_DOCS_META_DESCRIPTION_LENGTH) {
    return base;
  }

  const kind = docsPageKind(slug);
  const sentence = ensureSentence(base);
  const remaining = MAX_DOCS_META_DESCRIPTION_LENGTH - sentence.length;
  const suffixes = [
    longSuffix(title, kind),
    shortSuffix(kind),
    compactSuffix(kind),
  ];

  for (const suffix of suffixes) {
    if (suffix.length <= remaining) {
      return `${sentence}${suffix}`;
    }
  }

  return sentence;
}
