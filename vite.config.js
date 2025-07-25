import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
   plugins: [react(), qrcode()],
   server: {
      port: 3000,
      open: true,
      host: true,
   },
});
