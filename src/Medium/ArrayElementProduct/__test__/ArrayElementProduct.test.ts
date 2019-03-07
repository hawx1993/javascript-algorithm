import { productOfArrayExceptSelf } from '../ArrayElementProduct';

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 0, 0, 2];
const thirdArray = [-2, -2];
describe('productExceptSelf()', () => {
  it('should return [8,8,4,16] while get [2,2,4,1]', () => {
    expect(productOfArrayExceptSelf(firstArray)).toMatchObject([8,8,4,16])
  });
  it('should return [0,0,0,0] while get [1, 0, 0, 2]', () => {
    expect(productOfArrayExceptSelf(secondArray)).toMatchObject([0,0,0,0])
  });
  it('should return [-2, -2] while get [-2, -2]', () => {
    expect(productOfArrayExceptSelf(thirdArray)).toMatchObject([-2, -2])
  });
});
