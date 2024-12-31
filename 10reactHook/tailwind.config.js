/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--copy-primary))",
        card: "rgba(var(--card))",
        cta: "rgba(var(--cta))",
        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [],
};
