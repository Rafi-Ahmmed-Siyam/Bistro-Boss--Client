import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
   plugins: [react(), qrcode(), flowbiteReact()],
   server: {
      port: 3000,
      open: true,
      host: true,
   },
});