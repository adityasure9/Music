// tailwind.config.js
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
	  "./*.html",               // Matches HTML files in the root
	  "./src/**/*.{html,jsx,js}" // Matches all HTML, JSX, JS files in src and subdirectories
	],
	theme: {
	  extend: {
		colors: {
		  primary: "#000"
		}
	  },
	},
	plugins: [],
  }
  