import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ComponentPreview from "@/components/component-preview";

vi.mock("@/components/open-in-v0-button", () => ({
  OpenInV0Button: () => null,
}));

function DemoBlock({
  headingAs: Heading = "h1",
}: {
  headingAs?: "h1" | "h2" | "h3";
}) {
  return <Heading>BUILD YOUR RETRO EMPIRE</Heading>;
}

describe("ComponentPreview", () => {
  it("demotes demo headings for known block previews", () => {
    render(
      <ComponentPreview name="hero1" title="Hero 1 — Centered">
        <DemoBlock />
      </ComponentPreview>
    );

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "BUILD YOUR RETRO EMPIRE",
      })
    ).toBeTruthy();
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });

  it("leaves regular component previews unchanged", () => {
    render(
      <ComponentPreview name="button" title="8-bit button component">
        <DemoBlock />
      </ComponentPreview>
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "BUILD YOUR RETRO EMPIRE",
      })
    ).toBeTruthy();
  });
});
