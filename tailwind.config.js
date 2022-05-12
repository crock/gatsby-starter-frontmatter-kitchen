const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
	darkMode: "media",
	content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				sm: "560px",
				md: "768px",
				lg: "1440px",
				xl: "2560px",
			},
			colors: {
				primary: {
					light: colors.blue[400],
					DEFAULT: colors.blue[500],
					dark: colors.blue[600],
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
}
