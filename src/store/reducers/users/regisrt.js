import constants from '../../constans/constans';

const initialState = {
  registered: false,
  registerError: ''
};

const userRegister = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_GET_INFO:
      return { registered: action.payload };
    case constants.USER_GET_INFO_FAIL:
      return { registerError: action.payload };

    default: return state;
  }
};

export {
  userRegister
};