/**
 * An array of n elements that need to be randomly scrambled
 * Loop from 0 to n, the loop variable is i
 * Generate a random number K, K is a random number between 0 and n
 * Exchange the values ​​of the i and k bits
 *
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export { shuffleArray }
