module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("tw-elements/plugin.cjs")
    ],
    darkMode: "class"
}