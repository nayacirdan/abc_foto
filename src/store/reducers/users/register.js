import constants from '../../constans/constans';

const initialState = {
  registered: false,
  registeredData: null,
  registerError: ''
};

const userRegister = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case constants.USER_REGISTER_SUCCESS:
      return { ...state, registered: action.payload };
    case constants.USER_REGISTER_FAIL:
      return {...state, registerError: action.payload };

    default: return state;
  }
};

export {
  userRegister
};