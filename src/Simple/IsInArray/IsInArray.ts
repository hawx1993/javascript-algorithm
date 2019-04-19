/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-02-20 13:36:10
 * Copyright © trigkit4. All rights reserved.
 */

/* target array： ["apple","banana","orange"]
 * ["apple","banana","pineapple"] //returns true;
 * ["grape", "pineapple"] //returns false;
 */
function isInArray(targetArray, sourceArray) {
  return sourceArray.some(v => {
    return targetArray.indexOf(v) > -1;
  });
}
export default isInArray;
