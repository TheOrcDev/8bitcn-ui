import { act, cleanup, render, screen } from "@testing-library/react";
import type { Root } from "fumadocs-core/page-tree";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BlocksSidebar } from "@/components/blocks-sidebar";
import { DocsSidebar } from "@/components/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const navigation = vi.hoisted(() => ({
  pathname: "/docs/components/radio-group",
}));

vi.mock("next/navigation", () => ({
  usePathname: () => navigation.pathname,
}));

const tree = {
  name: "Docs",
  children: [
    {
      $id: "root:components",
      type: "folder",
      name: "Components",
      children: [
        {
          type: "page",
          name: "Accordion",
          url: "/docs/components/accordion",
        },
        {
          type: "page",
          name: "Card",
          url: "/docs/components/card",
        },
        {
          type: "page",
          name: "Radio Group",
          url: "/docs/components/radio-group",
        },
        {
          type: "page",
          name: "XP Bar",
          url: "/docs/components/xp-bar",
        },
      ],
    },
  ],
} satisfies Root;

const blocksTree = {
  name: "Docs",
  children: [
    {
      $id: "root:blocks",
      type: "folder",
      name: "Blocks",
      children: [
        {
          $id: "root:blocks/gaming",
          type: "folder",
          name: "gaming",
          children: [
            {
              type: "page",
              name: "Loading Screen",
              url: "/docs/blocks/gaming/loading-screen",
            },
          ],
        },
      ],
    },
  ],
} satisfies Root;

const scrollPositions = new WeakMap<HTMLElement, number>();
const itemOffsets: Record<string, number> = {
  "/docs/components": 0,
  "/docs/components/accordion": 0,
  "/docs/components/card": 300,
  "/docs/components/radio-group": 600,
  "/docs/components/xp-bar": 1000,
  "/docs/blocks/gaming/loading-screen": 600,
};
let resizeCallback: ResizeObserverCallback | undefined;
let viewportHeight = 400;

function createRect(top: number, height: number): DOMRect {
  return {
    bottom: top + height,
    height,
    left: 0,
    right: 220,
    top,
    width: 220,
    x: 0,
    y: top,
    toJSON: () => ({}),
  };
}

beforeEach(() => {
  navigation.pathname = "/docs/components/radio-group";
  resizeCallback = undefined;
  viewportHeight = 400;

  class Observer {
    constructor(callback: ResizeObserverCallback) {
      resizeCallback = callback;
    }

    disconnect = vi.fn();
    observe = vi.fn();
    unobserve = vi.fn();
  }

  vi.stubGlobal("ResizeObserver", Observer);

  vi.stubGlobal("matchMedia", () => ({
    addEventListener: vi.fn(),
    matches: false,
    media: "",
    onchange: null,
    removeEventListener: vi.fn(),
  }));

  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function getBoundingClientRect(this: HTMLElement) {
      if (this.dataset.slot === "scroll-area-viewport") {
        return createRect(100, viewportHeight);
      }

      if (
        this.dataset.active === "true" &&
        this.getAttribute("href") === navigation.pathname
      ) {
        const viewport = document.querySelector<HTMLElement>(
          '[data-slot="scroll-area-viewport"]'
        );
        const viewportScrollTop = viewport
          ? (scrollPositions.get(viewport) ?? 0)
          : 0;

        return createRect(
          100 + itemOffsets[navigation.pathname] - viewportScrollTop,
          30
        );
      }

      return createRect(0, 0);
    }
  );

  Object.defineProperties(HTMLElement.prototype, {
    clientHeight: {
      configurable: true,
      get(this: HTMLElement) {
        return this.dataset.slot === "scroll-area-viewport"
          ? viewportHeight
          : 0;
      },
    },
    scrollHeight: {
      configurable: true,
      get(this: HTMLElement) {
        return this.dataset.slot === "scroll-area-viewport" ? 1000 : 0;
      },
    },
    scrollTop: {
      configurable: true,
      get(this: HTMLElement) {
        return scrollPositions.get(this) ?? 0;
      },
      set(this: HTMLElement, value: number) {
        scrollPositions.set(this, value);
      },
    },
  });
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("DocsSidebar", () => {
  it("centers the current page in the sidebar without scrolling the document", () => {
    const view = render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );

    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    expect(screen.getByRole("link", { name: "Radio Group" })).toBeTruthy();
    expect(viewport?.scrollTop).toBe(415);
    expect(window.scrollY).toBe(0);
    expect(document.activeElement).toBe(document.body);
  });

  it("marks the current documentation page for assistive technology", () => {
    render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );

    expect(
      screen
        .getByRole("link", { name: "Radio Group" })
        .getAttribute("aria-current")
    ).toBe("page");
    expect(
      screen
        .getByRole("link", { name: "Accordion" })
        .getAttribute("aria-current")
    ).toBeNull();
  });

  it("centers the newly selected page after client navigation", () => {
    const view = render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );
    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    expect(viewport?.scrollTop).toBe(415);

    navigation.pathname = "/docs/components/card";
    view.rerender(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );

    expect(viewport?.scrollTop).toBe(115);
    expect(
      screen.getByRole("link", { name: "Card" }).getAttribute("aria-current")
    ).toBe("page");
    expect(window.scrollY).toBe(0);
  });

  it("returns to the current top-level section after leaving a component page", () => {
    const view = render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );
    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    expect(viewport?.scrollTop).toBe(415);

    navigation.pathname = "/docs/components";
    view.rerender(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );

    expect(viewport?.scrollTop).toBe(0);
    expect(
      screen
        .getByRole("link", { name: "Components" })
        .getAttribute("aria-current")
    ).toBe("page");
  });

  it("clamps the first and last pages to the sidebar scroll range", () => {
    navigation.pathname = "/docs/components/accordion";
    const view = render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );
    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    expect(viewport?.scrollTop).toBe(0);

    navigation.pathname = "/docs/components/xp-bar";
    view.rerender(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );

    expect(viewport?.scrollTop).toBe(600);
  });

  it("centers the current page when a hidden sidebar becomes visible", () => {
    viewportHeight = 0;
    const view = render(
      <SidebarProvider>
        <DocsSidebar tree={tree} />
      </SidebarProvider>
    );
    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    expect(viewport?.scrollTop).toBe(0);

    viewportHeight = 400;
    act(() => resizeCallback?.([], {} as ResizeObserver));

    expect(viewport?.scrollTop).toBe(415);
  });
});

describe("BlocksSidebar", () => {
  it("centers and identifies the current block after a direct load", () => {
    navigation.pathname = "/docs/blocks/gaming/loading-screen";
    const view = render(
      <SidebarProvider>
        <BlocksSidebar tree={blocksTree} />
      </SidebarProvider>
    );
    const viewport = view.container.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]'
    );
    const activeLink = screen.getByRole("link", { name: "Loading Screen" });

    expect(viewport?.scrollTop).toBe(415);
    expect(activeLink.getAttribute("aria-current")).toBe("page");
    expect(window.scrollY).toBe(0);
  });
});
