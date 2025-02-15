/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';


export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    tailwindScrollbar,
   
   
  ],
};
