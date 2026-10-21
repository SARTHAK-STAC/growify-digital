import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        growify: {
          dark: "#1A1420",
          plum: "#3F304D",
          "plum-dark": "#2B1E37",
          "plum-light": "#5A456E",
          lavender: "#BB96DA",
          "lavender-subtle": "#F4EEF9",
          "lavender-tint": "#E8DEF8",
          mint: "#93DCDF",
          "mint-subtle": "#E8FAF9",
          coral: "#EFAF86",
          charcoal: "#2C2626",
          sand: "#FAF8F5",
          cream: "#F4F0EA",
          border: "rgba(63, 48, 77, 0.12)",
          "border-dark": "rgba(255, 255, 255, 0.12)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3F304D",
          foreground: "#FAF8F5",
        },
        secondary: {
          DEFAULT: "#FAF8F5",
          foreground: "#1A1420",
        },
        muted: {
          DEFAULT: "#F4F0EA",
          foreground: "#666063",
        },
        accent: {
          DEFAULT: "#BB96DA",
          foreground: "#1A1420",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Didot", "Playfair Display", "Georgia", "serif"],
        sans: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Cinzel", "Playfair Display", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
