import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0B131E",
        "bg-alt": "#0F1A28",
        surface: "#131F2E",
        border: {
          DEFAULT: "#223044",
          soft: "#1A2636"
        },
        ink: {
          DEFAULT: "#E7ECF3",
          dim: "#8C97AA",
          faint: "#5A6579"
        },
        teal: {
          DEFAULT: "#35D0B4",
          dim: "#1E7A69",
          light: "#4EE0C4"
        },
        amber: {
          DEFAULT: "#E8A33D",
          dim: "#8A6224"
        },
        danger: "#E0685A"
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        sans: ["IBM Plex Sans", "sans-serif"]
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(53,208,180,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(53,208,180,0.035) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "48px 48px"
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        "slide-in": { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(0)" } }
      },
      animation: {
        blink: "blink 1.1s step-end infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
