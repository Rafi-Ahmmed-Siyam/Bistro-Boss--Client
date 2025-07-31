module.exports = {
   content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            golden: '#D1A054',
         },
      },
   },
   plugins: [require('daisyui'), require('flowbite/plugin')],
};
