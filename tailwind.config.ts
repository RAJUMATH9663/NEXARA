import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nexara-blue": {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          DEFAULT: "#2563eb",
        },
        "nexara-orange": {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          DEFAULT: "#f97316",
        },
        dark: {
          bg: "#0a0f1e",
          card: "#0f172a",
          border: "#1e293b",
          muted: "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Outfit", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-nexara": "linear-gradient(135deg, #2563eb 0%, #f97316 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #1e1b4b 100%)",
        "gradient-card": "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "gradient-shift": "gradientShift 6s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #2563eb, 0 0 10px #2563eb" },
          "100%": { boxShadow: "0 0 20px #2563eb, 0 0 40px #2563eb" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "nexara-blue": "0 4px 24px rgba(37, 99, 235, 0.3)",
        "nexara-orange": "0 4px 24px rgba(249, 115, 22, 0.3)",
        glow: "0 0 30px rgba(37, 99, 235, 0.4)",
        "glow-orange": "0 0 30px rgba(249, 115, 22, 0.4)",
        card: "0 8px 32px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 16px 48px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
