/**
 * input [9, 9, 111, 2, 3, 4, 4, 5, 7]
 * output [9, 4]
 */
function findDuplicateItems(array) {
  let sortedArr = array.slice().sort();
  let results = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
      results.push(sortedArr[i]);
    }
  }
  return results;
}
export { findDuplicateItems }
