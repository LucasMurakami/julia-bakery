/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
			},
		},
	},
	plugins: [],
};
