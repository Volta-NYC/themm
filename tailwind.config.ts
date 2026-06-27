import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FBE8EC",
        "blush-dark": "#F3D5DC",
        maroon: "#7B1628",
        "maroon-dark": "#5C1020",
        cream: "#FDF6F8",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Helvetica Neue", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fadeUp": "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
}
export default config
