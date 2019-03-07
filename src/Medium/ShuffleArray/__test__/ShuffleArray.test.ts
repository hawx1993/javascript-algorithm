import { shuffleArray } from '../ShuffleArray';

const NUMBERS = [1,3,5,7,9];
const STRINGS = ['a', 'c', 'd', 'f', 'z'];
describe('shuffleArray', () => {
  it('should return random number array while get number array', () => {
    const randomNumberArray = shuffleArray(NUMBERS);
    expect(randomNumberArray).toMatchObject(randomNumberArray);
  });
  it('should return random string array while get string array', () => {
    const randomStringArray = shuffleArray(STRINGS);
    expect(randomStringArray).toMatchObject(randomStringArray);
  });
});
