const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
  variants: {
    extend: {},
  },
  plugins: [
    /* eslint-disable global-require */
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("nightwind"),
    /* eslint-enable global-require */
  ],
};
