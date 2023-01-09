/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
};
