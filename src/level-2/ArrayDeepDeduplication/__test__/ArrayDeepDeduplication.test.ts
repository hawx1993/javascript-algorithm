import { deepDeduplication } from '../ArrayDeepDeduplication';
const arrays1 = [
  { a: 1, b: 1 },
  1,
  '1',
  { a: 1, b: 1 },
  1,
  false,
  true,
  false,
  NaN,
  NaN,
  [1, 2],
  [1, 2],
];

const array2 = [1, 2, 3, 3, [NaN], [NaN], -1];

describe('deepDeduplication', () => {
  it('should return unique array  while get arrays1', () => {
    expect(deepDeduplication(arrays1)).toMatchObject([ { a: 1, b: 1 }, 1, '1', false, true, NaN, [ 1, 2 ] ])
  });
  it('should return unique array  while get arrays2', () => {
    expect(deepDeduplication(array2)).toMatchObject([1,2,3, [NaN], -1 ])
  });
});
