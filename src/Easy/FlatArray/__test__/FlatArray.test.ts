import flatArray from '../FlatArray';

const inputArray = [[1, 2], [0, 3, 5], [-1, 4, 0, 5, 1]];
const flats = [1, 2, 0, 3, 5, -1, 4, 0, 5, 1];
describe('FlatArray', () => {
  it('flatArray()', () => {
    expect(flatArray(inputArray)).toMatchObject(flats);
  });
});
