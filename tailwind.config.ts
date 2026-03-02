import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Paper & Letter palette
        parchment: "#F5F1E8",
        cream: "#FAF8F3",
        paper: "#FFFDF8",
        paperDark: "#E8E4DB",
        paperWarm: "#F0EBE0",
        // Ink tones
        ink: "#1A1A1A",
        inkLight: "#3D3D3D",
        inkFaded: "#6B6B6B",
        inkWash: "#9A9A9A",
        // Warm shadows
        shadow: "rgba(0,0,0,0.08)",
        shadowDeep: "rgba(0,0,0,0.15)",
        // Subtle Tiffany accent
        tiffany: "#0ABAB5",
        tiffanyLight: "#5DD9D6",
        tiffanyMuted: "rgba(10,186,181,0.08)",
        // Fold shadows
        fold: "rgba(0,0,0,0.04)",
        foldDark: "rgba(0,0,0,0.12)",
        // Borders
        border: "rgba(0,0,0,0.06)",
        borderLight: "rgba(0,0,0,0.03)",
        borderDark: "rgba(0,0,0,0.1)"
      },
      boxShadow: {
        paper: "0 2px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        paperLifted: "0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
        paperDeep: "0 20px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)",
        fold: "0 1px 4px rgba(0,0,0,0.08)",
        foldCrease: "inset 0 1px 2px rgba(0,0,0,0.06)",
        ink: "0 0 20px rgba(10,186,181,0.15)",
        soft: "0 4px 20px rgba(0,0,0,0.08)"
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        hand: ["'Caveat'", "cursive"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"]
      },
      keyframes: {
        unfoldWing: {
          "0%": {
            transform: "rotateY(-60deg) rotateX(20deg)",
            opacity: "0.8"
          },
          "100%": {
            transform: "rotateY(0deg) rotateX(0deg)",
            opacity: "1"
          }
        },
        unfoldBody: {
          "0%": {
            transform: "scaleY(0.3) translateY(-20px)",
            opacity: "0"
          },
          "100%": {
            transform: "scaleY(1) translateY(0)",
            opacity: "1"
          }
        },
        craneFloat: {
          "0%, 100%": {
            transform: "translateY(0) rotateZ(0deg) rotateX(0deg)"
          },
          "25%": {
            transform: "translateY(-12px) rotateZ(1deg) rotateX(2deg)"
          },
          "50%": {
            transform: "translateY(-6px) rotateZ(-0.5deg) rotateX(-1deg)"
          },
          "75%": {
            transform: "translateY(-10px) rotateZ(0.5deg) rotateX(1deg)"
          }
        },
        fadeReveal: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        inkWrite: {
          "0%": {
            strokeDashoffset: "1000",
            opacity: "0"
          },
          "10%": {
            opacity: "1"
          },
          "100%": {
            strokeDashoffset: "0",
            opacity: "1"
          }
        },
        breathe: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        paperReveal: {
          "0%": {
            clipPath: "inset(100% 0 0 0)",
            opacity: "0"
          },
          "100%": {
            clipPath: "inset(0 0 0 0)",
            opacity: "1"
          }
        },
        foldOpen: {
          "0%": {
            transform: "perspective(1000px) rotateX(-90deg)",
            transformOrigin: "top center",
            opacity: "0"
          },
          "100%": {
            transform: "perspective(1000px) rotateX(0deg)",
            transformOrigin: "top center",
            opacity: "1"
          }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "30%": { transform: "translate(0.5%, -1.5%)" },
          "50%": { transform: "translate(-0.5%, 1%)" },
          "70%": { transform: "translate(1%, 0.5%)" },
          "90%": { transform: "translate(-1%, 1.5%)" }
        }
      },
      animation: {
        unfoldWing: "unfoldWing 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        unfoldBody: "unfoldBody 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        craneFloat: "craneFloat 8s ease-in-out infinite",
        fadeReveal: "fadeReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        inkWrite: "inkWrite 2s ease-out forwards",
        breathe: "breathe 4s ease-in-out infinite",
        paperReveal: "paperReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        foldOpen: "foldOpen 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  },
  plugins: []
};

export default config;
