/**
 * Returns an object composed from key-value pairs.
 * input: [['a', 1], ['b', 2]]
 * output: { 'a': 1, 'b': 2 }
 */

const fromPairs = function(arr) {
  return arr.reduce((accumulator, value) => {
    accumulator[value[0]] = value[1];
    return accumulator;
  }, {})
}
export { fromPairs }
