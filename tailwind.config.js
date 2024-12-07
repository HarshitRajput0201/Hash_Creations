export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        heading: "rgba(var(--text-heading))",
        description: "rgba(var(--text-description))",
        navhover: 'rgba(var(--nav-text-hover))',
      },
      backgroundImage: {
        'CTA-bg': 'linear-gradient(102.88deg, #8356FB 5.35%, #946CFF 43.55%, #7953DF 85.78%)',
        'nav-bg': 'var(--custom-gradient)',
      },
      fontFamily: {
        headingfont: ['"Rethink Sans"', 'sans-serif'], // Font for headings
        bodyfont: ['Lato', 'sans-serif'],           // Font for body text
      },
    },
  },
  plugins: [],
};