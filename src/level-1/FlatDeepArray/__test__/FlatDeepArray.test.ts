import flattenDeep from '../FlatDeepArray'

const inputDeepArray = [1, [[2], [3, [4]], 5]];
const outputs = [1, 2, 3, 4, 5];
describe('flattenDeep', () => {
  it('flattenDeep()', () => {
    expect(flattenDeep(inputDeepArray)).toMatchObject(outputs);
  });
});
