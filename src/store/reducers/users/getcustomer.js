import constants from '../../constans/constans';

const initialState = {
  customerInfo: '',
  customerInfoError: ''
};

const getCustomer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_GET_INFO:
      return {...state, customerInfo: action.payload };
    case constants.USER_GET_INFO_FAIL:
      return {...state, customerInfoError: action.payload };

    default: return state;
  }
};

export {
  getCustomer
};