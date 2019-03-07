/**
 * Given an array of integers, find if the array contains any duplicates.
 * input: [[1,2,3], [1,2,3]]
 * output: true
 * input: [{age: 12}, {age: 12}]
 * output: true
 */

function containsDuplicate(array) {
  let tempHash = {};
  let i = array.length -1;
  let isDistinct = false;
  while (0 <= i){
    if (!tempHash[array[i]]){
      tempHash[array[i]] = true;
    } else {
      isDistinct = true;
    }
    i--;
  }

  return isDistinct;
}
export { containsDuplicate }
