import { useCallback } from "react";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme]
  );

  return (
    <span
      className="hover:cursor-pointer"
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      onKeyDown={toggleTheme}
      role="button"
      tabIndex={0}
    >
      {theme === "light" ? "🌝" : "🌚"}
    </span>
  );
};

export default ThemeToggle;
