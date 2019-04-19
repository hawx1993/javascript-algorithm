/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-02-20 13:36:10
 * Copyright © trigkit4. All rights reserved.
 */
import isInArray from '../IsInArray';

const targetArray = ['apple', 'banana', 'orange'];
const itemIncludes = ['apple', 'banana', 'pineapple'];
const itemNonIncludes = ['grape', 'pineapple'];

describe('isInArray', () => {
  it('should return false if no item in target Array', () => {
    expect(isInArray(targetArray, itemNonIncludes)).toBe(false);
  });
  it('should return true if item in target Array', () => {
    expect(isInArray(targetArray, itemIncludes)).toBe(true);
  });
});
