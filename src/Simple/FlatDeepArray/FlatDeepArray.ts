/**
 * input: [1, [[2], [3, [4]], 5]]
 * output: [1, 2, 3, 4, 5]
 */
const flattenDeep = (arr: any[]) => Array.isArray(arr)
  ? arr.reduce( (a, b) => a.concat(flattenDeep(b)) , [])
  : [arr];

export default flattenDeep;
