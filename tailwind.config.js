/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: 'var(--blue)',
      red: 'var(--red)',
      green: 'var(--green)',
      black: 'var(--black)',
      white: 'var(--white)',
    },
  },
};
