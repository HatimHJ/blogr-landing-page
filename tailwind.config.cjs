/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-red": "hsl(7, 99%, 70%)",
				"theme-yellow": "hsl(51, 100%, 49%)",
				"theme-cyan-1": "hsl(167, 40%, 24%)",
				"theme-cyan-2": " hsl(168, 34%, 41%)",
				"theme-blue-1": "hsl(198, 62%, 26%)",
				"theme-blue-2": "hsl(212, 27%, 19%)",
				"theme-blue-3": "hsl(213, 9%, 39%)",
				"theme-blue-4": "hsl(232, 10%, 55%)",
				"theme-blue-5": "hsl(210, 4%, 67%)",
			},
			screens: {
				"md-992": "992px",
			},
		},
	},
	plugins: [],
};

/**
 * 
### Primary

- Soft red: hsl(7, 99%, 70%)
- Yellow: hsl(51, 100%, 49%)
- Dark desaturated cyan (graphic design text): hsl(167, 40%, 24%)
- Dark blue (photography text): hsl(198, 62%, 26%)
- Dark moderate cyan (footer): hsl(168, 34%, 41%)

### Neutral

- Very dark desaturated blue: hsl(212, 27%, 19%)
- Very dark grayish blue: hsl(213, 9%, 39%)
- Dark grayish blue: hsl(232, 10%, 55%)
- Grayish blue: hsl(210, 4%, 67%)
- White: hsl(0, 0%, 100%)

 * 
 */
