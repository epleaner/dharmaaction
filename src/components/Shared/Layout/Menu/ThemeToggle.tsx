import { useCallback, useState, useEffect } from "react";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme]
  );

  if (!mounted) return null;

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
