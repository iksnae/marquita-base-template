import { describe, it, expect, beforeEach, vi } from 'vitest';
import { path } from '$lib/utils/path.js';

// Mock $app/paths module
vi.mock('$app/paths', () => ({
  base: '/test-base'
}));

describe('path utility', () => {
  it('should prepend base path to route', () => {
    const result = path('/about');
    expect(result).toBe('/test-base/about');
  });

  it('should handle paths without leading slash', () => {
    const result = path('contact');
    expect(result).toBe('/test-base/contact');
  });

  it('should not duplicate the base path', () => {
    const result = path('/test-base/products');
    expect(result).toBe('/test-base/products');
  });
});
