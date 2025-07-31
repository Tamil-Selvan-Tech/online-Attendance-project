import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/online-Attendance-project/', // 👈 Use your repo name here
})
