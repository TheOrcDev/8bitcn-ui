import { useLayoutEffect, useRef } from "react";

function centerActiveSidebarItem(
  viewport: HTMLDivElement,
  activeItem: HTMLAnchorElement
): boolean {
  if (viewport.clientHeight === 0) {
    return false;
  }

  const viewportRect = viewport.getBoundingClientRect();
  const activeItemRect = activeItem.getBoundingClientRect();
  const centeredScrollTop =
    viewport.scrollTop +
    activeItemRect.top -
    viewportRect.top -
    (viewport.clientHeight - activeItemRect.height) / 2;
  const maximumScrollTop = Math.max(
    viewport.scrollHeight - viewport.clientHeight,
    0
  );

  viewport.scrollTop = Math.min(
    Math.max(centeredScrollTop, 0),
    maximumScrollTop
  );

  return true;
}

function useCenterActiveSidebarItem(pathname: string) {
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Re-center whenever the active route changes.
  useLayoutEffect(() => {
    const activeItem = activeItemRef.current;
    const viewport = viewportRef.current;

    if (!(activeItem && viewport)) {
      return;
    }

    if (centerActiveSidebarItem(viewport, activeItem)) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (centerActiveSidebarItem(viewport, activeItem)) {
        resizeObserver.disconnect();
      }
    });
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, [pathname]);

  return { activeItemRef, viewportRef };
}

export { useCenterActiveSidebarItem };
