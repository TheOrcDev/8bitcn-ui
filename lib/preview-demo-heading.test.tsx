import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  applyPreviewDemoHeading,
  previewShouldDemoteHeadings,
} from "./preview-demo-heading";

function Title({
  headingAs: Heading = "h1",
  title,
}: {
  headingAs?: "h1" | "h2" | "h3";
  title: string;
}) {
  return <Heading>{title}</Heading>;
}

describe("previewShouldDemoteHeadings", () => {
  it("demotes known hero and not-found block previews", () => {
    expect(previewShouldDemoteHeadings("hero1")).toBe(true);
    expect(previewShouldDemoteHeadings("hero3-actions")).toBe(true);
    expect(previewShouldDemoteHeadings("not-found-brick-breaker")).toBe(true);
    expect(previewShouldDemoteHeadings("button")).toBe(false);
  });
});

describe("applyPreviewDemoHeading", () => {
  it("injects headingAs into custom preview children", () => {
    render(applyPreviewDemoHeading(<Title title="BUILD YOUR RETRO EMPIRE" />));

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "BUILD YOUR RETRO EMPIRE",
      })
    ).toBeTruthy();
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });

  it("reaches custom children wrapped in a host element", () => {
    render(
      applyPreviewDemoHeading(
        <div>
          <Title title="404" />
        </div>
      )
    );

    expect(screen.getByRole("heading", { level: 2, name: "404" })).toBeTruthy();
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });
});
