import reduceCount from '../index.js';

describe('reduce count', () => {
  test('should reduce an array and count each digit, returning a key value pair', () => {
    const testData = [7,1,4,2,2,7,3,3,3,7,,7,7,7];

    const example = {'1': 1, '2': 2, '3': 3, '4': 1, '7': 6};

    const result = reduceCount(testData);

    expect(result).toEqual(example);
  });

  test('should reduce an array of strings, returning a key value pair', () => {
    const testData = ['apple', 'apple', 'bannana', 'orange', 'orange'];

    const example = {apple: 2, bannana: 1, orange: 2};

    const result = reduceCount(testData);

    expect(result).toEqual(example);
  });

});
