import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
} from "react";

export type DemoHeadingTag = "h1" | "h2" | "h3";

export const PREVIEW_DEMO_HEADING: DemoHeadingTag = "h2";

const PREVIEW_NAMES_WITH_DEMO_H1 = new Set([
  "chapter-intro",
  "game-hero1",
  "game-hero2",
  "game-over",
  "hero1",
  "hero2",
  "hero3",
  "hero3-actions",
  "login-form-with-image",
  "not-found-brick-breaker",
  "not-found-crate-pusher",
  "not-found1",
  "not-found2",
  "not-found3",
  "victory-screen",
]);

interface HeadingAsChildProps {
  children?: ReactNode;
  headingAs?: DemoHeadingTag;
}

export function previewShouldDemoteHeadings(name: string): boolean {
  return PREVIEW_NAMES_WITH_DEMO_H1.has(name);
}

export function applyPreviewDemoHeading(
  children: ReactNode,
  headingAs: DemoHeadingTag = PREVIEW_DEMO_HEADING
): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement<HeadingAsChildProps>(child)) {
      return child;
    }

    if (child.type === Fragment || typeof child.type === "string") {
      return cloneElement(
        child,
        undefined,
        applyPreviewDemoHeading(child.props.children, headingAs)
      );
    }

    return cloneElement(child, { headingAs });
  });
}
