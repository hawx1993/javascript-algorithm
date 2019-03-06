import { containsDuplicate } from '../ContainDuplicate';

const DUPLICATE_ARRAY_1 = [1, 2, 3, 1];
const DUPLICATE_ARRAY_2 = [{ age: 11 }, { age: 11 }];
const UN_DUPLICATE_ARRAY_1 = [['a', 'b', 1], ['a', 1, 'b']];
describe('containsDuplicate', () => {
  it('should return true while get duplicate array', () => {
    expect(containsDuplicate(DUPLICATE_ARRAY_1)).toBe(true);
    expect(containsDuplicate(DUPLICATE_ARRAY_2)).toBe(true);
  });
  it('should return false while get unDuplicate array', () => {
    expect(containsDuplicate(UN_DUPLICATE_ARRAY_1)).toBe(false);
  });
});
