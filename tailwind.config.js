module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html,css,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["dracula"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
  // "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "dracula", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
};
