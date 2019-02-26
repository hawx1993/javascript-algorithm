import difference from '../Diffreence';

const NUMS1 = [[1,2,3], [3,5,10]];
const EXP_NUMS = [1, 2];
describe('difference', () => {
  it('should return [1, 2] while get [[1,2,3], [3,5,10]]', () => {
    expect(difference(NUMS1)).toMatchObject(EXP_NUMS)
  });
});
