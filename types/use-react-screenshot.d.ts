declare module "use-react-screenshot" {
  export interface UseScreenshotOptions {
    quality?: number;
    type?: "image/png" | "image/jpeg" | "image/webp";
  }
  export function useScreenshot(
    options?: UseScreenshotOptions
  ): [string | null, (node: HTMLElement | null) => Promise<string | null>];
}
