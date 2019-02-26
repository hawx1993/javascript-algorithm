
/**
 * similar to without
 * input: [[1,2,3,4,5], [5,2,11]]
 * output: [1, 3, 4]
 */
function difference(arrays: Array<Array<number>>) {
  return arrays.reduce((a: number[], b: number[]) => a.filter(c => !b.includes(c)))
}
export default difference;
