/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        mint: "#49C5A0",
        "tiffany-blue": "#91D9C0",
        "mint-green": "#C9FCE8",
        "mint-cream": "#DDFCF0",
        zomp: "#55B194",
      },
      textColor: {
        mint: "#49C5A0",
        "tiffany-blue": "#91D9C0",
        "mint-green": "#C9FCE8",
        "mint-cream": "#DDFCF0",
        zomp: "#55B194",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
}
