/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["DM Sans", "ui-sans-serif", "system-ui"],
      serif: [
        "Sora",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      morado: "#883AE1",
      rosa: "#E6D6FC",
      gris: "#E5EAF0",
      "gris-claro": "#FAFAF9",
      "gris-oscuro": "#6C727F",
      blanco: "#FFFFFF",
      negro: "#20293A",
    },
  },
  plugins: [],
};
