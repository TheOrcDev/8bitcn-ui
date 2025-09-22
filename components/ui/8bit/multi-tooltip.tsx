"use client";

import type * as React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

import { TooltipContent as ShadcnTooltipContent } from "@/components/ui/tooltip";

import "./styles/retro.css";

type Position =
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "top-left";

export const multiTooltipVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

const MultiTooltipContext = createContext<{
  delayDuration?: number;
}>({});

export interface BitMultiTooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>,
    VariantProps<typeof multiTooltipVariants> {
  content: string;
  position?: Position;
}

function MultiTooltipContent({
  className,
  content,
  font,
  position,
  ...props
}: BitMultiTooltipContentProps) {
  const color = multiTooltipVariants({ font });

  return (
    <div className={cn("relative inline-flex", className)}>
      <div
        data-slot="multitooltip-content"
        role="tooltip"
        className={cn(
          "z-50 overflow-hidden bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 rounded-none",
          content.length < 20
            ? "px-2 py-1 text-xs whitespace-nowrap"
            : content.length < 100
              ? "px-3 py-2 text-sm whitespace-nowrap"
              : "px-4 py-3 text-sm max-w-72 leading-relaxed whitespace-normal",
          color,
          className
        )}
        {...props}
      >
        {content}

        {position === "top" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
        )}
        {position === "bottom" && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-primary" />
        )}
        {position === "left" && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-primary" />
        )}
        {position === "right" && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-primary" />
        )}
        {position === "top-left" && (
          <div className="absolute top-full left-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
        )}
        {position === "top-right" && (
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
        )}
        {position === "bottom-left" && (
          <div className="absolute bottom-full left-4 border-l-4 border-r-4 border-b-4 border-transparent border-b-primary" />
        )}
        {position === "bottom-right" && (
          <div className="absolute bottom-full right-4 border-l-4 border-r-4 border-b-4 border-transparent border-b-primary" />
        )}

        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-primary",
            color
          )}
        />
        <div
          className={cn(
            "absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5 bg-primary",
            color
          )}
        />
      </div>
    </div>
  );
}

export interface BitMultiTooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof multiTooltipVariants> {
  children: React.ReactNode;
  tooltips: Array<{
    content: string;
    position: Position;
  }>;
  gap?: number;
  hideDelay?: number;
  delayDuration?: number;
  tooltipClassName?: string;
}

