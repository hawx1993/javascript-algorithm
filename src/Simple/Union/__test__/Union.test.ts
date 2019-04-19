/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-02-20 13:36:10
 * Copyright © trigkit4. All rights reserved.
 */
import { UnionArray } from '../Union';
const NUMBERS_1 = [1, 2, 3, 4];
const NUMBERS_2 = [3, 4, 5, 6];

const STR_ARRAY_1 = ['js', 'java', 'c'];
const STR_ARRAY_2 = ['go', 'js', 'python'];
describe('UnionArray', () => {
  it('should return unioned number array while get two array', () => {
    expect(UnionArray(NUMBERS_1, NUMBERS_2)).toMatchObject([1, 2, 3, 4, 5, 6]);
  });
  it('should return unioned string array while get two array', () => {
    expect(UnionArray(STR_ARRAY_1, STR_ARRAY_2)).toMatchObject([
      'js',
      'java',
      'c',
      'go',
      'python',
    ]);
  });
});
