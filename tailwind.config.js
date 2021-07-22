const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  variants: {
    extend: { transitionProperty: ["group-hover"] },
  },
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    nightwind: (theme) => ({
      colorClasses: ["gradient", "ring"],
      typography: {
        a: {
          color: theme("colors.green.500", defaultTheme.colors.green[500]),
          "&:hover": {
            color: theme("colors.green.600", defaultTheme.colors.green[600]),
          },
          textDecoration: "none",
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ["Almarai", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        mineral: "url('public/assets/mineral.jpg')",
        himalGlow: "url('public/assets/himal_glow.jpg')",
      }),
      colors: {
        earthGreen: {
          50: "#e1f5d9",
          100: "#caedbc",
          200: "#b3e59f",
          300: "#a1ce8f",
          400: "#86ac77",
          500: "#6b895f",
          600: "#58704e",
          700: "#4f6546",
          800: "#42543b",
          900: "#35432f",
        },
        earthBlue: {
          50: "#d8e8fd",
          100: "#bad7fc",
          200: "#9dc6fb",
          300: "#8db2e2",
          400: "#7695bc",
          500: "#5e7797",
          600: "#4d617b",
          700: "#45576f",
          800: "#3a495c",
          900: "#2e3a4a",
        },
        earthTan: {
          50: "#f9ecdb",
          100: "#f5debf",
          200: "#f1d0a4",
          300: "#d9bb94",
          400: "#b59c7b",
          500: "#917d62",
          600: "#766650",
          700: "#6a5c48",
          800: "#594d3c",
          900: "#473d30",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.green.500", defaultTheme.colors.green[500]),
              "&:hover": {
                color: theme(
                  "colors.green.600",
                  defaultTheme.colors.green[600]
                ),
              },
              textDecoration: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [
    /* eslint-disable global-require */
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("nightwind"),
    /* eslint-enable global-require */
  ],
};
