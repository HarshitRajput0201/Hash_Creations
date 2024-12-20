export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        logoBg: "rgba(var(--logo-bg))",
        navBg: "rgba(var(--nav-bg))",
        navBorder: "rgba(var(--nav-border))",
        navText: "rgba(var(--nav-text))",
        navTextHover: "rgba(var(--nav-text-hover))",
        navBtnText: "rgba(var(--nav-btn-text))",
        navBtnsBG: "rgba(var(--nav-btns-bg))",
        textHeading: "rgba(var(--text-heading))",
        textDescription: "rgba(var(--text-description))",
        border: "rgba(var(--border))",
        badgeBG: "rgba(var(--badge-bg))",
        badgeText: "rgba(var(--badge-text))",
        serviceBtnBg: "rgba(var(--service-btn-bg))",
        cardBg: "rgba(var(--card-bg))",
        workIconBg: "rgba(var(--work-icon-bg))",
        workIconText: "rgba(var(--work-icon-text))",
        footerIconText: "rgba(var(--footer-icon-text))",
      },
      backgroundImage: {
        'navBtnBg': 'linear-gradient(102.88deg, #8356FB 5.35%, #946CFF 43.55%, #7953DF 85.78%)',
        'headingGradient': 'linear-gradient(13.51deg, #A997F4 27.74%, #0012B2 103.25%)',
      },
      fontFamily: {
        headingfont: ['"Rethink Sans"', 'sans-serif'], // Font for headings
        bodyfont: ['Lato', 'sans-serif'],           // Font for body text
      },
      boxShadow: {
        default: "var(--box-shadow)", // Add your custom shadow
      },
    },
  },
  plugins: [],
};