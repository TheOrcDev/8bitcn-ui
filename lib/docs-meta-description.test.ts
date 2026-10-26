import { describe, expect, it } from "vitest";
import {
  docsMetaDescription,
  MAX_DOCS_META_DESCRIPTION_LENGTH,
  MIN_DOCS_META_DESCRIPTION_LENGTH,
} from "./docs-meta-description";

describe("docsMetaDescription", () => {
  it("keeps frontmatter that already meets the SEO length target", () => {
    const description =
      "Welcome to 8bitcn/ui! This guide will help you set up and start using our retro-styled components in your project.";

    expect(docsMetaDescription({ title: "Getting Started", description })).toBe(
      description
    );
  });

  it("expands a short component description into a 110-160 character snippet", () => {
    const description = docsMetaDescription({
      title: "Button",
      description: "Displays an 8-bit button component.",
      slug: ["components", "button"],
    });

    expect(description.startsWith("Displays an 8-bit button component.")).toBe(
      true
    );
    expect(description).toContain("Pixel-art shadcn/ui Button component");
    expect(description.length).toBeGreaterThanOrEqual(
      MIN_DOCS_META_DESCRIPTION_LENGTH
    );
    expect(description.length).toBeLessThanOrEqual(
      MAX_DOCS_META_DESCRIPTION_LENGTH
    );
  });

  it("expands a short block description without inventing a missing page", () => {
    const description = docsMetaDescription({
      title: "Login Form with Icons",
      description: "Displays an 8-bit login form with social login icons.",
      slug: ["blocks", "authentication", "login-form-with-icons"],
    });

    expect(description).toContain("login form with social login icons");
    expect(description).toContain("block");
    expect(description.length).toBeGreaterThanOrEqual(
      MIN_DOCS_META_DESCRIPTION_LENGTH
    );
    expect(description.length).toBeLessThanOrEqual(
      MAX_DOCS_META_DESCRIPTION_LENGTH
    );
  });

  it("falls back to a shorter suffix when the title would overflow 160 characters", () => {
    const description = docsMetaDescription({
      title: "Retro Mode Switcher With Extra Long Title Words",
      description:
        "A retro-styled theme toggle component with pixel art sun and moon icons.",
      slug: ["components", "retro-mode-switcher"],
    });

    expect(description).toContain("theme toggle component");
    expect(description.endsWith("apps.")).toBe(true);
    expect(description.length).toBeGreaterThanOrEqual(
      MIN_DOCS_META_DESCRIPTION_LENGTH
    );
    expect(description.length).toBeLessThanOrEqual(
      MAX_DOCS_META_DESCRIPTION_LENGTH
    );
  });

  it("keeps a complete sentence when a near-limit description cannot fit the long suffix", () => {
    const description = docsMetaDescription({
      title: "Avatar",
      description:
        "An 8-bit style avatar component that displays user profile images with optional pixelation and fallback.",
      slug: ["components", "avatar"],
    });

    expect(description).toContain("user profile images");
    expect(description.endsWith(".")).toBe(true);
    expect(description.length).toBeGreaterThanOrEqual(
      MIN_DOCS_META_DESCRIPTION_LENGTH
    );
    expect(description.length).toBeLessThanOrEqual(
      MAX_DOCS_META_DESCRIPTION_LENGTH
    );
  });
});
