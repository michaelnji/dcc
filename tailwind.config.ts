export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				head: ["Cabinet Grotesk", "Arial"],
				sans: ["Cabinet Grotesk", "Arial"],
			},
			colors: {
				secondary: {
					DEFAULT: "#32cfff",
					900: "#001a22", 
					800: "#003443",
					700: "#004d65",
					600: "#006787",
					500: "#0081a7",
					400: "#00b5ed",
					300: "#32cfff",
					200: "#76dfff",
					100: "#bbefff",
				},

				accent: {
					DEFAULT: "#f3ec2a",
					900: "#5a5705",
					800: "#b3ae0a",
					700: "#f3ec2a",
					600: "#f8f484",
					500: "#fdfcdc",
					400: "#fdfde4",
					300: "#fefdeb",
					200: "#fefef2",
					100: "#fffef8",
				},
				tertiary: {
					DEFAULT: "#fdad62",
					900: "#562a01",
					800: "#ad5503",
					700: "#fb800c",
					600: "#fdad62",
					500: "#fed9b7",
					400: "#fee2c7",
					300: "#fee9d5",
					200: "#fff0e3",
					100: "#fff8f1",
				},
				primary: {
					DEFAULT: "#f07167",
					900: "#3e0a06",
					800: "#7c140c",
					700: "#bb1e12",
					600: "#ea3528",
					500: "#f07167",
					400: "#f38c84",
					300: "#f6a9a3",
					200: "#f9c5c2",
					100: "#fce2e0"
				},
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};
