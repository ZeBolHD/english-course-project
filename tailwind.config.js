/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        large: "1160px",
      },

      colors: {
        "primary-1": "#17DC10",
        "primary-2": "#FF6613",
        "primary-3": "#164FFF",
      },
      dropShadow: {
        text: "8px 8px 2px #FEA7DC",
      },
      animation: {
        "wiggle-slow": "wiggle 12s  ease-in-out infinite",
        "wiggle-rev": "wiggle-rev 12s ease-in-out infinite ",
        appear: "appear 0.5s ease",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "wiggle-rev": {
          "0%, 100%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
        },
        appear: {
          "0%": { top: 25, opacity: 0.5 },
          "100%": { top: 0, opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
