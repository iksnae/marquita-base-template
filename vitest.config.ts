import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage'
    },
    setupFiles: ['./src/test-setup.ts']
  }
});
