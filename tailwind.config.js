module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        scrumverse: {
          primary: "#5F72BE",
          secondary: "#2D81F7",
          neutral: "#27282B",
          'neutral-focus': '#537CE5',
          "contact-button": "#2D81F7",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}