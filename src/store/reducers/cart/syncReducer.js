import constants from '../../constans/constans';

const syncReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SYNCHROZATION_CART:
      return {...state, cartInfo: action.payload};
    case constants.SYNCHROZATION_CART_FAIL:
      return {...state, cartErrors: action.payload };
    default:
      return state;
  }
};
  
export default syncReducer;