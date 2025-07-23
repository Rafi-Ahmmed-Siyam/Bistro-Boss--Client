// tailwind.config.js
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            golden: '#D1A054', // custom color name
         },
      },
   },
   plugins: [require('daisyui')],
};
