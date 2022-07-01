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
          secondary: "#9921E8",
          cardbackground: "#D9D9D9",
          neutral: "#3d4451",
          "base-300": "#2D81F7",
          "base-400": "#2D81F7",
          img3: "#FE5702",
          img4: "#EB5757",
          img5: "#08BD80",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}