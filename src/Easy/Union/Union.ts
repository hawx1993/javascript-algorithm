/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-02-20 13:36:10
 * Copyright © trigkit4. All rights reserved.
 */
// input array A: [1,2,3,4] array B: [3,4,5]
// output: [1,2,3,4,5]
const UnionArray = function(arr1, arr2) {
  return arr1.concat(arr2).filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};
export { UnionArray }
