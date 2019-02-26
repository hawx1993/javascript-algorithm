import interSection from '../InterSection';

const TWO_D_NUMS_1 = [[1, 2, 3,-1], [101, 2, 1, 10,-1], [2, 1,-1]];
const ELEMENTS_OF_COMMON_1 = [1, 2, -1];
const TWO_D_STRINGS_1 = [['java','js'], ['c++', 'python','js'], ['js']];
describe('interSection', () => {
  it('should return [1,2,-1] while get [[1, 2, 3,-1], [101, 2, 1, 10,-1], [2, 1,-1]]', () => {
    expect(interSection(TWO_D_NUMS_1)).toMatchObject(ELEMENTS_OF_COMMON_1);
  });
  it('should return [js] while get [[\'java\',\'js\'], [\'c++\', \'python\',\'js\'], [\'js\']]', () => {
    expect(interSection(TWO_D_STRINGS_1)).toMatchObject(['js']);
  });
});
