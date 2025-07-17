import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ["code", ...fontFamily.mono],
        main: ["main", ...fontFamily.mono],
        Test: ["test", ...fontFamily.mono],
      },
      colors: {
          secondary: "#f5741c",
          darkBg: "#131424",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
