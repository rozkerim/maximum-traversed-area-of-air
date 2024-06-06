import { maxArea } from '../src/index';

describe('Get Maximum Traversed Area Of Air Function', () => {
  test('should return -1 for any input', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(-1);
  });
  
});
