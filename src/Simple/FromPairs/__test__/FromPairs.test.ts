import { fromPairs } from '../FromPairs';

const pairs1 = [['a', 1], ['a', 2], ['b', 3]];
const result1 = { a: 2, b: 3 };

const pairs2 = [['obj', { name: 'trigkit' }], ['age', 12]];
const result2 = { obj: { name: 'trigkit' }, age: 12 };
describe('fromPairs', () => {
  it('should return plan object while get 2d pairs array', () => {
    expect(fromPairs(pairs1)).toMatchObject(result1);
    expect(fromPairs(pairs2)).toMatchObject(result2);
  });
});
