import { icons } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";
import {
  type ComponentProps,
  type HTMLAttributes,
  isValidElement,
  type ReactNode,
} from "react";
import { Kbd } from "@/components/ui/8bit/kbd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import CodeSnippet from "./components/code-snippet";

export const mdxComponents = {
  h1: ({ className, ...props }: ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-28 font-bold font-heading text-3xl tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps<"h2">) => (
    <h2
      className={cn(
        "[&+.steps]:!mt-0 [&+.steps>h3]:!mt-4 [&+h3]:!mt-6 [&+p]:!mt-4 mt-10 scroll-m-28 font-heading font-medium text-xl tracking-tight first:mt-0 lg:mt-16 [&+]*:[code]:text-xl",
        className
      )}
      id={props.children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase()}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<"h3">) => (
    <h3
      className={cn(
        "[&+p]:!mt-4 mt-12 scroll-m-28 font-heading font-medium text-lg tracking-tight *:[code]:text-xl",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentProps<"h4">) => (
    <h4
      className={cn(
        "mt-8 scroll-m-28 font-heading font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentProps<"h5">) => (
    <h5
      className={cn(
        "mt-8 scroll-m-28 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentProps<"h6">) => (
    <h6
      className={cn(
        "mt-8 scroll-m-28 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p
      className={cn("leading-relaxed [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ComponentProps<"img">) => (
    /* biome-ignore lint/performance/noImgElement: MDX content requires standard img elements */
    /* biome-ignore lint/correctness/useImageSize: MDX images have dynamic sizes from markdown */
    <img alt={alt} className={cn("rounded-md", className)} {...props} />
  ),
  hr: ({ ...props }: ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: ComponentProps<"table">) => (
    <div className="no-scrollbar my-6 w-full overflow-y-auto rounded-lg border">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm [&_tbody_tr:last-child]:border-b-0",
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: ComponentProps<"tr">) => (
    <tr className={cn("m-0 border-b", className)} {...props} />
  ),
  th: ({ className, ...props }: ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentProps<"td">) => (
    <td
      className={cn(
        "whitespace-nowrap px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }: ComponentProps<"pre">) => (
    <pre
      className={cn(
        "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-slot=tabs]]:p-0 has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  figure: ({ className, ...props }: ComponentProps<"figure">) => (
    <figure className={cn(className)} {...props} />
  ),
  figcaption: ({
    className,
    children,
    ...props
  }: ComponentProps<"figcaption">) => {
    const IconComponent =
      "data-language" in props && typeof props["data-language"] === "string"
        ? icons[props["data-language"] as keyof typeof icons]
        : null;

    return (
      <figcaption
        className={cn(
          "flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70",
          className
        )}
        {...props}
      >
        {IconComponent && <IconComponent />}
        {children}
      </figcaption>
    );
  },
  code: ({
    className,
    __raw__,
    __src__,
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
    children,
    ...props
  }: ComponentProps<"code"> & {
    __raw__?: string;
    __src__?: string;
    __npm__?: string;
    __yarn__?: string;
    __pnpm__?: string;
    __bun__?: string;
  }) => {
    // Inline Code.
    if (typeof children === "string") {
      return (
        <code
          className={cn(
            "relative break-words rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] outline-none",
            className
          )}
          {...props}
        >
          {children}
        </code>
      );
    }

    // Extract text content from React children if __raw__ is not available
    const getTextContent = (node: ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return String(node);
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      if (isValidElement(node)) {
        const nodeProps = node.props as { children?: ReactNode };
        if (nodeProps.children) {
          return getTextContent(nodeProps.children);
        }
      }
      return "";
    };

    const codeContent = __raw__ || getTextContent(children);

    return <CodeSnippet>{codeContent}</CodeSnippet>;
  },
  Step: ({ className, ...props }: ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-32 font-heading font-medium text-xl tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps *:[h3]:first:!mt-0 mb-12 [counter-reset:step]"
      {...props}
    />
  ),
  Image: ({
    src,
    className,
    width,
    height,
    alt,
    ...props
  }: ComponentProps<"img">) => (
    <Image
      alt={alt || ""}
      className={cn("mt-6 rounded-md border", className)}
      height={Number(height)}
      src={(src as string) || ""}
      width={Number(width)}
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({ className, ...props }: ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "justify-start gap-4 rounded-none bg-transparent px-0",
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "rounded-none border-0 border-transparent border-b-2 bg-transparent px-0 pb-3 text-base text-muted-foreground hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none dark:data-[state=active]:border-primary dark:data-[state=active]:bg-transparent",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&>.steps]:mt-6 [&_h3.font-heading]:font-medium [&_h3.font-heading]:text-base *:[figure]:first:mt-0",
        className
      )}
      {...props}
    />
  ),
  Tab: ({ className, ...props }: ComponentProps<"div">) => (
    <div className={cn(className)} {...props} />
  ),
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  AspectRatio,
  Link: ({ className, ...props }: ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-xl bg-surface p-6 text-surface-foreground transition-colors hover:bg-surface/80 sm:p-10",
        className
      )}
      {...props}
    />
  ),
  Kbd,
};