function MultiTooltip({
  children,
  tooltips,
  gap = 8,
  hideDelay = 100,
  delayDuration,
  className,
  tooltipClassName,
  font,
  ...props
}: BitMultiTooltipProps) {
  const context = useContext(MultiTooltipContext);
  const effectiveDelayDuration = delayDuration ?? context.delayDuration ?? 0;

  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState<
    Array<{ left: number; top: number }>
  >([]);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRefs = useRef<Array<HTMLDivElement | null>>([]);

  const hoverTriggerRef = useRef(false);
  const hoverTooltipRef = useRef(false);
  const showTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);

  const clearTimeouts = () => {
    if (showTimeoutRef.current) {
      window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const show = useCallback(() => {
    clearTimeouts();
    if (effectiveDelayDuration > 0) {
      showTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
        showTimeoutRef.current = null;
      }, effectiveDelayDuration);
    } else {
      setIsVisible(true);
    }
  }, [effectiveDelayDuration]);

  const hideWithDelay = useCallback(() => {
    clearTimeouts();
    hideTimeoutRef.current = window.setTimeout(() => {
      if (!hoverTriggerRef.current && !hoverTooltipRef.current) {
        setIsVisible(false);
      }
      hideTimeoutRef.current = null;
    }, hideDelay);
  }, [hideDelay]);

  const computePositions = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const newPositions: Array<{ left: number; top: number }> = [];

    tooltips.forEach((tooltip, index) => {
      const tooltipEl = tooltipRefs.current[index];
      if (!tooltipEl) return;

      const tooltipRect = tooltipEl.getBoundingClientRect();
      let left = 0;
      let top = 0;

      switch (tooltip.position) {
        case "top":
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          top = triggerRect.top - tooltipRect.height - gap - 2;
          break;
        case "top-right":
          left = triggerRect.right - tooltipRect.width / 2;
          top = triggerRect.top - tooltipRect.height - gap;
          break;
        case "right":
          left = triggerRect.right + gap + 4;
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case "bottom-right":
          left = triggerRect.right - tooltipRect.width / 2;
          top = triggerRect.bottom + gap;
          break;
        case "bottom":
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          top = triggerRect.bottom + gap + 2;
          break;
        case "bottom-left":
          left = triggerRect.left - tooltipRect.width / 2;
          top = triggerRect.bottom + gap;
          break;
        case "left":
          left = triggerRect.left - tooltipRect.width - gap - 4;
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case "top-left":
          left = triggerRect.left - tooltipRect.width / 2;
          top = triggerRect.top - tooltipRect.height - gap;
          break;
      }

      const padding = 8;
      left = Math.max(
        padding,
        Math.min(left, window.innerWidth - tooltipRect.width - padding)
      );
      top = Math.max(
        padding,
        Math.min(top, window.innerHeight - tooltipRect.height - padding)
      );

      newPositions.push({ left, top });
    });

    setPositions(newPositions);
  }, [gap, tooltips]);

  useLayoutEffect(() => {
    if (!isVisible) return;
    computePositions();
    const raf = requestAnimationFrame(() => computePositions());
    return () => cancelAnimationFrame(raf);
  }, [isVisible, computePositions]);

  useEffect(() => {
    if (!isVisible) return;

    const handleResize = () => computePositions();
    const handleScroll = () => computePositions();
    const hideOnTouch = () => setIsVisible(false);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("touchmove", hideOnTouch, { passive: true });
    document.addEventListener("touchmove", hideOnTouch, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("touchmove", hideOnTouch);
      document.removeEventListener("touchmove", hideOnTouch);
    };
  }, [isVisible, computePositions]);

  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, []);

  const canPortal = typeof document !== "undefined";

  const onTriggerEnter = () => {
    hoverTriggerRef.current = true;
    show();
  };

  const onTriggerLeave = () => {
    hoverTriggerRef.current = false;
    hideWithDelay();
  };

  const onTooltipEnter = () => {
    hoverTooltipRef.current = true;
    clearTimeouts();
  };

  const onTooltipLeave = () => {
    hoverTooltipRef.current = false;
    hideWithDelay();
  };

  return (
    <>
      <div
        ref={triggerRef}
        data-slot="multitooltip"
        className={cn("relative inline-block w-fit", className)}
        onMouseEnter={onTriggerEnter}
        onMouseLeave={onTriggerLeave}
        onFocus={onTriggerEnter}
        onBlur={onTriggerLeave}
        {...props}
      >
        {children}
      </div>

      {canPortal &&
        createPortal(
          <>
            {isVisible &&
              tooltips.map((tooltip, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    tooltipRefs.current[index] = el;
                  }}
                  className="fixed z-[99999] pointer-events-auto"
                  style={{
                    left: `${positions[index]?.left || 0}px`,
                    top: `${positions[index]?.top || 0}px`,
                    animationDelay: `${index * 50}ms`,
                  }}
                  onMouseEnter={onTooltipEnter}
                  onMouseLeave={onTooltipLeave}
                  data-state={isVisible ? "open" : "closed"}
                >
                  <MultiTooltipContent
                    content={tooltip.content}
                    position={tooltip.position}
                    font={font}
                    className={tooltipClassName}
                  />
                </div>
              ))}
          </>,
          document.body
        )}
    </>
  );
}

export interface BitMultiTooltipProviderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  delayDuration?: number;
}

function MultiTooltipProvider({
  children,
  delayDuration,
  ...restProps
}: BitMultiTooltipProviderProps) {
  return (
    <MultiTooltipContext.Provider value={{ delayDuration }}>
      <div data-slot="multitooltip-provider" {...restProps}>
        {children}
      </div>
    </MultiTooltipContext.Provider>
  );
}

function MultiTooltipTrigger({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div data-slot="multitooltip-trigger" {...props}>
      {children}
    </div>
  );
}

export {
  MultiTooltip,
  MultiTooltipContent,
  MultiTooltipProvider,
  MultiTooltipTrigger,
};
