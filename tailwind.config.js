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
    themes: [
      {
       myTheme:{
          "primary": "#C778DD",
          "secondary": "#4b5563",
          "accent": "#ABB2BF",
          "neutral": "#9ca3af",
          "base-100": "#282C33",
          "info": "#0284c7",
          "success": "#16a34a",
          "warning": "#fb923c",          
          "error": "#f43f5e",

          "--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.0em", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.1s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.05", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.0rem", // border radius of tabs
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
  // "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "dracula", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
};
