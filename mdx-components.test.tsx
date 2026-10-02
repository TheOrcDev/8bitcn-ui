import type { CSSProperties } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/code-snippet", () => ({
  default: () => <div data-testid="client-code-snippet" />,
}));

import { mdxComponents } from "@/mdx-components";

const installCommand = "pnpm dlx shadcn@latest add @8bitcn/button";
type ShikiStyle = CSSProperties & { "--shiki-light": string };

const commandTokenStyle: ShikiStyle = { "--shiki-light": "#6f42c1" };
const argumentTokenStyle: ShikiStyle = { "--shiki-light": "#032f62" };

describe("mdxComponents.code", () => {
  it("includes pre-highlighted fenced code in the server-rendered markup", () => {
    const Code = mdxComponents.code;
    const markup = renderToStaticMarkup(
      <Code>
        <span className="line">
          <span style={commandTokenStyle}>pnpm</span>
          <span style={argumentTokenStyle}>
            {" dlx shadcn@latest add @8bitcn/button"}
          </span>
        </span>
      </Code>
    );
    const renderedText = new DOMParser().parseFromString(markup, "text/html")
      .body.textContent;

    expect(renderedText).toContain(installCommand);
    expect(markup).toContain('class="line"');
    expect(markup).toContain("--shiki-light:#6f42c1");
    expect(markup).not.toContain("client-code-snippet");
  });

  it("keeps inline code styling", () => {
    const Code = mdxComponents.code;
    const markup = renderToStaticMarkup(<Code>components.json</Code>);

    expect(markup).toContain("components.json");
    expect(markup).toContain("bg-muted");
  });
});
