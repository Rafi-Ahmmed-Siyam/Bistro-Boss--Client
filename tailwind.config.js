// tailwind.config.js
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
   },
   plugins: [require("daisyui")], // ✅ এইখানে plugin হিসেবে DaisyUI
}