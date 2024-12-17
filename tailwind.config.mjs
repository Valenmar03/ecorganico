/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {},
      fontFamily: {
         outfit: ["outfit", "roboto"],
         roboto: ["roboto", "outfit"],
      },
   },
   plugins: [require("@tailwindcss/typography")],
};
