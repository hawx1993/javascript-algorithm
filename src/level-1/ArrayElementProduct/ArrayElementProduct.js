/**
 * product element of array except self
 * var firstArray = [2, 2, 4, 1];
 * var secondArray = [0, 0, 0, 2];
 * var thirdArray = [-2, -2, -3, 2];
 * productExceptSelf(firstArray); // [8, 8, 4, 16]
 * productExceptSelf(secondArray); // [0, 0, 0, 0]
 * productExceptSelf(thirdArray); // [12, 12, 8, -12]
 */

function productOfArrayExceptSelf(arr){
  let runningProduct = 1;
  let newArr = [];
  for(let i = 0 ; i < arr.length ; i++){
    newArr[i] = runningProduct;
    runningProduct *= arr[i];
  }
  runningProduct = 1;
  for(let j = arr.length - 1 ; j >= 0 ; j--){
    newArr[j] *= runningProduct;
    runningProduct *= arr[j];
  }
  return newArr;
}
export { productOfArrayExceptSelf }
