import { maxArea } from '../src/index';

describe('Get Maximum Traversed Area Of Air Function', () => {
  
  test('should return 49 for example A on the Readme file', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('should return 1 for example B on the Readme file', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test('should return 0 when giving at least one of the two buildings has a height of 0', () => {
    expect(maxArea([0, 0])).toBe(0);
    expect(maxArea([0, 1])).toBe(0);
    expect(maxArea([1, 0])).toBe(0);
  });


  test('should return 1 when giving two buildings with height of 1 and 2 in any order', () => {
    expect(maxArea([1, 2])).toBe(1);
    expect(maxArea([2, 1])).toBe(1);
  });

  test('should return 2 when giving [2, 2]', () => {
    expect(maxArea([2, 2])).toBe(2);
  });

  test('should return 20 when giving [5, 5, 5, 5, 5]', () => {
    expect(maxArea([5, 5, 5, 5, 5])).toBe(20);
  });

  test('should return 105 when giving [75, 28, 52, 35, 23, 18, 8, 1]', () => {
    expect(maxArea([75, 28, 52, 35, 23, 18, 8, 1])).toBe(105);
  });


  test('should return 768 when giving [10, 18, 23, 28, 29, 32, 33, 35, 36, 41, 48, 49, 42, 44, 53, 55, 56, 57, 58, 50, 68, 67, 65, 68, 61, 62, 63]', () => {
    expect(maxArea([10, 18, 23, 28, 29, 32, 33, 35, 36, 41, 48, 49, 42, 44, 53, 55, 56, 57, 58, 50, 68, 67, 65, 68, 61, 62, 63])).toBe(768);
  });
  
});
