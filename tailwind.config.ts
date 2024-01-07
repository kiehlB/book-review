/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Fredoka: ["Fredoka One", "cursive"],
      Pretendard: ["Pretendard", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--color-white)",
      black: "var(--color-black)",
      slate: {
        500: "var(--color-slate-500)",
      },
      blue: {
        100: "var(--color-blue-100)",
        500: "var(--color-blue-500)",
      },
      red: {
        400: "var(--color-red-400)",
        500: "var(--color-red-500)",
      },
      green: {
        100: "var(--color-green-100)",
        500: "var(--color-green-500)",
        600: "var(--color-green-600)",
      },
      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
      yellow: {
        100: "var(--color-yellow-100)",
        200: "var(--color-yellow-200)",
        300: "var(--color-yellow-300)",
        400: "var(--color-yellow-400)",
      },
      dark: {
        100: "var(--color-dark-100)",
        200: "var(--color-dark-200)",
        300: "var(--color-dark-300)",
        400: "var(--color-dark-400)",
        500: "var(--color-dark-500)",
      },
      default: "var(--color-default)",
      darkText: "var(--color-dark)",
    },
    extend: {
      fontSize: {
        "2xl": "1.5625rem", // 25px
        "3xl": "1.875rem", // 30px
        "4xl": "2.5rem", // 40px
        "5xl": "3.125rem", // 50px
        "6xl": "3.75rem", // 60px
        "7xl": "4.375rem", // 70px
      },
      typography: (theme: any) => {
        const fontSize = (size: string) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };
        return {
          DEFAULT: {
            css: {
              h1: {
                color: "var(--color-default)",
              },
              h2: {
                color: "var(--color-default)",
              },
              h3: {
                color: "var(--color-default)",
              },
              h4: {
                color: "var(--color-default)",
              },
              strong: {
                color: "var(--color-default)",
              },
              u: {
                color: "var(--color-default)",
              },
              p: {
                color: "var(--color-default)",
                marginTop: "0",
                marginBottom: "0",
              },
              ".ptag": {
                fontSize: fontSize("xl"),
              },
            },
          },
          dark: {
            css: {
              p: {
                color: "var(--color-dark)",
              },
              h1: {
                color: "var(--color-dark)",
              },
              h2: {
                color: "var(--color-dark)",
              },
              h3: {
                color: "var(--color-dark)",
              },
              h4: {
                color: "var(--color-dark)",
              },
              strong: {
                color: "var(--color-dark)",
              },
              u: {
                color: "var(--color-dark)",
              },
            },
          },
        };
      },
      animation: {
        shining: "shining 1s ease-in-out infinite",
      },
      padding: {
        "4/3": "75%",
      },
      flex: {
        "48": "0 0 48px",
      },
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
    },
    screens: {
      xl: "1600px",
      lg: "1366px",
      md: "1280px",
      mds: "1024px",
      sm: "768px",
      xs: "375px",
      mxl: { max: "1599px" },
      mx2: { max: "1535px" },
      mlg: { max: "1365px" },
      mmd: { max: "1279px" },
      mms: { max: "1024px" },
      mxs: { max: "767px" },
      mxx: { max: "374px" },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
