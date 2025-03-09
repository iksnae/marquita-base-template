/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // These will be replaced by configuration values
        primary: {
          DEFAULT: '#e11d48', // Default primary color (red)
          light: '#f43f5e',
          dark: '#be123c'
        },
        secondary: {
          DEFAULT: '#4b5563', // Default secondary color (gray)
          light: '#6b7280',
          dark: '#374151'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      }
    }
  },
  plugins: []
};
