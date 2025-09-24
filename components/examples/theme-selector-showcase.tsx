"use client";

import { useThemeConfig } from "@/components/active-theme";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";

export default function ThemeSelectorShowcase() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className="w-full max-w-md">
      <SelectThemeDropdown
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
      />
    </div>
  );
}
