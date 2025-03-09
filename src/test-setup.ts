// Import testing library extensions
import '@testing-library/jest-dom';

// Mock global fetch for tests
global.fetch = vi.fn();

// Mock SvelteKit runtime modules
vi.mock('$app/environment', () => ({
  browser: false,
  dev: true,
}));

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
  invalidate: vi.fn(),
}));

vi.mock('$app/paths', () => ({
  base: '',
}));

// Set up any globals needed for tests
beforeAll(() => {
  // Setup code that runs before all tests
});

afterAll(() => {
  // Cleanup code that runs after all tests
});

// Reset any mocks between tests
beforeEach(() => {
  vi.resetAllMocks();
});
