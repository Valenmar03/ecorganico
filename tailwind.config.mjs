/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         gridTemplateRows:{
            'layout' : 'auto 1fr auto'
         }
      },
      fontFamily: {
         outfit: ["outfit", "roboto"],
         roboto: ["roboto", "outfit"],
      },
   },
   plugins: [require("@tailwindcss/typography")],
};
