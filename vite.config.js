import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // This is the missing line!

export default defineConfig({
  plugins: [react()],
  base: './', 
})
