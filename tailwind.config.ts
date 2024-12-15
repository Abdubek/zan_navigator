import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
