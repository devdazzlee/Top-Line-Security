const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        testimonialGray: "oklch(14.7% 0.004 49.25)",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
