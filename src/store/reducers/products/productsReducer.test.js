import reducers from './productsReducer';
import Actions from '../../constans/constans';

const testProducts = [
  {
    brand: 'C',
    article: 123
  },
  {
    brand: 'N',
    article: 112
  }
];

describe('Testing productsReducer actions', () => {
  test('FETCH_PRODUCTS saves products in store', () => {
    const newState = reducers([], {type: Actions.FETCH_PRODUCTS, payload: testProducts});
    expect(newState).toBe(testProducts);
  });
});