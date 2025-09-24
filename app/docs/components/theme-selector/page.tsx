import { Metadata } from "next";

import ThemeSelectorExample from "@/components/examples/theme-selector";

export const metadata: Metadata = {
  title: "Theme Selector",
  description:
    "A complete theme selector component with dropdown selection and code copy functionality. Includes theme context provider for managing active themes across the application.",
};

export default function ThemeSelectorPage() {
  return (
    <>
      <div className="flex flex-col p-4 gap-5 py-10">
        <h1 className={`retro md:text-2xl font-bold`}>Theme Selector</h1>
        <p className="max-w-2xl text-sm md:text-base">
          A complete theme selector component with dropdown selection and code
          copy functionality. Includes theme context provider for managing
          active themes across the application.
        </p>
      </div>

      <div className="p-5">
        <ThemeSelectorExample />
      </div>
    </>
  );
}
