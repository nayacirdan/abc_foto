import constants from '../../constans/constans';

const initialState = {
  cartInfo: [],
  cartErrors: ''
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TO_CARD_LOCAL:
      return {...state, cartInfo: action.payload};
    case constants.ADD_TO_CARD_DB:
      return {...state, cartInfo: action.payload };
    case constants.LOAD_CART:
      return {...state, cartInfo: action.payload };
    case constants.DELETE_CART_ITEM:
      return {...state, cartInfo: action.payload };
    case constants.DECREASE_CART_ITEM:
      return {...state, cartInfo: action.payload };
    case constants.RAISE_CART_ITEM:
      return {...state, cartInfo: action.payload };
    case constants.ADD_TO_CARD_DB_FAIL:
      return {...state, cartErrors: action.payload };
    case constants.CLEAR_CART:
      return {...state, cartInfo: [], cartErrors: ''};
    default:
      return state;
  }
};

export default cartReducer;
