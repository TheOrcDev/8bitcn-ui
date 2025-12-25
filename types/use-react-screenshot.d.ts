declare module "use-react-screenshot" {
  export interface UseScreenshotOptions {
    type?: "image/png" | "image/jpeg" | "image/webp";
    quality?: number;
  }
  export function useScreenshot(
    options?: UseScreenshotOptions
  ): [string | null, (node: HTMLElement | null) => Promise<string | null>];
}
