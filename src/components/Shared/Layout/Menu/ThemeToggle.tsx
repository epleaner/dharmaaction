import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label aria-label="Toggle Dark Mode">
      Dark mode?
      <input
        className="ml-4"
        type="checkbox"
        name="Dark mode"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </label>
  );
};

export default ThemeToggle;
