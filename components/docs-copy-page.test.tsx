import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { DocsCopyPage, DocsCopyPageFallback } from "./docs-copy-page";

afterEach(cleanup);

function getControlGeometry(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>("[data-copy-page-control-part]")
  ).map((element) => ({
    className: element.className,
    textContent: element.textContent,
  }));
}

describe("DocsCopyPageFallback", () => {
  it("matches the resolved copy control geometry without a skeleton", () => {
    const fallback = render(<DocsCopyPageFallback />);
    const fallbackGeometry = getControlGeometry(fallback.container);

    expect(
      fallback.container.querySelector('[data-slot="skeleton"]')
    ).toBeNull();

    fallback.unmount();

    const resolved = render(
      <DocsCopyPage page="# Blocks" url="https://www.8bitcn.com/docs/blocks" />
    );

    expect(fallbackGeometry).toEqual(getControlGeometry(resolved.container));
    expect(fallbackGeometry).toHaveLength(3);
  });
});
