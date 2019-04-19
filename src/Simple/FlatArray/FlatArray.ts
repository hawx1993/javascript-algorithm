/*
 * input：[[1,2],[0,3,5],[-1,4,0,5,1]]
 * output：[ -1, 0, 0, 1, 1, 2, 3, 4, 5, 5 ]
 */

function flatArray(targetArray) {
  return targetArray.reduce((sum, value) => {
    return sum.concat(value);
  }, []);
}
export default flatArray;
