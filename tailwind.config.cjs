/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/index.jsx",
    "./src/components/App.jsx",
    "./src/components/Form.jsx",
    "./src/components/MiniForm.jsx",
    "./src/components/Results.jsx",
    "./src/components/Title.jsx",
  ],
  theme: {

    extend: {

      fontFamily: {
        "body": ["Noto Serif"]
      },

      colors: {
        "darkBlue": "#000724"
      }
    }
  },
  plugins: [],
}
