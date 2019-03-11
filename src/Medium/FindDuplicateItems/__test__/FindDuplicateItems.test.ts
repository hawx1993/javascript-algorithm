import { findDuplicateItems } from '../FindDuplicateItems';

const DUPLICATE_NUMBERS = [1, -1, 0, 2, 0, 10, 2];
const RET_NUMBERS = [0, 2];

const DUPLICATE_STRING = ['js', 'ts', 'es6', 'java', 'python', 'perl', 'ts'];
const RET_STRING = ['ts'];
describe('findDuplicateItems', () => {
  it('should return return duplicated number while get duplicated number arrays', () => {
    expect(findDuplicateItems(DUPLICATE_NUMBERS)).toMatchObject(RET_NUMBERS);
  });
  it('should return return duplicated string while get duplicated string arrays', () => {
    expect(findDuplicateItems(DUPLICATE_STRING)).toMatchObject(RET_STRING);
  });
});
