// Import testing library extensions
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock global fetch for tests
global.fetch = vi.fn();

// Set up global testing environment
beforeAll(() => {
  // Create .svelte-kit directory if needed
  if (typeof window === 'undefined') {
    try {
      const fs = require('fs');
      const path = require('path');
      
      // Create .svelte-kit directory if it doesn't exist
      const svelteKitDir = path.resolve(process.cwd(), '.svelte-kit');
      if (!fs.existsSync(svelteKitDir)) {
        fs.mkdirSync(svelteKitDir, { recursive: true });
      }
    } catch (error) {
      console.warn('Failed to create .svelte-kit directory:', error);
    }
  }
});

afterAll(() => {
  // Cleanup code that runs after all tests
});

// Reset any mocks between tests
beforeEach(() => {
  vi.resetAllMocks();
});
