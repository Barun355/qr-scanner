/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text))",
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
      },
      keyframes: {
        "gradient-text-animate": {
          "0%": { backgroundPosition: "0%" },
          25: { backgroundPosition: "50%" },
          "50%": { backgroundPosition: "100%" },
          "90%": { backgroundPosition: "50%" },
          "100%": { backgroundPosition: "0%" },
        },
      },
      animation: {
        "gradient-text-animate":
          "gradient-text-animate 3s ease-in-out infinite",
      },
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Noto Sans Old North Arabian",
      body: "Noto Sans Old North Arabian",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
