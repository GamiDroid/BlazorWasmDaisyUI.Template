/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,razor,razor.cs}"],
    theme: {
    extend: {},
    },
    plugins: [
        require('tailwindcss-textshadow'),
        require("@tailwindcss/typography"),
        require("daisyui")
    ]
}

