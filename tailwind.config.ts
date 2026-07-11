import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1160px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "Clash Display", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "rgba(255,255,255,0.09)",
        "border-strong": "rgba(255,255,255,0.16)",
        input: "rgba(255,255,255,0.09)",
        ring: "#7c5cff",
        background: "#03002E", // Base dark blue
        "bg-soft": "#010048",
        foreground: "#eceef4",
        
        // Futuristic Project Colors
        "project-bg-1": "#03002E",
        "project-bg-2": "#010048",
        "project-bg-3": "#010057",
        "project-bg-4": "#02006C",
        "project-bg-5": "#090088",
        
        // Accent Glows
        "glow-cyan": "#00D9FF",
        "glow-teal": "#00FFD5",
        "glow-purple": "#6E5BFF",
        
        primary: {
          DEFAULT: "#7c5cff",
          foreground: "#04050a",
        },
        secondary: {
          DEFAULT: "rgba(255,255,255,0.045)",
          foreground: "#eceef4",
        },
        muted: {
          DEFAULT: "rgba(255,255,255,0.045)",
          foreground: "#9aa0b4",
        },
        accent: {
          DEFAULT: "#35e6c4",
          foreground: "#04050a",
        },
        destructive: {
          DEFAULT: "#ff4444",
          foreground: "#eceef4",
        },
        panel: {
          DEFAULT: "rgba(255,255,255,0.045)",
          strong: "rgba(255,255,255,0.07)",
        },
        violet: {
          DEFAULT: "#7c5cff",
          soft: "#7c5cff33",
        },
        cyan: {
          DEFAULT: "#35e6c4",
          soft: "#35e6c433",
        },
        "text-dim": "#9aa0b4",
        "text-faint": "#5c6178",
      },
      borderRadius: {
        lg: "20px",
        md: "12px",
        sm: "8px",
        "2xl": "26px",
      },
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(60px,80px) scale(1.15)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-70px,-50px) scale(1.1)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(53,230,196,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(53,230,196,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(53,230,196,0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        "loader-in": {
          "0%": {
            opacity: "0",
            letterSpacing: "0.3em",
            filter: "blur(6px)",
          },
          "55%": { opacity: "1", filter: "blur(0)" },
          "100%": { opacity: "1", letterSpacing: "-0.03em" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "float-1": "float-1 22s ease-in-out infinite",
        "float-2": "float-2 26s ease-in-out infinite",
        "float-3": "float-1 30s ease-in-out infinite reverse",
        pulse: "pulse 2s infinite",
        blink: "blink 1s steps(1) infinite",
        "scroll-line": "scroll-line 1.8s ease-in-out infinite",
        "loader-in": "loader-in 1.4s cubic-bezier(.16,.84,.44,1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(.16,.84,.44,1) forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #7c5cff 0%, #35e6c4 100%)",
        "grad-text": "linear-gradient(135deg, #b7a6ff 0%, #6ff0d6 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
