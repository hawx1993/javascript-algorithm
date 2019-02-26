/**
 * Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.
 * input:  [[1, 2, 3,-1], [101, 2, 1, 10,-1], [2, 1,-1]];
 * output: [1, 2, -1]
 */

function interSection(arrays: Array<Array<any>>) {
  return arrays.reduce((a: any[], b: any[]) => a.filter(c => b.includes(c)))
}
export default interSection;
