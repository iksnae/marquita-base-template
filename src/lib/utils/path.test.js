import { describe, it, expect, vi } from 'vitest';

// This is a very simple test just to make sure testing works
describe('Basic Testing', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2);
  });
  
  it('should handle async tests', async () => {
    const result = await Promise.resolve(42);
    expect(result).toBe(42);
  });
  
  it('should work with mocks', () => {
    const mockFn = vi.fn().mockReturnValue(true);
    const result = mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(result).toBe(true);
  });
});
