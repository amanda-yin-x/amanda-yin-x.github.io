import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdf8f6",
        surface: "rgba(255,255,255,0.7)",
        card: "rgba(255,255,255,0.82)",
        primary: "#A78BFA",
        primarySoft: "#c4b5fd",
        accent: "#FB7185",
        accentSoft: "#FBCFE8",
        mint: "#34D399",
        ink: "#111827",
        muted: "#5b6475",
        border: "rgba(255,255,255,0.55)"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 24, 39, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.4), 0 10px 30px rgba(167, 139, 250, 0.25)"
      },
      backdropBlur: {
        soft: "12px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" }
        },
        blob: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(10px,-10px,0) scale(1.05)" },
          "66%": { transform: "translate3d(-10px,10px,0) scale(0.98)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      backgroundImage: {
        "soft-grid":
          "radial-gradient(circle at 1px 1px, rgba(17,24,39,0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
