import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  
  // Development server options
  server: {
    port: 3000,
    strictPort: false,
    open: true,
    
    // Expose configuration files to the browser
    fs: {
      allow: ['..']
    }
  },
  
  // Optimization settings
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte'],
        }
      }
    }
  },
  
  // Configure environment variables
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version || '0.1.0')
  }
});
